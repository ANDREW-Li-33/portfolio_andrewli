import React from 'react';
import {Construction} from 'lucide-react'

export default function AboutPage(): JSX.Element {
  return (
    <div className="bg-gray-800 rounded-lg mx-auto p-6 text-center mt-20 max-w-fit">
      <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2 text-purple-300">
        Page Under Maintenance!
        <Construction size={36}/>
      </h1>
      <p className="text-lg">
        My about page is currently being updated. Expected to come back up <span className='text-purple-300 font-bold'>February 18, 2025</span>.
      </p>
    </div>
  );
}