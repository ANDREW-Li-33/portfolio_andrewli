import Embed from '../../components/Embed';
import { GithubIcon } from '../../components/Icons';


export default function JohnStockbotDetail() {
  return (
    <>
      <section>
        <p>
          John-Stockbot is a wheeled
          mobile robot that catches missed basketball shots and fires them back at the
          user. The robot was completely designed and fabricated by me, including all CAD and electrical design.
          The project is being split into two phases. The first phase, which is described below, has been completed and was mainly to prove that the
          design can successfully drive and launch a basketball. This phase was also implemented as a project option for my
          school course CS 3651 (Prototyping Intelligent Devices).
        </p>

        <div className="label">Plan</div>
        <ul>
          <li>
            <strong>
              <a
                className="text-link"
                href="#phase-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('phase-1')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Phase 1
              </a>
              : Complete.
            </strong>{' '}
            Phase 1 included the mechanical design and assembly of the drivetrain, main chassis,
            flywheel, staging mechanism, and camera mechanism. After mechanical assembly, phase 1 also included
            making sure all systems were able to run as well as operate concurrently. This functionality
            was implemented using a remote control, with autonomous movement being saved for Phase 2.
          </li>
          <li>
            <strong>
              <a
                className="text-link"
                href="#phase-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('phase-2')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Phase 2
              </a>
              : In progress.
            </strong>{' '}
            Phase 2 will focus on the autonomous aspect of the project. While phase 1 assumed that the basketball is already in the
            robot's staging area, Phase 2 will focus on catching the ball mid-air. This will involve more computer-vision heavy aspects,
            including making use of a Jetson Orin Nano as well as a Zed mini stereo camera for VSLAM and tracking the ball.
          </li>
        </ul>


        <div className="image-grid contain">
          <img src="/images/bot_image_1.png" alt="" />
          <img src="/images/bot_image_3.png" alt="" />
        </div>

        <div className="label">Parts</div>
        <ul>
          <li><strong>Compute &amp; control:</strong> Teensy 4.1 Microcontroller, Jetson Orin Nano</li>
          <li><strong>Sensors:</strong> ZED Mini stereo RGB-D camera, 2x Adafruit IR Break Beam Sensors, IR remote + NEC receiver</li>
          <li><strong>Drivetrain:</strong> 4x 6354 BLDC motors, 2x Flipsky Dual Mini FSESC6.7 Pro ESCs, 4x 6&quot; omni wheels, aluminum plate frame</li>
          <li><strong>Flywheel launcher:</strong> 2x 6384 120 KV BLDC motors, 50 mm contact wheels, keyed jackshafts, HTD timing belts, custom 3D-printed pulleys</li>
          <li><strong>Staging + gate:</strong> 2x NEMA17 stepper motors (carriage + camera tilt), 2x TMC2209 stepper drivers, lead screw + flange nut, SG90 servo</li>
          <li><strong>Power:</strong> 22.2 V LiPo battery, UBEC + buck converter, bus bars, fuse box</li>
        </ul>
      </section>

      <hr className="divider" />

      <section>
        <h2 className="detail-h2">Brief Technical Explanation</h2>

        <p>
          John Stockbot can be broken into several subsystems. First is the
          staging system, which holds the basketball once caught.
        </p>

        <div className="label">Staging</div>
        <p>
          The staging subsystem consists of the following parts (excluding
          3D printed and structural parts): a NEMA17 stepper motor that
          turns a lead screw, which pushes the ball towards the flywheel
          to be launched; a SG90 servo to control the gate, which blocks
          the basketball from entering the flywheel preemptively; and
          break beam sensors that detect if the ball is inside the robot.
        </p>

        <div className="label">Drivetrain</div>
        <p>
          The drivetrain subsystem consists of 4 wheels that are
          configured in an X-drive shape (2 sets of parallel wheels,
          these wheels can rotate forwards as well as move side-to-side).
          This configuration allows John Stockbot to move diagonally and
          strafe. The wheels are driven by BLDC electric skateboard
          motors with a 13.5:1 gear reduction (13.5 motor rotations per
          wheel rotation).
        </p>

        <div className="label">Flywheel</div>
        <p>
          The flywheel subsystem consists of 2 BLDC electric skateboard
          motors. These two flywheels are stacked on top of each other
          and rotate outwards from the bot to launch the basketball.
          They slightly compress the basketball to get a firm grip.
        </p>
        <p>
          Note that during the demo video, flywheel speed was limited to
          20% and the drivetrain was limited to 10% speed as to not
          destroy my living room.
        </p>

        <div className="label">Camera</div>
        <p>
          The camera subsystem consists of a NEMA17 stepper motor and
          the ZED Mini stereo camera. The stepper motor allows the
          camera to rotate around the pitch axis.
        </p>

        <div className="label">Control</div>
        <p>
          To orchestrate communication and actuation between these
          subsystems, I use a Teensy 4.1 microcontroller. For
          computationally expensive tasks such as tracking the
          basketball, I use the Jetson Orin Nano, which communicates
          with the Teensy and stereo camera.
        </p>

        <div className="label">Recap</div>
        <p>
          To recap, the staging system holds the basketball. Once it is
          confirmed that the basketball is inside the robot (using the
          break beam sensors) and the user wants to launch the ball, the
          staging gate opens and the staging stepper motor turns to push
          the basketball towards the flywheel, which is rotating
          outwards to grip the ball and launch it. Simultaneously, the
          user can aim the robot using the drivetrain, which allows for
          turning, strafing, and diagonal movement.
        </p>

        <p>
          This is my brief final presentation for my course:{' '}
          <a
            className="link"
            href="https://docs.google.com/presentation/d/1RR_J_0LJZvs_JYAC9r4cDu1mKUKD8P13c-WMYT1LZ10/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CS 3651 final presentation →
          </a>
        </p>
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Demo video</div>
        <Embed
          src="https://drive.google.com/file/d/1gYtYDUBzbtMkbW3dodio_ziAfX-USn-w/preview"
          title="John-Stockbot demo"
        />
      </section>

      <hr className="divider" />

      <section>
        <h2 id="phase-1" className="detail-h2">Phase 1: Mechanical Build + Remote Control</h2>

        {/* Drivetrain — side-by-side: images in the left column,
            description in the right (reverse swaps the 1.4fr/1fr
            template so the text column is the wider one). */}
        <div className="subsection reverse">
          <div className="image-grid contain">
            <figure>
              <img src="/images/drivetrain_cad.png" alt="Drivetrain CAD render" />
              <figcaption>Drivetrain CAD render</figcaption>
            </figure>
            <figure>
              <img src="/images/drivetrain_only.png" alt="X-drive assembly" />
              <figcaption>X-drive assembly</figcaption>
            </figure>
          </div>
          <div>
            <div className="label">Drivetrain</div>
            <p>
              X-drive on 4x 6354 BLDC motors equipped with Hall sensors and 6" omni wheels, driven by 2
              Flipsky Dual Mini FSESC6.7 Pro ESCs over a custom-made CAN
              bus. The Teensy microcontroller communicates with the motors through this CAN bus.
              The drivetrain also features a waterjetted aluminum frames and 3D-printed motor mounts pulleys.
              The configuration of a X-drive with omni wheels allows the robot to strafe and move diagonally.
            </p>
          </div>
        </div>

        <hr className="divider divider-tight" />

        {/* Flywheel — side-by-side: text in the left column, images in
            the right. Default .subsection template (1.4fr text + 1fr
            images) for visual variety vs the reverse drivetrain row. */}
        <div className="subsection">
          <div>
            <div className="label">Flywheel launcher</div>
            <p>
              Two 6384 120 KV BLDCs spin a pair of vertically stacked contact wheels using
              keyed jackshafts + HTD timing belts.
              Each flywheel runs on a separate Flipsky VESC, meaning there can be variable speeds between the top and bottom flywheels.
            </p>
          </div>
          <div className="image-grid contain">
            <figure>
              <img src="/images/flywheel_cad.png" alt="Flywheel CAD render" />
              <figcaption>Flywheel CAD render</figcaption>
            </figure>
            <figure>
              <img src="/images/test_firing.jpg" alt="Test firing" />
              <figcaption>Test firing</figcaption>
            </figure>
          </div>
        </div>

        <hr className="divider divider-tight" />

        {/* Staging + gate — side-by-side: images in the left column,
            description in the right (reverse template, matching the
            Drivetrain layout above). */}
        <div className="subsection reverse">
          <div className="image-grid contain">
            <figure>
              <img src="/images/staging_cad.png" alt="Staging mechanism CAD" />
              <figcaption>Staging mechanism CAD</figcaption>
            </figure>
            <figure>
              <img src="/images/servo_real_closeup.png" alt="Staging mechanism assembly" />
              <figcaption>Staging mechanism assembly</figcaption>
            </figure>
          </div>
          <div>
            <div className="label">Staging + gate</div>
            <p>
              Ball staging is a NEMA17 stepper motor running a lead screw
              carriage along a 3D printed conveyor. The IR break beam sensors handle detecting whether the ball is in
              the staging area. An SG90 servo opens and closes the gate that
              releases the ball into the flywheel.
            </p>
            <ul>
              <li>Sequence: Stage → Detect Ball → Open Gate → Push → Spin Flywheels → Ball launched → Retract Ball Carriage</li>
            </ul>
          </div>
        </div>

        <hr className="divider divider-tight" />


        <div className="label">Electronics + power</div>
        <p>
          A 22.2 V LiPo Battery goes into bus bars, which safely distribute power for the entire robot. 
          The bus bars provide high voltage / amperage to the VESCs. These VESCs are connected to their respective BLDC motors.
          I use one of the VESC's BECs (Battery Eliminator Circuit) to provide a safe 5V 1A to the Teensy 4.1.
          The Teensy communicates with the VESCs using CAN communication using a custom packet protocol using the FlexCAN_T4 library. These packets are sent over a physically wired bus that attaches to the Teensy through a CAN transceiver.
          The Teensy then provides 3.3V logic power to several other components, including the break beam sensors, IR receiver, stepper motor drivers, and the CAN transceiver. 

          The bus bar is also connected to a fuse box, which provides power to several other components while ensuring that the components will be electrically protected
          in case of a spike in current. The fuse box provides power to the stepper motor drivers (power for the motors), the UBEC converter (which powers the servo motor), and the buck converter,
           which converts 22.2V to a steady clean 19V for the Jetson Orin Nano.
        </p>
        <div className="image-grid contain">
          <figure>
            <img src="/images/power_block_diagram.png" alt="Power block diagram" />
            <figcaption>Original Power block diagram, does not include fuse box</figcaption>
          </figure>
          <figure>
            <img src="/images/logic_block_diagram.png" alt="Logic block diagram" />
            <figcaption>Logic block diagram</figcaption>
          </figure>
          <figure>
            <img src="/images/fuse_box_wiring.png" alt="Fuse box wiring" />
            <figcaption>Fuse box wiring</figcaption>
          </figure>
          <figure>
            <img src="/images/CAN_communication_block_diagram.png" alt="CAN communication wiring for one motor" />
            <figcaption>CAN communication wiring</figcaption>
          </figure>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <h2 id="phase-2" className="detail-h2">Phase 2: Autonomy</h2>
        <p className="detail-lede">
          In progress!
        </p>

       
      </section>

      <hr className="divider" />

      {/* === Repo footer — the page closes with a single CTA pointing
              the reader at the GitHub repo for CAD + code. The link
              sits inside the GitHub icon chip (.icon-link) instead of
              a text "here". === */}
      <section>
        <p>
          If you want to view the CAD files and code used for this project,
          check out the Github repository!
          <a
            className="icon-link"
            href="https://github.com/ANDREW-Li-33/john-stockbot-3651"
            target="_blank"
            rel="noopener noreferrer"
            title="Open the John-Stockbot GitHub repository"
            aria-label="Open the John-Stockbot GitHub repository"
          >
            <GithubIcon />
          </a>
        </p>
      </section>
    </>
  );
}
