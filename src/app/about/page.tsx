import { Link as LinkIcon } from 'lucide-react';

export default function AboutPage(): JSX.Element {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-start space-x-8 mt-3">
        <div className="flex-1 space-y-6">
          {/* About Me */}
          <section id="about-me">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg">
              Hi, I’m <span className="font-semibold">Andrew Li</span>, a robotics enthusiast and computer science student attending Georgia Tech!
              <br /> On this website, I hope to share some of my personal projects and provide some info about myself.
            </p>
          </section>
          
          {/* Photos Section */}
          <section id="photos">
            <div className="flex space-x-4">
              <img src="/images/test image 2.webp" alt="Description of image 1" className="w-1/2 object-cover" />
              <img src="/images/test image 3.jpeg" alt="Description of image 2" className="w-1/2 object-cover" />
            </div>
          </section>

        </div>

        {/* Table of Contents */}
        <nav className="w-1/3">
          <h2 className="text-2xl font-bold mb-2">Table of Contents</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <a href="#vex-robotics" className="text-white-600 hover:underline inline-flex items-center text-lg">
                Vex Robotics Competition
                <LinkIcon className="ml-2" size={16} />
              </a>
              <p className="text-sm text-gray-400 mt-1 ml-6">Overview of vex robotics journey</p>
            </li>
            <li>
              <a href="#boston-university" className="text-white-600 hover:underline inline-flex items-center text-lg">
                Boston University Morphable Biorobotics Lab
                <LinkIcon className="ml-2" size={16} />
              </a>
              <p className="text-sm text-gray-400 mt-1 ml-6">Overview of Boston University Experience</p>
            </li>
            <li>
              <a href="#robowrestling" className="text-white-600 hover:underline inline-flex items-center text-lg">
                Georgia Tech Robowrestling
                <LinkIcon className="ml-2" size={16} />
              </a>
              <p className="text-sm text-gray-400 mt-1 ml-6">Overview of Georgia Tech Robowrestling</p>
            </li>
            <li>
              <a href="#invention-studio" className="text-white-600 hover:underline inline-flex items-center text-lg">
                Flowers Invention Studio
                <LinkIcon className="ml-2" size={16} />
              </a>
              <p className="text-sm text-gray-400 mt-1 ml-6">Overview of Flowers Invention Studio</p>
            </li>
          </ul>
        </nav>
      </div>

      <hr className="h-1 bg-[#444] border-0" />

      {/* Vex Robotics */}
      <section id="vex-robotics">
        <h2 className="text-2xl font-bold mb-2">Vex Robotics Competition</h2>
        <p className="text-lg">
          From my early days competing in the VEX Robotics Competition to advancing my skills through internships and collaborative projects, I’ve cultivated a deep appreciation for both hardware and software. My experience includes developing autonomous navigation systems, working with soft robotics, and contributing to teams in sumo robotics competitions.
        </p>
      </section>

      <hr className="h-1 bg-[#444] border-0" />

      <section id="boston-university">
        <h2 className="text-2xl font-bold mb-2">Boston University Morphable Biorobotics Lab</h2>
        <p className='text-lg'>
          Hello.
        </p>
      </section>

      <hr className="h-1 bg-[#444] border-0"/>

      <section id="robowrestling">
        <h2 className="text-2xl font-bold mb-2">Georgia Tech Robowrestling</h2>
        <p className="text-lg">
          Hello again.
        </p>
      </section>

      <hr className="h-1 bg-[#444] border-0"/>

      <section id="invention-studio">
        <h2 className="text-2xl font-bold mb-2">Flowers Invention Studio</h2>
        <p className="text-lg">
          Hello again again.
        </p>
      </section>

    </div>
  );
}
