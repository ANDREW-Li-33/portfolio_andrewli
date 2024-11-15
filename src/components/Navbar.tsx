export default function Navbar(): JSX.Element {
    return (
      <nav className="p-4 bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-lg font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  