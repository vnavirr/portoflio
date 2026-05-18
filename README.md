# Vaishnavi Raghu — Portfolio

Personal site showcasing technical projects and UX design work.

## Setup

```bash
npm install
npm run dev
```

## Resume

Add your PDF to `public/resume.pdf`. The nav **Resume** link opens `/resume.pdf` in a new tab.

Until the file exists, you may see a 404 in production—that is expected until you upload the PDF. A placeholder note remains at `public/resume.pdf.placeholder`.

## Open Graph / social previews

- `public/og.png` — default **1200×630** preview image referenced from `index.html`. Consider running it through [Squoosh](https://squoosh.app/) or similar if the file is large.
- After you know your production origin, update `og:image` and `twitter:image` in `index.html` to an **absolute** `https://…/og.png` URL if a crawler (e.g. LinkedIn) requires it.

## Project images

See `public/projects/README.md` for thumbnail and design-modal gallery paths. Set `thumbnail` (and optional `images`) in:

- `src/data/technical-projects.ts`
- `src/data/design-projects.ts`

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com); it will detect Vite and run `npm run build`.
3. Optional `vercel.json` in the repo root sets `buildCommand` and `outputDirectory` explicitly.

```bash
npm run build
```

The static output is written to `dist/`.

### Custom domain

In the Vercel project → **Settings → Domains**, add your domain and follow DNS instructions. No code changes are required for a root domain once DNS propagates.

### GitHub Pages (alternative)

Set `base` in `vite.config.ts` to your repo name (e.g. `/repo-name/`) when not using a custom domain, then publish `dist/` to the `gh-pages` branch or GitHub Actions.
