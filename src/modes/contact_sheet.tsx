import React, { useMemo, useState } from "react";
import type { GalleryModeModule, ModeProps, PhotoItem } from "@/core/types";
import { Contrast, Film } from "lucide-react";

type FilmStockKey = "kodak" | "fuji" | "ilford";

interface FilmStock {
  id: FilmStockKey;
  label: string;
  topRebate: string;
  bottomRebate: string;
  accentColor: string;
  badgeBg: string;
  filter: string;
}

const FILM_STOCKS: Record<FilmStockKey, FilmStock> = {
  kodak: {
    id: "kodak",
    label: "Kodak Portra 400",
    topRebate: "KODAK 400 PORTRA",
    bottomRebate: "KODAK SAFETY FILM 5074",
    accentColor: "text-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    filter: "invert(100%) contrast(1.15) brightness(0.95)",
  },
  fuji: {
    id: "fuji",
    label: "Fujifilm Pro 400H",
    topRebate: "FUJIFILM PRO 400H",
    bottomRebate: "FUJICOLOR C-41 SAFETY FILM",
    accentColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    filter: "invert(100%) hue-rotate(180deg) contrast(1.15) brightness(0.95)",
  },
  ilford: {
    id: "ilford",
    label: "Ilford HP5 Plus",
    topRebate: "ILFORD HP5 PLUS 400",
    bottomRebate: "ILFORD PAN SAFETY FILM",
    accentColor: "text-zinc-300",
    badgeBg: "bg-zinc-500/10 text-zinc-300 border-zinc-500/30",
    filter: "grayscale(100%) invert(100%) contrast(1.3) brightness(0.9)",
  },
};

const SprocketHole: React.FC = () => (
  <div className="w-2.5 h-3.5 sm:w-3 sm:h-4 rounded-[2px] bg-black border border-zinc-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.95)] shrink-0" />
);

const DxBarcode: React.FC = () => (
  <div className="flex items-center gap-[1.5px] opacity-70 select-none">
    <div className="w-[1px] h-2.5 bg-current" />
    <div className="w-[2px] h-2.5 bg-current" />
    <div className="w-[1px] h-2.5 bg-current" />
    <div className="w-[3px] h-2.5 bg-current" />
    <div className="w-[1px] h-2.5 bg-current" />
    <div className="w-[2px] h-2.5 bg-current" />
    <div className="w-[1px] h-2.5 bg-current" />
  </div>
);

const ContactSheetMode: React.FC<ModeProps> = ({
  photos,
  selectedPhoto,
  onSelectPhoto,
}) => {
  const [isNegative, setIsNegative] = useState<boolean>(false);
  const [selectedStock, setSelectedStock] = useState<FilmStockKey>("kodak");
  const [framesPerStrip, setFramesPerStrip] = useState<number>(4);

  const stock = FILM_STOCKS[selectedStock];

  const strips = useMemo(() => {
    const chunks: PhotoItem[][] = [];
    for (let i = 0; i < photos.length; i += framesPerStrip) {
      chunks.push(photos.slice(i, i + framesPerStrip));
    }
    return chunks;
  }, [photos, framesPerStrip]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-zinc-950/80 border border-zinc-800/80 p-4 rounded-xl backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
            <Film className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-base font-bold text-white tracking-tight">
                35mm Proof Contact Sheet
              </h2>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                Roll #01
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-500">
              135 Format &middot; {photos.length} Exposures &middot; {stock.label}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIsNegative((prev) => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
              isNegative
                ? "bg-amber-400 text-black border-amber-300 shadow-md shadow-amber-500/20 font-semibold"
                : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800 hover:text-white"
            }`}
            aria-pressed={isNegative}
          >
            <Contrast className="w-3.5 h-3.5" />
            <span>{isNegative ? "Negative: ON" : "Invert / Negative"}</span>
          </button>

          <div className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 p-1 rounded-lg">
            {(Object.keys(FILM_STOCKS) as FilmStockKey[]).map((key) => {
              const item = FILM_STOCKS[key];
              const isActive = selectedStock === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedStock(key)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                    isActive
                      ? "bg-zinc-800 text-white font-semibold shadow-inner"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {item.label.split(" ")[0]}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 p-1 rounded-lg">
            {[3, 4].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setFramesPerStrip(count)}
                className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                  framesPerStrip === count
                    ? "bg-zinc-800 text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {count}/strip
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-4 sm:p-6 bg-[#0a0908] border border-zinc-900 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-3 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>Darkroom Proof Sheet &middot; Job 2024-A</span>
          <span>C-41 Process &middot; Safety Film</span>
        </div>

        {photos.length === 0 ? (
          <div className="py-20 text-center text-sm font-mono text-zinc-500">
            No frames found on this roll.
          </div>
        ) : (
          strips.map((strip, stripIndex) => (
            <div
              key={`strip-${stripIndex}`}
              className="relative flex flex-col rounded-lg bg-black border border-zinc-900 shadow-xl overflow-hidden"
            >
              <div className="flex flex-row overflow-x-auto scrollbar-none items-stretch">
                <div className="w-6 bg-[#0c0a08] flex flex-col justify-between py-2 items-center border-r border-zinc-900 shrink-0 select-none">
                  <SprocketHole />
                  <span className="text-[8px] font-mono text-zinc-600 -rotate-90 whitespace-nowrap">
                    START
                  </span>
                  <SprocketHole />
                </div>

                {strip.map((photo, photoIndex) => {
                  const overallIndex = stripIndex * framesPerStrip + photoIndex;
                  const frameNumber = `${String(overallIndex + 1).padStart(2, "0")}A`;
                  const isSelected = selectedPhoto?.id === photo.id;

                  return (
                    <div
                      key={photo.id}
                      className="flex flex-col flex-1 min-w-[270px] max-w-[360px] bg-black border-r border-zinc-900 relative"
                    >
                      <div
                        className={`h-8 px-2 flex items-center justify-between font-mono text-[10px] tracking-widest ${stock.accentColor} border-b border-zinc-900 select-none bg-black`}
                      >
                        <SprocketHole />
                        <SprocketHole />
                        <span className="font-semibold uppercase tracking-wider truncate max-w-[100px]">
                          {stock.topRebate}
                        </span>
                        <SprocketHole />
                        <span className="font-bold tracking-tight">
                          ▶ {frameNumber}
                        </span>
                        <SprocketHole />
                      </div>

                      <div
                        onClick={() => onSelectPhoto(isSelected ? null : photo)}
                        className="relative p-2 bg-[#080706] cursor-pointer group"
                      >
                        <div className="relative aspect-[3/2] overflow-hidden bg-zinc-950 rounded-[1px] border border-zinc-900">
                          <img
                            src={photo.url}
                            alt={photo.title}
                            loading="lazy"
                            style={{
                              filter: isNegative ? stock.filter : undefined,
                            }}
                            className="w-full h-full object-cover transition-[filter,transform] duration-300 group-hover:scale-[1.02]"
                          />

                          {isSelected && (
                            <div className="absolute inset-0 pointer-events-none p-1.5 flex flex-col justify-between">
                              <div className="absolute inset-1.5 border-2 border-red-500/90 rounded-[1px] pointer-events-none shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
                              <div className="flex justify-between items-start z-10">
                                <span className="text-[9px] font-mono font-bold bg-red-600 text-white px-1.5 py-0.5 rounded shadow">
                                  PICK &middot; {frameNumber}
                                </span>
                                <span className="text-red-500 font-bold text-sm leading-none bg-black/60 px-1 py-0.5 rounded">
                                  ✕
                                </span>
                              </div>
                              <div className="flex justify-between text-red-500 text-xs font-bold leading-none z-10 px-0.5">
                                <span>⌜</span>
                                <span>⌝</span>
                              </div>
                            </div>
                          )}

                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <div className="text-[11px] font-mono text-white font-medium truncate">
                              {photo.title}
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 mt-0.5">
                              <span>{photo.collectionTitle}</span>
                              {photo.exif?.focalLength && (
                                <>
                                  <span>&middot;</span>
                                  <span>{photo.exif.focalLength}</span>
                                  <span>{photo.exif.aperture}</span>
                                  <span>{photo.exif.shutterSpeed}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`h-8 px-2 flex items-center justify-between font-mono text-[10px] tracking-widest ${stock.accentColor} border-t border-zinc-900 select-none bg-black`}
                      >
                        <SprocketHole />
                        <span className="font-bold tracking-tight">
                          {frameNumber} ▶
                        </span>
                        <SprocketHole />
                        <DxBarcode />
                        <SprocketHole />
                        <span className="text-[9px] uppercase hidden sm:inline opacity-70 truncate max-w-[100px]">
                          {stock.bottomRebate}
                        </span>
                        <SprocketHole />
                      </div>
                    </div>
                  );
                })}

                <div className="w-6 bg-[#0c0a08] flex flex-col justify-between py-2 items-center border-l border-zinc-900 shrink-0 select-none">
                  <SprocketHole />
                  <span className="text-[8px] font-mono text-zinc-600 -rotate-90 whitespace-nowrap">
                    END
                  </span>
                  <SprocketHole />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const mode: GalleryModeModule = {
  id: "contact-sheet",
  label: "Contact Sheet",
  description: "Classic 35mm negative filmstrips with sprockets, frame numbers, and negative inversion",
  icon: "Film",
  order: 4,
  Component: ContactSheetMode,
};

export default mode;