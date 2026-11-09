import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PhotoItem } from "@/core/types";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Info,
  MapPin,
  Maximize2,
  Minimize2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

export interface PhotoModalProps {
  photo?: PhotoItem | null;
  selectedPhoto?: PhotoItem | null;
  photos?: PhotoItem[];
  isOpen?: boolean;
  onClose?: () => void;
  onSelectPhoto?: (photo: PhotoItem | null) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  photo,
  selectedPhoto,
  photos,
  isOpen,
  onClose,
  onSelectPhoto,
  onNext,
  onPrev,
}) => {
  const currentPhoto = photo ?? selectedPhoto ?? null;
  const isVisible = isOpen !== undefined ? isOpen && !!currentPhoto : !!currentPhoto;

  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragDistanceRef = useRef<number>(0);

  const currentIndex = useMemo(() => {
    if (!currentPhoto || !photos || photos.length === 0) return -1;
    return photos.findIndex((p) => p.id === currentPhoto.id);
  }, [currentPhoto, photos]);

  const handleClose = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    onClose?.();
    onSelectPhoto?.(null);
  }, [onClose, onSelectPhoto]);

  const handlePrev = useCallback(() => {
    if (onPrev) {
      onPrev();
      return;
    }
    if (!photos || photos.length <= 1 || currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto?.(photos[prevIndex]);
  }, [onPrev, photos, currentIndex, onSelectPhoto]);

  const handleNext = useCallback(() => {
    if (onNext) {
      onNext();
      return;
    }
    if (!photos || photos.length <= 1 || currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto?.(photos[nextIndex]);
  }, [onNext, photos, currentIndex, onSelectPhoto]);

  const zoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const toggleZoom = useCallback(() => {
    if (zoom > 1) {
      resetZoom();
    } else {
      setZoom(2.5);
    }
  }, [zoom, resetZoom]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [currentPhoto?.id]);

  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          handleClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handlePrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleNext();
          break;
        case "+":
        case "=":
          e.preventDefault();
          zoomIn();
          break;
        case "-":
        case "_":
          e.preventDefault();
          zoomOut();
          break;
        case "0":
          e.preventDefault();
          resetZoom();
          break;
        case "i":
        case "I":
          e.preventDefault();
          setShowInfo((prev) => !prev);
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    isVisible,
    handleClose,
    handlePrev,
    handleNext,
    zoomIn,
    zoomOut,
    resetZoom,
    toggleFullscreen,
  ]);

  useEffect(() => {
    if (!isDragging) return;

    const onWindowMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      dragDistanceRef.current = Math.hypot(dx, dy);
      setPan({
        x: panStartRef.current.x + dx,
        y: panStartRef.current.y + dy,
      });
    };

    const onWindowMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", onWindowMouseMove);
    window.addEventListener("mouseup", onWindowMouseUp);

    return () => {
      window.removeEventListener("mousemove", onWindowMouseMove);
      window.removeEventListener("mouseup", onWindowMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragDistanceRef.current = 0;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...pan };
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dragDistanceRef.current > 6) {
      dragDistanceRef.current = 0;
      return;
    }
    toggleZoom();
  };

  if (!isVisible || !currentPhoto) {
    return null;
  }

  const hasPhotoList = Boolean(photos && photos.length > 1);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-black/95 backdrop-blur-2xl text-zinc-100 select-none"
    >
      {currentPhoto.dominantColor && (
        <div
          className="pointer-events-none absolute inset-0 opacity-20 blur-3xl transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${currentPhoto.dominantColor} 0%, transparent 75%)`,
          }}
        />
      )}

      <header className="relative z-20 w-full flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-3 min-w-0">
          {hasPhotoList && currentIndex !== -1 && (
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-300 shrink-0">
              {String(currentIndex + 1).padStart(2, "0")} / {String(photos?.length ?? 0).padStart(2, "0")}
            </span>
          )}
          <div className="min-w-0 truncate">
            <h2 className="font-serif text-base sm:text-lg font-medium text-white tracking-wide truncate">
              {currentPhoto.title}
            </h2>
            <p className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 truncate">
              <span>{currentPhoto.collectionTitle}</span>
              {currentPhoto.year && <span>&middot; {currentPhoto.year}</span>}
              {currentPhoto.location && <span>&middot; {currentPhoto.location}</span>}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-lg p-0.5 backdrop-blur-md">
            <button
              onClick={zoomOut}
              disabled={zoom <= 1}
              title="Zoom Out (-)"
              className="p-1.5 rounded text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={resetZoom}
              title="Reset Zoom (0)"
              className="px-2 py-1 text-xs font-mono text-zinc-300 hover:text-white transition"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={zoomIn}
              disabled={zoom >= 4}
              title="Zoom In (+)"
              className="p-1.5 rounded text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setShowInfo((prev) => !prev)}
            title="Toggle Telemetry (I)"
            className={`p-2 rounded-lg border backdrop-blur-md transition ${
              showInfo
                ? "bg-white text-zinc-900 border-white shadow-sm"
                : "bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
            className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white backdrop-blur-md transition"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={handleClose}
            title="Close (ESC)"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white backdrop-blur-md transition group"
          >
            <X className="w-4 h-4" />
            <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-400">ESC</span>
          </button>
        </div>
      </header>

      <div
        onClick={(e) => {
          if (e.target === e.currentTarget && zoom === 1) {
            handleClose();
          }
        }}
        className="relative flex-1 w-full flex items-center justify-center overflow-hidden p-4 sm:p-8"
      >
        {hasPhotoList && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            title="Previous Photo (Left Arrow)"
            className="absolute left-4 z-20 p-3 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800/80 text-zinc-300 hover:text-white backdrop-blur-md transition shadow-2xl hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div
          onMouseDown={handleMouseDown}
          onClick={handleImageClick}
          className={`relative max-w-full max-h-full transition-[transform] ${
            isDragging ? "duration-0" : "duration-200"
          }`}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
          }}
        >
          <img
            src={currentPhoto.url}
            alt={currentPhoto.title}
            draggable={false}
            className="max-h-[75vh] sm:max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
          />
        </div>

        {hasPhotoList && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            title="Next Photo (Right Arrow)"
            className="absolute right-4 z-20 p-3 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800/80 text-zinc-300 hover:text-white backdrop-blur-md transition shadow-2xl hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {showInfo && (
        <footer className="relative z-20 w-full px-6 py-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-zinc-900/60">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg font-medium text-white">
                {currentPhoto.title}
              </h3>
              {currentPhoto.year && (
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
                  {currentPhoto.year}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono mt-0.5">
              {currentPhoto.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {currentPhoto.location}
                </span>
              )}
              <span>&middot;</span>
              <span>
                {currentPhoto.width} &times; {currentPhoto.height}
              </span>
              <span>&middot;</span>
              <span>{currentPhoto.aspectRatio.toFixed(2)}:1</span>
            </div>
          </div>

          {currentPhoto.exif && (
            <div className="flex items-center flex-wrap gap-2 text-xs font-mono">
              {currentPhoto.exif.camera && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-200">
                  <Camera className="w-3.5 h-3.5 text-sky-400" />
                  <span>{currentPhoto.exif.camera}</span>
                </div>
              )}
              {currentPhoto.exif.lens && (
                <div className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                  {currentPhoto.exif.lens}
                </div>
              )}
              {currentPhoto.exif.focalLength && (
                <div className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                  {currentPhoto.exif.focalLength}
                </div>
              )}
              {currentPhoto.exif.aperture && (
                <div className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-amber-400 font-medium">
                  {currentPhoto.exif.aperture}
                </div>
              )}
              {currentPhoto.exif.shutterSpeed && (
                <div className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-200">
                  {currentPhoto.exif.shutterSpeed}
                </div>
              )}
              {currentPhoto.exif.iso && (
                <div className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-emerald-400 font-medium">
                  ISO {currentPhoto.exif.iso}
                </div>
              )}
            </div>
          )}
        </footer>
      )}
    </div>
  );
};

export default PhotoModal;
