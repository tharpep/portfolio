'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { flushSync } from 'react-dom';
import { motion } from 'motion/react';
import type { CloudinaryPhoto, ExifData } from '@/lib/cloudinary';
import { photoTransitionName } from '@/lib/photoTransitionName';
import { RevealGroup, RevealItem } from '@/components/photography/RevealOnScroll';

function splitIntoColumns(photos: CloudinaryPhoto[], numColumns: number): CloudinaryPhoto[][] {
  const columns: Array<{ photos: CloudinaryPhoto[]; height: number }> =
    Array.from({ length: numColumns }, () => ({ photos: [], height: 0 }));
  for (const photo of photos) {
    const shortest = columns.reduce((min, col) => col.height < min.height ? col : min);
    shortest.photos.push(photo);
    shortest.height += 1 / photo.aspectRatio;
  }
  return columns.map((col) => col.photos);
}

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

interface PhotoGalleryProps {
  photos: CloudinaryPhoto[];
  isDark?: boolean;
}

export default function PhotoGallery({ photos, isDark = false }: PhotoGalleryProps) {
  const [numCols, setNumCols] = useState(3);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
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

  const goTo = (index: number) =>
    withViewTransition(
      () => setLightboxIndex(index),
      () => lightboxRef.current?.focus()
    );

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight')
      goTo(Math.min(lightboxIndex + 1, photos.length - 1));
    if (e.key === 'ArrowLeft')
      goTo(Math.max(lightboxIndex - 1, 0));
  };

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setNumCols(1);
      else if (w < 1024) setNumCols(2);
      else if (w < 1280) setNumCols(3);
      else setNumCols(4);
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

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

  if (photos.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} font-light`}>
          No photos in this collection yet.
        </p>
      </div>
    );
  }

  const columns = splitIntoColumns(photos, numCols);
  const focusRing = isDark ? 'focus-visible:ring-gray-200' : 'focus-visible:ring-gray-900';

  return (
    <>
      <RevealGroup className="flex gap-2 lg:gap-3">
        {columns.map((colPhotos, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-2 lg:gap-3">
            {colPhotos.map((photo) => {
              const globalIndex = photos.indexOf(photo);
              const isOpenInLightbox = lightboxIndex === globalIndex;
              return (
                <RevealItem key={photo.id}>
                  <button
                    onClick={(e) => openLightbox(globalIndex, e.currentTarget)}
                    className={`group block w-full overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 ${focusRing}`}
                    aria-label={`View ${photo.title}`}
                  >
                    <div style={{ viewTransitionName: isOpenInLightbox ? undefined : photoTransitionName(photo.id) }}>
                      <Image
                        src={photo.url}
                        alt={photo.title}
                        width={photo.width}
                        height={photo.height}
                        className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        loading={globalIndex < 6 ? 'eager' : 'lazy'}
                        placeholder={photo.blurDataURL ? 'blur' : 'empty'}
                        blurDataURL={photo.blurDataURL}
                      />
                    </div>
                  </button>
                </RevealItem>
              );
            })}
          </div>
        ))}
      </RevealGroup>

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
                goTo(Math.max(lightboxIndex - 1, 0));
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
                goTo(Math.min(lightboxIndex + 1, photos.length - 1));
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
                goTo(lightboxIndex + 1);
              } else if (info.offset.x > 0 && lightboxIndex > 0) {
                goTo(lightboxIndex - 1);
              }
            }}
          >
            {(() => {
              const photo = photos[lightboxIndex];
              return (
                <>
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
                </>
              );
            })()}
          </motion.div>
        </div>
      )}
    </>
  );
}
