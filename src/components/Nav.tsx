import { useEffect, useState } from "react";
import { PageContainer } from "./PageContainer";
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
    `text-alt transition-colors hover:text-primary ${
      activeSection === id ? "font-medium text-primary" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-secondary">
      <PageContainer className="flex items-center justify-between py-4">
        <a
          href="#hero"
          className="font-serif text-xl font-semibold tracking-tight text-ink md:text-2xl"
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
            className="rounded-full bg-card px-6 py-2 text-alt font-normal text-ink shadow-sm transition hover:shadow-md"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
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
      </PageContainer>

      {open && (
        <PageContainer className="border-t border-primary/10 py-6 md:hidden">
          <nav id="mobile-menu" aria-label="Mobile">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-main text-ink hover:text-primary"
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
                className="inline-block rounded-full bg-card px-6 py-2 text-alt text-ink shadow-sm"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
          </nav>
        </PageContainer>
      )}
    </header>
  );
}
