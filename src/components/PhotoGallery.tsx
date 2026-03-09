'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import type { CloudinaryPhoto, ExifData } from '@/lib/cloudinary';

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

  const openLightbox = (index: number, trigger: HTMLButtonElement) => {
    openerRef.current = trigger;
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    openerRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight')
      setLightboxIndex((i) => Math.min((i ?? 0) + 1, photos.length - 1));
    if (e.key === 'ArrowLeft')
      setLightboxIndex((i) => Math.max((i ?? 0) - 1, 0));
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

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
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

  return (
    <>
      <div className="flex gap-2 lg:gap-3">
        {columns.map((colPhotos, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-2 lg:gap-3">
            {colPhotos.map((photo) => {
              const globalIndex = photos.indexOf(photo);
              return (
                <button
                  key={photo.id}
                  onClick={(e) => openLightbox(globalIndex, e.currentTarget)}
                  className="block w-full overflow-hidden group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                  aria-label={`View ${photo.title}`}
                >
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    width={photo.width}
                    height={photo.height}
                    className="w-full h-auto transition-opacity duration-300 group-hover:opacity-85"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading={globalIndex < 6 ? 'eager' : 'lazy'}
                    placeholder={photo.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={photo.blurDataURL}
                  />
                </button>
              );
            })}
          </div>
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
                setLightboxIndex((i) => Math.max((i ?? 0) - 1, 0));
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
                setLightboxIndex((i) => Math.min((i ?? 0) + 1, photos.length - 1));
              }}
              className="absolute right-4 md:right-6 text-white/40 hover:text-white transition-colors text-2xl leading-none select-none p-2"
              aria-label="Next photo"
            >
              →
            </button>
          )}

          {/* Image */}
          <div className="w-full px-10 md:px-14 max-h-[92vh] flex flex-col items-center">
            {(() => {
              const photo = photos[lightboxIndex];
              return (
                <>
                  <div className="relative" onClick={(e) => e.stopPropagation()}>
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
          </div>
        </div>
      )}
    </>
  );
}
