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
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {project.timeline}
          </p>
        )}

        <section>
          <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink">
            Problem
          </h3>
          <p className="leading-relaxed">{project.problem}</p>
        </section>

        <section>
          <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink">
            What I built
          </h3>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink">
            Role
          </h3>
          <p>{project.role}</p>
        </section>

        <section>
          <h3 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-ink">
            Tech stack
          </h3>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-sm text-ink"
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
            className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-accent"
          >
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
