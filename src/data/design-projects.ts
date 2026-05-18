import type { DesignProject } from "../types";

export const designProjects: DesignProject[] = [
  {
    id: "hobscotch",
    title: "Hobscotch",
    tagline:
      "Peer-to-peer skill barter app that turns learning into a path to real connection.",
    accent: "#d4a574",
    thumbnail: "/projects/hobscotch/thumbnail.svg",
    badge: "Top 5 Finalist, Designathon 2026 Professional Track",
    overview:
      "Hobscotch is a mobile barter platform where users trade skills as currency — teach watercolor in exchange for baking or drums — with matching built on mutual interests so first conversations start from shared goals, not awkward small talk.",
    problem:
      "Over half of surveyed young adults feel small talk never becomes deep friendship. Skill learning is expensive, and YouTube tutorials lack accountability and human connection — the same barriers block both growth and lasting bonds.",
    process: [
      "Validated loneliness and learning pain points through surveys and interviews before locking direction",
      "Brainstormed core flows with Gemini and Figma AI, then moved from wireframes to high-fidelity prototypes",
      "Designed warm, low-stakes UI with casual photos and voice notes to humanize profiles before meetups",
      "Addressed stranger-danger concerns by prioritizing low-stakes media over sterile ID verification",
    ],
    solution:
      "A peer-to-peer skill exchange where time and talent are the only currency. Profiles emphasize personality and teachable skills; matching surfaces mutual interests so accountability and companionship grow organically from shared learning goals.",
    outcomes:
      "Named Top 5 Finalist in the Designathon 2026 Professional Track. Research showed in-person, reciprocal teaching boosts accountability and helps surface-level chats grow into lasting bonds.",
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
    images: [
      {
        src: "/projects/hobscotch/screen-1.svg",
        caption: "Onboarding and skill barter concept",
      },
      {
        src: "/projects/hobscotch/screen-2.svg",
        caption: "Profile and mutual-interest matching",
      },
    ],
  },
  {
    id: "vitamind",
    title: "VitaMind",
    tagline:
      "Nutrition app connecting vitamin intake to cognitive-health awareness.",
    accent: "#7a9e8e",
    thumbnail: "/projects/vitamind/thumbnail.svg",
    overview:
      "VitaMind helps users track daily and weekly vitamin intake, analyze dietary habits, and understand how nutrition may relate to cognitive health — making preventive brain wellness approachable rather than clinical.",
    problem:
      "Many people lack clear, actionable feedback on how diet relates to long-term cognitive health outside formal medical settings, especially for early disease detection goals at CareTech.",
    process: [
      "Defined flows for logging meals, tracking vitamins, and surfacing personalized insights",
      "Designed information hierarchy so medical concepts stay understandable in Figma",
      "Aligned UX with CareTech at UCI engineering (React/Next frontend, FastAPI backend)",
      "Iterated on goal-based progress tracking and food categorization patterns",
    ],
    solution:
      "A calm, data-informed interface for vitamin logging, cognitive-health insights, and recommendations — paired with an open-source CareTech codebase for implementation feasibility.",
    outcomes:
      "Bridged product design with CareTech's vitamin-tracking stack (TensorFlow, YOLO, Roboflow datasets) so UX intent maps to a real full-stack health-tech product.",
    links: [
      {
        label: "Figma design",
        href: "https://www.figma.com/design/IQROQUbF5nicZQOVBusosl/VitaMind?node-id=2-3&t=FTHMcbWPtt4sQ3hu-1",
      },
    ],
    github: "https://github.com/CareTech-at-UCI/vitamin-tracking",
    images: [
      {
        src: "/projects/vitamind/screen-1.svg",
        caption: "Dashboard and vitamin intake overview",
      },
      {
        src: "/projects/vitamind/screen-2.svg",
        caption: "Insights and cognitive-health guidance",
      },
    ],
  },
];
