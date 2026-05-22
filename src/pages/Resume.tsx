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
    title: 'Resume — Andrew Li',
    description:
      "Andrew Li's resume — B.S./M.S. Computer Science at Georgia Tech, AI for autonomy at Sandia National Labs, robotics research and software engineering experience.",
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
          Atlanta, GA / Jericho, NY · (917) 670-4329 · {EMAIL}
          <button
            type="button"
            className={`contact-copy-btn${emailCopied ? ' copied' : ''}`}
            onClick={copyEmail}
            aria-label={emailCopied ? 'Email copied to clipboard' : 'Copy email to clipboard'}
          >
            {emailCopied ? 'Copied!' : 'Copy'}
          </button>{' '}
          ·{' '}
          <a
            className="text-link"
            href="https://github.com/ANDREW-Li-33"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ANDREW-Li-33
          </a>
        </p>


        {/* === Education === */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Education</h2>
          <ResumeEntry
            name="Georgia Institute of Technology"
            logo='/images/logos/gatech.png'
            location="Atlanta, GA"
            dates="Aug 2023 — May 2027"
            role="B.S./M.S. Computer Science · Undergrad GPA: 3.74"
            bullets={[
              <>
                <strong>Coursework:</strong> Machine Learning, Computer Vision,
                Perception and Robotics, Intro to AI, Linear Algebra, DSA
              </>,
            ]}
          />
        </section>


        {/* === Experience === */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Experience</h2>

          <ResumeEntry
            name="Sandia National Laboratories"
            logo='/images/logos/sandia.jpg'
            onClickName={go('experience', 'sandia')}
            location="Albuquerque, NM (On-site → Remote)"
            dates="May 2025 — Present"
            role="Year-Round AI for Autonomy Intern"
            bullets={[
              <>
                Developing modular C++ firmware for a platform-agnostic
                microcontroller-based drone flight logging module to ensure
                high-frequency capture of inertial, barometric, and GPS data
              </>,
              <>
                Engineered a semantic navigation stack in simulation for a Spot
                robot dog, utilizing Gemma 3 locally via Ollama for contextual
                reasoning and behavior trees to orchestrate high-level planning
              </>,
              <>
                Developed a custom C++ ROS2 interface for Kromek GR1+
                spectrometers and SparkFun GPS, leading Jackal UGV field trials
                for real-time radiation mapping as detailed in report{' '}
                <a
                  className="link"
                  href="https://www.osti.gov/servlets/purl/2999072"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAND2025-12871R
                </a>
              </>,
            ]}
          />

          <ResumeEntry
            name="Lunar Lab @ Georgia Tech"
            logo='/images/logos/lunarlab.png'
            onClickName={go('research', 'lunar-lab')}
            customClickLabel="View research"
            location="Atlanta, GA"
            dates="Apr 2026 — Present"
            role="Research Assistant"
            bullets={[
              <>
                Building a real2sim2real pipeline with NKSR and 3D Gaussian
                Splatting to scale high-fidelity scene reconstruction from
                typical small-room scenes to large environments, facilitating
                warehouse robot policy training pipelines
              </>,
              <>
                Capturing multi-modal data (LiDAR, dual fisheye, RGB-D) via a
                handheld GeoScan S1, and tagging reconstructed meshes with
                material parameters (Young's modulus, friction) for
                manipulation-ready scenes
              </>,
            ]}
          />

          <ResumeEntry
            name="Humanoid Robotics @ Georgia Tech"
            logo='/images/logos/humanoid.png'
            onClickName={go('experience', 'humanoid')}
            location="Atlanta, GA"
            dates="Jan 2026 — Present"
            role="Software Lead"
            bullets={[
              <>
                Leading a team of 5 developers implementing PPO neural network
                policies for dynamic bipedal locomotion, balance recovery, and
                soccer dribbling, with a standardized Docker-based Ubuntu
                workflow for cross-platform reproducibility
              </>,
            ]}
          />

          <ResumeEntry
            name="Georgia Tech RoboWrestling"
            logo='/images/logos/robojackets.png'
            onClickName={go('experience', 'robowrestling')}
            location="Atlanta, GA"
            dates="Sep 2023 — Feb 2025"
            role="Software Mentor"
            bullets={[
              <>
                Developed embedded C++ firmware on Teensy 4.1 microcontrollers
                for autonomous opponent detection
              </>,
              <>
                Mentored 15+ students on 500g robot sumo teams from design to
                competition
              </>,
            ]}
          />

          <ResumeEntry
            name="Flowers Invention Studio Makerspace"
            logo='/images/logos/inventionstudio.jpg'
            onClickName={go('experience', 'invention-studio')}
            location="Atlanta, GA"
            dates="Mar 2024 — Feb 2025"
            role="Prototyping Instructor"
            bullets={[
              <>
                Supervised and taught safe operation of machinery for a
                community of 1,000+ users — e.g., waterjets and 3D printers
              </>,
            ]}
          />

          <ResumeEntry
            name="Boston University Morphable Biorobotics Lab"
            logo='/images/logos/bu.png'
            onClickName={go('research', 'boston-university')}
            customClickLabel="View research"
            location="Boston, MA"
            dates="Jun 2022 — Aug 2022"
            role="Research Assistant"
            bullets={[
              <>
                Designed a soft-robotic pick-and-place manipulator and
                prototyped minimally invasive cardiac devices
              </>,
            ]}
          />
        </section>


        {/* === Projects === */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Projects</h2>

          <ResumeEntry
            name="Basketball Rebounding Robot"
            logo='/images/bot_image_1.png'
            onClickName={() => onNavToProject('john-stockbot')}
            location=""
            dates="Sep 2025 — Present"
            role="Personal project"
            bullets={[
              <>
                Leveraged ZED VSLAM and OpenCV on a Jetson Orin Nano for
                autonomous navigation
              </>,
              <>
                Created a hierarchical state machine in ROS2 to coordinate
                autonomous sub-systems, including target tracking, ball
                acquisition, and launching sequences
              </>,
              <>
                Engineered a custom flywheel system and x-drive chassis using
                Fusion 360, including all fabrication and assembly
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
              category="Languages"
              items="Python, C++, Java"
            />
            <SkillRow
              category="AI / Robotics / Sim"
              items="Isaac Sim/Lab/Gym, MuJoCo, PPO, PyTorch, 3DGS, SLAM, Behavior Trees, ROS2, Nav2, Rviz"
            />
            <SkillRow
              category="Hardware"
              items="Jetson Orin Nano, Boston Dynamics Spot, Teensy 4.1, Arduino, Jackal UGV"
            />
            <SkillRow
              category="Tools"
              items="Docker, Git, Linux (Ubuntu), Fusion 360"
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
