import { useEffect, useState } from "react";

type ProjectCardProps = {
  title: string;
  tagline: string;
  accent: string;
  badge?: string;
  /** Public URL, e.g. `/projects/emoji-prediction.webp` */
  thumbnail?: string;
  onOpen: () => void;
};

export function ProjectCard({
  title,
  tagline,
  accent,
  badge,
  thumbnail,
  onOpen,
}: ProjectCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [thumbnail]);

  const showImage = Boolean(thumbnail) && !imgFailed;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-secondary/50 bg-card p-0 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-t-2xl bg-cream">
        {showImage ? (
          <img
            key={thumbnail}
            src={thumbnail}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 !size-full !max-h-none !max-w-none object-cover object-center transition duration-300 group-hover:scale-[1.02]"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div
            className="absolute inset-0 size-full"
            style={{
              background: `linear-gradient(135deg, ${accent}55 0%, ${accent}22 50%, #fff9f4 100%)`,
            }}
            aria-hidden
          />
        )}
      </div>
      <div className="px-6 py-5">
        {badge && (
          <p className="text-caption mb-2 tracking-wide text-primary">
            {badge}
          </p>
        )}
        <h3 className="text-main font-semibold text-ink group-hover:text-primary">
          {title}
        </h3>
        <p className="text-alt mt-2 leading-relaxed text-ink-muted">{tagline}</p>
      </div>
    </button>
  );
}
