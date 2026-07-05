import { useState } from 'react';
import Lightbox, { type LightboxMedia } from '../components/Lightbox';
import GalleryGrid from '../components/GalleryGrid';
import { img } from '../data/media';
import { useDocMeta } from '../hooks/useDocMeta';

// Media galleries — each array is shared between the clickable thumbnails
// and the Lightbox so the two stay in sync by index. Images open enlarged;
// videos open with native controls so the viewer can scrub / pause /
// fullscreen. aspectRatio overrides the grid's default 4:3 thumbnail so
// each source renders uncropped.
const GEOSCAN_MEDIA: LightboxMedia[] = [
  {
    src: '/images/taobotics_geoscan.webp',
    alt: 'Taobotics GeoScan S1 sensing rig',
    caption: 'Taobotics GeoScan S1 device',
  },
  {
    kind: 'video',
    src: '/videos/harrison_square_reconstruction.mp4',
    alt: "Rosbag playback in Georgia Tech's Harrison Square Plaza",
    caption: "Rosbag playback in Georgia Tech's Harrison Square Plaza",
    aspectRatio: '2474 / 1042',
  },
];

const PINGS_MEDIA: LightboxMedia[] = [
  {
    kind: 'video',
    src: '/videos/mesh_street_walkthrough.mp4',
    alt: "PINGS mesh reconstruction along Georgia Tech's Cherry Street",
    caption: "PINGS mesh reconstruction along Georgia Tech's Cherry Street",
    aspectRatio: '2188 / 1422',
  },
  {
    src: '/images/street_walkthrough_3dgs.png',
    alt: '3D Gaussian splatting render of a street walkthrough',
    caption: "PINGS 3DGS render along Georgia Tech's Cherry Street",
    aspectRatio: '993 / 568',
  },
];

const TRISPLAT_MEDIA: LightboxMedia[] = [
  {
    kind: 'video',
    src: '/videos/trisplat_labrandom.mp4',
    alt: 'TriSplat lab scene reconstruction',
    caption: 'Lab scene reconstruction results',
    aspectRatio: '1452 / 896',
  },
];

const ASSET_GEN_MEDIA: LightboxMedia[] = [
  {
    kind: 'video',
    src: '/videos/yolo_sam2_capture.mp4',
    alt: 'YOLO11x-seg + SAM2 running over a capture',
    caption: 'YOLO11x-seg + SAM2 running over a capture',
    aspectRatio: '1280 / 720',
  },
  {
    kind: 'video',
    src: '/videos/physxomni_mujoco.mp4',
    alt: 'PhysX-Omni output assets in MuJoCo',
    caption: 'PhysX-Omni output assets dropped into MuJoCo',
    aspectRatio: '2866 / 998',
  },
];

const BU_MEDIA: LightboxMedia[] = [
  { src: img('bu_1_cgxkhr'), alt: 'Pick and place SBA',   caption: 'My pick-and-place machine grabbing a penny' },
  { src: img('bu_5_i8wab4'), alt: 'Force-testing an SBA', caption: 'Force testing the SBA' },
  { src: img('bu_4_dracbs'), alt: 'Deflated SBA',         caption: 'Deflated SBA' },
  { src: img('bu_2_thgieu'), alt: 'Inflated SBA',         caption: 'Inflated SBA' },
];

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

  // Single lightbox state shared across all galleries — holds the active
  // gallery's media plus the current index (or null when closed).
  const [lightbox, setLightbox] = useState<{ media: LightboxMedia[]; index: number } | null>(null);
  const openGallery = (media: LightboxMedia[]) => (index: number) => setLightbox({ media, index });

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Research</h1>

        {/* === Lunar Lab === */}
        {/* Structured like the Sandia section on Experience: an intro
            .subsection row, then one row per research effort (PINGS,
            TriSplat, asset generation), alternating text/media sides,
            separated by tight dividers. All media renders through
            GalleryGrid → shared Lightbox: images enlarge, videos open
            with native scrub controls. */}
        <section id="lunar-lab">
          <div className="subsection">
            <div>
              <h2>
                Georgia Tech Lunar Lab, Warehouse Real2Sim Project{' '}
                <span className="badge">Active</span>
              </h2>
              <div className="meta">Research Assistant · Georgia Tech Lunar Lab · PI Lu Gan</div>
              <p>
                Under the guidance of PI Lu Gan and PhD student Lingjun Zhao, I'm
                researching <strong>large-scale real2sim</strong>: turning a single
                walkthrough of a large indoor space (ex. a warehouse) into a{' '}
                <strong>photorealistic, collision-ready digital twin</strong>. Alongside the digital twin, my work aims to
                automatically generate <strong>physics-aware object assets</strong> that are
                directly usable in simulation for downstream robot learning tasks such as manipulation. 
                For this project, we will also open-source our work and results to the 3D reconstruction community,
                as opposed to many 3D reconstruction companies that close-source their methodology. 
              </p>
              <p>
                Starting from our GeoScan S1, I recorded rosbags using the device's
                Livox Mid-360 LiDAR + IMU, two ~140° fisheye cameras,
                and RealSense camera in a single pass through various scenes. Camera poses are currently calculated from our FAST-LIVO2 odometry
                component, which I adapted to the GeoScan's fisheye + RealSense
                setup; a labmate is building out the full SLAM backend that will
                eventually add loop closure on top.
              </p>
            </div>
            <GalleryGrid
              media={GEOSCAN_MEDIA}
              onOpen={openGallery(GEOSCAN_MEDIA)}
              variant="cols-1 contain"
            />
          </div>

          <hr className="divider divider-tight" />

          {/* --- PINGS scene reconstruction --- */}
          <div className="subsection reverse">
            <GalleryGrid
              media={PINGS_MEDIA}
              onOpen={openGallery(PINGS_MEDIA)}
              variant="cols-1"
            />
            <div>
              <div className="detail-h3">Neural mapping with PINGS</div>
              <p>
                <a
                  className="text-link"
                  href="https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/pan2025rss.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PINGS
                </a>{' '}
                is a point-based implicit neural map that unifies{' '}
                <strong>3D Gaussian splatting</strong> with a{' '}
                <strong>SDF</strong> in an implicit neural map: splats provide the
                photorealistic rendering while the SDF provides a meshable
                surface. I'm currently using this work as the project's mapper, and I have been
                working towards optimizing the system to work directly with our collected rosbags. So far, I've completed the following:
              </p>
              <ul>
                <li>
                  Built the <strong>GeoScan rosbag → PINGS data pipeline</strong>, including
                  rosbag conversion into KITTI-style sequences and a custom multi-camera dataloader.
                </li>
                <li>
                  Ran ~30 systematic ablations over reconstruction parameters such as 
                  neural voxel size, eikonal loss weight, SDF iterations, and
                  splatting settings. These were run locally on my lab's L40S compute as well as on H100 GPUs on
                  Georgia Tech's PACE HPC cluster.
                </li>
                <li>
                  Results so far: <strong>+14% fine-detail surface coverage</strong>,
                  novel-view <strong>PSNR increased ~7%</strong>, and{' '}
                  <strong>SSIM 0.71 → 0.75</strong> over the starting configuration.
                </li>
              </ul>
            </div>
          </div>

          <hr className="divider divider-tight" />

          {/* --- TriSplat feed-forward reconstruction --- */}
          <div className="subsection">
            <div>
              <div className="detail-h3">Feed-forward reconstruction with TriSplat</div>
              <p>
                <a
                  className="text-link"
                  href="https://arxiv.org/pdf/2605.26115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TriSplat
                </a>{' '}
                is a <strong>feed-forward, sim-ready reconstruction
                model</strong>: given up to ~24 RGB images, it creates a realistic triangle mesh scene in a single forward pass. It was the
                first reconstruction approach I evaluated for the project.
              </p>
              <ul>

                <li>
                  Built an <strong>interactive frame picker</strong> after finding
                  that hand-selected input frames consistently beat evenly-spaced
                  sampling.
                </li>
                <li>
                  Compared the <strong>dl3dv- and RealEstate10K-trained
                  checkpoints</strong> head-to-head on identical scenes.
                </li>
                <li>
                  Results were not good enough to be used for large-scale reconstruction, especially considering no LiDAR input is used. 
                  Although TriSplat won't be used in our project moving forward, its results are worth noting.
                </li>
              </ul>
            </div>
            <GalleryGrid
              media={TRISPLAT_MEDIA}
              onOpen={openGallery(TRISPLAT_MEDIA)}
              variant="cols-1"
            />
          </div>

          <hr className="divider divider-tight" />

          {/* --- YOLO + SAM2 + PhysX-Omni asset generation --- */}
          <div className="subsection reverse">
            <GalleryGrid
              media={ASSET_GEN_MEDIA}
              onOpen={openGallery(ASSET_GEN_MEDIA)}
              variant="cols-1"
            />
            <div>
              <div className="detail-h3">Physics-aware assets with YOLO11x + SAM2 + PhysX-Omni</div>
              <p>
                In addition to the reconstructed scene, we want to generate  <strong>articulated, physics-aware
                assets</strong> for robots to interact with. With existing frameworks, one has to manually find or create assets to import online. 
                In our work, we are automating this task from the same single-pass rosbag data that our 3D reconstruction is based on. 
                I am currently experimenting with different methodologies towards this goal.
              </p>
              <ul>
                <li>
                  <strong>YOLO11x-seg</strong> detects and tracks object instances
                  across the camera streams, then a best-view scorer picks each object's
                  sharpest and most confident frame. From that frame, <strong>SAM2</strong> segments a clean crop of
                  it.
                </li>
                <li>
                  The SAM2 crops are fed into {' '}
                  <a
                    className="text-link"
                    href="https://arxiv.org/abs/2605.21572"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PhysX-Omni
                  </a>, which generates a complete
                  sim-ready asset, including URDF/MJCF, mesh, textures, and
                  physical properties (Young's modulus, density) from only an image.
                </li>
                <li>
                  Future investigations include integration of Meta's
                  <a className="text-link" href="https://github.com/facebookresearch/sam-3d-objects" target="_blank" rel="noopener noreferrer"> SAM3D Objects </a> 
                  as well as <a className="text-link" href="https://arxiv.org/abs/2603.14010" target="_blank" rel="noopener noreferrer"> URDF-Anything+</a>.
                  </li>
              </ul>
            </div>
          </div>

          <hr className="divider divider-tight" />

          {/* --- Work-in-progress closer --- */}
          <div>
            <div className="detail-h3">Next steps: work in progress!</div>
            <p className="detail-lede">
              Right now, I'm working on optimizing the individual methods above. Afterwards, the goal is to
              tie all of the methods together to create one complete pipeline! We hope to publish our work in the near future, around the end of 2026.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* === BU Morphable Biorobotics Lab === */}
        <section id="boston-university" className="subsection reverse">
          <GalleryGrid media={BU_MEDIA} onOpen={openGallery(BU_MEDIA)} />
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

      <Lightbox
        media={lightbox?.media ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onNavigate={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
      />
    </div>
  );
}
