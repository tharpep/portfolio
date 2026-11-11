import React from "react";
import clsx from "clsx";
import type { PhotoItem } from "@/core/types";

export interface AmbientAuraProps {
  dominantColor?: string | null;
  color?: string | null;
  photo?: PhotoItem | null;
  activePhoto?: PhotoItem | null;
  opacity?: number;
  blur?: number;
  intensity?: "subtle" | "medium" | "vibrant" | number;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function parseHex(hex: string): [number, number, number] | null {
  const clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null;
    return [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null;
    return [r, g, b];
  }
  return null;
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const normR = r / 255;
  const normG = g / 255;
  const normB = b / 255;
  const max = Math.max(normR, normG, normB);
  const min = Math.min(normR, normG, normB);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case normR:
        h = (normG - normB) / d + (normG < normB ? 6 : 0);
        break;
      case normG:
        h = (normB - normR) / d + 2;
        break;
      case normB:
        h = (normR - normG) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const cleanH = ((h % 360) + 360) % 360;
  const cleanS = Math.max(0, Math.min(100, s)) / 100;
  const cleanL = Math.max(0, Math.min(100, l)) / 100;

  const c = (1 - Math.abs(2 * cleanL - 1)) * cleanS;
  const x = c * (1 - Math.abs(((cleanH / 60) % 2) - 1));
  const m = cleanL - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (cleanH < 60) {
    r = c;
    g = x;
  } else if (cleanH < 120) {
    r = x;
    g = c;
  } else if (cleanH < 180) {
    g = c;
    b = x;
  } else if (cleanH < 240) {
    g = x;
    b = c;
  } else if (cleanH < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ];
}

const AURA_KEYFRAMES = `
@keyframes aura-drift-1 {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(8%, -6%, 0) scale(1.08); }
  100% { transform: translate3d(-6%, 8%, 0) scale(0.96); }
}
@keyframes aura-drift-2 {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-10%, 6%, 0) scale(1.12); }
  100% { transform: translate3d(6%, -8%, 0) scale(0.92); }
}
@keyframes aura-pulse {
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.7; }
}
@media (prefers-reduced-motion: reduce) {
  .aura-animated-1,
  .aura-animated-2,
  .aura-animated-3 {
    animation: none !important;
  }
}
`;

export const AmbientAura: React.FC<AmbientAuraProps> = ({
  dominantColor,
  color,
  photo,
  activePhoto,
  opacity = 0.35,
  blur = 100,
  intensity = "medium",
  animated = true,
  className,
  style,
  children,
}) => {
  const resolvedColorStr =
    dominantColor ||
    color ||
    photo?.dominantColor ||
    activePhoto?.dominantColor ||
    "#0ea5e9";

  const intensityFactor =
    typeof intensity === "number"
      ? intensity
      : intensity === "subtle"
        ? 0.55
        : intensity === "vibrant"
          ? 1.45
          : 1.0;

  const baseOpacity = Math.min(1, Math.max(0, opacity * intensityFactor));

  const rgb = parseHex(resolvedColorStr) ?? [14, 165, 233];
  const [h, s, l] = rgbToHsl(rgb[0], rgb[1], rgb[2]);

  const secondaryRgb = hslToRgb((h + 42) % 360, s, Math.max(15, l * 0.9));
  const accentRgb = hslToRgb(
    (h - 32 + 360) % 360,
    Math.min(100, s * 1.1),
    Math.min(85, l * 1.1)
  );

  const primaryRgba = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${baseOpacity})`;
  const secondaryRgba = `rgba(${secondaryRgb[0]}, ${secondaryRgb[1]}, ${secondaryRgb[2]}, ${baseOpacity * 0.75})`;
  const accentRgba = `rgba(${accentRgb[0]}, ${accentRgb[1]}, ${accentRgb[2]}, ${baseOpacity * 0.55})`;

  const backdropContent = (
    <>
      <style>{AURA_KEYFRAMES}</style>

      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at 50% 35%, ${primaryRgba} 0%, transparent 75%)`,
        }}
      />

      <div
        className={clsx(
          "absolute -top-[15%] -left-[10%] w-[60vw] h-[60vh] min-w-[280px] min-h-[280px] max-w-[850px] max-h-[850px] rounded-full will-change-transform",
          animated && "aura-animated-1"
        )}
        style={{
          backgroundColor: primaryRgba,
          filter: `blur(${blur}px)`,
          animation: animated
            ? "aura-drift-1 18s ease-in-out infinite alternate"
            : undefined,
          transition:
            "background-color 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s ease-out",
        }}
      />

      <div
        className={clsx(
          "absolute -bottom-[15%] -right-[10%] w-[55vw] h-[55vh] min-w-[260px] min-h-[260px] max-w-[750px] max-h-[750px] rounded-full will-change-transform",
          animated && "aura-animated-2"
        )}
        style={{
          backgroundColor: secondaryRgba,
          filter: `blur(${Math.round(blur * 1.15)}px)`,
          animation: animated
            ? "aura-drift-2 22s ease-in-out infinite alternate-reverse"
            : undefined,
          transition:
            "background-color 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s ease-out",
        }}
      />

      <div
        className={clsx(
          "absolute top-[25%] left-[30%] w-[45vw] h-[45vh] min-w-[220px] min-h-[220px] max-w-[650px] max-h-[650px] rounded-full will-change-transform",
          animated && "aura-animated-3"
        )}
        style={{
          backgroundColor: accentRgba,
          filter: `blur(${Math.round(blur * 0.9)}px)`,
          animation: animated
            ? "aura-pulse 14s ease-in-out infinite alternate"
            : undefined,
          transition:
            "background-color 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s ease-out",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(9, 9, 11, 0.65) 100%)",
        }}
      />
    </>
  );

  if (children) {
    return (
      <div className={clsx("relative", className)} style={style}>
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
          aria-hidden="true"
        >
          {backdropContent}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 overflow-hidden pointer-events-none -z-10",
        className
      )}
      style={style}
      aria-hidden="true"
    >
      {backdropContent}
    </div>
  );
};

export default AmbientAura;
