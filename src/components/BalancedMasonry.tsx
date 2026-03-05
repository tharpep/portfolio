'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { CloudinaryPhoto } from '@/lib/cloudinary';

export type PreviewPhoto = CloudinaryPhoto & {
  collectionSlug: string;
  collectionTitle: string;
};

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

export default function BalancedMasonry({ photos }: { photos: PreviewPhoto[] }) {
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
    <div className="flex gap-2 lg:gap-3">
      {columns.map((colPhotos, i) => (
        <div key={i} className="flex-1 flex flex-col gap-2 lg:gap-3">
          {colPhotos.map((photo) => (
            <Link
              key={photo.id}
              href={`/photography/${photo.collectionSlug}`}
              className="block w-full overflow-hidden group relative"
              aria-label={`View ${photo.collectionTitle} collection`}
            >
              <Image
                src={photo.url}
                alt={photo.title}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto transition-opacity duration-300 group-hover:opacity-80"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pt-6 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-xs font-mono tracking-widest uppercase truncate">
                  {photo.collectionTitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
