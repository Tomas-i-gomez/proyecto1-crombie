import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
      
      <div className="bg-blue-900 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide">
        <Link href="/"><Image width={100} height={100} src="/images/logo.jpeg" alt="logo"></Image></Link>
      </div>

      {/* Menu for larger screens */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-400 transition duration-300">Home</Link>
        <Link href="/categories" className="hover:text-gray-400 transition duration-300">Categorías</Link>
        <Link href="/Login" className="hover:text-gray-400 transition duration-300">Login</Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          className="text-gray-400 hover:text-white focus:outline-none"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu (hidden by default) */}
    <div className="md:hidden">
      <div className="space-y-2 py-2">
        <Link href="/" className="block px-4 py-2 text-sm hover:bg-gray-800 rounded">Home</Link>
        <Link href="/categories" className="block px-4 py-2 text-sm hover:bg-gray-800 rounded">Categorías</Link>
        <Link href="/login" className="block px-4 py-2 text-sm hover:bg-gray-800 rounded">Login</Link>
      </div>
    </div>
  </nav>
</div>

      
      <div className="flex-grow">
      {children}
      </div>
      <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* Grid para dividir el contenido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección 1: Logo y descripción */}
        <div>
          <h3 className="text-xl font-semibold"><Image width={100} height={100} src="/images/logo.jpeg" alt="logo"></Image></h3>
          <p className="mt-4 text-gray-400">
            Proporcionamos productos y servicios de alta calidad. ¡Gracias por visitarnos!
          </p>
        </div>

      {/* Sección 2: Enlaces rápidos */}
      <div>
        <h4 className="text-lg font-medium mb-4">Enlaces Rápidos</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="hover:text-gray-400 transition duration-300">Inicio</Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-gray-400 transition duration-300">Categorías</Link>
          </li>
          <li>
            <Link href="/Login" className="hover:text-gray-400 transition duration-300">Iniciar Sesion</Link>
          </li>
        </ul>
      </div>

      {/* Sección 3: Redes sociales */}
      <div>
        <h4 className="text-lg font-medium mb-4">Síguenos</h4>
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.293h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.789 4.659-4.789 1.325 0 2.463.099 2.796.143v3.245h-1.918c-1.504 0-1.796.715-1.796 1.763v2.309h3.591l-.467 3.622h-3.124v9.293h6.127c.733 0 1.325-.592 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 0h-7.5l-4.8 8.5L6.4 0H0l9.2 12L0 24h7.4l5.6-9.3L18.8 24h5.8l-9.2-12L23.5 0z" />
            </svg>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.259.058 2.112.268 2.608.441a5.42 5.42 0 011.95 1.157 5.42 5.42 0 011.157 1.95c.173.496.383 1.349.441 2.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.058 1.259-.268 2.112-.441 2.608a5.42 5.42 0 01-1.157 1.95 5.42 5.42 0 01-1.95 1.157c-.496.173-1.349.383-2.608.441-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.259-.058-2.112-.268-2.608-.441a5.42 5.42 0 01-1.95-1.157 5.42 5.42 0 01-1.157-1.95c-.173-.496-.383-1.349-.441-2.608-.058-1.265-.07-1.645-.07-4.85s.012-3.667.07-4.947c.058-1.272.273-2.147.58-2.91a7.604 7.604 0 011.728-2.678A7.604 7.604 0 017.75 2c.763-.307 1.638-.522 2.91-.58 1.281-.058 1.691-.07 4.947-.07z"/>
          </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Footer final */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      © 2024 MyBrand. Todos los derechos reservados.
    </div>
  </div>
</footer>

      </body>
    </html>
  );
}
