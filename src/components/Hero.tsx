import { SITE } from "../types";

const social = [
  {
    label: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    label: "LinkedIn",
    href: SITE.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: SITE.github,
    external: true,
  },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-3xl flex-col justify-center px-6 py-20 md:px-8"
    >
      <h1 className="font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-6xl">
        Hi, I&apos;m Vaishnavi Raghu
      </h1>
      <p className="mt-6 font-serif text-2xl leading-relaxed text-ink md:text-3xl">
        an aspiring software engineer and UI/UX designer,
        <br />
        studying computer science at UC Irvine.
      </p>

      <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
        {social.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...("external" in item && item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-2 text-base text-ink-muted transition hover:text-accent"
            >
              {"icon" in item && item.icon}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#technical-projects"
        className="mt-16 inline-flex items-center gap-2 self-start text-sm text-ink-muted transition hover:text-accent"
        aria-label="Scroll to projects"
      >
        <span>Projects below</span>
        <svg className="h-4 w-4 animate-bounce" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 5v14M6 13l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </a>
    </section>
  );
}
