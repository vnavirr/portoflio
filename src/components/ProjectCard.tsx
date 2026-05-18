type ProjectCardProps = {
  title: string;
  tagline: string;
  accent: string;
  thumbnail?: string;
  badge?: string;
  onOpen: () => void;
};

export function ProjectCard({
  title,
  tagline,
  accent,
  thumbnail,
  badge,
  onOpen,
}: ProjectCardProps) {
  const alt = `${title} project preview`;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full cursor-pointer rounded-2xl border border-ink/6 bg-card text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {thumbnail ? (
        <div className="aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-cream">
          <img
            src={thumbnail}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div
          className="aspect-[16/10] w-full rounded-t-2xl"
          style={{
            background: `linear-gradient(135deg, ${accent}55 0%, ${accent}22 50%, #f7f4ef 100%)`,
          }}
          aria-hidden
        />
      )}
      <div className="px-6 py-5">
        {badge && (
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
            {badge}
          </p>
        )}
        <h3 className="font-serif text-2xl font-semibold text-ink group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-ink-muted">{tagline}</p>
      </div>
    </button>
  );
}
