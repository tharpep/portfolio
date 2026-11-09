import React, { useEffect, useId, useState } from "react";

export type FilmStock =
  | "fine"
  | "medium"
  | "coarse"
  | "gritty"
  | "iso100"
  | "iso400"
  | "iso800"
  | "iso1600"
  | "tri-x"
  | "custom";

export interface FilmGrainProps {
  opacity?: number;
  baseFrequency?: number | string;
  numOctaves?: number;
  blendMode?: React.CSSProperties["mixBlendMode"];
  filmStock?: FilmStock;
  monochrome?: boolean;
  animated?: boolean;
  position?: "absolute" | "fixed";
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
  id?: string;
  children?: React.ReactNode;
}

const FILM_STOCK_PRESETS: Record<
  Exclude<FilmStock, "custom">,
  {
    opacity: number;
    baseFrequency: number;
    numOctaves: number;
    blendMode: React.CSSProperties["mixBlendMode"];
  }
> = {
  fine: { opacity: 0.04, baseFrequency: 0.85, numOctaves: 3, blendMode: "overlay" },
  medium: { opacity: 0.07, baseFrequency: 0.65, numOctaves: 3, blendMode: "overlay" },
  coarse: { opacity: 0.11, baseFrequency: 0.5, numOctaves: 4, blendMode: "overlay" },
  gritty: { opacity: 0.16, baseFrequency: 0.38, numOctaves: 4, blendMode: "overlay" },
  iso100: { opacity: 0.04, baseFrequency: 0.85, numOctaves: 3, blendMode: "overlay" },
  iso400: { opacity: 0.07, baseFrequency: 0.65, numOctaves: 3, blendMode: "overlay" },
  iso800: { opacity: 0.1, baseFrequency: 0.55, numOctaves: 3, blendMode: "overlay" },
  iso1600: { opacity: 0.14, baseFrequency: 0.45, numOctaves: 4, blendMode: "overlay" },
  "tri-x": { opacity: 0.1, baseFrequency: 0.6, numOctaves: 4, blendMode: "hard-light" },
};

export const FilmGrain: React.FC<FilmGrainProps> = ({
  opacity,
  baseFrequency,
  numOctaves,
  blendMode,
  filmStock,
  monochrome = true,
  animated = false,
  position = "absolute",
  className = "",
  containerClassName = "",
  style,
  id,
  children,
}) => {
  const generatedId = useId();
  const filterId = id ?? `film-grain-${generatedId.replace(/:/g, "")}`;
  const [seed, setSeed] = useState(1);

  const preset = filmStock && filmStock !== "custom" ? FILM_STOCK_PRESETS[filmStock] : undefined;
  const effectiveOpacity = opacity ?? preset?.opacity ?? 0.07;
  const effectiveBaseFreq = baseFrequency ?? preset?.baseFrequency ?? 0.65;
  const effectiveOctaves = numOctaves ?? preset?.numOctaves ?? 3;
  const effectiveBlendMode = blendMode ?? preset?.blendMode ?? "overlay";

  useEffect(() => {
    if (!animated) return;
    const interval = setInterval(() => {
      setSeed((prev) => (prev % 100) + 1);
    }, 90);
    return () => clearInterval(interval);
  }, [animated]);

  const overlay = (
    <div
      className={`pointer-events-none select-none overflow-hidden ${
        position === "fixed" ? "fixed inset-0 z-40" : "absolute inset-0 z-10"
      } ${className}`.trim()}
      style={{
        opacity: effectiveOpacity,
        mixBlendMode: effectiveBlendMode,
        pointerEvents: "none",
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        className="pointer-events-none block h-full w-full"
        style={{ pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        pointerEvents="none"
      >
        <defs>
          <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={effectiveBaseFreq}
              numOctaves={effectiveOctaves}
              stitchTiles="stitch"
              seed={seed}
              result="noise"
            />
            <feColorMatrix
              type={monochrome ? "matrix" : "identity"}
              values={
                monochrome
                  ? "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
                  : undefined
              }
              in="noise"
              result="mono"
            />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter={`url(#${filterId})`}
          fill="#808080"
          className="pointer-events-none"
          style={{ pointerEvents: "none" }}
          pointerEvents="none"
        />
      </svg>
    </div>
  );

  if (children) {
    return (
      <div className={`relative ${containerClassName}`.trim()}>
        {children}
        {overlay}
      </div>
    );
  }

  return overlay;
};

export default FilmGrain;
