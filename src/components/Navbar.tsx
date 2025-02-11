import { Bot, Link } from 'lucide-react';

export default function Navbar(): JSX.Element {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-lg font-bold flex items-center gap-2">
            <Bot size={24} />
            andrewli.info
          </h1>
        </Link>
        <ul className="flex space-x-4 font-bold">
          <li>
            <Link
              href="/"
              className="px-3 py-2 rounded hover:bg-purple-300 hover:text-gray-800 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="/projects"
              className="px-3 py-2 rounded hover:bg-purple-300 hover:text-gray-800 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="px-3 py-2 rounded hover:bg-purple-300 hover:text-gray-800 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="px-3 py-2 rounded hover:bg-purple-300 hover:text-gray-800 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
