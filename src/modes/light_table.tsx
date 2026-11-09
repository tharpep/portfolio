import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { GalleryModeModule, ModeProps, PhotoItem } from "@/core/types";
import { Minus, Plus, RotateCcw } from "lucide-react";

interface LayoutItem {
  photo: PhotoItem;
  x: number;
  y: number;
  width: number;
  height: number;
  imageHeight: number;
  tilt: number;
}

const LightTableMode: React.FC<ModeProps> = ({
  photos,
  selectedPhoto,
  onSelectPhoto,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.85);
  const [isDragging, setIsDragging] = useState(false);

  const panRef = useRef(pan);
  panRef.current = pan;

  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;

  const dragStartRef = useRef<{
    x: number;
    y: number;
    panX: number;
    panY: number;
  } | null>(null);
  const dragMovedRef = useRef(false);

  const { items: layoutItems, bounds: layoutBounds } = useMemo(() => {
    if (photos.length === 0) {
      return { items: [], bounds: { width: 0, height: 0 } };
    }

    const cardWidth = 340;
    const colGap = 72;
    const rowGap = 64;
    const numCols =
      photos.length <= 4
        ? Math.max(1, photos.length)
        : photos.length <= 8
        ? 3
        : 4;
    const colHeights = new Array(numCols).fill(40);

    const items: LayoutItem[] = photos.map((photo, index) => {
      let hash = 0;
      for (let i = 0; i < photo.id.length; i++) {
        hash = (hash << 5) - hash + photo.id.charCodeAt(i);
        hash |= 0;
      }
      const seed = Math.abs(hash + index * 997);
      const tilt = Number((((seed % 6001) / 1000) - 3.0).toFixed(2));
      const jitterX = ((seed >> 3) % 33) - 16;
      const jitterY = ((seed >> 5) % 25) - 12;

      let targetCol = 0;
      for (let c = 1; c < numCols; c++) {
        if (colHeights[c] < colHeights[targetCol]) {
          targetCol = c;
        }
      }

      const aspect = photo.aspectRatio > 0 ? photo.aspectRatio : 1.5;
      const imageHeight = Math.round(cardWidth / aspect);
      const cardHeight = imageHeight + 76;

      const x = targetCol * (cardWidth + colGap) + jitterX + 60;
      const y = colHeights[targetCol] + jitterY;

      colHeights[targetCol] += cardHeight + rowGap;

      return {
        photo,
        x,
        y,
        width: cardWidth,
        height: cardHeight,
        imageHeight,
        tilt,
      };
    });

    const maxX = Math.max(...items.map((i) => i.x + i.width));
    const maxY = Math.max(...items.map((i) => i.y + i.height));

    return {
      items,
      bounds: { width: maxX + 60, height: maxY + 60 },
    };
  }, [photos]);

  const handleResetView = useCallback(() => {
    const container = containerRef.current;
    if (!container || layoutItems.length === 0) {
      setPan({ x: 40, y: 30 });
      setZoom(0.85);
      return;
    }

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const padding = 60;
    const fitZoomX = (containerWidth - padding * 2) / layoutBounds.width;
    const fitZoomY = (containerHeight - padding * 2) / layoutBounds.height;
    const calculatedZoom = Math.min(1.0, Math.max(0.35, Math.min(fitZoomX, fitZoomY)));

    const centeredX = (containerWidth - layoutBounds.width * calculatedZoom) / 2;
    const centeredY = (containerHeight - layoutBounds.height * calculatedZoom) / 2;

    setZoom(Number(calculatedZoom.toFixed(2)));
    setPan({
      x: Math.round(centeredX),
      y: Math.round(Math.max(20, centeredY)),
    });
  }, [layoutItems.length, layoutBounds.width, layoutBounds.height]);

  const handleZoomIn = useCallback(() => {
    const container = containerRef.current;
    const width = container?.clientWidth ?? 800;
    const height = container?.clientHeight ?? 600;
    const mouseX = width / 2;
    const mouseY = height / 2;

    const prevZoom = zoomRef.current;
    const prevPan = panRef.current;
    const nextZoom = Math.min(2.5, prevZoom * 1.2);
    if (nextZoom === prevZoom) return;

    const worldX = (mouseX - prevPan.x) / prevZoom;
    const worldY = (mouseY - prevPan.y) / prevZoom;

    setZoom(Number(nextZoom.toFixed(2)));
    setPan({
      x: Math.round(mouseX - worldX * nextZoom),
      y: Math.round(mouseY - worldY * nextZoom),
    });
  }, []);

  const handleZoomOut = useCallback(() => {
    const container = containerRef.current;
    const width = container?.clientWidth ?? 800;
    const height = container?.clientHeight ?? 600;
    const mouseX = width / 2;
    const mouseY = height / 2;

    const prevZoom = zoomRef.current;
    const prevPan = panRef.current;
    const nextZoom = Math.max(0.25, prevZoom / 1.2);
    if (nextZoom === prevZoom) return;

    const worldX = (mouseX - prevPan.x) / prevZoom;
    const worldY = (mouseY - prevPan.y) / prevZoom;

    setZoom(Number(nextZoom.toFixed(2)));
    setPan({
      x: Math.round(mouseX - worldX * nextZoom),
      y: Math.round(mouseY - worldY * nextZoom),
    });
  }, []);

  useEffect(() => {
    handleResetView();
  }, [handleResetView]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      const prevZoom = zoomRef.current;
      const prevPan = panRef.current;
      const nextZoom = Math.min(2.5, Math.max(0.25, prevZoom * zoomFactor));
      if (nextZoom === prevZoom) return;

      const worldX = (mouseX - prevPan.x) / prevZoom;
      const worldY = (mouseY - prevPan.y) / prevZoom;

      setZoom(Number(nextZoom.toFixed(2)));
      setPan({
        x: Math.round(mouseX - worldX * nextZoom),
        y: Math.round(mouseY - worldY * nextZoom),
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    };
    dragMovedRef.current = false;
    setIsDragging(true);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!dragStartRef.current) return;
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      if (!dragMovedRef.current && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
        dragMovedRef.current = true;
      }
      setPan({
        x: Math.round(dragStartRef.current.panX + dx),
        y: Math.round(dragStartRef.current.panY + dy),
      });
    };

    const handlePointerUp = () => {
      if (dragStartRef.current) {
        dragStartRef.current = null;
        setIsDragging(false);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent, photo: PhotoItem) => {
    e.stopPropagation();
    if (dragMovedRef.current) {
      return;
    }
    const isSelected = selectedPhoto?.id === photo.id;
    onSelectPhoto(isSelected ? null : photo);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className={`relative w-full h-[calc(100vh-140px)] min-h-[600px] overflow-hidden bg-[#09090b] select-none touch-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: `${Math.round(40 * zoom)}px ${Math.round(40 * zoom)}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-auto"
        style={{
          transform: `translate3d(${pan.x}px, ${pan.y}px, 0px) scale(${zoom})`,
          transformOrigin: "0 0",
        }}
      >
        {layoutItems.map((item) => {
          const isSelected = selectedPhoto?.id === item.photo.id;
          return (
            <div
              key={item.photo.id}
              onClick={(e) => handleCardClick(e, item.photo)}
              style={{
                position: "absolute",
                left: `${item.x}px`,
                top: `${item.y}px`,
                width: `${item.width}px`,
                transform: `rotate(${item.tilt}deg)`,
                transformOrigin: "center center",
                zIndex: isSelected ? 40 : 10,
              }}
              className="group cursor-pointer select-none"
            >
              <div
                className={`transition-all duration-200 group-hover:scale-[1.02] group-hover:-translate-y-1 rounded-xl overflow-hidden bg-zinc-900 border p-2.5 shadow-2xl ${
                  isSelected
                    ? "border-sky-500 ring-2 ring-sky-500/40 shadow-sky-950/60"
                    : "border-zinc-800/80 group-hover:border-zinc-700 group-hover:shadow-black"
                }`}
              >
                <div className="relative overflow-hidden rounded-lg bg-zinc-950">
                  <img
                    src={item.photo.url}
                    alt={item.photo.title}
                    loading="lazy"
                    draggable={false}
                    className="w-full object-cover block select-none"
                    style={{ height: `${item.imageHeight}px` }}
                  />
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-sky-500 text-zinc-950 text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded shadow">
                      Selected
                    </div>
                  )}
                </div>

                <div className="pt-2.5 px-1 flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 truncate">
                      {item.photo.collectionTitle}
                    </span>
                    {item.photo.dominantColor && (
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: item.photo.dominantColor }}
                      />
                    )}
                  </div>
                  <h3 className="font-serif text-sm font-medium text-white truncate">
                    {item.photo.title}
                  </h3>
                  {item.photo.exif && (
                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 pt-1 border-t border-zinc-800/60">
                      <span>{item.photo.exif.focalLength}</span>
                      <span>{item.photo.exif.aperture}</span>
                      <span>{item.photo.exif.shutterSpeed}</span>
                      <span>ISO {item.photo.exif.iso}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-4 left-6 z-20 pointer-events-none flex items-center gap-4 text-[11px] font-mono text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          LIGHT TABLE
        </span>
        <span>{photos.length} FRAMES</span>
        <span className="hidden sm:inline">PAN: DRAG</span>
        <span className="hidden sm:inline">ZOOM: WHEEL / CONTROLS</span>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 bg-zinc-950/90 border border-zinc-800 rounded-full px-2.5 py-1.5 shadow-2xl backdrop-blur-md"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleZoomOut}
          title="Zoom Out"
          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="text-xs font-mono text-zinc-300 px-2 min-w-[48px] text-center select-none">
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          onClick={handleZoomIn}
          title="Zoom In"
          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
        <div className="w-px h-4 bg-zinc-800 mx-1" />
        <button
          type="button"
          onClick={handleResetView}
          title="Reset View"
          className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-800 px-2 py-1 rounded-full transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export const mode: GalleryModeModule = {
  id: "light-table",
  label: "Light Table",
  description: "Infinite spatial 2D canvas with organic photo arrangements and fluid pan/zoom",
  icon: "Maximize2",
  order: 2,
  Component: LightTableMode,
};

export default mode;
