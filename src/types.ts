export type TechnicalProject = {
  id: string;
  title: string;
  tagline: string;
  accent: string;
  /** e.g. "/projects/emoji-prediction/thumbnail.svg" */
  thumbnail?: string;
  tech: string[];
  problem: string;
  bullets: string[];
  role: string;
  github: string;
  demo?: string;
  timeline?: string;
};

export type DesignProject = {
  id: string;
  title: string;
  tagline: string;
  accent: string;
  thumbnail?: string;
  badge?: string;
  overview: string;
  problem: string;
  process: string[];
  solution: string;
  outcomes: string;
  links: { label: string; href: string }[];
  github?: string;
  images?: { src: string; caption: string }[];
};

export const SITE = {
  name: "Vaishnavi Raghu",
  github: "https://github.com/vnavirr",
  linkedin: "https://www.linkedin.com/in/vnavirr",
  email: "vnavirr@gmail.com",
  resumePath: "/resume.pdf",
} as const;
