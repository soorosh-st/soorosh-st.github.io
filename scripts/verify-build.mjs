import assert from 'node:assert/strict';
import { readFile, readdir, stat, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const publicationSite = process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined;
async function filesIn(directory) {
  return (await Promise.all((await readdir(directory, { withFileTypes: true })).map(entry => entry.isDirectory() ? filesIn(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const allFiles = await filesIn(dist);
const htmlFiles = allFiles.filter(file => file.endsWith('.html'));
const report = { checkedAt: new Date().toISOString(), pages: [], localReferences: 0, mediaHashes: 0, videos: 0, screenControls: 0 };
assert.deepEqual(htmlFiles.map(file => path.relative(dist, file).replaceAll('\\', '/')).sort(), [
  '404.html', 'index.html', 'notes/features/index.html', 'notes/privacy/index.html', 'notes/setup/index.html', 'notes/testing/index.html', 'work/no-call/index.html', 'work/no-contact/index.html', 'work/no-message/index.html',
], 'Expected homepage, four local guides, all three app showcases and 404');
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const route = path.relative(dist, file).replaceAll('\\', '/');
  assert.match(html, /<html lang="en"/, `${route}: document language`);
  assert.match(html, /name="viewport"/, `${route}: responsive viewport`);
  const canIndex = publicationSite && route !== '404.html';
  assert(html.includes(`name="robots" content="${canIndex ? 'index, follow' : 'noindex, nofollow'}"`), `${route}: indexing policy`);
  if (canIndex) {
    const pathname = route === 'index.html' ? '/' : `/${route.replace(/index\.html$/, '')}`;
    const canonical = new URL(pathname, publicationSite).href;
    assert(html.includes(`rel="canonical" href="${canonical}"`), `${route}: production canonical`);
    assert(html.includes(`property="og:url" content="${canonical}"`), `${route}: production social URL`);
    assert(html.includes(`property="og:image" content="${new URL('/media/suite-poster.webp', publicationSite)}"`), `${route}: absolute social image`);
  } else {
    assert(!html.includes('rel="canonical"'), `${route}: no canonical for local previews or 404`);
  }
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${route}: one primary heading`);
  assert.match(html, /id="main"/, `${route}: main target`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${route}: unique IDs`);
  for (const match of html.matchAll(/aria-controls="([^"]+)"/g)) {
    for (const id of match[1].split(/\s+/)) assert(ids.includes(id), `${route}: missing control target ${id}`);
  }
  assert(!/https:\/\/github\.com\/soorosh-st\/Nothing-project(?:[\/"#?]|$)/i.test(html), `${route}: internal repository link`);
  assert.match(html, /href="https:\/\/github\.com\/soorosh-st\/no-apps"[^>]*data-repository-link[^>]*>no-apps on GitHub \(private\)/, `${route}: owner-requested private project link`);
  report.screenControls += (html.match(/data-screen="/g) ?? []).length;
  assert(!/\d{8,12}:[A-Za-z0-9_-]{30,}/.test(html), `${route}: potential bot credential`);
  assert(!/C:\\Users|AppData|06_WORK_LOG/.test(html), `${route}: private paths/logs`);
  for (const match of html.matchAll(/\b(href|src|poster)="([^"]+)"/g)) {
    const url = match[2].replaceAll('&amp;', '&');
    if (!url.startsWith('/') && !url.startsWith('#')) continue;
    const parsed = new URL(url, `http://local/${route}`);
    let target = path.join(dist, decodeURIComponent(parsed.pathname));
    const info = await stat(target).catch(() => null);
    assert(info, `${route}: missing ${url}`);
    if (info.isDirectory()) target = path.join(target, 'index.html');
    assert((await stat(target)).isFile(), `${route}: missing file for ${url}`);
    if (parsed.hash && target.endsWith('.html')) {
      const targetHtml = target === file ? html : await readFile(target, 'utf8');
      assert(targetHtml.includes(`id="${parsed.hash.slice(1)}"`), `${route}: missing fragment ${url}`);
    }
    report.localReferences++;
  }
  for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(tag[0], /\balt="[^"]+"/, `${route}: image description`);
    assert.match(tag[0], /\bwidth="\d+"/, `${route}: image width`);
    assert.match(tag[0], /\bheight="\d+"/, `${route}: image height`);
  }
  for (const video of html.matchAll(/<video\b[^>]*>[\s\S]*?<\/video>/g)) {
    const opening = video[0].slice(0, video[0].indexOf('>'));
    assert.match(opening, /\bcontrols\b/, `${route}: native controls`);
    assert.match(opening, /\bpreload="none"/, `${route}: no initial video download`);
    assert(!/\bautoplay\b/.test(opening), `${route}: no autoplay`);
    assert.match(video[0], /<track\b[^>]*kind="captions"/, `${route}: captions`);
    const captions = video[0].match(/<track\b[^>]*src="([^"]+)"/);
    assert(captions, `${route}: captions file`);
    const vtt = await readFile(path.join(dist, captions[1]), 'utf8');
    assert(vtt.startsWith('WEBVTT'), `${route}: WebVTT header`);
    assert.match(vtt, /\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}\.\d{3}/, `${route}: timed captions`);
    report.videos++;
  }
  report.pages.push(route);
}
for (const file of allFiles.filter(file => file.endsWith('.css'))) {
  const css = await readFile(file, 'utf8');
  for (const match of css.matchAll(/url\(["']?(\/[^"')]+)["']?\)/g)) {
    assert((await stat(path.join(dist, match[1]))).isFile(), `Missing CSS asset: ${match[1]}`);
    report.localReferences++;
  }
}
const provenance = JSON.parse(await readFile(path.join(dist, 'media/provenance.json'), 'utf8'));
for (const entry of provenance.assets) {
  const bytes = await readFile(path.join(dist, 'media', entry.file));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), entry.sha256, `${entry.file}: media integrity`);
  report.mediaHashes++;
}
assert.equal(report.videos, 4, 'Suite and all three app films');
assert.equal(report.mediaHashes, 24, '13 app screens, 3 thumbnails, 4 posters and 4 films');
const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8');
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
if (publicationSite) {
  assert(robots.includes('Allow: /') && !robots.includes('Disallow: /'), 'Production crawler policy');
  assert(robots.includes(`Sitemap: ${new URL('/sitemap.xml', publicationSite)}`), 'Production sitemap destination');
  const expectedUrls = htmlFiles.filter(file => path.basename(file) !== '404.html').map(file => {
    const relative = path.relative(dist, file).replaceAll('\\', '/');
    return new URL(relative === 'index.html' ? '/' : `/${relative.replace(/index\.html$/, '')}`, publicationSite).href;
  }).sort();
  assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]).sort(), expectedUrls, 'Sitemap covers every content page');
} else {
  assert(robots.includes('Disallow: /'), 'Local previews block crawlers');
  assert(!sitemap.includes('<loc>'), 'Local previews do not publish localhost URLs');
}
report.publicationSite = publicationSite?.href ?? null;
await mkdir(path.join(root, 'verification'), { recursive: true });
await writeFile(path.join(root, 'verification/build-report.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
