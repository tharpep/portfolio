import React from "react";
import type { Collection, PhotoItem } from "../core/types";
import { ArrowRight, Film } from "lucide-react";

export interface HomePageProps {
  collections: Collection[];
  photos: PhotoItem[];
  onSelectCollection: (slug: string) => void;
  onEnterGallery: (modeId?: string) => void;
  onOpenBio: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

const RED_PANDA_FRAME_04_URL = "https://res.cloudinary.com/dmjrqnrjm/image/upload/c_limit,f_auto,q_auto,w_1200/IMG_2103_nn6ygf";

const CURATED_HIGHLIGHT_IDS = [
  "denver-02",
  "japan-03",
  "grenada-02",
  "wildlife-10",
  "new-york-city-12",
  "toronto-05",
  "wildlife-04",
];

export const HomePage: React.FC<HomePageProps> = ({
  collections,
  photos,
  onSelectCollection,
  onEnterGallery,
  onOpenBio,
  onSelectPhoto,
}) => {
  const highlights = CURATED_HIGHLIGHT_IDS.map((id) =>
    photos.find((p) => p.id === id)
  ).filter(Boolean) as PhotoItem[];

  const heroLandscape1 = highlights[0];
  const heroPortrait1 = highlights[1];
  const heroPortrait2 = highlights[2];
  const heroLandscape2 = highlights[3];
  const triptychPhotos = highlights.slice(4, 7);

  return (
    <div className="flex-1 flex flex-col w-full animate-fade-in">
      <section className="relative min-h-[75vh] flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-12 pb-16 border-b border-zinc-900 overflow-hidden">
        <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full pointer-events-none select-none opacity-25 lg:opacity-30 blur-[1px]">
          <img
            src={RED_PANDA_FRAME_04_URL}
            alt=""
            className="w-full h-full object-cover object-center filter grayscale contrast-125 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>Pryce Tharpe</span>
            <span className="text-zinc-700">·</span>
            <span>Sony Alpha 7C</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>{photos.length} frames</span>
            <span className="text-zinc-700">·</span>
            <span>{collections.length} collections</span>
          </div>
        </div>

        <div className="relative z-10 max-w-3xl my-auto py-12 space-y-6">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
            Moments caught in passing rhythm.
          </h1>

          <p className="font-mono text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Travel and street photography across Japan, New York, Denver, Grenada, and Toronto. Shot on Sony A7C.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onEnterGallery("vertical-cascade")}
              className="group px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg active:scale-95"
            >
              <span>Explore Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onEnterGallery("horizontal-runway")}
              className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95"
            >
              <Film className="w-3.5 h-3.5 text-zinc-400" />
              <span>Runway View</span>
            </button>

            <button
              onClick={onOpenBio}
              className="px-5 py-3 rounded-full text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              About &rarr;
            </button>
          </div>
        </div>

        <div className="relative z-10" />
      </section>

      <section className="px-6 sm:px-12 lg:px-20 py-16 space-y-8">
        <div className="border-b border-zinc-900 pb-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-tight">
            Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col, index) => (
            <div
              key={col.slug}
              onClick={() => onSelectCollection(col.slug)}
              className="group cursor-pointer rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 overflow-hidden flex flex-col shadow-lg"
            >
              <div className="overflow-hidden bg-zinc-900 aspect-[2/3]">
                <img
                  src={col.coverUrl}
                  alt={col.title}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-light text-white group-hover:text-zinc-200 transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {col.location}
                  </p>
                </div>
                <div className="text-right font-mono text-xs text-zinc-400">
                  <span>{col.photoCount} frames</span>
                  <span className="block text-[11px] text-zinc-500">{col.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-20 py-16 bg-zinc-950/60 border-t border-zinc-900 space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
          <h3 className="font-serif text-2xl font-light text-white">
            Highlights
          </h3>
          <button
            onClick={() => onEnterGallery()}
            className="font-mono text-xs text-zinc-400 hover:text-white transition-colors"
          >
            View all 120 frames &rarr;
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {heroLandscape1 && (
              <div
                onClick={() => onSelectPhoto(heroLandscape1)}
                className="lg:col-span-8 group relative aspect-[3/2] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-zinc-500 cursor-pointer transition-all duration-300 shadow-xl"
              >
                <img
                  src={heroLandscape1.thumbnailUrl || heroLandscape1.url}
                  alt={heroLandscape1.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-xs font-mono text-zinc-300">
                    {heroLandscape1.collectionTitle}
                  </span>
                  <span className="font-serif text-lg text-white">
                    {heroLandscape1.title}
                  </span>
                </div>
              </div>
            )}

            {heroPortrait1 && (
              <div
                onClick={() => onSelectPhoto(heroPortrait1)}
                className="lg:col-span-4 group relative aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-zinc-500 cursor-pointer transition-all duration-300 shadow-xl"
              >
                <img
                  src={heroPortrait1.thumbnailUrl || heroPortrait1.url}
                  alt={heroPortrait1.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-xs font-mono text-zinc-300">
                    {heroPortrait1.collectionTitle}
                  </span>
                  <span className="font-serif text-lg text-white">
                    {heroPortrait1.title}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {heroPortrait2 && (
              <div
                onClick={() => onSelectPhoto(heroPortrait2)}
                className="lg:col-span-4 group relative aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-zinc-500 cursor-pointer transition-all duration-300 shadow-xl"
              >
                <img
                  src={heroPortrait2.thumbnailUrl || heroPortrait2.url}
                  alt={heroPortrait2.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-xs font-mono text-zinc-300">
                    {heroPortrait2.collectionTitle}
                  </span>
                  <span className="font-serif text-lg text-white">
                    {heroPortrait2.title}
                  </span>
                </div>
              </div>
            )}

            {heroLandscape2 && (
              <div
                onClick={() => onSelectPhoto(heroLandscape2)}
                className="lg:col-span-8 group relative aspect-[3/2] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-zinc-500 cursor-pointer transition-all duration-300 shadow-xl"
              >
                <img
                  src={heroLandscape2.thumbnailUrl || heroLandscape2.url}
                  alt={heroLandscape2.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-xs font-mono text-zinc-300">
                    {heroLandscape2.collectionTitle}
                  </span>
                  <span className="font-serif text-lg text-white">
                    {heroLandscape2.title}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {triptychPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(photo)}
                className="group relative aspect-[3/2] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-zinc-500 cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <img
                  src={photo.thumbnailUrl || photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                  <span className="text-xs font-mono text-zinc-300">
                    {photo.collectionTitle}
                  </span>
                  <span className="font-serif text-base text-white">
                    {photo.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
