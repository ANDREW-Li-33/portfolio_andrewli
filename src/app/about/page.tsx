'use client'

import { Link as LinkIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

const AboutPage = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-start space-x-8 mt-3">
        <div className="flex-1 space-y-6">
          {/* About Me */}
          <section id="about-me">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg">
              Hi, I&apos;m <span className="font-semibold">Andrew Li</span>, a machine learning / robotics enthusiast and CS student at Georgia Tech from Long Island, New York! <br/>
              In my free time I enjoy playing basketball (big Spurs fan), working out, and playing the piano!
            </p>
          </section>
          
          {/* Photos Section */}
          <section id="photos">
            <div className="flex space-x-4 h-80">
              <img src="/images/self_img1.JPG" alt="Me with Georgia Tech's mascot, Buzz" className="w-1/2 h-full object-cover" />
              <img src="/images/self_img2.png" alt="Me standing on a mountain in Hong Kong" className="w-1/2 h-full object-cover" />
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

<section id="vex-robotics">
  <div className="grid grid-cols-2 gap-4">

    {/* text column */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Vex Robotics Competition</h2>
      
      <div className="space-y-4">
        <p className="text-lg">
          Starting our freshman year of high school, my two best friends and I formed a team to compete in the Vex Robotics Competition, a robotics competition in which teams face off in 2v2 matches to complete scoring objectives.
        </p>
        
        <p className="text-lg">
          Struggling to compete against the experienced veterans, we eventually left our organization and formed our own team, 55645X Arsenal. It was in my teammate&apos;s basement where we spent our days after school, spending countless hours solving problem after problem. As we put the work in, our efforts started to show in our results.
        </p>

        <img 
          src="/images/about_vex/vaughn.png" 
          alt="Team with awards" 
          className="w-full h-96 object-cover rounded-lg"
        />

        <p className="text-lg font-semibold">Here&apos;s a recap of what we accomplished:</p>
        
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>New York State Champions</li>
          <li>6x Tournament Champions</li>
          <li>5x Robot Skills Champions</li>
          <li>6 Judged Awards</li>
          <li>3x World Championship Qualification</li>
          <li>High ranking in national events in Wisconsin, California, Massachusetts, and the international World Championship</li>
        </ul>
        
      </div>
      <div className="mt-5">

      </div>
    </div>

    {/* image / links column */}
    <div>
      {/* Social Links */}
      <div className="flex items-center space-x-4 mt-6">
        <a 
          href="https://www.youtube.com/channel/UCqrfxe9OyJTMkMEitrIjS9A" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 text-lg hover:underline"
        >
          <LinkIcon size={20} />
          <span>Team YouTube Channel</span>
        </a>
        <a 
          href="https://www.instagram.com/55645x/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 text-lg hover:underline"
        >
          <LinkIcon size={20} />
          <span>Team Instagram</span>
        </a>
      </div>

      {/* images */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        <div className="space-y-2">
          <img 
            src="/images/about_vex/stairs.png" 
            alt="Competition robot at States" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Tourney Champs, Skills, and Design Awards!</p>
        </div>

        <div className="space-y-2">
          <img 
            src="/images/about_vex/states.png" 
            alt="Team at World Championships" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">55645X becomes State Champions</p>
        </div>

        <div className="space-y-2">
          <img 
            src="/images/about_vex/fdale.png" 
            alt="Robot skills run" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Winning the Farmingdale Qualifier!</p>
        </div>

        <div className="space-y-2">
          <img 
            src="/images/about_vex/overclock.png" 
            alt="Tournament victory" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Winning the Wildcats Qualifier!</p>
        </div>

        <div className="space-y-2">
          <img 
            src="/images/about_vex/states2.png" 
            alt="Robot CAD" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Posing with the state champ banners</p>
        </div>

        <div className="space-y-2">
          <img 
            src="/images/about_vex/wildcats.png" 
            alt="Team with awards" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Another win at the Malverne Qualifier!</p>
        </div>
      </div>
    </div>

  </div>
</section>


      <hr className="h-1 bg-[#444] border-0" />

      <section id="boston-university">
        <div className='grid grid-cols-2 gap-4'>

          {/* image column */}
          <div className='grid grid-cols-2 gap-4'>
            <div className="space-y-2">
              <img 
                src="/images/about_bu/bu_1.jpg" 
                alt="Robot skills run" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">My pick-and-place machine grabbing a penny!</p>
            </div>

            
            <div className="space-y-2">
              <img 
                src="/images/about_bu/bu_5.jpg" 
                alt="Tournament victory" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">Force testing the SBA</p>
            </div>

            
            <div className="space-y-2">
              <img 
                src="/images/about_bu/bu_4.jpg" 
                alt="Robot CAD" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">Deflated SBA</p>
            </div>

            
            <div className="space-y-2">
              <img 
                src="/images/about_bu/bu_2.jpg" 
                alt="Team with awards" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">Inflated SBA</p>
            </div>
          </div>

          {/* text column */}
          <div> 
            <h2 className="text-2xl font-bold mb-4">Boston University Morphable Biorobotics Lab</h2>
            <div className="space-y-4">
              <p className="text-lg">
                During my junior year of high school, I spent 6 weeks discovering the world of soft robotics, meeting new friends, and exploring the avenues of Boston.
                This was all part of the Boston University RISE (Research In Science and Engineering) summer program, in which students are immersed in hands-on projects and given the opportunity to learn from leading experts.
              </p>
              
              <p className="text-lg">
                For 6 weeks, I worked in the Morphable Biorobotics lab under PI Tommaso Ranzani and PhD student Jacob Rogatinsky, investigating applications of SBAs (Stacked Balloon Actuators) in minimally invasive heart surgery.
              </p>

              <p className="text-lg font-semibold">This work involved:</p>
              
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Fabricating SBAs using a laser cutter, heat press, and a Teflon layering methodology</li>
                <li>Conducting strength testing and fabrication on SBAs</li>
                <li>Designing, fabricating, and programming a pick-and-place machine featuring an SBA end effector</li>
                <li>Programming SBA control using a Wii nunchuck</li>
              </ul>

              <p className="text-lg">
                Along the way, I made like-minded and talented friends that I will always remember, and I will always look back at my time in BU fondly.
              </p>
            </div>
          </div>

        </div>
      </section>

      <hr className="h-1 bg-[#444] border-0"/>



      <section id="robowrestling">
        <div className='grid grid-cols-2 gap-4'>

          {/* text column */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Georgia Tech Robowrestling</h2>
            <div className="space-y-4">
              <p className="text-lg">
                In my freshman and sophomore year of college, I joined GT Robowrestling, Georgia Tech&apos;s robot sumo team.
                Meeting twice weekly at the Student Competition Center, we worked on our robots for the 500 gram and 3 kilogram weight classes to compete against other robots from around the world.
              </p>

              <p className="text-lg">
                These robots eventually competed in the Robogames competition and at an in-house competition, in which my 500g subteam won!
              </p>

              <p className="text-lg font-semibold">My contributions included:</p>

              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Developing C++ firmware on the Arduino Nano and Teensy microcontrollers for real-time sensor integration and motion control</li>
                <li>Coordinating with the electrical and mechanical teams to optimize performance under design constraints</li>
                <li>Providing software onboarding to first-year 500g teams</li>
                <li>Operation of waterjet and mills to manufacture steel / aluminum baseplates</li>
              </ul>
            </div>
          </div>

          {/* image column */}
          <div className='grid grid-cols-2 gap-4'>
            <div className="space-y-2">
              <img 
                src="/images/about_rw/robo_1.png" 
                alt="Competition robot at States" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">Our 2023-2024 500g bots!</p>
            </div>

            <div className="space-y-2">
              <img 
                src="/images/about_rw/robo_2.png" 
                alt="Team at World Championships" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">On the way to RoboGames</p>
            </div>

            <div className="space-y-2">
              <img 
                src="/images/about_rw/robo_3.png" 
                alt="Robot skills run" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">At Robogames!</p>
            </div>

            <div className="space-y-2">
              {isMounted ? (
                <video
                  src="/videos/about/robosumo_testing.mp4"
                  className="w-full h-64 object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
              ) : (
                <div className="w-full h-64 bg-gray-800 rounded-lg" />
              )}
              <p className="text-sm text-gray-400 text-center">Testing the 500g Frankii</p>
            </div>

          </div>

        </div>

      </section>


      <hr className="h-1 bg-[#444] border-0"/>

      <section id="invention-studio">
        <div className='grid grid-cols-2 gap-4'>

          {/* image column */}
          <div className='grid grid-cols-2 gap-4'>
            <div className="space-y-2">
              <img 
                src="/images/about_is/is_1.jpg" 
                alt="Robot skills run" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">The Invention Studio print farm!</p>
            </div>

            <div className="space-y-2">
              <img 
                src="/images/about_is/is_2.jpg" 
                alt="Tournament victory" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">A lightbox made for my friend&apos;s birthday</p>
            </div>

            <div className="space-y-2">
              {isMounted ? (
                <video
                  src="/videos/about/is_3.mp4"
                  className="w-full h-64 object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
              ) : (
                <div className="w-full h-64 bg-gray-800 rounded-lg" />
              )}
              <p className="text-sm text-gray-400 text-center">Trying out the laser cutter!</p>
            </div>

            <div className="space-y-2">
              <img 
                src="/images/about_is/is_4.jpg" 
                alt="Team with awards" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center">The Studio&apos;s bike shop</p>
            </div>

          </div>

          {/* text column */}
          <div> 
            <h2 className="text-2xl font-bold mb-4">Flowers Invention Studio</h2>
            <div className="space-y-4">
              <p className="text-lg">
                The moment I found out about Georgia Tech&apos;s renowned student-run makerspace I knew that I wanted to get myself involved. 
                The Invention Studio at Georgia Tech allows students to use hundreds of thousands of dollars worth of machinery, including CNC mills, industrial waterjets, laser cutters, 3D printers, and more!
              </p>

              <p className="text-lg">
                From tablesaws to sewing machines, I went through numerous trainings and testings on various equipment during my freshman year.
                After finally becoming a Provisional PI (Prototyping Instructor) at the Invention Studio, I began staffing the space.
              </p>

              <p className="text-lg">
                My responsibilities included supervising general users 3 hours per week to ensure safe use of equipment, as well as administering machine trainings to those also looking to staff the space. 
                In exchange, I gained 24/7 access to the Invention Studio!
              </p>
              
              <p className="text-lg">
                I then worked my way up to becoming a Full PI, meaning I could also administer testing and training to those trying to become provisional PIs!
              </p>

              <p className="text-lg">
                As a computer science major, being at the Invention Studio allowed me to see a different side of Georgia Tech, giving me a more complete experience during my time in college. 
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
    </>
  )
}

export default AboutPage