import React, { useEffect } from "react";
import type { PhotoItem } from "@/core/types";
import { X, MapPin, Crosshair } from "lucide-react";

export interface ExifHudProps {
  photo?: PhotoItem | null;
  selectedPhoto?: PhotoItem | null;
  onClose?: () => void;
  onSelectPhoto?: (photo: PhotoItem | null) => void;
  className?: string;
  isVisible?: boolean;
}

const COORDINATE_MAP: Record<string, string> = {
  "tokyo, japan": "35°40'35\"N 139°39'00\"E",
  "shinjuku, tokyo": "35°41'38\"N 139°42'12\"E",
  "shibuya, tokyo": "35°39'34\"N 139°42'02\"E",
  "kamakura, japan": "35°19'09\"N 139°32'48\"E",
  "kyoto, japan": "35°00'42\"N 135°46'05\"E",
  "new york city": "40°42'46\"N 74°00'22\"W",
  "manhattan, new york": "40°43'08\"N 73°59'44\"W",
  "brooklyn, new york": "40°41'34\"N 73°59'25\"W",
};

function getAspectRatio(photo: PhotoItem): string {
  if (photo.aspectRatio) {
    const r = photo.aspectRatio;
    if (Math.abs(r - 1.5) < 0.05) return "3:2";
    if (Math.abs(r - 0.667) < 0.05) return "2:3";
    if (Math.abs(r - 1.333) < 0.05) return "4:3";
    if (Math.abs(r - 0.75) < 0.05) return "3:4";
    if (Math.abs(r - 1.778) < 0.05) return "16:9";
    if (Math.abs(r - 0.5625) < 0.05) return "9:16";
    if (Math.abs(r - 0.8) < 0.05) return "4:5";
    if (Math.abs(r - 1.25) < 0.05) return "5:4";
    if (Math.abs(r - 1.0) < 0.05) return "1:1";
  }
  if (photo.width && photo.height) {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(photo.width, photo.height);
    const w = photo.width / divisor;
    const h = photo.height / divisor;
    if (w <= 16 && h <= 16) {
      return `${w}:${h}`;
    }
  }
  return photo.aspectRatio ? `${photo.aspectRatio.toFixed(2)}:1` : "3:2";
}

function getLocationCoordinates(location?: string, title?: string): string {
  if (!location && !title) return "35°40'35\"N 139°39'00\"E";
  const locLower = (location || "").toLowerCase().trim();
  const titleLower = (title || "").toLowerCase();

  if (titleLower.includes("shinjuku")) return "35°41'38\"N 139°42'12\"E";
  if (titleLower.includes("shibuya")) return "35°39'34\"N 139°42'02\"E";
  if (titleLower.includes("bamboo") || titleLower.includes("arashiyama")) return "35°01'01\"N 135°40'15\"E";
  if (titleLower.includes("gion")) return "35°00'13\"N 135°46'30\"E";
  if (titleLower.includes("torii") || titleLower.includes("kamakura")) return "35°19'09\"N 139°32'48\"E";

  if (COORDINATE_MAP[locLower]) {
    return COORDINATE_MAP[locLower];
  }
  for (const [key, coords] of Object.entries(COORDINATE_MAP)) {
    if (locLower.includes(key) || key.includes(locLower)) {
      return coords;
    }
  }

  let hash = 0;
  const str = location || title || "obscura";
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const latDeg = 30 + (Math.abs(hash) % 20);
  const latMin = Math.abs(hash >> 2) % 60;
  const latSec = Math.abs(hash >> 4) % 60;
  const lonDeg = 130 + (Math.abs(hash >> 6) % 20);
  const lonMin = Math.abs(hash >> 8) % 60;
  const lonSec = Math.abs(hash >> 10) % 60;

  return `${latDeg}°${latMin.toString().padStart(2, "0")}'${latSec.toString().padStart(2, "0")}"N ${lonDeg}°${lonMin.toString().padStart(2, "0")}'${lonSec.toString().padStart(2, "0")}"E`;
}

export const ExifHud: React.FC<ExifHudProps> = ({
  photo,
  selectedPhoto,
  onClose,
  onSelectPhoto,
  className = "",
  isVisible,
}) => {
  const activePhoto = photo ?? selectedPhoto ?? null;

  useEffect(() => {
    if (!activePhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
        onSelectPhoto?.(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, onClose, onSelectPhoto]);

  if (isVisible !== undefined && !isVisible) return null;
  if (!activePhoto) return null;

  const handleClose = () => {
    onClose?.();
    onSelectPhoto?.(null);
  };

  const exif = activePhoto.exif;
  const shutterSpeed = exif?.shutterSpeed || "1/250s";
  const aperture = exif?.aperture || "f/1.8";
  const iso = exif?.iso !== undefined ? `${exif.iso}` : "320";
  const focalLength = exif?.focalLength || "35mm";
  const lens = exif?.lens || "FE 35mm F1.8";
  const cameraBody = exif?.camera || exif?.model || "Sony A7C";
  const aspectRatio = getAspectRatio(activePhoto);
  const coordinates = getLocationCoordinates(activePhoto.location, activePhoto.title);
  const locationName = activePhoto.location || "Tokyo, Japan";

  return (
    <div
      role="region"
      aria-label="Camera Telemetry HUD"
      data-testid="exif-hud"
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[480px] z-50 bg-zinc-950/92 backdrop-blur-md border border-zinc-800/90 rounded-2xl shadow-2xl shadow-black/90 p-4 text-zinc-200 select-none ${className}`}
    >
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#ff6600]/70 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#ff6600]/70 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#ff6600]/70 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#ff6600]/70 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <Crosshair className="w-10 h-10 text-white stroke-1" />
      </div>

      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#ff6600]/20 text-[#ff7722] border border-[#ff6600]/40 flex items-center gap-1 tracking-wider">
            <span className="text-xs">α</span>
            <span>ALPHA</span>
          </span>
          <span
            data-testid="exif-camera-body"
            className="text-xs font-mono font-semibold tracking-wider text-zinc-200"
          >
            {cameraBody}
          </span>
          <span
            data-testid="exif-aspect-ratio"
            className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800"
          >
            {aspectRatio}
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800">
            RAW
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>EVF</span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            data-testid="exif-hud-close"
            aria-label="Close telemetry overlay"
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 py-1.5 text-[10px] font-mono text-zinc-500 border-b border-zinc-800/40">
        <span className="w-10 h-px bg-zinc-700/80" />
        <span className="text-emerald-400 font-medium tracking-widest flex items-center gap-1">
          <span className="inline-block w-1 h-2 bg-emerald-400 rounded-xs" />
          <span>LEVEL ±0.0°</span>
          <span className="inline-block w-1 h-2 bg-emerald-400 rounded-xs" />
        </span>
        <span className="w-10 h-px bg-zinc-700/80" />
      </div>

      <div className="grid grid-cols-2 gap-3 py-2.5 border-b border-zinc-800/80 text-xs font-mono">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500">Lens</span>
          <span data-testid="exif-lens" className="text-zinc-200 font-medium truncate" title={lens}>
            {lens}
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500">Focal Length</span>
          <span data-testid="exif-focal-length" className="text-zinc-200 font-medium">
            {focalLength}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 py-2 border-b border-zinc-800/80 text-xs font-mono">
        <div className="flex items-center gap-1.5 text-zinc-400 min-w-0">
          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span className="text-zinc-300 truncate text-[11px] font-medium">{locationName}</span>
        </div>
        <div
          data-testid="exif-coordinates"
          className="text-[11px] font-mono text-zinc-400 tabular-nums shrink-0 tracking-tight"
        >
          {coordinates}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-2.5 text-center font-mono">
        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-[9px] uppercase tracking-wider text-zinc-500 mb-0.5">Shutter</span>
          <span
            data-testid="exif-shutter-speed"
            className="text-sm sm:text-base font-bold text-white tracking-tight tabular-nums"
          >
            {shutterSpeed}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-[9px] uppercase tracking-wider text-zinc-500 mb-0.5">Aperture</span>
          <span
            data-testid="exif-aperture"
            className="text-sm sm:text-base font-bold text-white tracking-tight tabular-nums"
          >
            {aperture}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-[9px] uppercase tracking-wider text-zinc-500 mb-0.5">EV Comp</span>
          <span className="text-xs sm:text-sm font-semibold text-zinc-300 tracking-tight tabular-nums">
            ±0.0
          </span>
          <span className="text-[8px] text-zinc-500 tracking-widest mt-0.5">··|··</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/90 border border-orange-500/40 shadow-[0_0_12px_rgba(255,102,0,0.15)]">
          <span className="text-[9px] uppercase tracking-wider text-orange-400 font-bold mb-0.5">ISO</span>
          <span
            data-testid="exif-iso"
            className="text-sm sm:text-base font-bold text-orange-400 tracking-tight tabular-nums"
          >
            {iso}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExifHud;
