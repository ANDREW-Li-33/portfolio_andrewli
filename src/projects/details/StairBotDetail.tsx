import { useState } from 'react';
import Lightbox, { type LightboxMedia } from '../../components/Lightbox';
import GalleryGrid from '../../components/GalleryGrid';
import DownloadList from '../../components/DownloadList';
import { img } from '../../data/media';

const CONCEPT_MEDIA: LightboxMedia[] = [
  {
    src: img('init_idea_tbtcpx-min_l2wc8p'),
    alt: 'Initial concept sketches',
    caption: 'Early concept sketches',
  },
  {
    src: img('shenzhen1_x7oajg-min_ul9mcv'),
    alt: 'Shenzhen skyline',
    caption: 'Shenzhen — where the project happened',
  },
];

const SCISSOR_LIFT_MEDIA: LightboxMedia[] = [
  {
    src: img('CAD_lift_af7sbe'),
    alt: 'Scissor lift CAD',
    caption: 'CAD model',
  },
  {
    kind: 'video',
    src: '/videos/stairbot/testing_lift.mp4',
    alt: 'Scissor lift bench test video',
    caption: 'Bench-testing the lift',
  },
];

const LINEAR_RAIL_MEDIA: LightboxMedia[] = [
  {
    src: img('rail_systemCAD_l7i6ll'),
    alt: 'Linear rail CAD',
    caption: 'Linear rail CAD',
  },
  {
    src: img('rail_system_completed_vqzsyh-min_bnwenf'),
    alt: 'Linear rail assembled',
    caption: 'Assembled rail system',
  },
];

const DRIVETRAIN_MEDIA: LightboxMedia[] = [
  {
    src: img('drivetrain_CAD_zfpgr2'),
    alt: 'Drivetrain CAD',
    caption: 'Drivetrain CAD',
  },
  {
    src: img('putting_tg3_six4xr-min_hdpnay'),
    alt: 'Assembling drivetrain',
    caption: 'Assembling the drivetrain',
  },
];

const FINAL_ASSEMBLY_MEDIA: LightboxMedia[] = [
  {
    src: img('completed_chassis_uti0xi'),
    alt: 'Final CAD',
    caption: 'Final CAD',
  },
  {
    kind: 'video',
    src: '/videos/stairbot/testing_bot.mp4',
    alt: 'Stair-climbing robot test video',
    caption: 'Testing the robot',
  },
  {
    src: img('putting_together_oaibuk-min_o00cai'),
    alt: 'Final assembled robot',
    caption: 'Completed stair climber',
  },
];

const LESSONS_MEDIA: LightboxMedia[] = [
  {
    src: img('putting_tg_2_m28i3z-min_ff53ow'),
    alt: 'Final assembled robot',
  },
];

export default function StairBotDetail() {
  const [lightbox, setLightbox] = useState<{ media: LightboxMedia[]; index: number } | null>(null);
  const openGallery = (media: LightboxMedia[]) => (index: number) => setLightbox({ media, index });

  return (
    <>
      <section className="subsection">
        <div>
          <div className="label">Introduction</div>
          <p>
            During my time in Georgia Tech's China Summer Program, I was located
            in Shenzhen, often called the Silicon Valley of Hardware. I wanted to use this opportunity to build something cool.
            Coincidentally, in the China Summer Program, students can participate in the Maker Venture Program
            where students form groups to tackle an issue, and create a solution. We had access to GT
            Shenzhen's makerspace (3D printers, laser cutter, prototyping
            machines).
          </p>
          <div className="label">The challenge</div>
          <p>
            Stairs are hard for traditional cleaning robots (Roombas). Track
            drives can climb, but lose the maneuverability cleaning needs. Our
            goal was to have a system that lets cleaning robots safely and effectively
            climb stairs.
          </p>
          <div className="label">Our solution</div>
          <ul>
            <li>Scissor lift for vertical adjustment</li>
            <li>Linear rail to extend over the next step</li>
            <li>Mecanum wheels for high maneuverability</li>
          </ul>
        </div>
        <GalleryGrid media={CONCEPT_MEDIA} onOpen={openGallery(CONCEPT_MEDIA)} />
      </section>

      <hr className="divider" />

      <section className="subsection">
        <div>
          <div className="label">Scissor lift</div>
          <p>
            The scissor lift handles vertical adjustment by keeping the robot
            level while climbing
            and reaches stair heights up to ~15 cm.
          </p>
        </div>
        <GalleryGrid media={SCISSOR_LIFT_MEDIA} onOpen={openGallery(SCISSOR_LIFT_MEDIA)} />
      </section>

      <hr className="divider" />

      <section className="subsection reverse">
        <GalleryGrid media={LINEAR_RAIL_MEDIA} onOpen={openGallery(LINEAR_RAIL_MEDIA)} />
        <div>
          <div className="label">Linear rail</div>
          <p>
            The linear rail extends the robot over each next step:
          </p>
          <ul>
            <li>Metal lead screw + flange nut</li>
            <li>Driven by a high-power NEMA17 stepper</li>
            <li>Ball bearing carriages for low friction</li>
          </ul>
        </div>
      </section>

      <hr className="divider" />

      <section className="subsection">
        <div>
          <div className="label">Drivetrain</div>
          <ul>
            <li>Four mecanum wheels for in-plane strafing on stairs if needed</li>
            <li>Independent motor control for precise teleoperated turning</li>
          </ul>
        </div>
        <GalleryGrid media={DRIVETRAIN_MEDIA} onOpen={openGallery(DRIVETRAIN_MEDIA)} />
      </section>

      <hr className="divider" />

      <section>
        <h2 className="detail-h2">Final assembly</h2>
        <GalleryGrid media={FINAL_ASSEMBLY_MEDIA} onOpen={openGallery(FINAL_ASSEMBLY_MEDIA)} variant="cols-3" />
      </section>

      <hr className="divider" />

      <section className="subsection">
        <div>
          <div className="label">Lessons learned</div>
          <ul>
            <li>The robot wasn't fully autonomous in the end — driving was tricky</li>
            <li>We didn't have enough time to test on a real staircase</li>
            <li>Given more time, I'd redesign the scissor lift for speed</li>
            <li>And add more sensors + stronger motors with encoder/limit-switch feedback</li>
          </ul>
        </div>
        <GalleryGrid media={LESSONS_MEDIA} onOpen={openGallery(LESSONS_MEDIA)} variant="cols-1" />
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Downloads</div>
        <DownloadList items={[
          { label: 'Complete package', href: '/downloadables/stairbot/stair_bot.zip', sub: 'All files (ZIP)' },
          { label: 'Chassis v4',       href: '/downloadables/stairbot/chassis v4.stl', sub: 'Main chassis (STL)' },
          { label: 'Main frame v13',   href: '/downloadables/stairbot/new main frame v13.stl', sub: 'Core structure (STL)' },
          { label: 'Robot arm v6',     href: '/downloadables/stairbot/new arm v6.stl', sub: 'Updated arm (STL)' },
          { label: 'Carriage v3',      href: '/downloadables/stairbot/carriage v3.stl', sub: 'Linear rail carriage (STL)' },
          { label: 'Main screw v4',    href: '/downloadables/stairbot/big screw v4.stl', sub: 'Lead screw (STL)' },
          { label: 'Lead nut v1',      href: '/downloadables/stairbot/lead flange nut v1.stl', sub: 'Flange nut housing (STL)' },
          { label: 'Motor adapter v1', href: '/downloadables/stairbot/lead screw to motor adapter v1.stl', sub: 'Coupler (STL)' },
          { label: 'Motor mount v1',   href: '/downloadables/stairbot/motor mount v1.stl', sub: 'NEMA17 mount (STL)' },
          { label: 'Bearing mount v1', href: '/downloadables/stairbot/screw bearing holder v1.stl', sub: 'Lead-screw bearing (STL)' },
        ]} />
      </section>

      <Lightbox
        media={lightbox?.media ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onNavigate={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
      />
    </>
  );
}
