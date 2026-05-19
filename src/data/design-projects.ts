import type { DesignProject } from "../types";

/**
 * Thumbnails: add WebP under `public/projects/` and set `thumbnail`:
 * - `/projects/hobscotch.webp`
 * - `/projects/vitamind.webp`
 *
 * Modal gallery: set `images` with `/projects/<id>/screen-*.webp` when exports exist.
 */
export const designProjects: DesignProject[] = [
  {
    id: "hobscotch",
    title: "Hobscotch",
    tagline:
      "Peer-to-peer skill barter — teach watercolor for drums or baking — with matching on shared interests.",
    accent: "#c36475",
    badge: "Top 5 Finalist, Designathon 2026 Professional Track",
    overview:
      "Hobscotch is a mobile concept where users trade skills as currency and match on mutual interests so first conversations start from common ground instead of awkward networking.",
    problem:
      "Young adults are digitally connected yet socially isolated: over half of surveyed users felt small talk never becomes real friendship. Classes are expensive and solo video tutorials lack accountability and human warmth.",
    process: [
      "Survey and interview research to validate loneliness, motivation, and safety concerns around meeting strangers online",
      "Used Gemini and Figma AI to pressure-test the core journey, then iterated from low- to high-fidelity Figma prototypes with a warm, low-stakes visual language",
      "Balanced “stranger danger” with low-stakes media (casual photos, voice notes) to humanize profiles before in-person meetups",
      "Re-scoped the audience after interviews showed college-student insights should not be over-generalized to post-grads",
    ],
    solution:
      "A barter-based learning network: profiles foreground personality and teachable skills, matching highlights overlapping interests, and the reward is both mastery and meaningful connection—not a certificate alone.",
    outcomes:
      "Named Top 5 Finalist in the Designathon 2026 Professional Track. Research underscored that in-person, reciprocal teaching boosts accountability and helps surface-level chats grow into lasting bonds.",
    links: [
      {
        label: "Devpost",
        href: "https://devpost.com/software/filler-16vsxp",
      },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/LZQEc8DqUWKTmjJWirZor3/Hobscotch?node-id=40-1188&viewport=294%2C61%2C0.14&t=XElQsE7VDUqgj4oS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40%3A1188&show-proto-sidebar=1&page-id=7%3A3",
      },
    ],
  },
  {
    id: "vitamind",
    title: "VitaMind",
    tagline:
      "Nutrition web app concept linking everyday meals to brain-health awareness for CareTech at UCI.",
    accent: "#a0b799",
    overview:
      "VitaMind pairs calm, understandable UI with nutrition logging so users can spot patterns and learn how diet may relate to long-term cognitive wellness—without feeling like a clinical dashboard.",
    problem:
      "People outside formal care settings rarely get actionable, trustworthy feedback on how everyday eating patterns connect to cognitive health risk.",
    process: [
      "Mapped flows for logging meals, reviewing insights, and surfacing educational guidance in plain language",
      "Tuned information hierarchy so medical concepts stay approachable while remaining credible",
      "High-fidelity Figma screens aligned with the CareTech engineering codebase for feasibility",
    ],
    solution:
      "A restrained, data-informed experience that highlights nutrition trends, contextual education, and gentle prompts—supporting preventive cognitive wellness as a habit, not a scare tactic.",
    outcomes:
      "Bridged UX intent with the open-source vitamin-tracking repo at UCI so design decisions map to real implementation constraints.",
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/IQROQUbF5nicZQOVBusosl/VitaMind?node-id=2-3&t=FTHMcbWPtt4sQ3hu-1",
      },
      {
        label: "GitHub",
        href: "https://github.com/CareTech-at-UCI/vitamin-tracking",
      },
    ],
  },
];
