import React from 'react';

const VexGUI = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">VEX Telemetry Interface</h1>
      <p className="mb-4">During my time in the VEX Robotics Competition, debugging sensors and motors was always a 
        problem due to having connect extra cables in cramped spaces. Additionally, switching through prewritten programs required either choosing different 
        separate programs through the controller, using a physical mechanism, or re-uploading programs. 
        To avoid this problem, which could waste valuable time during competitions, I wrote a GUI that utilized the 
        VEX V5 brain's touchscreen.
      </p>
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul>
        <li>first screen</li>
        <li>second screen</li>
        <li>third screen</li>
        <li>fourth screen</li>
      </ul>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/uAM3Nvy-e2A?si=TWJhHISjIQIkAs1F" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default VexGUI;
