import type { ReactNode } from "react";

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
    <section id={id} className="scroll-mt-20 border-t border-ink/8 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <h2 className="font-serif text-4xl font-semibold text-ink md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">{subtitle}</p>
        )}
        <div className="mt-12 grid min-w-0 gap-8 sm:grid-cols-2">{children}</div>
      </div>
    </section>
  );
}
