'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import type { CloudinaryPhoto } from '@/lib/cloudinary';

interface PhotoGalleryProps {
  photos: CloudinaryPhoto[];
  isDark?: boolean;
}

export default function PhotoGallery({ photos, isDark = false }: PhotoGalleryProps) {
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

  return (
    <>
      {/* CSS Columns masonry — respects natural aspect ratios, zero dependencies */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 lg:gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={(e) => openLightbox(i, e.currentTarget)}
            className="block w-full mb-2 lg:mb-3 overflow-hidden group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            aria-label={`View ${photo.title}`}
          >
            <Image
              src={photo.url}
              alt={photo.title}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto transition-opacity duration-300 group-hover:opacity-85"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading={i < 6 ? 'eager' : 'lazy'}
            />
          </button>
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
          className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-6 text-white/40 hover:text-white text-xs font-light tracking-widest uppercase transition-colors"
            aria-label="Close"
          >
            Close
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
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full px-12 md:px-20 max-h-[88vh] flex flex-col items-center"
          >
            {(() => {
              const photo = photos[lightboxIndex];
              return (
                <>
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    width={photo.width}
                    height={photo.height}
                    className="max-h-[80vh] w-auto h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                  <p className="mt-4 text-white/25 text-xs font-mono tracking-wider text-center">
                    {photo.title}
                  </p>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}
