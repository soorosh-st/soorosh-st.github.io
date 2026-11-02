import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || undefined;
if (site) {
  const url = new URL(site);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
    throw new Error('SITE_URL must be a root HTTPS origin, such as https://soorosh-st.github.io');
  }
}

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
