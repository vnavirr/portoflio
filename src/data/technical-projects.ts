import type { TechnicalProject } from "../types";

export const technicalProjects: TechnicalProject[] = [
  {
    id: "emoji-prediction",
    title: "Emoji Prediction Model",
    tagline:
      "Multi-class NLP pipeline predicting which emoji a tweet originally used.",
    accent: "#c4a882",
    thumbnail: "/projects/emoji-prediction/thumbnail.svg",
    tech: [
      "Python",
      "Google Colab",
      "scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "Naive Bayes",
      "Linear SVC",
    ],
    problem:
      "Given tweet text with the emoji removed, can a classical ML model predict which of 10 emoji classes (blush, flushed, grin, heart_eyes, relaxed, smirk, sob, weary, wink, yum) the author originally posted?",
    bullets: [
      "Trained and compared three classifiers on 225k+ labeled tweets with shared preprocessing: cleaning, TF-IDF vectorization, and an 80/20 train/test split.",
      "Achieved ~52% test accuracy with Logistic Regression; documented per-class precision/recall and confusion patterns across notebooks.",
      "Found emotionally distinct emojis (e.g. heart_eyes, sob) predict well, while similar-tone pairs (sob/weary, wink/smirk) remain hardest to separate.",
    ],
    role: "Developer · ICS datathon project",
    github: "https://github.com/vnavirr/d26-emoji-in-tweets",
    timeline: "2026",
  },
  {
    id: "vitacore",
    title: "VitaCore",
    tagline:
      "VenusHacks health-tech platform connecting fragmented maternal cardiovascular care.",
    accent: "#8fa89a",
    thumbnail: "/projects/vitacore/thumbnail.svg",
    tech: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS 4",
      "FastAPI",
      "open-rppg",
    ],
    problem:
      "Maternal cardiovascular care is fragmented across pregnancy and postpartum — patients need continuity and insight, not another generic symptom tracker or AI doctor replacement.",
    bullets: [
      "Built VitaCore as an intelligence layer with profile dashboard, health detail views, and a face-scan rPPG metrics hub (Watch / Face / Oura).",
      "Implemented interactive care-chain demos: Missed Signal Replay, Interpretation Diff, Trajectory Engine, Community Map, and Prevention Coach.",
      "Integrated open-rppg for live preview and BVP/HRV signals; all surfaced data is synthetic for demonstration only.",
    ],
    role: "Team contributor · VenusHacks",
    github: "https://github.com/AarushiBK/VenusHacks",
    timeline: "VenusHacks",
  },
  {
    id: "memmatch",
    title: "MemMatch",
    tagline:
      "Color memory-matching game with peek phase, timer, and confetti win screen.",
    accent: "#a89bb8",
    thumbnail: "/projects/memmatch/thumbnail.svg",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "ICSSC WebJam"],
    problem:
      "Build a polished, keyboard-accessible browser game in a short hackathon window that demonstrates front-end craft and playful interaction design.",
    bullets: [
      "Implemented 12-card match logic with a 3.5s peek phase, move counter, live timer, toast feedback, and animated confetti on win.",
      "Styled with CSS custom properties, grid layout, and 3D card transforms; all cards operable via Enter/Space.",
      "Deployed as a static site on GitHub Pages for instant play without a backend.",
    ],
    role: "Developer · ICSSC WebJam 2025",
    github: "https://github.com/vnavirr/webjam25",
    demo: "https://vnavirr.github.io/webjam25/",
    timeline: "2025",
  },
];
