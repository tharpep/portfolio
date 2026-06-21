"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Index", index: "01" },
  { href: "/projects", label: "Work", index: "02" },
  { href: "/about", label: "About", index: "03" },
  { href: "/resume", label: "Resume", index: "04" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <nav
      className={`sticky top-0 z-[40] w-full transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || mobileOpen
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            onClick={close}
            className="group flex items-baseline gap-2"
            aria-label="Pryce Tharpe — home"
          >
            <span className="font-semibold tracking-tight text-ink text-[1.05rem]">
              Pryce Tharpe
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150"
              aria-hidden
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-underline text-[0.95rem] font-medium transition-colors duration-200 ${
                    active ? "text-accent-ink" : "text-ink-2 hover:text-ink"
                  }`}
                  style={active ? { backgroundSize: "100% 1.5px" } : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://github.com/tharpep"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-[0.9rem] font-medium text-paper btn-lift"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden -mr-2 p-2 text-ink"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100 border-line" : "max-h-0 opacity-0 border-transparent pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-[80rem] px-5 sm:px-8 py-3">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={active ? "page" : undefined}
                className={`flex items-baseline gap-4 py-3 border-b border-line/70 last:border-0 ${
                  active ? "text-accent-ink" : "text-ink"
                }`}
              >
                <span className="font-mono text-xs text-ink-3 w-6">{link.index}</span>
                <span className="text-lg font-medium">{link.label}</span>
              </Link>
            );
          })}
          <a
            href="https://github.com/tharpep"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
