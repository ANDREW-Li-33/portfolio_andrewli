import type { LightboxMedia } from './Lightbox';

interface GalleryGridProps {
  media: LightboxMedia[];
  /** Open the shared Lightbox at this index. */
  onOpen: (index: number) => void;
  /** Extra .image-grid modifier classes, e.g. "cols-1" or "cols-1 contain". */
  variant?: string;
}

/**
 * Clickable media grid — image/video thumbnails that open the shared
 * Lightbox at their own index. Keeps the same .image-grid look as the
 * static grids; video thumbnails autoplay muted as looping previews
 * (the modal is where native controls / scrubbing live).
 */
export default function GalleryGrid({ media, onOpen, variant }: GalleryGridProps) {
  return (
    <div className={`image-grid${variant ? ` ${variant}` : ''}`}>
      {media.map((m, i) => {
        // Per-item aspect override for sources that don't match the
        // grid's default 4:3 (matching the source's true aspect keeps
        // object-fit: cover from cropping anything).
        const style = m.aspectRatio ? { aspectRatio: m.aspectRatio } : undefined;
        return (
          <figure key={m.src} className="lightbox-figure-trigger">
            <button
              type="button"
              onClick={() => onOpen(i)}
              aria-label={`Expand ${m.alt || 'media'}`}
            >
              {m.kind === 'video'
                ? <video src={m.src} autoPlay loop muted playsInline style={style} />
                : <img src={m.src} alt={m.alt} style={style} />}
            </button>
            {m.caption && <figcaption>{m.caption}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}
