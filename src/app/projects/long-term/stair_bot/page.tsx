"use client";

import React from "react";
import { Link, FileDown } from "lucide-react";
import { useState, useEffect } from "react";
import CloudinaryImage from "@/components/CloudinaryImage";

const StairBot = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-16 py-6 bg-black text-white min-h-screen mt-12">
      <div className="grid grid-cols-5 md:grid-cols-5 gap-8 my-7">
        <div className="col-span-3 space-y-8">
          <header>
            <h1 className="text-4xl font-bold mb-6">Stair Climbing Robot</h1>
            <h3 className="text-2xl font-bold mb-6">Introduction</h3>
            <ul className="space-y-4 text-lg leading-relaxed list-disc pl-6">
              <li>
                During my time in Georgia Tech&apos;s China Summer Program, I was
                located in Shenzhen, often nicknamed &ldquo;The Silicon Valley of
                Hardware&rdquo;
              </li>
              <li>
                To encourage students to take advantage of the cheap and
                abundant electronics and hardware available in Shenzhen, they
                hosted the Maker Venture Program.
              </li>
              <li>
                In this program, students team up to tackle a real-world issue
                and provide a solution.
              </li>
              <li>
                To aid in the fabrication process, students are given access to
                Gerogia Tech Shenzhen&apos;s makerspace, featuring 3D printers, a
                laser cutter, and many more prototyping machines
              </li>
              <li>
                My repsonsibility in this project was designing and fabricating
                the robot
              </li>
            </ul>
          </header>
          <nav className="bg-gray-800 p-6 rounded-lg grid grid-cols-2">
            <div className="">
              <h2 className="text-2xl font-bold mb-4 underline">
                Table of Contents
              </h2>
              <ul className="list-inside space-y-4">
                <li>
                  <a
                    href="#problem-and-ideas"
                    className="text-white-600 hover:text-purple-300 transition-colors duration-300 inline-flex items-center text-lg"
                  >
                    Problem and Ideas
                    <Link className="ml-2" size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="#scissor-lift-system"
                    className="text-white-600 hover:text-purple-300 transition-colors duration-300 inline-flex items-center text-lg"
                  >
                    Implementation: Scissor Lift
                    <Link className="ml-2" size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="#linear-rail-system"
                    className="text-white-600 hover:text-purple-300 transition-colors duration-300 inline-flex items-center text-lg"
                  >
                    Implementation: Linear Rail
                    <Link className="ml-2" size={16} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-inside space-y-4">
                <li>
                  <a
                    href="#drivetrain"
                    className="text-white-600 hover:text-purple-300 transition-colors duration-300 inline-flex items-center text-lg"
                  >
                    Implementation: Drivetrain
                    <Link className="ml-2" size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="#final-assembly"
                    className="text-white-600 hover:text-purple-300 transition-colors duration-300 inline-flex items-center text-lg"
                  >
                    Final Assembly
                    <Link className="ml-2" size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="#lessons-learned"
                    className="text-white-600 hover:text-purple-300 transition-colors duration-300 inline-flex items-center text-lg"
                  >
                    Lessons Learned
                    <Link className="ml-2" size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="#downloads"
                    className="text-white-600 hover:text-purple-300 transition-colors duration-300 inline-flex items-center text-lg"
                  >
                    Downloadables
                    <Link className="ml-2" size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="col-span-2 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="relative w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
                <CloudinaryImage
                  src="shenzhen1_x7oajg-min_ul9mcv"
                  alt="Futuristic Shenzhen skyline"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
                <CloudinaryImage
                  src="shenzhen2_idz6to-min_qqxska"
                  alt="A futuristic looking mall in Shenzhen"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-1 bg-[#444] border-0" />

      <section id="problem-and-ideas" className="my-8">
        <h2 className="text-3xl font-bold mb-6">Problem and Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">The Challenge:</h3>
            <p className="text-gray-200 mb-4">
              Stairs present a significant mobility challenge for traditional
              room-cleaning robots (ex. Roombas). At the same time, robots with
              track drives often lack the manueverability required of a cleaning
              robot required for efficient stair navigation. Therefore, the
              problem my group tackled was creating a system by which cleaning
              robots can safely and effectively climb stairs.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-6">Our Solution</h3>
            <p className="text-gray-200">
              Our design combined three systems to face the challenge:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200 mt-4">
              <li>A scissor lift mechanism for vertical adjustment</li>
              <li>Linear rails to extend over staircase steps</li>
              <li>
                Mecanum wheels for high manueverability and horizontal movement
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="init_idea_tbtcpx-min_l2wc8p"
                alt="Initial concept sketches and ideation"
                width={800}
                height={600}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-gray-400 text-center">
              Early concept sketches demonstrating our approach to stair
              traversal
            </p>
          </div>
        </div>
      </section>

      <hr className="h-1 bg-[#444] border-0" />

      <section id="technical-details" className="space-y-12 my-8">
        <h2 className="text-3xl font-bold mb-6">Implementation</h2>

        <div id="scissor-lift-system" className="grid grid-cols-6 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-2">Scissor Lift System</h3>
            <p className="text-gray-200">
              The scissor lift mechanism provides vertical adjustment
              capabilities, allowing the robot to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200 mt-4">
              <li>Maintain a level orientation while climbing</li>
              <li>Adjust its center of gravity for optimal stability</li>
              <li>Navigate varying stair heights up to 15cm</li>
            </ul>
          </div>
          <div className="col-span-4 grid grid-cols-3 gap-4">
            <div className="relative w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="stronger_lift_printed_gd5pmi"
                alt="Scissor lift mechanism closeup"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="">
              {isMounted ? (
                <video
                  src="/videos/prjs/stair_bot/testing_lift.mp4"
                  className="w-full h-64 object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div className="w-full h-64 bg-gray-800 rounded-lg" />
              )}
            </div>
            <div className="relative w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="CAD_lift_af7sbe"
                alt="Scissor lift mechanism CAD"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div id="linear-rail-system" className="grid grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="rail_systemCAD_l7i6ll"
                alt="Linear rail system CAD"
                width={400}
                height={300}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="relative w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="rail_system_completed_vqzsyh-min_bnwenf"
                alt="Linear rail system assembled"
                width={400}
                height={300}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Linear Rail System</h3>
            <p className="text-gray-200">
              The linear rail system allows the robot to get itself over the
              next staircase:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200 mt-4">
              <li>Metal lead screw and flange nut for smooth movement</li>
              <li>Driven by high power stepper motor</li>
              <li>Ball bearing carriages for reduced friction</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div id="drivetrain" className="grid grid-cols-6 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-2">Drivetrain</h3>
            <p className="text-gray-200">The drivetrain features:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200 mt-4">
              <li>
                4 Mecanum wheels for horizontal strafing on stairs if needed
              </li>
              <li>
                Independent motor control for precise turning during
                teleoperation
              </li>
            </ul>
          </div>
          <div className="col-span-4 grid grid-cols-3 gap-4">
            <div className="relative w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="drivetrain_CAD_zfpgr2"
                alt="Drivetrain mechanism CAD"
                width={400}
                height={300}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="relative w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="putting_tg3_six4xr-min_hdpnay"
                alt="Assembling the drivetrain"
                width={400}
                height={300}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="relative w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="motor_drivers1_f1fwdu-min_h0e8zu"
                alt="Motor driver wiring"
                width={400}
                height={300}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="h-1 bg-[#444] border-0" />

      <section id="final-assembly" className="my-8">
        <h2 className="text-3xl font-bold mb-6">Final Assembly</h2>

        {/* Text content */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Assembly Process</h3>
          <p className="text-gray-200 mb-4">
            The final assembly process involved 3D printing the mdoeled parts
            and assembling them using the makersapce equipment
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>
              Integration of the 3 mechanical subsystems described in the
              Implementation section
            </li>
            <li>
              Wiring and electronics installation including an Arduino Nano
              microcontroller as well as sensors
            </li>
            <li>Software implementation and using sensor data</li>
          </ul>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="relative w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="completed_chassis_uti0xi"
                alt="CAD design of robot"
                width={800}
                height={600}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="text-sm text-gray-400 text-center">
              Final CAD design of the robot
            </p>
          </div>

          <div>
            {isMounted ? (
              <video
                src="/videos/prjs/stair_bot/testing_bot.mp4"
                className="w-full h-64 object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div className="w-full h-64 bg-gray-800 rounded-lg" />
            )}
            <p className="text-sm text-gray-400 text-center mt-2">
              Testing the robot
            </p>
          </div>

          <div className="space-y-2">
            <div className="relative w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
              <CloudinaryImage
                src="putting_together_oaibuk-min_o00cai"
                alt="Final assembled robot"
                width={800}
                height={600}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="text-sm text-gray-400 text-center">
              The completed stair climbing robot
            </p>
          </div>
        </div>
      </section>

      <hr className="h-1 bg-[#444] border-0" />

      <section
        id="lessons-learned"
        className="text-white my-8 grid grid-cols-2 gap-8"
      >
        <div>
          <h2 className="text-3xl font-bold pb-4">Lessons Learned</h2>
          <ul className="space-y-4 text-lg leading-relaxed list-disc pl-6">
            <li>
              I&apos;m a little unhappy with the final results, as the robot was not
              completely autonomous and had trouble driving
            </li>
            <li>
              Our team did not have enough time to test on an actual stair
            </li>
            <li>
              Given more time and resources, I would remodel the scissor lift
              mechanism to be quicker
            </li>
            <li>
              I would also try to integrate more sensors as well as stronger
              motors to move the mechanisms more quickly, including limit switch
              or motor encoder integration
            </li>
          </ul>
        </div>
        <div className="relative w-ull h-64 bg-gray-700 rounded-lg overflow-hidden mt-10">
          <CloudinaryImage
            src="putting_tg_2_m28i3z-min_ff53ow"
            alt="Final assembled robot"
            width={800}
            height={600}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </section>

      <hr className="h-1 bg-[#444] border-0" />

      <section id="downloads" className="text-white my-8">
        <div className="bg-gray-800 text-white p-6 rounded-lg">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Downloads</h2>
            <div className="grid grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="space-y-4">
                <a
                  href="/downloadables/stairbot/arm fixing narrower + lower v11.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Narrow Arm Fix v11</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Lower arm fixing bracket (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/arm fixing wider v5.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Wide Arm Fix v5</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Wide arm fixing bracket (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/big screw v4.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Main Screw v4</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Lead screw component (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/carriage v3.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Carriage v3</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Linear rail carriage (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/chassis v4.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Chassis v4</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Main chassis base (STL)
                  </div>
                </a>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <a
                  href="/downloadables/stairbot/lead flange nut v1.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Lead Nut v1</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Flange nut housing (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/lead screw to motor adapter v1.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Motor Adapter v1</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Lead screw coupler (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/motor mount v1.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Motor Mount v1</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    NEMA17 motor mount (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/narrower arm fixing lower v2.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Lower Arm Fix v2</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Narrow lower mount (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/NEMA17_17HS19-2004S1_Stepperonline v1.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">NEMA17 Model</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Stepper motor model (STL)
                  </div>
                </a>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <a
                  href="/downloadables/stairbot/new arm v6.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Robot Arm v6</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Updated arm design (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/new main frame v13.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Main Frame v13</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Core structure frame (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/rod holder v1.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Rod Holder v1</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Guide rod mount (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/screw bearing holder v1.stl"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Bearing Mount v1</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Lead screw bearing (STL)
                  </div>
                </a>

                <a
                  href="/downloadables/stairbot/stair_bot.zip"
                  className="flex flex-col gap-2 text-white hover:text-purple-300 transition-colors duration-300 bg-gray-700 p-4 rounded-lg"
                  download
                >
                  <div className="flex items-center gap-2">
                    <FileDown size={24} />
                    <div className="font-medium">Complete Package</div>
                  </div>
                  <div className="text-sm text-gray-300">
                    All files (ZIP)
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StairBot;
