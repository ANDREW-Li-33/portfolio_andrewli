import { useState } from 'react';
import Embed from '../components/Embed';
import Lightbox, { type LightboxImage } from '../components/Lightbox';
import { img } from '../data/media';
import { useDocMeta } from '../hooks/useDocMeta';

// Photo galleries — each array is shared between the clickable thumbnails
// and the Lightbox so the two stay in sync by index.
const INVENTION_STUDIO_IMAGES: LightboxImage[] = [
  { src: img('is_1_ybizxa'), alt: 'Invention Studio print farm', caption: 'The Invention Studio print farm' },
  { src: img('is_2_wmbzwz'), alt: 'Lightbox birthday gift',      caption: "Lightbox made for a friend's birthday" },
  { src: img('is_4_cdhlvy'), alt: 'Invention Studio bike shop',  caption: "The Studio's bike shop" },
  { src: '/images/waterjet.png', alt: 'Invention Studio waterjet', caption: 'Waterjet parts for my robot' },
];

const ROBOWRESTLING_IMAGES: LightboxImage[] = [
  { src: img('robo_1_sabeaa'), alt: '500g bots line-up',                        caption: '2023-2024 500g bots' },
  { src: img('robo_2_uyom3p'), alt: 'Team at airport en route to Robogames 2024', caption: 'Traveling with the team!' },
  { src: img('robo_3_if1dpv'), alt: 'Robogames venue',                          caption: 'RoboGames 2024!' },
];

const ARSENAL_IMAGES: LightboxImage[] = [
  { src: img('stairs_agaukz'),  alt: 'Tourney Champs',       caption: 'Tourney Champs, Skills, and Design Awards' },
  { src: img('states_l33zoh'),  alt: 'State champs',         caption: 'State Champions' },
  { src: img('overclock_mddomf'), alt: 'Wildcats Qualifier', caption: 'Tournament Champions' },
  { src: img('states2_k2glij'), alt: 'State champ banners',  caption: 'State Champions Banners!!!' },
];

/**
 * A clickable image grid — thumbnails that open the shared Lightbox at
 * their own index. Keeps the same .image-grid look as static grids.
 */
function GalleryGrid({
  images,
  onOpen,
}: {
  images: LightboxImage[];
  onOpen: (index: number) => void;
}) {
  return (
    <div className="image-grid">
      {images.map((image, i) => (
        <figure key={image.src} className="lightbox-figure-trigger">
          <button type="button" onClick={() => onOpen(i)}>
            <img src={image.src} alt={image.alt} />
          </button>
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/**
 * Experience page — paid roles + competition leadership, reverse-chronological.
 * Short list for now, so no intro/sidebar — just the heading and the
 * role sections directly. Bring back the .about-top + TOC sidebar when
 * there are enough entries to justify it.
 */
export default function Experience() {
  useDocMeta({
    title: 'Experience — Andrew Li',
    description:
      "Andrew Li's work and competition experience — Sandia National Labs, Invention Studio, GT RoboWrestling, VEX Robotics.",
    path: '/experience',
  });

  // Single lightbox state shared across all galleries — holds the active
  // gallery's images plus the current index (or null when closed).
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null);
  const openGallery = (images: LightboxImage[]) => (index: number) => setLightbox({ images, index });

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Experience</h1>

        {/* === Sandia === */}
        <section id="sandia">
          {/* Inner .subsection so the text + image-grid render in the
              normal two-column layout, with the Google Drive embed
              dropped below at full section width. */}
          <div className="subsection">
          <div>
            <h2>Sandia National Laboratories</h2>
            <div className="role-eyebrow">Internship</div>
            <div className="meta"> May 2025 — present · Albuquerque, NM</div>
            <p>
              At Sandia, I work as a year-round intern in the AI for Autonomy group. Currently, 
              I'm working on a modular flight-logging device for drones, including the mechanical design, assembly, and firmware.
              Additionally, I have worked on two other projects: a semantic navigation stack for a
              Spot robot dog inside simulation, and a custom C++ interface for a GR1+ spectrometer for autonomous radiation mapping and characterization.
            </p>
            <ul>
              <li>
                Engineered a semantic navigation stack script in IsaacSim for Spot,
                using <strong>Gemma 3 locally via Ollama</strong> for contextual
                reasoning and for high-level planning. My script allowed for ROS2 teleoperation in the terminal,
                which would move the Spot dog inside simulation. The Spot dog would use Gemma3 and YOLO to identify objects in the room and periodically take snapshots.
                Based on this data, Spot was successfully able to identify the room that it was in. (See video below)
              </li>
              <li>
                Built a custom <strong>C++ ROS2 interface</strong> for the Kromek
                GR1+ spectrometer and a SparkFun GPS. This interface allowed saving of the data to a 
                MicroSD card. We conducted{' '}
                field trials of the device strapped to a Clearpath Jackal UGV for real-time radiation
                mapping (report{' '}
                <a
                  className="link"
                  href="https://www.osti.gov/servlets/purl/2999072"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAND2025-12871R
                </a>).
              </li>
              <li>
                Building firmware for a platform agnostic
                 drone flight-logging module. This device features high-frequency
                capture of inertial, barometric, and GPS data.
              </li>
            </ul>

          </div>
          {/* Single-column image-grid — 2 images stack vertically inside
              the right .subsection column. */}
          <div className="image-grid cols-1">
            <figure>
              <img src='/images/radiation_mapping_1.png' alt="Radiation mapping field trial" />
              <figcaption>Radiation mapping trial across Albuquerque</figcaption>
            </figure>
            <figure>
              <img src='/images/radiation_mapping_2.png' alt="Placeholder for second Sandia image" />
              <figcaption>Radiation mapping field trial locating hot sources</figcaption>
            </figure>
          </div>
          </div>
          <Embed
            src="https://drive.google.com/file/d/1cIa2_Y6-BIrfc9fWXTtDeGM6Hq_Dcpzw/preview"
            title="Spot semantic understanding demo video"
          />
        </section>

        <hr className="divider" />

        {/* === Humanoid Robotics @ GT === */}
        <section id="humanoid" className="subsection reverse">
          {/* Single-column image-grid (cols-1) so the RL training video
              gets the full subsection column. autoPlay + loop + muted +
              playsInline mirrors the standard GIF-replacement pattern —
              required for autoplay to work in modern browsers. */}
          <div className="image-grid cols-1">
            <figure>
              <video
                src="/videos/rl-video-step-0.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <figcaption>Beginning steps for locomotion training</figcaption>
            </figure>
          </div>
          <div>
            <h2>Humanoid Robotics @ GT</h2>
            <div className="role-eyebrow">Georgia Tech Club</div>
            <div className="meta">Software Lead · Jan 2026 — present</div>
            <p>
              As a new club at Georgia Tech, we aim to develop humanoid robots that can participate in 
              humanoid soccer competitions. 
              I lead the club's software team, which 
              currently consists of several developers
              training neural-network policies in simulation and
              deploying them onto a real bipedal robot.
            </p>
            <ul>
              <li>
                Established a <strong>Docker-based dev workflow</strong>{' '}
                so our team can get the same reproducible Ubuntu training environment.
              </li>
              <li>
                Implementing <strong>PPO</strong> to train policies for dynamic
                bipedal locomotion, balance recovery, and soccer dribbling in IsaacSim / IsaacLab.
              </li> 
            </ul>
          </div>
        </section>

        <hr className="divider" />

        {/* === Invention Studio === */}
        <section id="invention-studio" className="subsection reverse">
          <GalleryGrid images={INVENTION_STUDIO_IMAGES} onOpen={openGallery(INVENTION_STUDIO_IMAGES)} />
          <div>
            <h2>Flowers Invention Studio</h2>
            <div className="role-eyebrow">Georgia Tech Club</div>
            <div className="meta">Prototyping Instructor · Mar 2024 — Feb 2025</div>
            <p>
              Flowers Invention Studio is Georgia Tech's largest student-run
              makerspace, including all kinds of machinery, from industrial waterjets to laser cutters to 3D
              printer farms.
            </p>
            <p>
              I worked through the trainings and testings to
              become a Provisional PI, then went through additional training and testing to become 
              a <strong>Full Prototyping Instructor</strong>. As a Full PI I supervised and helped a
              community of <strong>hundreds of users</strong> on safe operation of
              the equipment and tested prospective prototyping instructors.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* === RoboWrestling === */}
        <section id="robowrestling" className="subsection">
          <div>
            <h2>Georgia Tech RoboWrestling</h2>
            <div className="role-eyebrow">Georgia Tech Club</div>
            <div className="meta">Software Mentor · Sep 2023 — Feb 2025</div>
            <p>
              GT RoboWrestling is Georgia Tech's robot sumo team, building robots for the
              500g and 3kg classes, competing at Robogames and in-house events.
            </p>
            <ul>
              <li>
                Wrote embedded <strong>C++ firmware on Teensy 4.1</strong>{' '}
                microcontrollers for autonomous routines for high-speed opponent
                detection, with a goal of pushing the opponent out of the ring.
              </li>
              <li>
                Mentored 4 new members on 500g teams with software onboarding and algorithm development.
              </li>
              <li>Coordinated with EE / ME sub-teams under tight design constraints.</li>
              <li>Operated waterjet and mills to manufacture steel and aluminum baseplates.</li>
            </ul>
          </div>
          <GalleryGrid images={ROBOWRESTLING_IMAGES} onOpen={openGallery(ROBOWRESTLING_IMAGES)} />
        </section>

        <hr className="divider" />

        {/* === Vex Robotics === */}
        <section id="vex-robotics" className="subsection">
          <div>
            <h2>Vex Robotics Competition</h2>
            <div className="role-eyebrow">High School</div>
            <div className="meta">Team 55645X Arsenal · 2019 — 2023</div>
            <p>
              Starting freshman year of high school, my two best friends and I
              formed a team to compete in the Vex Robotics Competition. After
              struggling against experienced veterans, we left our original
              orgization and formed our own team, <strong>55645X Arsenal</strong>. We
              spent our days after school in our teammate's basement.
            </p>
            <div className="link-row">
              <a className="link" href="https://www.youtube.com/channel/UCqrfxe9OyJTMkMEitrIjS9A" target="_blank" rel="noopener noreferrer">
                Team YouTube →
              </a>
              <a className="link" href="https://www.instagram.com/55645x/" target="_blank" rel="noopener noreferrer">
                Team Instagram →
              </a>
            </div>
            <div className="label">Recap</div>
            <ul>
              <li>2023 New York State Champions</li>
              <li>6× Tournament Champions</li>
              <li>5× Robot Skills Champions</li>
              <li>6 Judged Awards</li>
              <li>3× World Championship qualification</li>
              <li>High ranking in national compeitions, including California, Massachusetts, and Wisconsin</li>
            </ul>
          </div>
          <GalleryGrid images={ARSENAL_IMAGES} onOpen={openGallery(ARSENAL_IMAGES)} />
        </section>
      </div>

      <Lightbox
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onNavigate={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
      />
    </div>
  );
}
