"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ContactDropdownHeader from "./ContactDropdownHeader";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,box-shadow,border-color] duration-200 ease-out will-change-[background-color,backdrop-filter,box-shadow] ${mounted && scrolled
          ? 'backdrop-blur-md bg-neutral-900/40 shadow-lg shadow-black/20 border-b border-neutral-800/20'
          : ''
        }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative">
        <div className="flex items-center justify-between py-4">

          {/* Left: Name */}
          <Link
            href="/"
            className="text-white font-semibold text-xl tracking-tight hover:text-cyan-300 transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Pryce Tharpe
          </Link>

          {/* Right: Desktop Navigation Links & Contact */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-base font-medium transition-all duration-200 ease-out ${isActive
                        ? 'text-cyan-300'
                        : 'text-neutral-300 hover:text-white'
                      } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:transition-transform after:duration-200 after:ease-out ${isActive
                        ? 'after:scale-x-100'
                        : 'after:scale-x-0 hover:after:scale-x-100'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Desktop Say Hello */}
              <div className="ml-2">
                <ContactDropdownHeader />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800/40 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Always rendered with smooth transitions */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-neutral-900 border-t border-neutral-800/50 overflow-hidden transition-all duration-300 ease-out ${mobileMenuOpen
              ? 'opacity-100 max-h-[600px]'
              : 'opacity-0 max-h-0 pointer-events-none'
            }`}
          style={{
            transitionProperty: 'opacity, max-height',
          }}
        >
          <div className="flex flex-col space-y-2 mt-4 pb-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`relative px-4 py-3 font-medium transition-all duration-200 ease-out ${isActive
                      ? 'text-cyan-300'
                      : 'text-neutral-300 hover:text-white'
                    } after:content-[''] after:absolute after:bottom-2 after:left-4 after:w-8 after:h-0.5 after:bg-cyan-400 after:transition-transform after:duration-200 after:ease-out ${isActive
                      ? 'after:scale-x-100'
                      : 'after:scale-x-0'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Links */}
            <div className="mt-4 pt-4 border-t border-neutral-800/70 space-y-3">
              <a
                href="https://github.com/tharpep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/40 transition-all duration-200 ease-out"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href="/Pryce_Tharpe___No_PII.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/40 transition-all duration-200 ease-out"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium">Resume</span>
              </a>

              {/* Always visible contact links */}
              <a
                href="https://www.linkedin.com/in/pryce-tharpe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/40 transition-all duration-200 ease-out"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href="mailto:tharpep_pro@outlook.com"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/40 transition-all duration-200 ease-out"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
