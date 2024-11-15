export default function AboutPage(): JSX.Element {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-6">
          Hello! I’m <span className="font-semibold">Andrew Li</span>, a robotics enthusiast and computer science student at Georgia Institute of Technology. My passion lies in blending cutting-edge technology and innovation to solve real-world problems through robotics and automation.
        </p>
  
        <h2 className="text-2xl font-bold mb-2">My Journey</h2>
        <p className="text-lg mb-6">
          From my early days competing in the VEX Robotics Competition to advancing my skills through internships and collaborative projects, I’ve cultivated a deep appreciation for both hardware and software. My experience includes developing autonomous navigation systems, working with soft robotics, and contributing to teams in sumo robotics competitions.
        </p>
  
        <h2 className="text-2xl font-bold mb-2">Key Experiences</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>
            <span className="font-semibold">VEX Robotics (2019–2023)</span>: 
            Led autonomous routine development, securing 7 tournament championships and representing my team at the world championships.
          </li>
          <li>
            <span className="font-semibold">Georgia Tech RoboWrestling</span>: 
            Integrated sensor data for sumo robot competitions, achieving 1st place in in-house events and mentoring new members.
          </li>
          <li>
            <span className="font-semibold">Boston University Morphable Biorobotics Lab</span>: 
            Designed and fabricated a pick-and-place machine using innovative stacked balloon actuators.
          </li>
          <li>
            <span className="font-semibold">Flowers Invention Studio</span>: 
            Staffed a makerspace, assisting users with equipment like 3D printers, waterjets, and mills while honing my fabrication skills.
          </li>
        </ul>
  
        <h2 className="text-2xl font-bold mb-2">Skills and Interests</h2>
        <p className="text-lg mb-6">
          My technical expertise spans programming in C++ and Java, working with ROS2 for robotics, and designing CAD models for prototyping. Beyond robotics, I enjoy exploring NeoVim configurations and building FPV drones, combining my love for automation with AI-driven innovations.
        </p>
  
        <h2 className="text-2xl font-bold mb-2">Looking Ahead</h2>
        <p className="text-lg">
          My goal is to continue pushing the boundaries of robotics by designing systems that seamlessly integrate hardware and software. Whether it’s collaborating with teams or building personal projects, I’m always eager to innovate and learn.
        </p>
      </div>
    );
  }
  