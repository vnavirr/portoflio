import { PageContainer } from "./PageContainer";
import { SITE } from "../types";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary/40 py-12">
      <PageContainer className="flex flex-col items-start justify-between gap-4 text-alt text-ink-muted md:flex-row md:items-center">
        <p>© {year} {SITE.name}</p>
        <a
          href={`mailto:${SITE.email}`}
          className="transition hover:text-primary"
        >
          {SITE.email}
        </a>
      </PageContainer>
    </footer>
  );
}
