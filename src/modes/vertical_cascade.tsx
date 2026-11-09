import React from "react";
import type { GalleryModeModule, ModeProps } from "@/core/types";

const VerticalCascadeMode: React.FC<ModeProps> = ({
  photos,
  selectedPhoto,
  onSelectPhoto,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo) => {
          const isSelected = selectedPhoto?.id === photo.id;
          return (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(isSelected ? null : photo)}
              className={`group relative break-inside-avoid overflow-hidden rounded-xl bg-zinc-900 border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "border-sky-500 ring-2 ring-sky-500/30 scale-[1.01]"
                  : "border-zinc-800/80 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50"
              }`}
            >
              <img
                src={photo.thumbnailUrl || photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-1">
                  {photo.collectionTitle}
                </span>
                <h3 className="font-serif text-lg font-medium text-white mb-2">
                  {photo.title}
                </h3>
                {photo.exif && (
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 border-t border-zinc-700/50 pt-2">
                    <span>{photo.exif.focalLength}</span>
                    <span>{photo.exif.aperture}</span>
                    <span>{photo.exif.shutterSpeed}</span>
                    <span>ISO {photo.exif.iso}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const mode: GalleryModeModule = {
  id: "vertical-cascade",
  label: "Cascade",
  description: "Editorial fluid vertical masonry with responsive column flow",
  icon: "Columns",
  order: 1,
  Component: VerticalCascadeMode,
};

export default mode;
