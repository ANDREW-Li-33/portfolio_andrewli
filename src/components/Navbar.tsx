import { Bot } from 'lucide-react';

export default function Navbar(): JSX.Element {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <Bot size={24} />
          Andrew Li
        </h1>
        <ul className="flex space-x-4 font-bold">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}