"use client";

import { useState, useEffect, useRef } from "react";

export default function ResumeDropdown({ onItemClick }: { onItemClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-neutral-400 hover:text-cyan-300 transition-colors p-2 rounded-lg hover:bg-neutral-800/40"
        aria-label="Resume Options"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl z-50">
          <div className="py-2">
            <a
              href="/Pryce_Tharpe___No_PII.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              onClick={() => {
                setIsOpen(false);
                onItemClick?.();
              }}
            >
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11m0 0-3.25-3.25M12 15.5l3.25-3.25M4.75 19.25h14.5" />
              </svg>
              <div>
                <div className="font-medium">Download Resume</div>
                <div className="text-sm text-neutral-400">PDF format</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
