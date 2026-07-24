'use client';

import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useState } from 'react';
import { useReducedMotion } from 'motion/react';
import type { CloudinaryPhoto } from '@/lib/cloudinary';
import type { Collection } from '@/lib/collections';
import { photoTransitionName, heroTransitionName } from '@/lib/photoTransitionName';
import RevealOnScroll from '@/components/photography/RevealOnScroll';
import { useHoverCapable } from '@/components/photography/CursorCaption';
import PhotoDistortionHover from '@/components/photography/PhotoDistortionHover';

export interface CollectionPreviewRow {
  collection: Collection;
  photos: CloudinaryPhoto[];
}

function PreviewTile({
  photo,
  nextPhoto,
  collectionSlug,
  collectionTitle,
  isHeroPhoto,
  distortionEnabled,
}: {
  photo: CloudinaryPhoto;
  nextPhoto: CloudinaryPhoto | null;
  collectionSlug: string;
  collectionTitle: string;
  isHeroPhoto: boolean;
  distortionEnabled: boolean;
}) {
  const [hovering, setHovering] = useState(false);

  return (
    <Link
      href={`/photography/${collectionSlug}`}
      className="group relative shrink-0 snap-start block w-[60vw] sm:w-[38vw] md:w-[26vw] lg:w-[20vw] overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
      aria-label={`View ${collectionTitle} collection`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* This photo mirrors the collection page's hero photo when it's the
          first preview (both derived from the same first-in-order Cloudinary
          fetch), so it needs the hero namespace, not the strip namespace —
          the actual strip on the collection page excludes that photo. */}
      <div
        style={{
          viewTransitionName: isHeroPhoto
            ? heroTransitionName(photo.id)
            : photoTransitionName(photo.id),
        }}
      >
        <Image
          src={photo.url}
          alt={photo.title}
          width={photo.width}
          height={photo.height}
          className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 60vw, (max-width: 768px) 38vw, (max-width: 1024px) 26vw, 20vw"
          placeholder={photo.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={photo.blurDataURL}
        />
      </div>
      {distortionEnabled && nextPhoto && (
        <PhotoDistortionHover photoAUrl={photo.url} photoBUrl={nextPhoto.url} hovering={hovering} />
      )}
    </Link>
  );
}

// Each collection gets its own labeled horizontal row, echoing the same
// horizontal rhythm as the collection detail page's gallery, rather than one
// big masonry interleaving every collection's photos together. Since each row
// already carries its own heading, there's no need for the old cursor-caption/
// bottom-gradient "which collection is this?" affordance — the grouping alone
// answers that, so this stays deliberately simpler than the old masonry tile.
function CollectionRow({
  collection,
  photos,
  distortionEnabled,
}: CollectionPreviewRow & { distortionEnabled: boolean }) {
  return (
    <div className="mb-14 last:mb-0">
      <RevealOnScroll>
        <Link href={`/photography/${collection.slug}`} className="group inline-flex items-baseline gap-3 mb-4">
          <h2 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
            {collection.title}
          </h2>
          {collection.year && (
            <span className="text-xs font-mono text-gray-400">{collection.year}</span>
          )}
        </Link>
      </RevealOnScroll>

      <div className="photo-track flex gap-3 md:gap-4 overflow-x-auto snap-x snap-proximity pb-2 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16">
        {photos.map((photo, i) => (
          <PreviewTile
            key={photo.id}
            photo={photo}
            nextPhoto={photos.length > 1 ? photos[(i + 1) % photos.length] : null}
            collectionSlug={collection.slug}
            collectionTitle={collection.title}
            isHeroPhoto={i === 0}
            distortionEnabled={distortionEnabled}
          />
        ))}
      </div>
    </div>
  );
}

export default function CollectionRows({ rows }: { rows: CollectionPreviewRow[] }) {
  const hoverCapable = useHoverCapable();
  const reducedMotion = useReducedMotion();
  const distortionEnabled = hoverCapable && !reducedMotion;
  const nonEmptyRows = rows.filter((row) => row.photos.length > 0);

  return (
    <div>
      {nonEmptyRows.map((row) => (
        <CollectionRow
          key={row.collection.slug}
          collection={row.collection}
          photos={row.photos}
          distortionEnabled={distortionEnabled}
        />
      ))}
    </div>
  );
}
