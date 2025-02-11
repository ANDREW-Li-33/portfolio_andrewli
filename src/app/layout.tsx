// app/layout.tsx or your RootLayout file
import type { Metadata } from "next";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Li",
  description: "Andrew Li's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
