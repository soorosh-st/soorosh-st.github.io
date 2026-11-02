# Soorosh

Personal portfolio and showcases for No Call, No Message and No Contact, built with Astro, TypeScript and custom CSS. Website: https://soorosh-st.github.io/.

## Development

Requires Node 24 (or a supported version meeting package.json's minimum).

```sh
npm ci
npm run dev
```

On Windows, `./Start-Local.ps1` uses the installed local Astro CLI directly. The preview binds to 127.0.0.1.

## Deployment

The GitHub Actions workflow installs locked dependencies, checks/builds, verifies generated pages and assets, then deploys to GitHub Pages. Configure Pages to use GitHub Actions. See [PUBLISHING.md](PUBLISHING.md).

Set `SITE_URL=https://soorosh-st.github.io` for production metadata, sitemap and crawling. Builds without SITE_URL are unindexed local previews; the 404 page stays unindexed in both modes. Run `npm run build` then `npm run verify` with the same environment.

## Content

- Identity, repository destination and updates: `src/data/site.ts`.
- Homepage: `src/pages/index.astro`.
- App showcases: `src/pages/work/`.
- Markdown guides: `src/pages/notes/`.
- Typography, colour and layout: `src/styles/global.css`.

The website links directly to [no-apps](https://github.com/soorosh-st/no-apps), currently private while development continues. When the app repository becomes public, remove the private label from site.ts and update the setup guide. Add public download links only when actual releases exist.

The prepared media and self-hosted fonts are included. There is no dependency on an Android checkout, private release API or local media-preparation inputs. Contact uses [Soorosh's GitHub profile](https://github.com/soorosh-st).

## Origin and licenses

Originally developed as the portfolio for the Independent Communication Suite by Soorosh. Original presentation; the Cyanchill website informed the navigation and project-led structure. Third-party brands and hardware imagery do not imply affiliation.

This is source-available under the included [Personal Use and Non-Commercial License](LICENSE), not OSI open source. Keep [third-party notices](THIRD_PARTY_NOTICES.md) and the license copies in public/licenses/ with the assets.
