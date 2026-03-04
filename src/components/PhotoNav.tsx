'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PhotoNav({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll(); // set initial state if page loads mid-scroll
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  const isTransparent = transparent && !scrolled;

  const navBg = isTransparent
    ? 'bg-transparent border-transparent'
    : 'bg-white/95 backdrop-blur-sm border-gray-100';
  const brandColor = isTransparent ? 'text-white' : 'text-gray-900';
  const subColor = isTransparent ? 'text-white/50' : 'text-gray-400';
  const linkColor = isTransparent
    ? 'text-white/60 hover:text-white'
    : 'text-gray-500 hover:text-gray-900';
  const iconColor = isTransparent
    ? 'text-white/50 hover:text-white'
    : 'text-gray-400 hover:text-gray-900';
  const hamburgerColor = isTransparent
    ? 'text-white/60 hover:text-white'
    : 'text-gray-500 hover:text-gray-900';

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${navBg}`}
      role="navigation"
      aria-label="Photography"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Left: Brand */}
        <Link href="/photography" className="flex items-baseline gap-3">
          <span className={`font-[family-name:var(--font-playfair)] text-lg font-medium tracking-tight transition-colors duration-300 ${brandColor}`}>
            Pryce Tharpe
          </span>
          <span className={`hidden sm:inline text-xs font-light tracking-widest uppercase transition-colors duration-300 ${subColor}`}>
            Photography
          </span>
        </Link>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/photography"
            className={`text-xs tracking-widest uppercase transition-colors duration-300 ${linkColor}`}
          >
            Portfolio
          </Link>
          <Link
            href="/photography/about"
            className={`text-xs tracking-widest uppercase transition-colors duration-300 ${linkColor}`}
          >
            About
          </Link>
        </div>

        {/* Right: Instagram + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/pryce_tharpe/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${iconColor}`}
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition-colors duration-300 ${hamburgerColor}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4">
          <Link
            href="/photography"
            className="block text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/photography/about"
            className="block text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <a
            href="https://www.instagram.com/pryce_tharpe/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}
