import { useState } from 'react';
import type { Tab } from '../types';
import { ResumeIcon } from '../components/Icons';
import { img } from '../data/media';
import { useDocMeta } from '../hooks/useDocMeta';
import Lightbox, { type LightboxMedia } from '../components/Lightbox';

interface AboutProps {
  onNav: (tab: Tab) => void;
}

// Shared across both photo columns so clicking any photo opens the
// Lightbox with prev/next navigation through all four, in on-page order.
const ABOUT_PHOTOS: LightboxMedia[] = [
  { src: img('self_img1_cx8tzp'), alt: 'With Georgia Tech mascot Buzz' },
  {
    src: '/images/about/hookshot.jpg?v=3',
    alt: 'Posing with the Kareem Abdul-Jabbar hook-shot statue',
  },
  {
    src: img('self_img2_f0xn7j', 'c_crop,w_2400,h_1800,g_south_west'),
    alt: 'Standing on a mountain in Hong Kong',
  },
  { src: '/images/about/graduation.jpg', alt: 'Georgia Tech graduation' },
];

/**
 * About page — personal bio on the left, a small contact-sheet grid of
 * personal photos on the right. Inline mentions of "Experience" and
 * "Research" route to those tabs via the onNav callback.
 */
export default function About({ onNav }: AboutProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useDocMeta({
    title: 'About: Andrew Li',
    description:
      "Master's student in Computer Science at Georgia Tech interested in real2sim / sim2real transfer and robotic 3D vision.",
    path: '/about',
  });

  return (
    <div className="section">
      <div className="container">
        <div className="section-eyebrow">About</div>
        <h1 className="section-title">A little about me</h1>

        <div className="about-top">
          <div className="about-bio">
            <p>
              I'm an incoming Master's student in Computer Science at Georgia Tech
              interested in real2sim / sim2real transfer and robotic 3D vision!
              I received my Bachelor's degree in Computer Science at Georgia Tech in 2026. I'm always looking to take my knowledge
              and experience in robotics to the next level!
            </p>
            <p>
              Currently, I'm a year-round AI for
              Autonomy intern at <strong>Sandia National Labs</strong>, software
              lead for <strong>Humanoid Robotics @ GT</strong>, and a research
              assistant in Georgia Tech's <a href="https://sites.gatech.edu/lunarlab/" target="_blank" rel="noopener noreferrer"><strong>Lunar Lab</strong></a>.
              You can read more about these experiences in my{' '}
              <button className="text-link" onClick={() => onNav('experience')}>Experience</button>{' '}
              and{' '}
              <button className="text-link" onClick={() => onNav('research')}>Research</button>{' '}
              pages!
            </p>
            <p>
              Outside of robotics, I enjoy watching and playing basketball (I'm a big San Antonio Spurs fan), brewing coffee, and reading (I'm currently reading The Hobbit)!
            </p>

            <p>
              Feel free to check out the rest of this site, or open my resume for a quick summary of my work:
              <a
                className="resume-icon-link"
                href="/downloadables/andrew_li_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Open resume (PDF)"
                aria-label="Open resume (PDF) in a new tab"
              >
                <ResumeIcon />
              </a>
            </p>
          </div>

          {/* Two flex columns instead of a forced 4:3 grid — each photo
              renders at its natural aspect ratio (no cropping, no bars).
              Pairing a landscape with a portrait per column keeps heights
              roughly balanced. */}
          <div className="about-photos">
            <div className="about-photo-col">
              {[0, 1].map((i) => (
                <button
                  key={ABOUT_PHOTOS[i].src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Expand ${ABOUT_PHOTOS[i].alt}`}
                >
                  <img src={ABOUT_PHOTOS[i].src} alt={ABOUT_PHOTOS[i].alt} />
                </button>
              ))}
            </div>
            <div className="about-photo-col">
              {[2, 3].map((i) => (
                <button
                  key={ABOUT_PHOTOS[i].src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Expand ${ABOUT_PHOTOS[i].alt}`}
                >
                  <img src={ABOUT_PHOTOS[i].src} alt={ABOUT_PHOTOS[i].alt} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        media={ABOUT_PHOTOS}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
