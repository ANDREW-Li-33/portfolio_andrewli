// pages/index.tsx or app/page.tsx depending on your Next.js setup
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Video Section */}
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="videos/short-term.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Optional Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Welcome to My Portfolio
          </h1>
        </div>
      </div>

      {/* Optional Additional Content */}
      {/* If you want to add more content below the video, uncomment the section below */}
      {/*
      <main className="flex-grow container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          [Your content here...]
        </p>
      </main>
      */}
    </div>
  );
}
