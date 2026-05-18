# Vaishnavi Raghu — Portfolio

Personal site showcasing technical projects and UX design work. Built with Vite, React 19, TypeScript, and Tailwind CSS v4.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Resume

Add your PDF to `public/resume.pdf`. The nav **Resume** button opens `/resume.pdf` in a new tab.

Until then, see `public/resume.pdf.placeholder` for instructions. A missing PDF may 404 until you upload the file.

## Project images

Card thumbnails and design case-study screens live under `public/projects/<id>/`. Current assets are SVG placeholders; replace with WebP exports from Figma or screenshots (max ~1200px wide) and update paths in:

- `src/data/technical-projects.ts` — `thumbnail` field
- `src/data/design-projects.ts` — `thumbnail` and `images` fields

Example: `/projects/hobscotch/thumbnail.webp`

## Customize copy

Edit project content in:

- `src/data/technical-projects.ts`
- `src/data/design-projects.ts`

Contact links and resume path: `src/types.ts` (`SITE`).

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project at [vercel.com](https://vercel.com) and connect the repository.
3. Vercel reads `vercel.json` (`buildCommand`: `npm run build`, `outputDirectory`: `dist`).
4. After deploy, set your production URL in Vercel → Settings → Domains if using a custom domain.

For LinkedIn/social previews, set `og:image` to an absolute URL in `index.html` (e.g. `https://your-domain.com/og.png`) once you know the live domain.

### GitHub Pages (alternative)

If deploying to `https://<user>.github.io/<repo>/`, set `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: "/<repo-name>/",
  // ...
});
```

Then build and deploy the `dist` folder to the `gh-pages` branch.

## Acceptance checklist

- Hero copy, GitHub, LinkedIn, and email links
- Nav scroll + resume PDF (when uploaded)
- Technical and design modals with correct external links
- Hobscotch finalist badge
- `npm run build` passes
