// components/Footer.tsx
export default function Footer(): JSX.Element {
  return (
    <footer className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Andrew Li
      </div>
    </footer>
  );
}
