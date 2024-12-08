// pages/projects.tsx or your ProjectsPage file
import Link from 'next/link';

export default function ProjectsPage(): JSX.Element {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Short-Term Projects Box */}
        <div className="p-4 border-2 rounded-lg shadow-lg flex flex-col items-center text-center">
          <video
            className="w-full rounded-lg mb-4"
            src="/videos/short-term.mp4"
            autoPlay
            loop
            muted
          />
          <h2 className="text-xl font-semibold mb-2">Short-Term Projects</h2>
          <p className="mb-4">
            Explore projects that took one week or less!
          </p>
          <Link
            href="/projects/short-term"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Short-Term Projects
          </Link>
        </div>

        {/* Long-Term Projects Box */}
        <div className="p-4 border-2 rounded-lg shadow-lg flex flex-col items-center text-center">
          <video
            className="w-full rounded-lg mb-4"
            src="/videos/long-term.mp4"
            autoPlay
            loop
            muted
          />
          <h2 className="text-xl font-semibold mb-2">Long-Term Projects</h2>
          <p className="mb-4">
            Explore projects that took several weeks or longer!
          </p>
          <Link
            href="/projects/long-term"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            View Long-Term Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
