# Vaishnavi Raghu — Portfolio

Personal portfolio site for **Vaishnavi Raghu**, an aspiring software engineer and UI/UX designer studying Computer Science at UC Irvine. The site showcases technical projects and UX case studies in one place.

**Design source:** This site was implemented from my Figma portfolio design — [Portfolio (Figma)](https://www.figma.com/design/nsqEDeJenXIT60W9onRHaP/Portfolio?node-id=0-1&t=l5KpWsiv64o0wlSC-1).

## About

Hi, I'm **Vaishnavi Raghu** — I build software and design interfaces. This portfolio highlights coursework, hackathons, and design work from UCI and related communities.

**Contact**

- Email: [vnavirr@gmail.com](mailto:vnavirr@gmail.com)
- GitHub: [@vnavirr](https://github.com/vnavirr)
- LinkedIn: [vnavirr](https://www.linkedin.com/in/vnavirr)
- Devpost: [vnavirr](https://devpost.com/vnavirr)

## Technical Projects

Click any card on the site for full details (problem, what I built, role, tech stack, and GitHub).

| Project | Context | Highlights |
| --- | --- | --- |
| **Emoji Prediction Model** | UCI Datathon 2026 | Classical NLP + ML notebooks predicting which of 10 emoji classes appeared in a tweet; logistic regression, Naive Bayes, and Linear SVC with shared TF–IDF preprocessing. [GitHub](https://github.com/vnavirr/d26-emoji-in-tweets) |
| **VitaCore** | UCI VenusHacks Hackathon 2026 | VenusHacks build — VITASCORE, an intelligence layer for fragmented maternal cardiovascular care (demo data); Next.js 15, React 19, Tailwind CSS 4, FastAPI, open-rppg. [GitHub](https://github.com/AarushiBK/VenusHacks) |
| **MemMatch** | UCI Webjam Hackathon 2025 | ICSSC WebJam memory-matching game with vanilla JS, expressive CSS, and keyboard-accessible cards. [GitHub](https://github.com/vnavirr/webjam25) |

## Design Portfolio

| Project | Context | Links |
| --- | --- | --- |
| **Hobscotch** | Top 5 Finalist, UCI Designathon 2026 Professional Track | Peer-to-peer skill barter with matching on shared interests. [Devpost](https://devpost.com/software/filler-16vsxp) · [Figma prototype](https://www.figma.com/proto/LZQEc8DqUWKTmjJWirZor3/Hobscotch?node-id=40-1188&viewport=294%2C61%2C0.14&t=XElQsE7VDUqgj4oS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40%3A1188&show-proto-sidebar=1&page-id=7%3A3) |
| **VitaMind** | UCI Caretech UI/UX Committee | Nutrition web app concept linking everyday meals to brain-health awareness for CareTech at UCI. [Figma](https://www.figma.com/design/IQROQUbF5nicZQOVBusosl/VitaMind?node-id=2-3&t=FTHMcbWPtt4sQ3hu-1) · [GitHub](https://github.com/CareTech-at-UCI/vitamin-tracking) |

## Tech stack (this site)

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings), [Didact Gothic](https://fonts.google.com/specimen/Didact+Gothic) (body)

Project content lives in `src/data/technical-projects.ts` and `src/data/design-projects.ts`. Cover images are in `public/` (see `public/projects/README.md`).

## Setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

```bash
npm run build    # production build → dist/
npm run preview  # preview dist/ locally
```

## Resume

Add your PDF to `public/resume.pdf`. The nav **Resume** link opens `/resume.pdf` in a new tab.

Until the file exists, you may see a 404 in production—that is expected until you upload the PDF. A placeholder note remains at `public/resume.pdf.placeholder`.

## Open Graph / social previews

- `public/og.png` — default **1200×630** preview image referenced from `index.html`. Consider running it through [Squoosh](https://squoosh.app/) or similar if the file is large.
- After you know your production origin, update `og:image` and `twitter:image` in `index.html` to an **absolute** `https://…/og.png` URL if a crawler (e.g. LinkedIn) requires it.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com); it will detect Vite and run `npm run build`.
3. Optional `vercel.json` in the repo root sets `buildCommand` and `outputDirectory` explicitly.

### Custom domain

In the Vercel project → **Settings → Domains**, add your domain and follow DNS instructions. No code changes are required for a root domain once DNS propagates.

### GitHub Pages (alternative)

Set `base` in `vite.config.ts` to your repo name (e.g. `/repo-name/`) when not using a custom domain, then publish `dist/` to the `gh-pages` branch or GitHub Actions.
