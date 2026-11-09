import React, { useState, useRef, useEffect, useId } from "react";
import type { PhotoItem } from "@/core/types";

export type BezelStyle = "silver" | "dark" | "brass" | "titanium";

export interface OpticalLoupeLensProps {
  src: string;
  x: number;
  y: number;
  containerWidth: number;
  containerHeight: number;
  zoom?: number;
  size?: number;
  bezelStyle?: BezelStyle;
  showReticle?: boolean;
  showBadge?: boolean;
  badgeLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
}

export interface OpticalLoupeProps {
  src?: string;
  photo?: PhotoItem;
  active?: boolean;
  zoom?: number;
  size?: number;
  bezelStyle?: BezelStyle;
  className?: string;
  loupeClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  cursorPos?: { x: number; y: number } | null;
  containerSize?: { width: number; height: number };
  targetRef?: React.RefObject<HTMLElement | null>;
  showReticle?: boolean;
  showBadge?: boolean;
  badgeLabel?: string;
  allowWheelZoom?: boolean;
  minZoom?: number;
  maxZoom?: number;
  onPositionChange?: (pos: {
    x: number;
    y: number;
    normalizedX: number;
    normalizedY: number;
  }) => void;
}

const BEZEL_GRADIENTS: Record<BezelStyle, string> = {
  silver:
    "conic-gradient(from 135deg at 50% 50%, #e4e4e7 0deg, #71717a 40deg, #f4f4f5 80deg, #52525b 120deg, #a1a1aa 160deg, #3f3f46 200deg, #f4f4f5 240deg, #71717a 280deg, #d4d4d8 320deg, #e4e4e7 360deg)",
  dark:
    "conic-gradient(from 135deg at 50% 50%, #3f3f46 0deg, #18181b 45deg, #52525b 90deg, #27272a 135deg, #3f3f46 180deg, #18181b 225deg, #52525b 270deg, #27272a 315deg, #3f3f46 360deg)",
  titanium:
    "conic-gradient(from 135deg at 50% 50%, #a1a1aa 0deg, #52525b 45deg, #d4d4d8 90deg, #3f3f46 135deg, #71717a 180deg, #52525b 225deg, #a1a1aa 270deg, #3f3f46 315deg, #a1a1aa 360deg)",
  brass:
    "conic-gradient(from 135deg at 50% 50%, #d97706 0deg, #78350f 45deg, #fef3c7 90deg, #92400e 135deg, #f59e0b 180deg, #78350f 225deg, #fef3c7 270deg, #b45309 315deg, #d97706 360deg)",
};

const BEZEL_TEXT_COLORS: Record<BezelStyle, string> = {
  silver: "text-zinc-200",
  dark: "text-zinc-400",
  titanium: "text-zinc-300",
  brass: "text-amber-200",
};

function extractImageSrc(children: React.ReactNode): string | undefined {
  let foundSrc: string | undefined;
  React.Children.forEach(children, (child) => {
    if (foundSrc) return;
    if (React.isValidElement(child)) {
      const props = child.props as Record<string, unknown>;
      if (typeof props?.src === "string") {
        foundSrc = props.src;
      } else if (props?.children) {
        foundSrc = extractImageSrc(props.children as React.ReactNode);
      }
    }
  });
  return foundSrc;
}

export const OpticalLoupeLens: React.FC<OpticalLoupeLensProps> = ({
  src,
  x,
  y,
  containerWidth,
  containerHeight,
  zoom = 2.5,
  size = 200,
  bezelStyle = "silver",
  showReticle = false,
  showBadge = true,
  badgeLabel,
  className = "",
  style,
  visible = true,
}) => {
  const rawId = useId();
  const filterId = "optical-loupe-chromatic-" + rawId.replace(/[^a-zA-Z0-9_-]/g, "");

  const bezelWidth = 12;
  const innerSize = Math.max(10, size - bezelWidth * 2);
  const innerRadius = innerSize / 2;

  const magWidth = containerWidth > 0 ? containerWidth * zoom : size * zoom;
  const magHeight = containerHeight > 0 ? containerHeight * zoom : size * zoom;

  const imageTransform = `translate3d(${innerRadius - x * zoom}px, ${innerRadius - y * zoom}px, 0)`;

  return (
    <div
      className={`pointer-events-none absolute left-0 top-0 transition-opacity duration-150 ease-out select-none z-50 ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        transform: `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`,
        width: size,
        height: size,
        ...style,
      }}
    >
      <svg
        className="absolute w-0 h-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <filter
          id={filterId}
          colorInterpolationFilters="sRGB"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            in="SourceGraphic"
            result="red_channel"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
            in="SourceGraphic"
            result="green_channel"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
            in="SourceGraphic"
            result="blue_channel"
          />
          <feOffset in="red_channel" dx="3" dy="0" result="red_shifted" />
          <feOffset in="blue_channel" dx="-3" dy="0" result="blue_shifted" />
          <feBlend in="red_shifted" in2="green_channel" mode="screen" result="rg" />
          <feBlend in="rg" in2="blue_shifted" mode="screen" result="final_rgb" />
        </filter>
      </svg>

      <div
        className="relative w-full h-full rounded-full"
        style={{
          background: BEZEL_GRADIENTS[bezelStyle],
          boxShadow:
            "0 20px 40px -8px rgba(0, 0, 0, 0.8), 0 10px 15px -4px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.7)",
          padding: bezelWidth,
        }}
      >
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.15) 0deg 0.5deg, transparent 0.5deg 30deg)",
          }}
        />

        {showBadge && (
          <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs border border-white/10 shadow-xs">
            <span
              className={`text-[8px] font-mono font-bold tracking-widest uppercase select-none ${BEZEL_TEXT_COLORS[bezelStyle]}`}
            >
              {badgeLabel || `${zoom.toFixed(1)}× LOUPE`}
            </span>
          </div>
        )}

        <div
          className="relative w-full h-full rounded-full overflow-hidden bg-zinc-950"
          style={{
            boxShadow:
              "inset 0 3px 8px rgba(0, 0, 0, 0.95), inset 0 0 0 1.5px rgba(24, 24, 27, 0.9), inset 0 0 0 2.5px rgba(255, 255, 255, 0.15)",
          }}
        >
          {src && (
            <>
              <img
                src={src}
                alt="Magnified view"
                className="absolute left-0 top-0 max-w-none pointer-events-none select-none"
                style={{
                  width: magWidth,
                  height: magHeight,
                  transform: imageTransform,
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, transparent 58%, rgba(0, 0, 0, 0.8) 85%, black 98%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, transparent 58%, rgba(0, 0, 0, 0.8) 85%, black 98%)",
                }}
              >
                <img
                  src={src}
                  alt="Aberration fringe"
                  aria-hidden="true"
                  className="absolute left-0 top-0 max-w-none pointer-events-none select-none"
                  style={{
                    width: magWidth,
                    height: magHeight,
                    transform: imageTransform,
                    filter: `url(#${filterId})`,
                  }}
                />
              </div>
            </>
          )}

          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, transparent 65%, rgba(56, 189, 248, 0.14) 80%, rgba(236, 72, 153, 0.22) 92%, rgba(0, 0, 0, 0.45) 100%)",
              boxShadow:
                "inset 2px 0 6px -1px rgba(244, 63, 94, 0.35), inset -2px 0 6px -1px rgba(14, 165, 233, 0.35)",
            }}
          />

          {showReticle && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-full h-px bg-zinc-300/40 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-zinc-300/60" />
              </div>
              <div className="absolute h-full w-px bg-zinc-300/40" />
            </div>
          )}

          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 50%, rgba(255, 255, 255, 0.05) 80%, rgba(255, 255, 255, 0.12) 100%)",
              boxShadow: "inset 0 0 16px rgba(0, 0, 0, 0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const OpticalLoupe: React.FC<OpticalLoupeProps> = ({
  src,
  photo,
  active = true,
  zoom = 2.5,
  size = 200,
  bezelStyle = "silver",
  className = "",
  loupeClassName = "",
  style,
  children,
  cursorPos,
  containerSize,
  targetRef,
  showReticle = false,
  showBadge = true,
  badgeLabel,
  allowWheelZoom = false,
  minZoom = 1.5,
  maxZoom = 6.0,
  onPositionChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: containerSize?.width ?? 0,
    height: containerSize?.height ?? 0,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentZoom, setCurrentZoom] = useState<number>(zoom);

  useEffect(() => {
    setCurrentZoom(zoom);
  }, [zoom]);

  const resolvedSrc = src || photo?.url || extractImageSrc(children) || "";

  useEffect(() => {
    if (containerSize) {
      setDimensions(containerSize);
    }
  }, [containerSize]);

  useEffect(() => {
    const el = targetRef?.current || containerRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetRef]);

  useEffect(() => {
    const el = targetRef?.current;
    if (!el) return;

    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
      setIsHovered(true);
      onPositionChange?.({
        x,
        y,
        normalizedX: rect.width > 0 ? x / rect.width : 0,
        normalizedY: rect.height > 0 ? y / rect.height : 0,
      });
    };

    const onPointerLeave = () => {
      setIsHovered(false);
    };

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [targetRef, onPositionChange]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    setIsHovered(true);
    onPositionChange?.({
      x,
      y,
      normalizedX: rect.width > 0 ? x / rect.width : 0,
      normalizedY: rect.height > 0 ? y / rect.height : 0,
    });
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setDimensions({ width: rect.width, height: rect.height });
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
    }
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!allowWheelZoom) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setCurrentZoom((prev) => {
      const next = Math.round((prev + delta) * 100) / 100;
      return Math.min(Math.max(next, minZoom), maxZoom);
    });
  };

  const effectiveX = cursorPos ? cursorPos.x : coords.x;
  const effectiveY = cursorPos ? cursorPos.y : coords.y;
  const isVisible = active && (cursorPos !== undefined ? cursorPos !== null : isHovered);

  const lensElement = (
    <OpticalLoupeLens
      src={resolvedSrc}
      x={effectiveX}
      y={effectiveY}
      containerWidth={dimensions.width}
      containerHeight={dimensions.height}
      zoom={currentZoom}
      size={size}
      bezelStyle={bezelStyle}
      showReticle={showReticle}
      showBadge={showBadge}
      badgeLabel={badgeLabel}
      className={loupeClassName}
      visible={isVisible}
    />
  );

  if (!children) {
    return lensElement;
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onWheel={allowWheelZoom ? handleWheel : undefined}
      className={`relative select-none ${active ? "cursor-crosshair" : ""} ${className}`}
      style={style}
    >
      {children}
      {lensElement}
    </div>
  );
};

export default OpticalLoupe;
