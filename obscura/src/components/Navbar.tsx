import React from "react";
import type { Collection, GalleryModeModule } from "../core/types";
import { Columns, Film } from "lucide-react";

export type ViewTab = "home" | "gallery" | "bio";

interface NavbarProps {
  currentView: ViewTab;
  onSelectView: (view: ViewTab) => void;
  modes: GalleryModeModule[];
  activeModeId: string;
  onSelectMode: (id: string) => void;
  collections: Collection[];
  activeCollection: string | null;
  onSelectCollection: (slug: string | null) => void;
  totalPhotos: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  modes,
  activeModeId,
  onSelectMode,
  collections,
  activeCollection,
  onSelectCollection,
  totalPhotos,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800/80 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6">
          <button
            onClick={() => onSelectView("home")}
            className="flex items-center gap-2 text-left group"
          >
            <span className="font-serif text-lg font-light tracking-tight text-white group-hover:text-zinc-300 transition-colors">
              Pryce Tharpe
            </span>
          </button>

          <nav className="flex items-center gap-1 bg-zinc-900/80 border border-zinc-800/80 p-1 rounded-full">
            <button
              onClick={() => onSelectView("home")}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                currentView === "home"
                  ? "bg-white text-black font-bold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onSelectView("gallery")}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                currentView === "gallery"
                  ? "bg-white text-black font-bold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => onSelectView("bio")}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                currentView === "bio"
                  ? "bg-white text-black font-bold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Bio
            </button>
          </nav>
        </div>

        {currentView === "gallery" && (
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none max-w-full md:max-w-md">
            <button
              onClick={() => onSelectCollection(null)}
              className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                activeCollection === null
                  ? "bg-zinc-200 text-black font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              All ({totalPhotos})
            </button>
            {collections.map((c) => (
              <button
                key={c.slug}
                onClick={() => onSelectCollection(c.slug)}
                className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  activeCollection === c.slug
                    ? "bg-zinc-200 text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {c.title.split(":")[0]} ({c.photoCount})
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 self-end md:self-auto">
          {currentView === "gallery" && (
            <div className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 p-1 rounded-xl">
              {modes.map((m) => {
                const isActive = m.id === activeModeId;
                const isRunway = m.id.includes("runway");
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelectMode(m.id)}
                    title={m.description}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      isActive
                        ? "bg-zinc-800 text-white font-semibold shadow-inner"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {isRunway ? (
                      <Film className="w-3.5 h-3.5" />
                    ) : (
                      <Columns className="w-3.5 h-3.5" />
                    )}
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
