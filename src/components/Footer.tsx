import { SITE } from "../types";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 text-sm text-ink-muted md:flex-row md:items-center md:px-8">
        <p>© {year} {SITE.name}</p>
        <a
          href={`mailto:${SITE.email}`}
          className="transition hover:text-accent"
        >
          {SITE.email}
        </a>
      </div>
    </footer>
  );
}
