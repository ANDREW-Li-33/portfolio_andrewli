import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Index into `images`, or null when the lightbox is closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Full-viewport image lightbox. Rendered via a portal straight into
 * document.body so it's never at the mercy of an ancestor's transform /
 * filter / backdrop-filter establishing a containing block for our
 * position: fixed overlay (that bug bit the mobile nav drawer earlier —
 * see Nav.tsx).
 *
 * Controls: click backdrop or × to close, ‹ / › (or ArrowLeft/Right) to
 * step through the gallery, Esc to close. Wraps around at the ends.
 */
export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const count = images.length;

  // Lock the .site scroll container while open — same pattern as the
  // mobile nav drawer, since .site (not body) is the real scroll context.
  useEffect(() => {
    const site = document.querySelector('.site') as HTMLElement | null;
    if (!site) return;
    site.style.overflow = isOpen ? 'hidden' : '';
    return () => { site.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onNavigate((index! - 1 + count) % count);
      else if (e.key === 'ArrowRight') onNavigate((index! + 1) % count);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, index, count, onClose, onNavigate]);

  if (!isOpen) return null;

  const current = images[index!];

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt || 'Image viewer'}>
      <div className="lightbox-backdrop" onClick={onClose} />

      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <CloseIcon />
      </button>

      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={() => onNavigate((index! - 1 + count) % count)}
          aria-label="Previous image"
        >
          <ChevronLeftIcon />
        </button>
      )}

      <figure className="lightbox-figure">
        <img src={current.src} alt={current.alt} />
        {current.caption && <figcaption>{current.caption}</figcaption>}
      </figure>

      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={() => onNavigate((index! + 1) % count)}
          aria-label="Next image"
        >
          <ChevronRightIcon />
        </button>
      )}

      {count > 1 && (
        <div className="lightbox-counter">{index! + 1} / {count}</div>
      )}
    </div>,
    document.body
  );
}
