import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Collection, GalleryModeModule, ModeProps, PhotoItem } from "@/core/types";
import { Camera, ChevronLeft, ChevronRight, Compass, Eye, MoveHorizontal } from "lucide-react";

interface RunwayCardProps {
  photo: PhotoItem;
  index: number;
  total: number;
  isSelected: boolean;
  onSelect: (photo: PhotoItem) => void;
  scrollX: number;
  viewportWidth: number;
}

const RunwayCard: React.FC<RunwayCardProps> = ({
  photo,
  index,
  total,
  isSelected,
  onSelect,
  scrollX,
  viewportWidth,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    if (!cardRef.current) return;
    const cardCenter = cardRef.current.offsetLeft + cardRef.current.offsetWidth / 2;
    const viewCenter = scrollX + viewportWidth / 2;
    const delta = (cardCenter - viewCenter) * 0.06;
    const clamped = Math.max(-24, Math.min(24, delta));
    setImageOffset(clamped);
  }, [scrollX, viewportWidth]);

  const verticalOffset = useMemo(() => {
    const mod = index % 3;
    if (mod === 0) return "self-center";
    if (mod === 1) return "self-start mt-4";
    return "self-end mb-4";
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(photo)}
      className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 select-none ${verticalOffset} ${
        isSelected
          ? "border-white ring-2 ring-white/60 shadow-[0_0_40px_rgba(255,255,255,0.2)] scale-[1.01]"
          : "border-zinc-800/80 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/70"
      }`}
      style={{
        height: "60vh",
        maxHeight: "680px",
        minHeight: "420px",
        aspectRatio: `${photo.aspectRatio || 1.5}`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden bg-zinc-950">
        <img
          src={photo.url}
          alt={photo.title}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover transition-transform duration-75 ease-out select-none"
          style={{
            transform: `scale(1.1) translateX(${imageOffset}px)`,
          }}
        />
      </div>

      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-zinc-300 border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity">
        <span>#{String(index + 1).padStart(2, "0")}</span>
        <span className="text-zinc-600">/</span>
        <span className="text-zinc-500">{String(total).padStart(2, "0")}</span>
      </div>

      {isSelected && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full bg-white text-zinc-900 px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase shadow-lg">
          <Eye className="w-3 h-3" />
          <span>Selected</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-400 mb-1">
          {photo.collectionTitle}
        </span>
        <h3 className="font-serif text-2xl font-light text-white mb-2 leading-tight">
          {photo.title}
        </h3>

        {(photo.location || photo.year) && (
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 mb-3">
            <Compass className="w-3.5 h-3.5 text-zinc-400" />
            <span>{[photo.location, photo.year].filter(Boolean).join(" · ")}</span>
          </div>
        )}

        {photo.exif && (
          <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 border-t border-white/10 pt-3">
            {photo.exif.focalLength && <span>{photo.exif.focalLength}</span>}
            {photo.exif.aperture && <span>{photo.exif.aperture}</span>}
            {photo.exif.shutterSpeed && <span>{photo.exif.shutterSpeed}</span>}
            {photo.exif.iso && <span>ISO {photo.exif.iso}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

const HorizontalRunwayMode: React.FC<ModeProps> = ({
  photos,
  collections,
  selectedPhoto,
  onSelectPhoto,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const collectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const [scrollX, setScrollX] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1200);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const lastMouseXRef = useRef(0);
  const lastTimestampRef = useRef(0);
  const velocityRef = useRef(0);
  const inertiaRafRef = useRef<number | null>(null);
  const hasMovedRef = useRef(false);

  const groupedCollections = useMemo(() => {
    const map = new Map<string, PhotoItem[]>();
    for (const photo of photos) {
      const slug = photo.collectionSlug || "other";
      if (!map.has(slug)) {
        map.set(slug, []);
      }
      map.get(slug)!.push(photo);
    }

    const result: {
      collection: Collection | undefined;
      slug: string;
      title: string;
      photos: PhotoItem[];
    }[] = [];

    for (const [slug, colPhotos] of map.entries()) {
      const col = collections.find((c) => c.slug === slug);
      result.push({
        collection: col,
        slug,
        title: col?.title || colPhotos[0]?.collectionTitle || slug,
        photos: colPhotos,
      });
    }

    return result;
  }, [photos, collections]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const sLeft = containerRef.current.scrollLeft;
    const sWidth = containerRef.current.scrollWidth;
    const cWidth = containerRef.current.clientWidth;
    setScrollX(sLeft);
    const maxScroll = sWidth - cWidth;
    const progress = maxScroll > 0 ? (sLeft / maxScroll) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    if (inertiaRafRef.current) {
      cancelAnimationFrame(inertiaRafRef.current);
      inertiaRafRef.current = null;
    }
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    dragStartXRef.current = e.pageX;
    lastMouseXRef.current = e.pageX;
    lastTimestampRef.current = performance.now();
    velocityRef.current = 0;
    if (containerRef.current) {
      dragStartScrollLeftRef.current = containerRef.current.scrollLeft;
    }
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      const dx = e.pageX - dragStartXRef.current;
      if (Math.abs(dx) > 4) {
        hasMovedRef.current = true;
      }
      containerRef.current.scrollLeft = dragStartScrollLeftRef.current - dx;

      const now = performance.now();
      const dt = now - lastTimestampRef.current;
      if (dt > 8) {
        velocityRef.current = (e.pageX - lastMouseXRef.current) / dt;
        lastMouseXRef.current = e.pageX;
        lastTimestampRef.current = now;
      }
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      let currentVelocity = velocityRef.current;
      if (Math.abs(currentVelocity) > 3) {
        currentVelocity = Math.sign(currentVelocity) * 3;
      }

      if (Math.abs(currentVelocity) > 0.05) {
        const step = () => {
          if (!containerRef.current || isDraggingRef.current) return;
          containerRef.current.scrollLeft -= currentVelocity * 16;
          currentVelocity *= 0.94;
          if (Math.abs(currentVelocity) > 0.02) {
            inertiaRafRef.current = requestAnimationFrame(step);
          } else {
            inertiaRafRef.current = null;
          }
        };
        inertiaRafRef.current = requestAnimationFrame(step);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (inertiaRafRef.current) {
        cancelAnimationFrame(inertiaRafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelVelocity = 0;
    let wheelRafId: number | null = null;

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 1) return;

      e.preventDefault();
      if (inertiaRafRef.current) {
        cancelAnimationFrame(inertiaRafRef.current);
        inertiaRafRef.current = null;
      }

      wheelVelocity += delta * 0.7;
      if (Math.abs(wheelVelocity) > 75) {
        wheelVelocity = Math.sign(wheelVelocity) * 75;
      }

      if (!wheelRafId) {
        const step = () => {
          if (!containerRef.current) return;
          containerRef.current.scrollLeft += wheelVelocity;
          wheelVelocity *= 0.88;
          if (Math.abs(wheelVelocity) > 0.5) {
            wheelRafId = requestAnimationFrame(step);
          } else {
            wheelRafId = null;
            wheelVelocity = 0;
          }
        };
        wheelRafId = requestAnimationFrame(step);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
      if (wheelRafId) cancelAnimationFrame(wheelRafId);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      if (e.key === "ArrowRight") {
        containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const updateMetrics = () => {
      if (containerRef.current) {
        setViewportWidth(containerRef.current.clientWidth);
        handleScroll();
      }
    };
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [handleScroll]);

  const handleCardSelect = useCallback(
    (photo: PhotoItem) => {
      if (hasMovedRef.current) return;
      onSelectPhoto(selectedPhoto?.id === photo.id ? null : photo);
    },
    [onSelectPhoto, selectedPhoto]
  );

  if (photos.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-zinc-500 font-mono text-sm">
        <MoveHorizontal className="w-8 h-8 mb-3 text-zinc-700 animate-pulse" />
        <p>No photographs found in this collection.</p>
      </div>
    );
  }

  let runningPhotoIndex = 0;

  return (
    <div className="relative w-full flex-1 flex flex-col justify-center min-h-[calc(100vh-140px)] overflow-hidden bg-[#09090b]">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        className="w-full flex-1 flex items-center overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none px-8 md:px-16 py-12 scrollbar-none"
      >
        <div className="flex items-center gap-16 md:gap-24 flex-nowrap min-w-max">
          {groupedCollections.map((group, groupIndex) => {
            const groupPhotos = group.photos;
            const startIndex = runningPhotoIndex;
            runningPhotoIndex += groupPhotos.length;

            return (
              <div
                key={group.slug}
                ref={(el) => {
                  if (el) collectionRefs.current.set(group.slug, el);
                  else collectionRefs.current.delete(group.slug);
                }}
                className="relative flex items-center gap-10 flex-nowrap"
              >
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none select-none text-[16vw] font-serif font-black tracking-tighter text-white/[0.025] whitespace-nowrap"
                  style={{
                    transform: `translate3d(${-scrollX * 0.12}px, -50%, 0)`,
                  }}
                >
                  {group.collection?.title?.toUpperCase() || group.title.toUpperCase()}
                </div>

                <div className="w-[340px] sm:w-[420px] md:w-[480px] flex-shrink-0 flex flex-col justify-between self-stretch py-4 pr-6 border-r border-zinc-800/60 z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="h-px w-6 bg-sky-500" />
                      <span className="font-mono text-xs text-sky-400 uppercase tracking-[0.25em]">
                        Collection {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter leading-[0.9] mb-6">
                      {group.title}
                    </h2>
                    {group.collection?.description && (
                      <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed max-w-sm mb-6">
                        {group.collection.description}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-zinc-800/80 pt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-500">
                    {group.collection?.location && (
                      <div className="flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-zinc-400" />
                        <span className="text-zinc-300">{group.collection.location}</span>
                      </div>
                    )}
                    {group.collection?.camera && (
                      <div className="flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-zinc-400" />
                        <span className="text-zinc-300">{group.collection.camera}</span>
                      </div>
                    )}
                    <div className="text-zinc-400">
                      {group.photos.length} Frames &middot; {group.collection?.year || "2024"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8 flex-nowrap z-10">
                  {groupPhotos.map((photo, photoIndex) => {
                    const globalIndex = startIndex + photoIndex;
                    return (
                      <RunwayCard
                        key={photo.id}
                        photo={photo}
                        index={globalIndex}
                        total={photos.length}
                        isSelected={selectedPhoto?.id === photo.id}
                        onSelect={handleCardSelect}
                        scrollX={scrollX}
                        viewportWidth={viewportWidth}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sticky bottom-6 left-0 right-0 z-30 px-6 pointer-events-none">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 rounded-2xl px-5 py-3 shadow-2xl pointer-events-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => containerRef.current?.scrollBy({ left: -450, behavior: "smooth" })}
              className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => containerRef.current?.scrollBy({ left: 450, behavior: "smooth" })}
              className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="hidden sm:flex items-center gap-2 border-l border-zinc-800 pl-3">
              <MoveHorizontal className="w-3.5 h-3.5 text-zinc-500" />
              <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                Glide Runway
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-1 max-w-xs mx-4">
            <div className="h-1 flex-1 bg-zinc-800/80 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-75 rounded-full"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-zinc-400 w-9 text-right tabular-nums">
              {Math.round(scrollProgress)}%
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {groupedCollections.map((group) => (
              <button
                key={group.slug}
                onClick={() => {
                  const el = collectionRefs.current.get(group.slug);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
                  }
                }}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
              >
                {group.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const mode: GalleryModeModule = {
  id: "horizontal-runway",
  label: "Runway",
  description: "Expansive horizontal filmstrip with smooth inertia gliding, parallax depth layers, and oversized editorial typography",
  icon: "MoveHorizontal",
  order: 3,
  Component: HorizontalRunwayMode,
};

export default mode;
