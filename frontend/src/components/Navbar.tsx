"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full flex justify-center py-4 transition-all duration-300 ${
        navScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl w-full flex items-center justify-between px-6">
        <div className="relative">
          <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-gray-300 via-gray-400 to-white text-transparent bg-clip-text">
            twyt
          </span>

          <span className="absolute -bottom-1 left-0 w-full h-px bg-white/40"></span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["features", "pricing", "about"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-white text-sm tracking-wider font-medium relative group transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 right-0 bottom-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </nav>

        <div className="relative">
          <button className="py-2 px-4 text-sm text-white bg-black border border-gray-800 rounded-md relative overflow-hidden group transition-all duration-300">
            <span className="relative z-10">Sign In</span>
            <span className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-70">
              <span className="absolute bg-white nav-button-line"></span>
            </span>
          </button>

          <button className="ml-4 md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
