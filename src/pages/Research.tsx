import { img } from '../data/media';
import { useDocMeta } from '../hooks/useDocMeta';

/**
 * Research page — lab + research-team affiliations, reverse-chronological.
 * Short list for now, so no intro/sidebar — just the heading and the
 * role sections directly. Bring back the .about-top + TOC sidebar when
 * there are enough entries to justify it.
 */
export default function Research() {
  useDocMeta({
    title: 'Research — Andrew Li',
    description:
      "Andrew Li's research affiliations — Humanoid Robotics @ Georgia Tech, Lunar Lab, BU Morphable Biorobotics.",
    path: '/research',
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Research</h1>

        {/* === Lunar Lab === */}
        <section id="lunar-lab" className="subsection">
          <div>
            <h2>
              Georgia Tech Lunar Lab{' '}
              <span className="badge">Active</span>
            </h2>
            <div className="meta">Research Assistant · Georgia Tech Lunar Lab · PI Lu Gan</div>
            <p>
              Under the guidance of PI Lu Gan and PhD student Lingjun Zhao, I'm 
              conducting research on <strong>large scale high-fidelity real2sim2real transfer</strong>.
            </p>
            <p>
              The pipeline takes real-world sensor data using a handheld device (The Taobotics Geoscan) that includes LiDAR, inertial, 
              visual, and depth data. Our goal is to take this sensor data and reconstruct
             the environment as a 3D representation with both highly accurate physics and visuals.
             We hope that this project can facilitate the training of effective robot learning policies, especially
             those that need to be run in large environments.
            </p>
            <div className="label">Contributions</div>
            <ul>
              <li>
                <strong>High-fidelity reconstruction at warehouse scale: </strong>
                Going past the small-room scenes most
                NKSR + 3DGS work targets, without losing fidelity.
              </li>
              <li>
                <strong>Physics-aware mesh tagging: </strong>
                 annotating each reconstructed object with material parameters (Young's
                modulus, friction, etc.) so the scene is immediately usable
                for manipulation tasks in simulation, not just navigation and locomotion.
              </li>
            </ul>
            
          </div>
          {/* cols-1 so the GeoScan photo and NKSR reconstruction video
              stack vertically in the narrow right .subsection column.
              `contain` keeps both the portrait-ish photo and the
              ultra-wide video fully visible (no edge cropping). */}
          <div className="image-grid cols-1 contain">
            <figure>
              <img src="/images/taobotics_geoscan.webp" alt="Taobotics GeoScan S1 sensing rig" />
              <figcaption>Taobotics GeoScan S1 sensing rig</figcaption>
            </figure>
            <figure>
              <video src="/videos/nksr.mp4" autoPlay loop muted playsInline />
              <figcaption>NKSR mesh reconstruction created by Lingjun</figcaption>
            </figure>
          </div>
        </section>

        <hr className="divider" />

        {/* === BU Morphable Biorobotics Lab === */}
        <section id="boston-university" className="subsection reverse">
          <div className="image-grid">
            <figure>
              <img src={img('bu_1_cgxkhr')} alt="Pick and place SBA" />
              <figcaption>My pick-and-place machine grabbing a penny</figcaption>
            </figure>
            <figure>
              <img src={img('bu_5_i8wab4')} alt="Force-testing an SBA" />
              <figcaption>Force testing the SBA</figcaption>
            </figure>
            <figure>
              <img src={img('bu_4_dracbs')} alt="Deflated SBA" />
              <figcaption>Deflated SBA</figcaption>
            </figure>
            <figure>
              <img src={img('bu_2_thgieu')} alt="Inflated SBA" />
              <figcaption>Inflated SBA</figcaption>
            </figure>
          </div>
          <div>
            <h2>BU Morphable Biorobotics Lab</h2>
            <div className="meta">Research Assistant · Jun — Aug 2022</div>
            <p>
            Through Boston University's RISE program, I completed a six-week internship as a 
            research assistant in the Morphable Biorobotics Lab. 
            Working under Dr. Tommaso Ranzani and PhD candidate Jacob Rogatinsky, 
            I investigated the applications of soft robotic actuators in minimally invasive cardiac surgery.
            </p>
            <div className="label">This work involved</div>
            <ul>
              <li>Fabricating SBAs (Stacked Balloon Actuators) using a laser cutter, heat press, and Teflon layering</li>
              <li>Designing, fabricating, and programming a pick-and-place machine featuring an SBA end effector</li>
              <li>Conducting strength testing across inflation pressures</li>
              <li>Programming SBA control via a Wii nunchuck for live demos</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
