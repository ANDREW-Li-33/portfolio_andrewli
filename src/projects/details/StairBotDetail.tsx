import DownloadList from '../../components/DownloadList';
import { img } from '../../data/media';

export default function StairBotDetail() {
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
        <div className="image-grid">
          <figure>
            <img src={img('init_idea_tbtcpx-min_l2wc8p')} alt="Initial concept sketches" />
            <figcaption>Early concept sketches</figcaption>
          </figure>
          <figure>
            <img src={img('shenzhen1_x7oajg-min_ul9mcv')} alt="Shenzhen skyline" />
            <figcaption>Shenzhen — where the project happened</figcaption>
          </figure>
        </div>
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
        <div className="image-grid">
          <figure>
            <img src={img('CAD_lift_af7sbe')} alt="Scissor lift CAD" />
            <figcaption>CAD model</figcaption>
          </figure>
          <figure>
            <video src="/videos/testing_lift.mp4" autoPlay loop muted playsInline />
            <figcaption>Bench-testing the lift</figcaption>
          </figure>
        </div>
      </section>

      <hr className="divider" />

      <section className="subsection reverse">
        <div className="image-grid">
          <figure>
            <img src={img('rail_systemCAD_l7i6ll')} alt="Linear rail CAD" />
            <figcaption>Linear rail CAD</figcaption>
          </figure>
          <figure>
            <img src={img('rail_system_completed_vqzsyh-min_bnwenf')} alt="Linear rail assembled" />
            <figcaption>Assembled rail system</figcaption>
          </figure>
        </div>
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
        <div className="image-grid">
          <figure>
            <img src={img('drivetrain_CAD_zfpgr2')} alt="Drivetrain CAD" />
            <figcaption>Drivetrain CAD</figcaption>
          </figure>
          <figure>
            <img src={img('putting_tg3_six4xr-min_hdpnay')} alt="Assembling drivetrain" />
            <figcaption>Assembling the drivetrain</figcaption>
          </figure>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <h2 className="detail-h2">Final assembly</h2>
        <div className="image-grid cols-3">
          <figure>
            <img src={img('completed_chassis_uti0xi')} alt="Final CAD" />
            <figcaption>Final CAD</figcaption>
          </figure>
          <figure>
            <video src="/videos/testing_bot.mp4" autoPlay loop muted playsInline />
            <figcaption>Testing the robot</figcaption>
          </figure>
          <figure>
            <img src={img('putting_together_oaibuk-min_o00cai')} alt="Final assembled robot" />
            <figcaption>Completed stair climber</figcaption>
          </figure>
        </div>
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
        <figure className="image-grid cols-1">
          <img src={img('putting_tg_2_m28i3z-min_ff53ow')} alt="Final assembled robot" />
        </figure>
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
    </>
  );
}
