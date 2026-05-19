export type TechnicalProject = {
  id: string;
  title: string;
  tagline: string;
  accent: string;
  /** Card image, e.g. `/projects/emoji-prediction.webp` */
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
  badge?: string;
  /** Card image, e.g. `/projects/hobscotch.webp` */
  thumbnail?: string;
  /** Optional case study gallery inside the modal */
  images?: { src: string; caption: string }[];
  overview: string;
  problem: string;
  process: string[];
  solution: string;
  outcomes: string;
  links: { label: string; href: string }[];
  github?: string;
};

export const SITE = {
  name: "Vaishnavi Raghu",
  github: "https://github.com/vnavirr",
  linkedin: "https://www.linkedin.com/in/vnavirr",
  devpost: "https://devpost.com/vnavirr",
  email: "vnavirr@gmail.com",
  resumePath: "/resume.pdf",
  profileImage: "/profile_pic.jpg",
} as const;
