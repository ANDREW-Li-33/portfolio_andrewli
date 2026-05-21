import Embed from '../../components/Embed';

export default function VexGuiDetail() {
  return (
    <>
      <section className="subsection">
        <div>
          <div className="label">Why</div>
          <p>
            Debugging sensors and motors during a VEX Robotics match and switching programs based on opponent 
            strategy was a pain. Switching autonomous
            programs meant either juggling separate uploads, mechanical
            switches on the bot, or controller selectors, which all proved to be unreliable or too slow during a
            competition.
          </p>
          <p>
            To fix this, I wrote a GUI for the VEX V5 brain's touchscreen so the entire
            workflow lives on the bot. The GUI was created using LVGL.
          </p>
          <div className="label">Features</div>
          <ul>
            <li>Dynamic autonomous routine selection</li>
            <li>Real-time motor diagnostics (power, voltage, temperature)</li>
            <li>Sensor telemetry, including encoders, IMU heading visualisation, etc.</li>
            <li>Touchscreen navigation via a dropdown menu</li>
          </ul>
          <a className="link" href="https://github.com/ANDREW-Li-33/joyboy" target="_blank" rel="noopener noreferrer">
            GitHub — ANDREW-Li-33/joyboy →
          </a>
        </div>
        <div>
          <Embed src="https://www.youtube.com/embed/uAM3Nvy-e2A?si=TWJhHISjIQIkAs1F" title="VEX V5 telemetry GUI demo" />
        </div>
      </section>
    </>
  );
}
