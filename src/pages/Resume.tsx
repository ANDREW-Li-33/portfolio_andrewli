import { useState, type ReactNode } from 'react';
import type { Tab } from '../types';
import { ResumeIcon } from '../components/Icons';
import { useDocMeta } from '../hooks/useDocMeta';

const EMAIL = 'ali497@gatech.edu';

interface ResumeProps {
  /** Navigate to (tab, anchor). Used to link resume entries into the
      matching <section id="..."> on Experience / Research. */
  onNavToSection: (tab: Tab, anchor?: string | null) => void;
  /** Navigate directly to /projects/:id. Used by the Projects entries
      on the resume that have a dedicated detail page. */
  onNavToProject: (id: string) => void;
}

export default function Resume({ onNavToSection, onNavToProject }: ResumeProps) {
  useDocMeta({
    title: 'Resume: Andrew Li',
    description:
      "Andrew Li's resume: B.S./M.S. Computer Science at Georgia Tech, AI for autonomy at Sandia National Labs, robotics research and software engineering experience.",
    path: '/resume',
  });

  // Tap the highlighted email → copy to clipboard; flip to a success
  // visual state for 1.5s so the user has feedback the copy succeeded.
  const [emailCopied, setEmailCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1500);
    } catch {
      /* clipboard API unavailable; silently fail (user can still select the text) */
    }
  };

  const go = (tab: Tab, anchor: string | null = null) => () =>
    onNavToSection(tab, anchor);

  return (
    <div className="section">
      <div className="container">
        <div className="section-eyebrow">Resume</div>
        <p className="resume-pdf-note">
          This page is my resume but in website form! For each section on the resume, 
          There is a corresponding link to the respective section in my portfolio for more details.
          My actual resume is also available as a PDF by clicking the button to the right.
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
        <h1 className="section-title">Andrew Li</h1>
        <p className="resume-contact">
          Atlanta, GA · (917) 670-4329 · {EMAIL}
          <button
            type="button"
            className={`contact-copy-btn${emailCopied ? ' copied' : ''}`}
            onClick={copyEmail}
            aria-label={emailCopied ? 'Email copied to clipboard' : 'Copy email to clipboard'}
          >
            {emailCopied ? 'Copied!' : 'Copy'}
          </button>{' '}
          · andrewli.info ·{' '}
          <a
            className="text-link"
            href="https://github.com/ANDREW-Li-33"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ANDREW-Li-33
          </a>{' '}
          ·{' '}
          <a
            className="text-link"
            href="https://www.linkedin.com/in/andrewli033"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/andrewli033
          </a>
        </p>


        {/* === Education === */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Education</h2>
          <ResumeEntry
            name="Georgia Institute of Technology"
            logo='/images/logos/gatech.png'
            location="Atlanta, GA"
            dates="Aug 2023 - May 2027"
            role="M.S. Computer Science (Expected May 2027) · B.S. Computer Science (May 2026), GPA: 3.74"
            bullets={[
              <>
                <strong>Coursework:</strong> Computer Vision, Perception and
                Robotics, Human-Robot Interaction, Machine Learning, DSA
              </>,
              <>
                <strong>Activities:</strong> Humanoid Robotics (Software Lead);
                RoboWrestling (Software Mentor); Flowers Invention Studio (PI)
              </>,
            ]}
          />
        </section>


        {/* === Experience === */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Experience</h2>

          <ResumeEntry
            name="Georgia Tech Lunar Lab"
            logo='/images/logos/lunarlab.png'
            onClickName={go('research', 'lunar-lab')}
            customClickLabel="View research"
            location="Atlanta, GA"
            dates="Apr 2026 - Present"
            role="Research Assistant"
            bullets={[
              <>
                Building a real-to-sim pipeline that turns a single handheld
                LiDAR and tri-camera capture into a photorealistic,
                collision-ready digital twin for robot training in large-scale
                indoor environments
              </>,
              <>
                Adapted FAST-LIVO2 LiDAR-inertial-visual odometry (LiDAR-IMU-camera
                fusion) for camera pose estimation
              </>,
              <>
                Implementing 3D reconstruction methods including Gaussian
                Splatting, NeRF, and SDF
              </>,
            ]}
          />

          <ResumeEntry
            name="Sandia National Laboratories"
            logo='/images/logos/sandia.jpg'
            onClickName={go('experience', 'sandia')}
            location="Albuquerque, NM (On-site, then Remote)"
            dates="May 2025 - Present"
            role="Year-Round AI for Autonomy Intern"
            bullets={[
              <>
                Developed a custom C++ ROS 2 interface for Kromek GR1+
                spectrometers and SparkFun GPS, then led Jackal unmanned ground
                vehicle (UGV) field trials for real-time radiation mapping,
                detailed in report{' '}
                <a
                  className="link"
                  href="https://www.osti.gov/servlets/purl/2999072"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAND2025-12871R
                </a>
              </>,
              <>
                Developing embedded C++ firmware for a microcontroller-based
                drone (UAV) flight logger that captures IMU, GPS, and barometric
                altimeter data
              </>,
              <>
                Engineered a semantic navigation stack in Isaac Sim for a Spot
                quadruped, pairing a local Gemma 3 vision language model (VLM)
                via Ollama for contextual reasoning with behavior trees for
                high-level planning
              </>,
            ]}
          />
        </section>


        {/* === Projects === */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Projects</h2>

          <ResumeEntry
            name="AGATHA: Automated Self-Driving Hazard Detection and Scenario Mining"
            href="https://github.com/ANDREW-Li-33/AGATHA"
            location=""
            dates="Oct 2026 - Present"
            role="Personal project"
            bullets={[
              <>
                Developing a Python pipeline to mine the Waymo Open Dataset for
                driving hazards, including vehicle cut-ins, unexpected
                pedestrian behavior, and road construction
              </>,
              <>
                Integrated Gemma VLMs via vLLM for local GPU inference,
                analyzing video and 3D object trajectories to classify incidents
                across 14 hazard types
              </>,
              <>
                Developing a PostgreSQL database to organize incidents by hazard
                type and support search and video review through a Streamlit
                web application
              </>,
            ]}
          />

          <ResumeEntry
            name="HARPOR: Video to Physics-Ready Simulation Assets"
            href="https://github.com/lunarlab-gatech/HARPOR"
            location=""
            dates="Aug 2026 - Present"
            role="Personal project"
            bullets={[
              <>
                Building a video-to-3D pipeline that turns object videos into
                simulation assets with estimated physical properties
              </>,
              <>
                Integrating DA3 depth estimation and MV-SAM3D reconstruction
                with agents that refine geometry and appearance
              </>,
              <>
                Designed a VLM agent to add movable joints in Blender and repair
                articulation using simulation feedback in MuJoCo
              </>,
              <>
                Built a FastAPI web UI for video uploads, interactive 3D
                previews, and live reconstruction progress tracking
              </>,
            ]}
          />

          <ResumeEntry
            name="Basketball Rebounding Robot"
            logo='/images/john-stockbot/bot_image_1.png'
            onClickName={() => onNavToProject('john-stockbot')}
            location=""
            dates="Sep 2025 - Present"
            role="Personal project"
            bullets={[
              <>
                Integrated ZED visual SLAM (VSLAM) and OpenCV on a Jetson Orin
                Nano for autonomous navigation
              </>,
              <>
                Built a hierarchical ROS 2 state machine for autonomous target
                tracking, ball acquisition, and launching sequences
              </>,
              <>
                Designed a custom flywheel system and x-drive chassis in Fusion
                360 and handled all fabrication and assembly
              </>,
            ]}
            customClickLabel="View project"
          />
        </section>


        {/* === Technical Skills === */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Technical Skills</h2>
          <div className="resume-skills">
            <SkillRow
              category="Languages & Tools"
              items="C++, Python, Java, OpenCV, SAM 3, Docker, Git, Linux (Ubuntu), Fusion 360 (CAD)"
            />
            <SkillRow
              category="Computer Vision"
              items="3D reconstruction, camera calibration, sensor fusion"
            />
            <SkillRow
              category="Robotics & Simulation"
              items="ROS 2, RViz, Behavior Trees, Isaac Sim, Isaac Lab, MuJoCo, URDF, MJCF, USD, RL (PPO)"
            />
            <SkillRow
              category="Hardware"
              items="LiDAR, ZED stereo camera, IMU, GPS, Jetson Orin Nano, Teensy 4.1, Boston Dynamics Spot, Jackal UGV"
            />
          </div>
        </section>
      </div>
    </div>
  );
}


interface ResumeEntryProps {
  name: string;
  onClickName?: () => void;
  /** External link (e.g. a GitHub repo). Used when there is no onClickName. */
  href?: string;
  location: string;
  dates: string;
  role: string;
  bullets: ReactNode[];
  customClickLabel?: string;
  logo?: string;
}

function ResumeEntry({
  name,
  onClickName,
  href,
  location,
  dates,
  role,
  bullets,
  customClickLabel,
  logo,
}: ResumeEntryProps) {
  return (
    <div className="resume-entry">
      <div
        className={`resume-entry-logo${logo ? ' has-logo' : ''}`}
        aria-hidden
      >
        {logo
          ? <img src={logo} alt="" />
          : <span>{name.charAt(0)}</span>
        }
      </div>
      <div className="resume-entry-body">
        <div className="resume-entry-head">
          {onClickName ? (
            <button
              type="button"
              className="resume-entry-name resume-entry-name-link"
              onClick={onClickName}
            >
              {name}
            </button>
          ) : href ? (
            <a
              className="resume-entry-name resume-entry-name-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ) : (
            <span className="resume-entry-name">{name}</span>
          )}
          <div className="resume-entry-meta">
            {location && <span>{location}</span>}
            {location && dates && <span className="resume-entry-meta-sep">·</span>}
            {dates && <span>{dates}</span>}
          </div>
        </div>
        <div className="resume-entry-role">{role}</div>
        <ul className="resume-entry-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        {onClickName && (
          <button
            type="button"
            className="resume-entry-cta"
            onClick={onClickName}
          >
            {customClickLabel ?? 'View experience'} <span className="arrow">→</span>
          </button>
        )}
        {!onClickName && href && (
          <a
            className="resume-entry-cta"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {customClickLabel ?? 'View on GitHub'} <span className="arrow">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}


function SkillRow({ category, items }: { category: string; items: string }) {
  return (
    <div className="resume-skill-row">
      <div className="resume-skill-category">{category}</div>
      <div className="resume-skill-list">{items}</div>
    </div>
  );
}
