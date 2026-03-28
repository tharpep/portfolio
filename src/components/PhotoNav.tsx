'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PhotoNav({ transparent = false, isDark = false }: { transparent?: boolean; isDark?: boolean }) {
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

  // Opaque background adapts to collection mood
  const opaqueBg = isDark
    ? 'bg-neutral-900/95 backdrop-blur-sm border-neutral-800'
    : 'bg-white/95 backdrop-blur-sm border-gray-100';

  const navBg = isTransparent ? 'bg-transparent border-transparent' : opaqueBg;
  const brandColor = isTransparent ? 'text-white' : isDark ? 'text-gray-100' : 'text-gray-900';
  const linkColor = isTransparent
    ? 'text-white/60 hover:text-white'
    : isDark
    ? 'text-gray-400 hover:text-gray-100'
    : 'text-gray-500 hover:text-gray-900';
  const iconColor = isTransparent
    ? 'text-white/50 hover:text-white'
    : isDark
    ? 'text-gray-500 hover:text-gray-100'
    : 'text-gray-400 hover:text-gray-900';
  const hamburgerColor = isTransparent
    ? 'text-white/60 hover:text-white'
    : isDark
    ? 'text-gray-400 hover:text-gray-100'
    : 'text-gray-500 hover:text-gray-900';

  return (
    <nav
      style={{ viewTransitionName: 'photo-nav' }}
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${navBg}`}
      role="navigation"
      aria-label="Photography"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Left: Brand */}
        <Link href="/photography" aria-label="Photography home" className="flex items-center">
          <svg
            className={`w-5 h-5 transition-colors duration-300 ${brandColor}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        </Link>

        {/* Right: Nav links + Instagram + hamburger */}
        <div className="flex items-center gap-6 md:gap-8">
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
        <div className={`md:hidden border-t px-6 py-5 space-y-4 ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-gray-100'}`}>
          <Link
            href="/photography"
            className={`block text-xs tracking-widest uppercase transition-colors ${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/photography/about"
            className={`block text-xs tracking-widest uppercase transition-colors ${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <a
            href="https://www.instagram.com/pryce_tharpe/"
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-xs tracking-widest uppercase transition-colors ${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setMenuOpen(false)}
          >
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}
