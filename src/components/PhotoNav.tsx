"use client";
import Link from "next/link";
import { useState } from "react";

export default function PhotoNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-amber-900/20 shadow-lg" role="navigation" aria-label="Photography">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Left: Photography Brand */}
        <div className="flex items-center gap-4">
          <Link 
            href="/photography" 
            className="text-2xl font-light tracking-widest text-amber-100 hover:text-amber-200 transition-colors duration-300"
          >
            PRYCE THARPE
          </Link>
          <span className="hidden sm:block text-amber-400/60 text-sm font-light tracking-wider uppercase">
            Photography
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/photography"
            className="text-amber-100 hover:text-amber-300 text-sm font-light tracking-wide uppercase transition-colors duration-300 relative group"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/photography/about"
            className="text-amber-100 hover:text-amber-300 text-sm font-light tracking-wide uppercase transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Right: Social & Contact */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/pryce_tharpe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-100 hover:text-amber-300 transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-amber-100 hover:text-amber-300 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-amber-900/20">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/photography"
              className="block text-amber-100 hover:text-amber-300 text-sm font-light tracking-wide uppercase transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/photography/about"
              className="block text-amber-100 hover:text-amber-300 text-sm font-light tracking-wide uppercase transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 