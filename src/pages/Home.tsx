interface HomeProps {
  onProjects: () => void;
  onAbout: () => void;
}

export default function Home({ onProjects, onAbout }: HomeProps) {
  return (
    <div className="hero">
      {/* Blurred copy fills the hero area so the side bars look like a soft
          extension of the video instead of flat letterboxing. The browser
          caches the file, so this is one network request, not two. */}
      <video
        className="hero-video-bg"
        src="/videos/landing_page_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <video
        className="hero-video"
        src="/videos/landing_page_video.mp4"
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
          AI for autonomy at <strong>Sandia National Labs</strong>, software lead at{' '}
          <strong>Humanoid Robotics @ GT</strong>, real‑to‑sim vision research at the{' '}
          <strong>Lunar Lab</strong>.
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
