'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { flushSync } from 'react-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import type { CloudinaryPhoto, ExifData } from '@/lib/cloudinary';
import { photoTransitionName } from '@/lib/photoTransitionName';

// Direction-aware slide for navigating between two *different* photos while
// the lightbox is already open. Deliberately not run through
// document.startViewTransition — that API only produces a clean morph when
// old/new share one view-transition-name (the thumbnail<->lightbox case for
// the *same* photo). Two different photos each get their own unique name, so
// the browser animates them as two independent, unmatched groups — both
// visible at once mid-crossfade. mode="wait" here guarantees the outgoing
// photo has fully left before the next one appears.
const slideVariants: Variants = {
  enter: (dir: 1 | -1) => ({ opacity: 0, x: dir * 24 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: 1 | -1) => ({ opacity: 0, x: dir * -24 }),
};

function ExifLine({ exif }: { exif: ExifData }) {
  const parts: string[] = [];
  if (exif.make || exif.model) {
    // Prefer model alone if it already includes brand (e.g. "SONY ILCE-7C"), else join
    const brand = exif.make ?? '';
    const model = exif.model ?? '';
    const modelIncludesBrand = brand && model.toLowerCase().includes(brand.toLowerCase());
    parts.push(modelIncludesBrand ? model : [brand, model].filter(Boolean).join(' '));
  }
  if (exif.aperture) parts.push(exif.aperture);
  if (exif.shutterSpeed) parts.push(exif.shutterSpeed);
  if (exif.iso) parts.push(`ISO ${exif.iso}`);
  if (exif.focalLength) parts.push(exif.focalLength);

  if (parts.length === 0) return null;
  return (
    <p className="mt-1 text-white/30 text-xs font-mono tracking-wider text-center">
      {parts.join('  •  ')}
    </p>
  );
}

// One tile in the horizontal track. Owns its own scroll-linked parallax
// progress (via motion's useScroll targeting this tile within the shared
// scrollable track) so each photo drifts at a slightly different depth as it
// passes through the visible area. The parallax transform lives on this
// *outer* motion.div — the inner div carrying view-transition-name stays
// transform-free, since a lingering transform/will-change on a VT-named
// element is a known source of incorrect view-transition snapshot sizing.
function GalleryTile({
  photo,
  index,
  trackRef,
  isOpenInLightbox,
  reducedMotion,
  focusRing,
  onOpen,
}: {
  photo: CloudinaryPhoto;
  index: number;
  trackRef: React.RefObject<HTMLDivElement | null>;
  isOpenInLightbox: boolean;
  reducedMotion: boolean;
  focusRing: string;
  onOpen: (index: number, trigger: HTMLButtonElement) => void;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: tileRef,
    container: trackRef,
    axis: 'x',
    offset: ['start end', 'end start'],
  });
  const depth = reducedMotion ? 0 : 22;
  const rawY = useTransform(scrollXProgress, [0, 0.5, 1], [depth, 0, -depth]);
  const y = useSpring(rawY, { damping: 28, stiffness: 320, mass: 0.4 });

  // useScroll can't measure anything server-side (no DOM), but motion still
  // computes rawY's initial value and applies it imperatively to the DOM node
  // once mounted — bypassing React's own render output. That mismatches
  // whatever plain (transform-less) markup SSR produced, which is a real
  // hydration-mismatch warning, not just a style. Withhold the transform
  // entirely until after mount so SSR and the first client paint agree.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      ref={tileRef}
      style={mounted ? { y } : undefined}
      className="shrink-0 snap-start w-[75vw] sm:w-[50vw] md:w-[38vw] lg:w-[30vw]"
    >
      <button
        onClick={(e) => onOpen(index, e.currentTarget)}
        className={`group block w-full overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 ${focusRing}`}
        aria-label={`View ${photo.title}`}
      >
        <div style={{ viewTransitionName: isOpenInLightbox ? undefined : photoTransitionName(photo.id) }}>
          <Image
            src={photo.url}
            alt={photo.title}
            width={photo.width}
            height={photo.height}
            className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 75vw, (max-width: 768px) 50vw, (max-width: 1024px) 38vw, 30vw"
            loading={index < 4 ? 'eager' : 'lazy'}
            placeholder={photo.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={photo.blurDataURL}
          />
        </div>
      </button>
    </motion.div>
  );
}

interface PhotoGalleryProps {
  photos: CloudinaryPhoto[];
  isDark?: boolean;
}

export default function PhotoGallery({ photos, isDark = false }: PhotoGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const reducedMotion = useReducedMotion();
  // Guards against overlapping document.startViewTransition calls: firing a
  // second one before the first's callback has resolved (e.g. an arrow-key
  // press right after opening) can silently drop the flushSync'd state update.
  const transitionActiveRef = useRef(false);

  // The View Transitions API temporarily toggles visibility on participating
  // elements (photo-main/photo-nav/photo-*) while it captures before/after
  // snapshots, which can knock focus off the dialog mid-transition. A single
  // focus() call right after the state update isn't enough — re-assert once
  // the transition has fully settled, too.
  const withViewTransition = (fn: () => void, onSettled?: () => void) => {
    const supportsVT = typeof document !== 'undefined' && 'startViewTransition' in document;
    if (!supportsVT || transitionActiveRef.current) {
      fn();
      onSettled?.();
      return;
    }
    transitionActiveRef.current = true;
    const transition = (
      document as unknown as { startViewTransition: (cb: () => void) => { finished: Promise<void> } }
    ).startViewTransition(() => flushSync(fn));
    transition.finished.catch(() => {}).finally(() => {
      transitionActiveRef.current = false;
      onSettled?.();
    });
  };

  const openLightbox = (index: number, trigger: HTMLButtonElement) => {
    openerRef.current = trigger;
    withViewTransition(
      () => setLightboxIndex(index),
      () => lightboxRef.current?.focus()
    );
  };

  const closeLightbox = () => {
    withViewTransition(
      () => setLightboxIndex(null),
      () => openerRef.current?.focus()
    );
  };

  // Navigating between two different photos, unlike open/close, has no shared
  // identity to morph — so this is a plain state update (no view transition),
  // with our own direction-aware crossfade below instead.
  const goTo = (index: number, dir: 1 | -1) => {
    setDirection(dir);
    setLightboxIndex(index);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight')
      goTo(Math.min(lightboxIndex + 1, photos.length - 1), 1);
    if (e.key === 'ArrowLeft')
      goTo(Math.max(lightboxIndex - 1, 0), -1);
  };

  useEffect(() => {
    if (lightboxIndex !== null) {
      lightboxRef.current?.focus();
    }
  }, [lightboxIndex]);

  // Lock body scroll when lightbox open. `overflow: hidden` alone doesn't
  // reliably stop touch scrolling/rubber-banding on iOS Safari, which is what
  // makes the page feel like it's jumping around behind the lightbox — pin
  // the body in place instead and restore the scroll position on close.
  useEffect(() => {
    if (lightboxIndex === null) return;
    const scrollY = window.scrollY;
    const { body } = document;
    const prev = { position: body.style.position, top: body.style.top, width: body.style.width };
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      window.scrollTo(0, scrollY);
    };
  }, [lightboxIndex]);

  // Redirect vertical wheel/trackpad intent into horizontal scroll — attached
  // manually (not via the JSX onWheel prop) because React registers its root
  // wheel listener as passive; calling preventDefault() from a JSX handler
  // silently fails to stop the page's native vertical scroll. Releases
  // control at the track's scroll boundaries so the page can keep scrolling
  // past the gallery instead of getting trapped inside it.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const horizontalIntent = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (!horizontalIntent) return;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      const leavingBounds = (atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0);
      if (leavingBounds) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Native arrow-key-scrolls-a-focused-overflow-container behavior is
  // heuristic, not a spec guarantee — handle it explicitly rather than
  // depending on it.
  const onTrackKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    const behavior = reducedMotion ? 'auto' : 'smooth';
    if (e.key === 'ArrowRight') el.scrollBy({ left: amount, behavior });
    if (e.key === 'ArrowLeft') el.scrollBy({ left: -amount, behavior });
  };

  if (photos.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} font-light`}>
          No photos in this collection yet.
        </p>
      </div>
    );
  }

  const focusRing = isDark ? 'focus-visible:ring-gray-200' : 'focus-visible:ring-gray-900';

  return (
    <>
      <div
        ref={trackRef}
        role="region"
        aria-label="Photo gallery — scroll or use arrow keys to browse"
        tabIndex={0}
        onKeyDown={onTrackKeyDown}
        className="photo-track relative flex gap-4 md:gap-6 overflow-x-auto snap-x snap-proximity pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16 focus:outline-none"
      >
        {photos.map((photo, index) => (
          <GalleryTile
            key={photo.id}
            photo={photo}
            index={index}
            trackRef={trackRef}
            isOpenInLightbox={lightboxIndex === index}
            reducedMotion={!!reducedMotion}
            focusRing={focusRing}
            onOpen={openLightbox}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${lightboxIndex + 1} of ${photos.length}`}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          onClick={closeLightbox}
          className="animate-lightbox-in fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
        >
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 md:top-5 md:right-6 text-white/60 hover:text-white transition-colors p-2"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-6 text-white/30 text-xs font-mono tracking-wider">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* Prev */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(Math.max(lightboxIndex - 1, 0), -1);
              }}
              className="absolute left-4 md:left-6 text-white/40 hover:text-white transition-colors text-2xl leading-none select-none p-2"
              aria-label="Previous photo"
            >
              ←
            </button>
          )}

          {/* Next */}
          {lightboxIndex < photos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(Math.min(lightboxIndex + 1, photos.length - 1), 1);
              }}
              className="absolute right-4 md:right-6 text-white/40 hover:text-white transition-colors text-2xl leading-none select-none p-2"
              aria-label="Next photo"
            >
              →
            </button>
          )}

          {/* Image — drag/swipe is bound to this whole column, not just the
              tight image box, so a portrait photo (narrow, lots of backdrop
              on either side) still gives you a full-width swipe target
              instead of the surrounding tap-to-close backdrop stealing it. */}
          <motion.div
            className="w-full px-10 md:px-14 max-h-[92vh] flex flex-col items-center touch-pan-y"
            onClick={(e) => e.stopPropagation()}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            dragMomentum={false}
            onDragEnd={(_e, info) => {
              const swiped = Math.abs(info.offset.x) > 60 || Math.abs(info.velocity.x) > 500;
              if (!swiped) return;
              if (info.offset.x < 0 && lightboxIndex < photos.length - 1) {
                goTo(lightboxIndex + 1, 1);
              } else if (info.offset.x > 0 && lightboxIndex > 0) {
                goTo(lightboxIndex - 1, -1);
              }
            }}
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              {(() => {
                const photo = photos[lightboxIndex];
                return (
                  <motion.div
                    key={photo.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative" style={{ viewTransitionName: photoTransitionName(photo.id) }}>
                      {/* Transparent overlay — prevents right-click save */}
                      <div
                        className="absolute inset-0 z-10"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <Image
                        src={photo.url}
                        alt={photo.title}
                        width={photo.width}
                        height={photo.height}
                        className="max-h-[88vh] w-auto h-auto object-contain select-none pointer-events-none"
                        sizes="(max-width: 768px) 100vw, 88vw"
                        priority
                      />
                    </div>
                    <p className="mt-4 text-white/25 text-xs font-mono tracking-wider text-center">
                      {photo.title}
                    </p>
                    {photo.exif && <ExifLine exif={photo.exif} />}
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </>
  );
}
