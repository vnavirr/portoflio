import type { TechnicalProject } from "../types";
import { Modal } from "./Modal";

type TechnicalModalProps = {
  project: TechnicalProject | null;
  onClose: () => void;
};

export function TechnicalModal({ project, onClose }: TechnicalModalProps) {
  if (!project) return null;

  return (
    <Modal open={!!project} title={project.title} onClose={onClose}>
      <div className="space-y-6 text-ink-muted">
        {project.timeline && (
          <p className="text-caption tracking-wide text-primary">
            {project.timeline}
          </p>
        )}

        <section>
          <h3 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wide text-ink">
            Problem
          </h3>
          <p className="leading-relaxed">{project.problem}</p>
        </section>

        <section>
          <h3 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wide text-ink">
            What I built
          </h3>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wide text-ink">
            Role
          </h3>
          <p>{project.role}</p>
        </section>

        <section>
          <h3 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wide text-ink">
            Tech stack
          </h3>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="text-caption rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-ink"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-caption inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-card transition hover:opacity-90"
          >
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption inline-flex items-center rounded-full border border-primary/30 px-5 py-2.5 text-ink transition hover:border-primary hover:text-primary"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
