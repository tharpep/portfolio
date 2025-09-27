"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactDropdownHeader from "./ContactDropdownHeader";
import ResumeDropdown from "./ResumeDropdown";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/custom-gpts", label: "Custom GPTs" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800/50" role="navigation" aria-label="Primary">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Logo/Name */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={closeMobileMenu}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300 ease-out">
              <span className="text-white font-bold text-sm">PT</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight group-hover:text-cyan-300 transition-all duration-300 ease-out">
              Pryce Tharpe
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 no-underline ${
                    isActive 
                      ? 'text-cyan-300 bg-neutral-800/60' 
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: Mobile Menu Button */}
          <div className="flex items-center">
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

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-800/50">
            <div className="flex flex-col space-y-2 mt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-cyan-300 bg-neutral-800/60' 
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              {/* Mobile GitHub & Resume - Separate Rows */}
              <div className="sm:hidden mt-4 pt-4 border-t border-neutral-800/30 space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                  </svg>
                  <a
                    href="https://github.com/PryceTharpe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-cyan-300 transition-colors text-sm"
                    onClick={closeMobileMenu}
                  >
                    GitHub
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <ResumeDropdown onItemClick={closeMobileMenu} />
                  <span className="text-neutral-400 text-sm">Resume</span>
                </div>
              </div>
              
              {/* Mobile Contact Me */}
              <div className="sm:hidden mt-3">
                <ContactDropdownHeader onItemClick={closeMobileMenu} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
