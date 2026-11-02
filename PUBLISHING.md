# Publish Soorosh's portfolio

## Destination

| Item | Choice |
| --- | --- |
| Website repository | `soorosh-st/soorosh-st.github.io` (public) |
| Website address | `https://soorosh-st.github.io/` |
| Build | Astro 7, TypeScript, Node 24 and the committed npm lockfile |
| Hosting | GitHub Pages through GitHub Actions |
| App project | `https://github.com/soorosh-st/no-apps` (stays private) |

The website is a separate static project. Its existing project links point to `no-apps` now; visitors need repository access until it becomes public. There is no app source checkout or private release fetch during the website build.

The owner approved publication on 3 November 2026. The website has its own source history and deployment, independently of the app repository.

## What will be uploaded

Only this website's reviewed source, prepared media, fonts and licenses, plus the deployment workflow. Place the website files at the new repository root. Exclude `node_modules`, `dist`, `.astro`, `.env*`, caches, private verification reports and the parent checkout's history. The root Android project, local artifacts and engineering logs are not part of the upload.

Keep the included `LICENSE`, `THIRD_PARTY_NOTICES.md` and `public/licenses/` alongside the source and assets. The local media-preparation script depends on inputs outside this standalone project; it is not needed or included in the publication package.

## Publication steps

1. Keep the standalone website files at the root of `soorosh-st/soorosh-st.github.io`, on `main`.
2. Configure **Settings → Pages → Source → GitHub Actions**. Enable HTTPS for the site.
3. Push changes to `main` or run `.github/workflows/deploy.yml` manually. Its build job installs the locked dependencies, runs Astro diagnostics, builds, verifies local references/media and checks production metadata before uploading the Pages artifact. The deploy job publishes that artifact using GitHub's scoped token; no personal token is required in source.
4. Verify the successful workflow and the actual hosted homepage, all three showcases, four guides, assets, captions, sitemap, crawler rules and a missing-page response. A successful push alone is not evidence that the website is live.

The deployment workflow belongs to the standalone portfolio repository and is independent of Android CI. Its source copy is kept under `website/.github/` in the original development checkout.

## Build locally in both modes

```powershell
# From the standalone website directory, after npm ci:
$env:ASTRO_TELEMETRY_DISABLED = '1'

# Local preview: blocks indexing and omits production canonical URLs.
Remove-Item Env:SITE_URL -ErrorAction SilentlyContinue
npm run build
npm run verify

# Publication build: canonical/social URLs, sitemap and crawling enabled.
$env:SITE_URL = 'https://soorosh-st.github.io'
npm run build
npm run verify

# Keep future development local.
Remove-Item Env:SITE_URL -ErrorAction SilentlyContinue
npm run dev
```

If this workstation's global npm wrapper fails, use `node 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js'` in place of `npm`. The launcher `Start-Local.ps1` also starts the local Astro CLI directly.

## Connect public app releases later

The repository URL is centralised in `src/data/site.ts`. When `no-apps` becomes public, remove the private label and update the setup guide. Once actual public releases exist, replace the local build-status link with the release destination. A later build-time release feed can fetch public GitHub metadata with a fallback link; browser code must never contain a private GitHub token.

Keep each app's identity, version, release channel and download separate. The website's release display does not implement native Android updates.

## Future domain

After choosing and owning a domain, configure its DNS and GitHub Pages custom domain, add `public/CNAME`, and change `SITE_URL` in the workflow. The existing root-relative navigation supports a root domain. Project subpaths are deliberately unsupported by the current publication configuration.

## References

- [GitHub Pages setup and public repository eligibility](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Official Astro GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
