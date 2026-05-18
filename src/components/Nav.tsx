import { useEffect, useState } from "react";
import { SITE } from "../types";

const links = [
  { href: "#technical-projects", label: "Technical Projects" },
  { href: "#design-portfolio", label: "Design Portfolio" },
] as const;

type NavProps = {
  activeSection: string | null;
};

export function Nav({ activeSection }: NavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const navLinkClass = (id: string) =>
    `text-sm tracking-wide transition-colors hover:text-accent ${
      activeSection === id ? "text-accent font-medium" : "text-ink-muted"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#hero"
          className="font-serif text-xl font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkClass(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/15 bg-card px-4 py-1.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-ink/5 px-6 py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4 font-serif text-2xl">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={SITE.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
