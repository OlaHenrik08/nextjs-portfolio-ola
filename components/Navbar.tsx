"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#2a2a2a]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="https://github.com/OlaHenrik08" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-[#c8a96e] rounded-sm flex items-center justify-center group-hover:bg-[#c8a96e] transition-colors duration-300">
            <span className="text-[#c8a96e] text-xs font-bold group-hover:text-[#0a0a0a] transition-colors duration-300">
              OH
            </span>
          </div>
          <span className="text-sm font-medium text-[#e8e6e1] tracking-wide hidden sm:block">
            Ola Henrik
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-[#7a7872] hover:text-[#e8e6e1] transition-colors duration-300 group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-[#c8a96e] transition-all duration-500 ease-out" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-[#e8e6e1] transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#e8e6e1] transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#e8e6e1] transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display text-[#e8e6e1] hover:text-[#c8a96e] transition-colors duration-300"
              style={{
                transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transition: `all 400ms ease ${i * 80}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
