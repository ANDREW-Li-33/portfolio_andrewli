import React from 'react';
import { FileDown } from 'lucide-react';

const BedframeHolder = () => {
  return (
    <div className="container mx-auto px-16 py-6 bg-black text-white mt-12 max-w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-6">Bedframe Phone Holder</h1>
          <ul className="mb-8 text-lg leading-relaxed list-disc pl-6 space-y-4">
            <li>Traditional phone holders often require modification to furniture or don't work well with bed frames, leading to unstable mounting solutions.</li>
            <li>This custom-designed phone holder clamps securely to bedframe posts without any permanent modifications, providing a stable viewing experience.</li>
            <li>The design features adjustable positioning and can accommodate various phone sizes while maintaining a strong grip on the bedframe.</li>
          </ul>
          
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <ul className="mb-8 space-y-2 list-disc pl-6 text-lg">
            <li>No-modification attachment system that works with standard bedframe posts</li>
            <li>Adjustable viewing angles for optimal screen positioning</li>
            <li>Universal phone compatibility with expandable grip mechanism</li>
            <li>Sturdy construction using durable materials for long-term reliability</li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="flex items-start justify-center">
            <iframe 
              className="rounded-lg w-full aspect-video"
              src="https://www.youtube.com/embed/qXanApQC_pk?si=ikqRSGXULKCtzrXx" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
          
          <div className="bg-gray-800 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Download STL Files:</h3>
            <div className="space-y-2">
              <a 
                href="/downloadables/bedframe_phone_holder_only.stl" 
                className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300"
                download
              >
                <FileDown size={24} />
                phone holder model (STL)
              </a>
              <a 
                href="/downloadables/bedframe_phone_holder_example.stl" 
                className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300"
                download
              >
                <FileDown size={24} />
                example application model (STL)
              </a>
              <a 
                href="/downloadables/bedframe_phone_holder.zip" 
                className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300 mt-4"
                download
              >
                <FileDown size={24} />
                download both files (ZIP)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedframeHolder;