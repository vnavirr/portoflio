import type { ReactNode } from "react";
import { PageContainer } from "./PageContainer";

type ProjectSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ProjectSection({
  id,
  title,
  subtitle,
  children,
}: ProjectSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-secondary/40 py-20 md:py-28">
      <PageContainer>
        <h2 className="text-subheader font-semibold text-ink">{title}</h2>
        {subtitle && (
          <p className="text-alt mt-3 max-w-2xl text-ink-muted">{subtitle}</p>
        )}
        <div className="mt-12 grid min-w-0 gap-8 sm:grid-cols-2">{children}</div>
      </PageContainer>
    </section>
  );
}
