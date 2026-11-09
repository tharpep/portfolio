import React, { useRef } from "react";
import type { GalleryModeModule, ModeProps, PhotoItem } from "@/core/types";
import { BookOpen, Camera, Compass, Calendar, Sliders, Check, MapPin } from "lucide-react";

const LOCATION_COORDINATES: Record<string, string> = {
  "Tokyo, Japan": "35.6762° N, 139.6503° E",
  "Shinjuku, Tokyo": "35.6938° N, 139.7034° E",
  "Shibuya, Tokyo": "35.6580° N, 139.7016° E",
  "Kyoto, Japan": "35.0116° N, 135.7681° E",
  "Gion, Kyoto": "35.0037° N, 135.7772° E",
  "Kamakura, Japan": "35.3197° N, 139.5467° E",
  "New York City": "40.7128° N, 74.0060° W",
  "Tokyo, Kamakura, Kyoto": "35.6762° N, 139.6503° E",
};

const EXTENDED_NARRATIVES: Record<string, string> = {
  "japan-2024":
    "An observational monograph exploring the visual tension between metropolitan density and contemplative stillness. Captured across Tokyo, Kamakura, and Kyoto with the Sony A7C, this sequence documents neon luminescence refracting against wet tarmac, dense alleyways of Shinjuku at dusk, before transitioning southward to the weathered wooden machiya and quiet moss sanctuaries of Kyoto. Each frame balances rapid architectural flux with timeless wabi-sabi composure.",
  "nyc-2025":
    "A high-contrast street study exploring light cuts across Lower Manhattan and Brooklyn. Deep shadows slice diagonally across concrete corridors, isolating solitary figures against towering steel façades. Using the compact Sony A7C full-frame system, the sequence documents raw human presence amidst industrial scale.",
};

function getCoordinates(location?: string): string {
  if (!location) return "35.6762° N, 139.6503° E";
  if (LOCATION_COORDINATES[location]) return LOCATION_COORDINATES[location];
  if (location.includes("Kyoto")) return "35.0116° N, 135.7681° E";
  if (location.includes("Kamakura")) return "35.3197° N, 139.5467° E";
  if (location.includes("Tokyo")) return "35.6762° N, 139.6503° E";
  if (location.includes("New York") || location.includes("NYC")) return "40.7128° N, 74.0060° W";
  return "35.6762° N, 139.6503° E";
}

function getPhotoCaption(photo: PhotoItem): string {
  if (photo.title.includes("Crossing") || photo.title.includes("Shinjuku")) {
    return "Wide perspective capturing pedestrian choreography beneath glowing LED monoliths during the twilight rush.";
  }
  if (photo.title.includes("Rain") || photo.title.includes("Reflections")) {
    return "Wet asphalt acting as an optical mirror, scattering vivid neon hues across quiet pedestrian crossings.";
  }
  if (photo.title.includes("Lanterns") || photo.title.includes("Alleyway")) {
    return "Warm tungsten glow illuminating weathered timber textures within the narrow yokocho passageways.";
  }
  if (photo.title.includes("Platform") || photo.title.includes("Subway")) {
    return "Minimalist subway perspective isolating the solitary commuter amid geometric ceramic tiles and steel beams.";
  }
  if (photo.title.includes("Train") || photo.title.includes("Coastal")) {
    return "Enoden line coastal curve framing the horizon where saltwater haze softens the midday glare.";
  }
  if (photo.title.includes("Torii") || photo.title.includes("Silhouette")) {
    return "Stark geometric profile of the sacred gate outlined against twilight gradation.";
  }
  if (photo.title.includes("Bamboo") || photo.title.includes("Pathway")) {
    return "Vertical rhythm of towering stalks filtering diffuse morning light into emerald shafts.";
  }
  if (photo.title.includes("Temple") || photo.title.includes("Zen")) {
    return "Raked gravel and weathered raked stones arranged in austere harmony within courtyard walls.";
  }
  if (photo.title.includes("Gion") || photo.title.includes("Twilight")) {
    return "Subtle evening falloff along narrow flagstone streets framed by sliding cedar latticework.";
  }
  return `Documentary frame recorded on location in ${photo.location ?? "the field"} using prime full-frame optics.`;
}

const SplitEditorialMode: React.FC<ModeProps> = ({
  photos,
  collections,
  selectedPhoto,
  onSelectPhoto,
  activeCollection,
  onFilterCollection,
}) => {
  const photoRefs = useRef<Record<string, HTMLElement | null>>({});

  if (photos.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-zinc-500 font-mono text-sm">
        <BookOpen className="w-8 h-8 mb-4 text-zinc-600" />
        <p>No photographs in this collection.</p>
      </div>
    );
  }

  const currentCollection =
    collections.find((c) => c.slug === activeCollection) ||
    collections.find((c) => c.slug === (selectedPhoto?.collectionSlug ?? photos[0]?.collectionSlug)) ||
    collections[0];

  const activePhoto = selectedPhoto ?? photos[0];
  const narrative =
    (currentCollection && EXTENDED_NARRATIVES[currentCollection.slug]) ||
    currentCollection?.description ||
    "An editorial exploration of space, light, and architectural form.";

  const activeCoordinates = getCoordinates(activePhoto?.location ?? currentCollection?.location);
  const activeYear = activePhoto?.year ?? currentCollection?.year ?? "2024";

  const handlePlateClick = (photo: PhotoItem) => {
    onSelectPhoto(photo.id === selectedPhoto?.id ? null : photo);
    const el = photoRefs.current[photo.id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-zinc-900 bg-zinc-950/40">
          <div className="max-w-xl mx-auto lg:mr-auto space-y-10">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Obscura Monograph &middot; Vol. 05</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Calendar className="w-3 h-3" />
                  <span>{activeYear}</span>
                </div>
              </div>

              {collections.length > 1 && onFilterCollection && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Series:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {collections.map((col) => {
                      const isActive = col.slug === (activeCollection ?? currentCollection?.slug);
                      return (
                        <button
                          key={col.slug}
                          onClick={() => onFilterCollection(col.slug)}
                          className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                            isActive
                              ? "bg-zinc-200 text-zinc-950 font-semibold"
                              : "text-zinc-400 hover:text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800"
                          }`}
                        >
                          {col.title.split(":")[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                  {currentCollection?.title || "Editorial Story"}
                </h1>
                <div className="mt-2 flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{currentCollection?.location || activePhoto?.location || "Field Location"}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 border-l-2 border-zinc-800 pl-5">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Curatorial Essay
              </p>
              <p className="font-serif text-base sm:text-lg text-zinc-300 leading-relaxed first-letter:text-4xl first-letter:font-light first-letter:float-left first-letter:mr-2.5 first-letter:text-white first-letter:leading-none">
                {narrative}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  <Camera className="w-3.5 h-3.5 text-zinc-300" />
                  <span className="font-semibold text-zinc-200">Camera System</span>
                </div>
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between items-center text-zinc-300">
                    <span className="text-zinc-500">Body</span>
                    <span className="text-white font-medium">Sony A7C</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-300">
                    <span className="text-zinc-500">Sensor</span>
                    <span>24.2MP 35mm FF</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-300">
                    <span className="text-zinc-500">Optic</span>
                    <span className="text-zinc-200 truncate max-w-[120px]" title={activePhoto?.exif?.lens ?? "FE 35mm F1.8"}>
                      {activePhoto?.exif?.lens ?? "FE 35mm F1.8"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-zinc-300" />
                  <span className="font-semibold text-zinc-200">Coordinates</span>
                </div>
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="text-white font-medium truncate" title={activePhoto?.location ?? currentCollection?.location ?? "Tokyo, Japan"}>
                    {activePhoto?.location ?? currentCollection?.location ?? "Tokyo, Japan"}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono tracking-tight">
                    {activeCoordinates}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Plate {String(photos.findIndex((p) => p.id === activePhoto.id) + 1).padStart(2, "0")} of {String(photos.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            {activePhoto.exif && (
              <div className="p-3.5 rounded-lg bg-zinc-900/30 border border-zinc-800/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <Sliders className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Telemetry:</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{activePhoto.exif.focalLength}</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span>{activePhoto.exif.aperture}</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span>{activePhoto.exif.shutterSpeed}</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span>ISO {activePhoto.exif.iso}</span>
                </div>
              </div>
            )}

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <span>Plates Index ({photos.length})</span>
                <span className="text-zinc-600">Click to focus</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {photos.map((photo, idx) => {
                  const isSelected = selectedPhoto?.id === photo.id;
                  const plateNum = String(idx + 1).padStart(2, "0");
                  return (
                    <button
                      key={photo.id}
                      onClick={() => handlePlateClick(photo)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-mono transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-zinc-800 border-zinc-400 text-white shadow-sm"
                          : "bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-semibold">{plateNum}</span>
                        {isSelected && <Check className="w-3 h-3 text-zinc-200" />}
                      </div>
                      <span className="truncate text-[11px] font-sans text-zinc-300 block">
                        {photo.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        <section className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 space-y-20 lg:space-y-28">
          {photos.map((photo, index) => {
            const isSelected = selectedPhoto?.id === photo.id;
            const plateNumber = String(index + 1).padStart(2, "0");
            const caption = getPhotoCaption(photo);

            return (
              <article
                key={photo.id}
                ref={(el) => {
                  photoRefs.current[photo.id] = el;
                }}
                className={`group space-y-6 scroll-mt-24 transition-all duration-300 ${
                  isSelected ? "opacity-100" : "opacity-95 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-300">Plate {plateNumber}</span>
                    <span className="text-zinc-600">&mdash;</span>
                    <span>{photo.location || "Japan"}</span>
                  </div>
                  <span className="text-zinc-600">{photo.year || activeYear}</span>
                </div>

                <div
                  onClick={() => onSelectPhoto(isSelected ? null : photo)}
                  className={`relative overflow-hidden rounded-xl bg-zinc-950 border transition-all duration-300 cursor-pointer shadow-2xl ${
                    isSelected
                      ? "border-zinc-300 ring-2 ring-white/20 shadow-white/5"
                      : "border-zinc-800/80 hover:border-zinc-700"
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  />

                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-700 text-zinc-100 text-[10px] font-mono uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Check className="w-3 h-3 text-white" />
                      <span>Focused</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h2 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-tight">
                      {photo.title}
                    </h2>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest whitespace-nowrap">
                      Fig. {plateNumber}
                    </span>
                  </div>

                  <p className="font-serif text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
                    {caption}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 text-xs font-mono text-zinc-500">
                    <div className="flex items-center gap-3">
                      <span>Sony A7C</span>
                      <span>&bull;</span>
                      <span>{photo.exif?.lens ?? "FE 35mm F1.8"}</span>
                    </div>
                    {photo.exif && (
                      <div className="flex items-center gap-3 text-zinc-400">
                        <span>{photo.exif.focalLength}</span>
                        <span>{photo.exif.aperture}</span>
                        <span>{photo.exif.shutterSpeed}</span>
                        <span>ISO {photo.exif.iso}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}

          <div className="pt-16 pb-8 border-t border-zinc-900 text-center space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-600">
              End of Monograph Spread &middot; Obscura Archive
            </p>
            <p className="text-[11px] font-mono text-zinc-700">
              Sony A7C 35mm Full-Frame Photographic Documentation
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export const mode: GalleryModeModule = {
  id: "split-editorial",
  label: "Editorial",
  description: "Split-screen 50/50 magazine layout pairing collection narrative and camera telemetry with large photo spreads",
  icon: "BookOpen",
  order: 5,
  Component: SplitEditorialMode,
};

export default mode;
