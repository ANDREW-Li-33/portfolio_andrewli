import { Link as LinkIcon} from 'lucide-react';


export default function AboutPage(): JSX.Element {
  return (
    <div className="container mx-auto p-6 space-y-6">

            {/* About Me */}
            <section id="about-me">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Hi, I’m <span className="font-semibold">Andrew Li</span>, a robotics enthusiast and computer science student attending Georgia Tech!
          <br /> On this website, I hope to share some of my personal projects and provide some info about myself.
        </p>
      </section>


      <nav className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Table of Contents</h2>
        <ul className="list-inside list-disc space-y-1">
        <li>
            <a href="#about-me" className="text-white-600 hover:underline inline-flex items-center text-lg">
              Vex Robotics Competition
              <LinkIcon className="ml-2" size={16} />
            </a>
            <p className="text-sm text-gray-400 mt-1 ml-6">Overview of vex robotics journey</p>
          </li>
          <li>
            <a href="#boston-university" className="text-white-600 hover:underline inline-flex items-center text-lg">
              Boston University
              <LinkIcon className="ml-2" size={16} />
            </a>
            <p className="text-sm text-gray-400 mt-1 ml-6">Overview of Boston University Experience</p>
          </li>
          <li>
            <a href="#key-experiences" className="text-white-600 hover:underline inline-flex items-center text-lg">
              Georgia Tech Robowrestling
              <LinkIcon className="ml-2" size={16} />
            </a>
            <p className="text-sm text-gray-400 mt-1 ml-6">Overview of Georgia Tech Robowrestling</p>
          </li>
          <li>
            <a href="#skills-and-interests" className="text-white-600 hover:underline inline-flex items-center text-lg">
              Flowers Invention Studio
              <LinkIcon className="ml-2" size={16} />
            </a>
            <p className="text-sm text-gray-400 mt-1 ml-6">Overview of Flowers Invention Studio</p>
          </li>
        </ul>
      </nav>


      <hr className="h-1 bg-[#444] border-0" />

      {/* My Journey */}
      <section id="my-journey">
        <h2 className="text-2xl font-bold mb-2">Vex Robotics Competition</h2>
        <p className="text-lg">
          From my early days competing in the VEX Robotics Competition to advancing my skills through internships and collaborative projects, I’ve cultivated a deep appreciation for both hardware and software. My experience includes developing autonomous navigation systems, working with soft robotics, and contributing to teams in sumo robotics competitions.
        </p>
      </section>

      <hr className="h-1 bg-[#444] border-0" />

      {/* Skills and Interests */}
      <section id="skills-and-interests">
        <h2 className="text-2xl font-bold mb-2">Skills and Interests</h2>
        <p className="text-lg">
          My technical expertise spans programming in C++ and Java, working with ROS2 for robotics, and designing CAD models for prototyping. Beyond robotics, I enjoy exploring NeoVim configurations and building FPV drones, combining my love for automation with AI-driven innovations.
        </p>
      </section>

    </div>
  );
}
