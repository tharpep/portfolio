'use client';

import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import type { CloudinaryPhoto } from '@/lib/cloudinary';
import { photoTransitionName } from '@/lib/photoTransitionName';
import { RevealGroup, RevealItem } from '@/components/photography/RevealOnScroll';
import CursorCaption, { useHoverCapable } from '@/components/photography/CursorCaption';

export type PreviewPhoto = CloudinaryPhoto & {
  collectionSlug: string;
  collectionTitle: string;
};

// Break up the grid rhythm with an occasional full-width photo rather than
// retrofitting span-awareness into the column-balancing algorithm below.
const FEATURE_EVERY = 9;

function buildSections(photos: PreviewPhoto[]): { type: 'grid' | 'feature'; photos: PreviewPhoto[] }[] {
  const sections: { type: 'grid' | 'feature'; photos: PreviewPhoto[] }[] = [];
  let bucket: PreviewPhoto[] = [];

  photos.forEach((photo, i) => {
    bucket.push(photo);
    const isLast = i === photos.length - 1;
    if (bucket.length === FEATURE_EVERY && !isLast) {
      const feature = bucket.pop()!;
      sections.push({ type: 'grid', photos: bucket });
      sections.push({ type: 'feature', photos: [feature] });
      bucket = [];
    }
  });
  if (bucket.length) sections.push({ type: 'grid', photos: bucket });

  return sections;
}

function splitIntoBalancedColumns(photos: PreviewPhoto[], numColumns: number): PreviewPhoto[][] {
  const columns: Array<{ photos: PreviewPhoto[]; height: number }> =
    Array.from({ length: numColumns }, () => ({ photos: [], height: 0 }));

  for (const photo of photos) {
    // Always add to the shortest column
    const shortest = columns.reduce((min, col) => col.height < min.height ? col : min);
    shortest.photos.push(photo);
    shortest.height += 1 / photo.aspectRatio; // relative height units (normalized width = 1)
  }

  return columns.map((col) => col.photos);
}

function PhotoTile({
  photo,
  onHover,
  hoverCaptionActive,
}: {
  photo: PreviewPhoto;
  onHover: (label: string | null) => void;
  hoverCaptionActive: boolean;
}) {
  return (
    <Link
      href={`/photography/${photo.collectionSlug}`}
      className="group relative block w-full overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
      aria-label={`View ${photo.collectionTitle} collection`}
      onMouseEnter={() => onHover(photo.collectionTitle)}
      onMouseLeave={() => onHover(null)}
    >
      <div style={{ viewTransitionName: photoTransitionName(photo.id) }}>
        <Image
          src={photo.url}
          alt={photo.title}
          width={photo.width}
          height={photo.height}
          className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          placeholder={photo.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={photo.blurDataURL}
        />
      </div>
      {!hoverCaptionActive && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pt-6 pb-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          <p className="truncate text-xs font-medium text-white">
            {photo.collectionTitle}
          </p>
        </div>
      )}
    </Link>
  );
}

function MasonryColumns({
  photos,
  onHover,
  hoverCaptionActive,
}: {
  photos: PreviewPhoto[];
  onHover: (label: string | null) => void;
  hoverCaptionActive: boolean;
}) {
  const [numCols, setNumCols] = useState(3); // SSR default

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

  const columns = splitIntoBalancedColumns(photos, numCols);

  return (
    <RevealGroup className="flex gap-2 lg:gap-3">
      {columns.map((colPhotos, i) => (
        <div key={i} className="flex-1 flex flex-col gap-2 lg:gap-3">
          {colPhotos.map((photo) => (
            <RevealItem key={photo.id}>
              <PhotoTile photo={photo} onHover={onHover} hoverCaptionActive={hoverCaptionActive} />
            </RevealItem>
          ))}
        </div>
      ))}
    </RevealGroup>
  );
}

export default function BalancedMasonry({ photos }: { photos: PreviewPhoto[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverCapable = useHoverCapable();
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);

  const sections = buildSections(photos);

  return (
    <div ref={containerRef} className="relative">
      {sections.map((section, i) =>
        section.type === 'feature' ? (
          <RevealGroup key={`feature-${i}`} className="my-2 lg:my-3">
            <RevealItem>
              <PhotoTile
                photo={section.photos[0]}
                onHover={setHoverLabel}
                hoverCaptionActive={hoverCapable}
              />
            </RevealItem>
          </RevealGroup>
        ) : (
          <div key={`grid-${i}`} className="my-2 lg:my-3 first:mt-0">
            <MasonryColumns
              photos={section.photos}
              onHover={setHoverLabel}
              hoverCaptionActive={hoverCapable}
            />
          </div>
        )
      )}
      {hoverCapable && (
        <CursorCaption label={hoverLabel} containerRef={containerRef} />
      )}
    </div>
  );
}
