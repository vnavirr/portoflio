import type { TechnicalProject } from "../types";

/**
 * Thumbnails: add WebP files under `public/projects/` (max ~1200px wide) and set `thumbnail`:
 * - `/projects/emoji-prediction.webp`
 * - `/projects/vitacore.webp`
 * - `/projects/memmatch.webp`
 */
export const technicalProjects: TechnicalProject[] = [
  {
    id: "emoji-prediction",
    title: "Emoji Prediction Model",
    tagline:
      "Classical NLP + ML notebooks that predict which of 10 emoji classes originally appeared in a tweet.",
    accent: "#c4a882",
    tech: [
      "Python",
      "Google Colab",
      "Jupyter",
      "scikit-learn",
      "TF-IDF",
      "NLP",
    ],
    problem:
      "Given tweet text with its emoji removed, can we predict which emoji the author used? The labeled dataset spans over 225,000 tweets across 10 emoji classes (multi-class text classification).",
    bullets: [
      "Implemented three comparable classifiers—logistic regression, multinomial Naive Bayes, and Linear SVC—each in a self-contained Colab notebook with identical preprocessing for fair evaluation.",
      "Shared pipeline: clean tweets (lowercase, strip URLs/mentions/punctuation), TF–IDF vectorization, and an 80/20 train–test split materialized as `data_split.pkl` for reproducibility.",
      "Reported accuracy, confusion matrices, and qualitative findings (e.g., emotionally similar emojis and class imbalance) directly from the notebooks.",
    ],
    role: "Developer · ICS / Datathon-style course project",
    github: "https://github.com/vnavirr/d26-emoji-in-tweets",
    timeline: "Course project",
  },
  {
    id: "vitacore",
    title: "VitaCore",
    tagline:
      "VenusHacks build — VITASCORE, an intelligence layer for fragmented maternal cardiovascular care (demo data).",
    accent: "#8fa89a",
    tech: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS 4",
      "FastAPI",
      "open-rppg",
    ],
    problem:
      "Maternal cardiovascular care is fragmented across pregnancy and postpartum; care teams need a continuity-oriented surface—not a symptom tracker or “AI doctor”—to explore metrics, education, and guided demos.",
    bullets: [
      "Collaborated on a multi-route Next.js app: home dashboard, health detail, face-scan rPPG hub (watch / face / fingertip modes), interactive care-chain demos, and a longitudinal passport view—all backed by synthetic demo data.",
      "Integrated the face-scan flow with a Python rPPG service and documented iPhone HTTPS / ngrok setup for on-device camera testing.",
      "Shipped a cohesive UI in Tailwind CSS 4 for hackathon judging and live walkthroughs.",
    ],
    role: "Team contributor · VenusHacks",
    github: "https://github.com/AarushiBK/VenusHacks",
    timeline: "Hackathon",
  },
  {
    id: "memmatch",
    title: "MemMatch",
    tagline:
      "ICSSC WebJam memory-matching game — vanilla JS, expressive CSS, and keyboard-accessible cards.",
    accent: "#a89bb8",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Syne & DM Sans",
      "serve",
    ],
    problem:
      "Ship a polished, playful browser game in a short sprint that shows layout, motion, and interaction craft without a heavy framework.",
    bullets: [
      "Built a 12-card match flow with a timed “peek” phase, move counter, live timer from first flip, toast feedback, and an animated win screen with final stats.",
      "Styled with CSS custom properties, Grid, 3D flip transforms, and keyframe animation; responsive down to mobile.",
      "All cards are focusable and operable with Enter or Space for keyboard accessibility.",
    ],
    role: "Developer · ICSSC WebJam",
    github: "https://github.com/vnavirr/webjam25",
    timeline: "2025",
    // No GitHub Pages site detected on the repo; add `demo` here if you publish one.
  },
];
