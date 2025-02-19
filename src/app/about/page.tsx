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
              Hi, I’m <span className="font-semibold">Andrew Li</span>, a machine learning / robotics enthusiast and CS student at Georgia Tech from Long Island, New York! <br/>
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

{/* Vex Robotics */}
<section id="vex-robotics">
  <div className="grid grid-cols-2 gap-4">
    <div>
      <h2 className="text-2xl font-bold mb-4">Vex Robotics Competition</h2>
      
      <div className="space-y-4">
        <p className="text-lg">
          Starting our freshman year of high school, my two best friends and I formed a team to compete in the Vex Robotics Competition, a robotics competition in which teams face off in 2v2 matches to complete scoring objectives.
        </p>
        
        <p className="text-lg">
          Struggling to compete against the experienced veterans, we eventually left our organization and formed our own team, 55645X Arsenal. It was in my teammate's basement where we spent our days after school, spending countless hours solving problem after problem. As we put the work in, our efforts started to show in our results.
        </p>

        <p className="text-lg font-semibold">Here's a recap of what we accomplished:</p>
        
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>New York State Champions</li>
          <li>6x Tournament Champions</li>
          <li>5x Robot Skills Champions</li>
          <li>6 Judged Awards</li>
          <li>3x World Championship Qualification</li>
          <li>High ranking in national events in Wisconsin, California, and Massachusetts</li>
          <li>High ranking in international World Championship</li>
        </ul>
        
      </div>
      <div className="mt-5">
        <img 
          src="/images/about_vex/vaughn.png" 
          alt="Team with awards" 
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
    </div>

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

      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Image 1 */}
        <div className="space-y-2">
          <img 
            src="/images/about_vex/stairs.png" 
            alt="Competition robot at States" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Tourney Champs, Skills, and Design Awards!</p>
        </div>

        {/* Image 2 */}
        <div className="space-y-2">
          <img 
            src="/images/about_vex/states.png" 
            alt="Team at World Championships" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">55645X becomes State Champions</p>
        </div>

        {/* Image 3 */}
        <div className="space-y-2">
          <img 
            src="/images/about_vex/fdale.png" 
            alt="Robot skills run" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Winning the Farmingdale Qualifier!</p>
        </div>

        {/* Image 4 */}
        <div className="space-y-2">
          <img 
            src="/images/about_vex/overclock.png" 
            alt="Tournament victory" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Winning the Wildcats Qualifier!</p>
        </div>

        {/* Image 6 */}
        <div className="space-y-2">
          <img 
            src="/images/about_vex/states2.png" 
            alt="Robot CAD" 
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-400 text-center">Posing with the state champ banners</p>
        </div>

        {/* Image 7 */}
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