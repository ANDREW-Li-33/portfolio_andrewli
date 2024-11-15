export default function Footer(): JSX.Element {
    return (
      <footer className="p-4 bg-gray-800 text-white mt-10">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} My Portfolio
        </div>
      </footer>
    );
  }
  