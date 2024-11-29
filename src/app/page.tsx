export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Fullscreen Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/short-term.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to My Portfolio
        </h1>
      </div>
    </div>
  );
}
