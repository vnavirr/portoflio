import profilePic from "../assets/profile_pic.jpg";
import { PageContainer } from "./PageContainer";
import { SITE } from "../types";

const social = [
  {
    label: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: (
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 6h16v12H4V6zm0 0l8 7 8-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Linkedin",
    href: SITE.linkedin,
    external: true,
    icon: (
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Github",
    href: SITE.github,
    external: true,
    icon: (
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Devpost",
    href: SITE.devpost,
    external: true,
    icon: (
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6 4h9.5L18 8.5V20H6V4zm2 2v14h8V9h-5V6H8zm2 2h3v3h-3V8z" />
      </svg>
    ),
  },
] as const;

export function Hero() {
  return (
    <section id="hero" className="hero-gradient scroll-mt-0">
      <PageContainer>
        <div className="grid w-full items-center gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_clamp(220px,20vw,320px)] lg:gap-12 lg:py-24">
        <div className="min-w-0">
          <h1 className="text-header text-ink lg:whitespace-nowrap">
            Hi, I&apos;m{" "}
            <span className="text-primary">{SITE.name}</span>
          </h1>
          <p className="text-subheader mt-6 text-pretty text-ink">
            an aspiring{" "}
            <em className="font-serif italic">software engineer</em> and{" "}
            <em className="font-serif italic">UI/UX designer</em>, studying computer
            science at UC Irvine.
          </p>

          <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-alt inline-flex items-center gap-2.5 text-ink transition hover:text-primary"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none lg:justify-self-end">
          <div className="relative aspect-square w-full min-w-[220px] overflow-hidden rounded-full border-4 border-secondary bg-secondary/30 shadow-lg ring-4 ring-background">
            <img
              src={profilePic}
              alt="Portrait of Vaishnavi Raghu"
              width={480}
              height={480}
              className="block h-full w-full object-cover object-[center_25%]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
        </div>
      </PageContainer>
    </section>
  );
}
