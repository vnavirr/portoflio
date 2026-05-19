import type { DesignProject } from "../types";
import { Modal } from "./Modal";

type DesignModalProps = {
  project: DesignProject | null;
  onClose: () => void;
};

export function DesignModal({ project, onClose }: DesignModalProps) {
  if (!project) return null;

  return (
    <Modal open={!!project} title={project.title} onClose={onClose}>
      <div className="space-y-6 text-ink-muted">
        {project.badge && (
          <p className="text-caption text-primary">{project.badge}</p>
        )}

        <CaseBlock title="Overview" body={project.overview} />
        <CaseBlock title="Problem" body={project.problem} />

        <section>
          <h3 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wide text-ink">
            Process
          </h3>
          <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
            {project.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <CaseBlock title="Solution" body={project.solution} />
        <CaseBlock title="Outcomes" body={project.outcomes} />

        {project.images && project.images.length > 0 && (
          <section className="space-y-4">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-ink">
              Screens
            </h3>
            <ul className="space-y-6">
              {project.images.map((img) => (
                <li key={img.src}>
                  <figure className="overflow-hidden rounded-xl border border-ink/10 bg-cream">
                    <img
                      src={img.src}
                      alt={img.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-caption border-t border-ink/8 px-4 py-3 text-ink-muted">
                      {img.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-card transition hover:opacity-90"
            >
              {link.label}
            </a>
          ))}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption inline-flex items-center rounded-full border border-primary/30 px-5 py-2.5 text-ink transition hover:border-primary hover:text-primary"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h3 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wide text-ink">
        {title}
      </h3>
      <p className="leading-relaxed">{body}</p>
    </section>
  );
}
