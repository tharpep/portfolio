"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle dark mode (for demo, real app should use context or theme provider)
  const toggleDark = () => {
    setDark((d) => !d);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", !dark);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-700/80 via-cyan-600/80 to-blue-900/80 backdrop-blur-md border-b border-blue-900/30 shadow-sm px-6 py-4 flex items-center justify-between transition-colors duration-300"
    >
      {/* Left: Logo/Initials and mobile dropdown */}
      <div className="flex items-center gap-3 relative">
        {/* PT circle as dropdown trigger on mobile */}
        <button
          className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md select-none sm:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          PT
        </button>
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute left-0 top-12 min-w-[140px] rounded-xl bg-neutral-900/95 border border-blue-900/40 shadow-lg flex flex-col py-2 animate-fade-in z-50 sm:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group px-6 py-3 text-white/90 hover:bg-cyan-700/40 hover:text-white transition-colors text-base font-medium rounded-md relative"
                onClick={() => setMenuOpen(false)}
              >
                <span className="z-10 relative">{link.label}</span>
                <span className="absolute left-0 bottom-1 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </div>
        )}
        {/* Desktop nav links */}
        <div className="hidden sm:flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 rounded-md font-medium text-white/90 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="z-10 relative">{link.label}</span>
              <span className="absolute left-0 bottom-1 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </div>
      </div>

      {/* Right: Name, Socials, Contact, Dark Mode */}
      <div className="flex items-center gap-4">
        <span className="hidden md:inline-block font-semibold text-white/90 tracking-wide mr-2">Pryce Tharpe</span>
        <a
          href="https://github.com/tharpep"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
        </a>
        <a
          href="https://www.linkedin.com/in/pryce-tharpe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" /></svg>
        </a>
        <Link
          href="#contact"
          className="ml-2 px-5 py-2 rounded-full bg-cyan-500 text-white font-semibold shadow-md hover:bg-cyan-400 transition-colors duration-200 border-2 border-cyan-600 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          Contact Me
        </Link>
        <button
          onClick={toggleDark}
          className="ml-2 p-2 rounded-full bg-blue-900/60 hover:bg-blue-800 text-white transition-colors border border-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.75 15.5A6.75 6.75 0 0 1 8.5 6.25a.75.75 0 0 0-.75-.75A8 8 0 1 0 20 16.25a.75.75 0 0 0-.75-.75.75.75 0 0 0-.75.75z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 4.75zm0 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75zm7.25-4.25a.75.75 0 0 1 .75.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75zm-12 0a.75.75 0 0 1 .75.75H4.75a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75zm10.19-5.44a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06zm-10.19 10.19a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06zm10.19 10.19a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06zm-10.19-10.19a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06z" /></svg>
          )}
        </button>
      </div>
    </nav>
  );
}
