import type { Tab } from '../types';
import { useDocMeta } from '../hooks/useDocMeta';

interface HomeProps {
  onProjects: () => void;
  onAbout: () => void;
  /** Navigate to (tab, anchor) — used by the hero tagline's inline
      mentions to deep-link into their matching section on
      Experience / Research. */
  onNavToSection: (tab: Tab, anchor?: string | null) => void;
}

export default function Home({ onProjects, onAbout, onNavToSection }: HomeProps) {
  useDocMeta({
    title: 'Andrew Li',
    description:
      "B.S./M.S. Computer Science at Georgia Tech. AI for autonomy at Sandia National Labs, software lead at Humanoid Robotics @ GT, real-to-sim vision research at Georgia Tech's Lunar Lab.",
    path: '/',
  });

  return (
    <div className="hero">
      {/* Blurred copy fills the hero area so the side bars look like a soft
          extension of the video instead of flat letterboxing. The browser
          caches the file, so this is one network request, not two. */}
      <video
        className="hero-video-bg"
        src="/videos/home/landing_page_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <video
        className="hero-video"
        src="/videos/home/landing_page_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-scrim" />
      <div className="hero-content">
        <div className="hero-eyebrow">Welcome to my portfolio!</div>
        <h1 className="hero-name">Andrew Li</h1>
        <p className="hero-tagline">
          B.S./M.S. Computer Science at Georgia Tech.
          <br />
          AI for autonomy at{' '}
          <button
            type="button"
            className="hero-tagline-link"
            onClick={() => onNavToSection('experience', 'sandia')}
          >
            Sandia National Labs
          </button>
          , software lead at{' '}
          <button
            type="button"
            className="hero-tagline-link"
            onClick={() => onNavToSection('experience', 'humanoid')}
          >
            Humanoid Robotics @ GT
          </button>
          , real‑to‑sim vision research at{' '}
          <button
            type="button"
            className="hero-tagline-link"
            onClick={() => onNavToSection('research', 'lunar-lab')}
          >
            Georgia Tech's Lunar Lab
          </button>
          .
        </p>
        <div className="hero-actions">
          <button className="cta" onClick={onProjects}>
            View projects <span className="arrow">→</span>
          </button>
          <button className="cta outline" onClick={onAbout}>
            About me
          </button>
        </div>
      </div>
    </div>
  );
}
