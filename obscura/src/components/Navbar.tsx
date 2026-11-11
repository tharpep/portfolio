import React from "react";
import type { Collection, GalleryModeModule } from "@/core/types";
import { Camera, Layers } from "lucide-react";

interface NavbarProps {
  modes: GalleryModeModule[];
  activeModeId: string;
  onSelectMode: (id: string) => void;
  collections: Collection[];
  activeCollection: string | null;
  onSelectCollection: (slug: string | null) => void;
  totalPhotos: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  modes,
  activeModeId,
  onSelectMode,
  collections,
  activeCollection,
  onSelectCollection,
  totalPhotos,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg font-bold tracking-tight text-white">
                OBSCURA
              </h1>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                A7C
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Pryce Tharpe &middot; {totalPhotos} frames
            </p>
          </div>
        </div>

        {/* Center: Collection Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          <button
            onClick={() => onSelectCollection(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCollection === null
                ? "bg-white text-zinc-900 font-semibold shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
            }`}
          >
            All Work
          </button>
          {collections.map((c) => (
            <button
              key={c.slug}
              onClick={() => onSelectCollection(c.slug)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCollection === c.slug
                  ? "bg-white text-zinc-900 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
            >
              {c.title.split(":")[0]}
            </button>
          ))}
        </div>

        {/* Right: View Mode Toggle */}
        <div className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 p-1 rounded-xl">
          {modes.map((m) => {
            const isActive = m.id === activeModeId;
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
                <Layers className="w-3.5 h-3.5" />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
