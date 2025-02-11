import React from 'react';
import { Link } from 'lucide-react';

const PrinterUpgrades = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 py-6 bg-black text-white min-h-screen mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold mb-6">Ender 3 Printer Upgrades!</h1>
            <ul className="space-y-4 text-lg leading-relaxed list-disc pl-6">
              <li>After over 6 years of owning an Ender 3 since it released in 2018, my printer has been pushed to its limits. </li>
              <li>Coming home for winter break, I decided it was time to give my Ender 3 the upgrades it deserved</li>
              <li>What was originally intended to be an hour-long fix for my hotend quickly cascaded into a multi-day process of revamping the entire printer!</li>
              <li>View a X thread of these upgrades <a href="https://x.com/li_03_li_03/status/1875605659796042214" target='_blank' className='underline hover:text-purple-300 transition-colors duration-300'>here</a></li>
            </ul>
          </header>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Upgrades</h2>
            
            <div className="upgrade-item relative">
              <div>
                <h3 className="text-xl font-semibold mb-2">Magnetic Bed</h3>
                <p className="text-gray-200">
                  This $12 upgrade saved me lots of time scraping prints off a rigid bed. Instead, I can simply snap off the magnetic bed, and bend the flexible plate to easily remove the printed part! 
                  This new bed also has noticeably better adhesion than the stock one I had been using for over 6 years!
                </p>
              </div>
              <div className="absolute right-0 top-full mt-4 w-full border-t border-gray-700" />
            </div>

            <div className="upgrade-item relative">
              <div>
                <h3 className="text-xl font-semibold mb-2">Metal Extruder</h3>
                <p className="text-gray-200">
                  After my stock plastic extruder snapped, I had to leave to college before I was able to fix the extruder. 
                  This new metal extruder is both satisfying to look at and guarantees that the extruder will never snap again!
                  With much more pressure clamping on the filament, I find that the feed rate is much more consistent!
                </p>
              </div>
              <div className="absolute right-0 top-full mt-4 w-full border-t border-gray-700" />
            </div>

            <div className="upgrade-item relative">
              <div>
                <h3 className="text-xl font-semibold mb-2">New Hotend</h3>
                <p className="text-gray-200">
                  With a new hotend, the heating block is a larger rectangle of metal and has a silicone insulation cover. 
                  An additional bonus is the several new nozzles the package comes with! 
                  With the silicone insulation, I found that heating and cooling time significantly decreased and temperatures remained much more stable!
                </p>
              </div>
              <div className="absolute right-0 top-full mt-4 w-full border-t border-gray-700" />
            </div>

            <div className="upgrade-item relative">
              <div>
                <h3 className="text-xl font-semibold mb-2">Auto Bed-Leveling</h3>
                <p className="text-gray-200">
                  First buying the CR touch, I was unaware that the archaic 2018 stock Ender 3 mainboard did not support auto bed leveling. 
                  Even after buying a new mainboard, finding firmware that would work with the original Ender 3 mainboard and CR touch combination was difficult.
                  In the end, through hours of digging, the CR-touch began to function, and the automatic bed leveling was well worth it!
                </p>
              </div>
              <div className="absolute right-0 top-full mt-4 w-full border-t border-gray-700" />
            </div>

            <div className="upgrade-item relative">
              <div>
                <h3 className="text-xl font-semibold mb-2">New Mainboard Upgrade</h3>
                <p className="text-gray-200">
                  The final step in the winter break upgrade journey! I installed a new mainboard, mapping wires on the old mainboard to the new one. 
                  Some challenges along the way was the lack of jst connector tools, lack of documentation and compatible firmware with my setup, and missing pins.
                  However, with this upgrade, my stepper motors are now nearly silent rather than creating a constant screech.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Installed Upgrades:</h2>
            <div className="space-y-8">
              <div className="space-y-4">
                <a href="https://www.amazon.com/dp/B07X3WBNPX" 
                   className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <Link size={24} />
                  Magnetic Bed
                </a>
                <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
                  <img 
                  src="/images/printer/bed.png" 
                  alt="Magnetic Bed" 
                  className="w-full h-full object-cover"/>
                </div>
              </div>

              <div className="space-y-4">
                <a href="https://www.amazon.com/dp/B07WHYBVJ5" 
                   className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300" 
                   target="_blank"
                   rel="noopener noreferrer">
                  <Link size={24} />
                  Metal Extruder Module
                </a>
                <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
                  <img src="/images/printer/metal_extruder_installed.png" alt="Metal Extruder" className="w-full h-full object-cover"/>
                </div>
              </div>

              <div className="space-y-4">
                <a href="https://www.amazon.com/dp/B082XXRT78" 
                   className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300" 
                   target="_blank"
                   rel="noopener noreferrer">
                  <Link size={24} />
                  Hotend with Silicone Cover
                </a>
                <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
                  <img src="/images/printer/hotend_replacement_1.jpeg" alt="New Hotend" className="w-full h-full object-cover"/>
                </div>
              </div>

              <div className="space-y-4">
                <a href="https://www.amazon.com/dp/B0995H2X92" 
                   className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300" 
                   target="_blank"
                   rel="noopener noreferrer">
                  <Link size={24} />
                  Auto Bed-Leveling Kit
                </a>
                <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
                  <img src="/images/printer/CRTouch_1.png" alt="Auto Bed-Leveling" className="w-full h-full object-cover"/>
                </div>
              </div>

              <div className="space-y-4">
                <a href="https://www.amazon.com/dp/B09LC34SCK" 
                   className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300" 
                   target="_blank"
                   rel="noopener noreferrer">
                  <Link size={24} />
                  SKR Mini Mainboard
                </a>
                <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
                  <img src="/images/printer/SKR_mini_installed.png" alt="New Mainboard" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>

      <hr className='mt-7'/>
      <div className='text-white mt-5'>
          <h2 className='text-3xl font-bold pb-4'>Final Results</h2>
          Although there&apos;s room for improvement, I&apos;m really happy with the results! Below are some of the final results in action.
          <div className="flex items-center gap-10 my-5">
            <img src="/images/printer/final_cat.jpeg" className="w-80 h-64 object-cover" alt="final printer upgrade result cat 3d print benchmark" />
            <video src="/images/printer/final_results.mp4" className="w-80 h-64 object-cover" autoPlay muted loop playsInline/>
            <video src="/images/printer/metal extruder.mp4" className="w-80 h-64 object-cover" muted autoPlay loop playsInline></video>

          </div>
        </div>
      <hr />
    </div>
  );
};

export default PrinterUpgrades;