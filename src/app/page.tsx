export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/landing_page_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
         Welcome to my portfolio
        </h1>
        <a
          href="/projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors"
        >
          View my projects!
        </a>
      </div>
    </div>
  );
}
