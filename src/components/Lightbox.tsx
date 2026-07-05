import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

export interface LightboxMedia {
  src: string;
  alt: string;
  caption?: string;
  /** 'video' renders in the modal with native controls so the viewer
      can scrub / pause / fullscreen; omitted or 'image' renders an <img>. */
  kind?: 'image' | 'video';
  /** CSS aspect-ratio for the *thumbnail* (e.g. "2474 / 1042") when the
      source doesn't match the grid's default 4:3. The modal always shows
      media at its natural aspect. */
  aspectRatio?: string;
}

interface LightboxProps {
  media: LightboxMedia[];
  /** Index into `media`, or null when the lightbox is closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Full-viewport media lightbox (images + videos). Rendered via a portal
 * straight into document.body so it's never at the mercy of an
 * ancestor's transform / filter / backdrop-filter establishing a
 * containing block for our position: fixed overlay (that bug bit the
 * mobile nav drawer earlier — see Nav.tsx).
 *
 * Controls: click backdrop or × to close, ‹ / › (or ArrowLeft/Right) to
 * step through the gallery, Esc to close. Wraps around at the ends.
 * Videos play with native browser controls (scrub bar, pause, volume,
 * fullscreen); arrow-key gallery navigation is suppressed while a video
 * element has focus so the keys can seek instead of switching slides.
 */
export default function Lightbox({ media, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const count = media.length;

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
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      // A focused <video> uses arrow keys to seek — don't also flip slides.
      if ((e.target as HTMLElement | null)?.tagName === 'VIDEO') return;
      if (e.key === 'ArrowLeft') onNavigate((index! - 1 + count) % count);
      else if (e.key === 'ArrowRight') onNavigate((index! + 1) % count);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, index, count, onClose, onNavigate]);

  if (!isOpen) return null;

  const current = media[index!];

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt || 'Media viewer'}>
      <div className="lightbox-backdrop" onClick={onClose} />

      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close media viewer">
        <CloseIcon />
      </button>

      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={() => onNavigate((index! - 1 + count) % count)}
          aria-label="Previous item"
        >
          <ChevronLeftIcon />
        </button>
      )}

      <figure className="lightbox-figure">
        {current.kind === 'video' ? (
          // key remounts the element on navigation so the previous
          // video's playback state doesn't leak into the next slide.
          // muted lets autoplay start immediately; the native controls
          // expose scrubbing, pause, volume, and fullscreen.
          <video key={current.src} src={current.src} controls autoPlay muted playsInline />
        ) : (
          <img src={current.src} alt={current.alt} />
        )}
        {current.caption && <figcaption>{current.caption}</figcaption>}
      </figure>

      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={() => onNavigate((index! + 1) % count)}
          aria-label="Next item"
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
