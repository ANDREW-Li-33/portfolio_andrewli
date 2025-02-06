import React from 'react';
import { Github } from 'lucide-react';

const VexGUI = () => {
  return (
    <div className="container mx-auto px-16 py-6 bg-black text-white min-h-screen mt-12 max-w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-6">VEX Telemetry Interface</h1>
          <ul className="mb-8 text-lg leading-relaxed list-disc pl-6 space-y-4">
            <li>During my time in the VEX Robotics Competition, debugging sensors and motors was always a problem due to having connect extra cables in cramped spaces.</li>
            <li>Switching through prewritten programs required either choosing different separate programs through the controller, using a physical mechanism, or re-uploading programs.</li>
            <li>To fix this problem, which could waste valuable time during competitions, I wrote a GUI that utilized the VEX V5 brain's touchscreen.</li>
          </ul>
          
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <ul className="mb-8 space-y-2 list-disc pl-6 text-lg">
            <li>Dynamic pre-programmed autonomous routine selection</li>
            <li>Real-time motor diagnostics displaying power, voltage, and temperature data</li>
            <li>Sensor telemetry including encoder positions, visual heading indicator from IMU data, and other sensors</li>
            <li>Easy navigation through touchscreen interface with dropdown menu access</li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="flex items-start justify-center">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/uAM3Nvy-e2A?si=TWJhHISjIQIkAs1F" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="rounded-lg w-full"
            />
          </div>
          
          <div className="bg-gray-800 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Project Repository:</h3>
            <a 
              href="https://github.com/ANDREW-Li-33/joyboy" 
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
              ANDREW-Li-33/joyboy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VexGUI;