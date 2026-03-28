import Link from 'next/link';
import Image from 'next/image';
import PhotoNav from '@/components/PhotoNav';
import BalancedMasonry, { type PreviewPhoto } from '@/components/BalancedMasonry';
import { getAllCollections, type Collection } from '@/lib/collections';
import { getFeaturedPhotos, getCollectionPreviewPhotos, getCollectionCoverUrl } from '@/lib/cloudinary';
import type { Metadata } from 'next';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const cover = await getCollectionCoverUrl('featured');

  const ogImages = cover
    ? [{ url: cover.url, width: 1600, height: Math.round(1600 / cover.aspectRatio), alt: 'Photography by Pryce Tharpe' }]
    : [];

  return {
    title: 'Photography – Pryce Tharpe',
    description: 'Travel and street photography by Pryce Tharpe — collections from New York, Europe, and beyond.',
    alternates: { canonical: '/photography' },
    openGraph: {
      type: 'website',
      title: 'Photography – Pryce Tharpe',
      description: 'Travel and street photography by Pryce Tharpe — collections from New York, Europe, and beyond.',
      url: '/photography',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Photography – Pryce Tharpe',
      description: 'Travel and street photography by Pryce Tharpe — collections from New York, Europe, and beyond.',
      images: ogImages.map((img) => img.url),
    },
  };
}

const PREVIEW_COUNT = 5;

export default async function Photography() {
  const [allCollections, featuredPhotos] = await Promise.all([
    getAllCollections(),
    getFeaturedPhotos(),
  ]);

  const heroPhoto = featuredPhotos[0] ?? null;
  const heroIsPortrait = heroPhoto ? heroPhoto.aspectRatio < 1 : false;

  // Fetch preview photos for each collection in parallel
  const previewData = await Promise.all(
    allCollections.map(async (c) => ({
      collection: c,
      photos: await getCollectionPreviewPhotos(c.folder, PREVIEW_COUNT),
    }))
  );

  const previewPhotos: PreviewPhoto[] = previewData.flatMap(({ collection, photos }) =>
    photos.map((p) => ({
      ...p,
      collectionSlug: collection.slug,
      collectionTitle: collection.title,
    }))
  );

  return (
    <>
      <PhotoNav transparent={!!heroPhoto} />
      <main style={{ viewTransitionName: 'photo-main' }} className="min-h-screen bg-white text-gray-900">

        {/* Full-bleed Hero */}
        {heroPhoto ? (
          <section className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
            <Image
              src={heroPhoto.url}
              alt="Photography by Pryce Tharpe"
              fill
              className={heroIsPortrait ? 'object-contain' : 'object-cover'}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 text-center px-6">
              <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4 font-light">
                Photography
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-medium text-white leading-tight">
                Pryce Tharpe
              </h1>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </section>
        ) : (
          <header className="px-6 md:px-12 lg:px-16 pt-16 pb-10">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3 font-light">
              Photography
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Pryce Tharpe
            </h1>
            <div className="border-t border-gray-150 mt-8" />
          </header>
        )}

        {/* Collections masonry */}
        <div className="bg-white">
          <header className="px-6 md:px-12 lg:px-16 pt-16 pb-8">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3 font-light">
              Collections
            </p>
            <div className="border-t border-gray-100 mt-4" />
          </header>

          {previewPhotos.length > 0 ? (
            <section className="px-6 md:px-12 lg:px-16 pb-20">
              <CollectionLinks collections={allCollections} />
              <BalancedMasonry photos={previewPhotos} />
            </section>
          ) : (
            <div className="px-6 md:px-12 lg:px-16 pb-20 text-sm text-gray-400 font-light">
              No collections yet.
            </div>
          )}

          <footer className="border-t border-gray-100 py-8 px-6 md:px-12 text-center">
            <p className="text-xs text-gray-400 font-light tracking-wide">
              Pryce Tharpe Photography &nbsp;&middot;&nbsp; 2017—{new Date().getFullYear()} &nbsp;&middot;&nbsp;{' '}
              <a
                href="https://www.instagram.com/pryce_tharpe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors"
              >
                Instagram &rarr;
              </a>
            </p>
            <p className="text-xs text-gray-400 font-light tracking-wide mt-2">
              P.S. &mdash; I built this site too &nbsp;&middot;&nbsp;{' '}
              <Link href="/" className="hover:text-gray-700 transition-colors">
                Dev Portfolio &rarr;
              </Link>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}

/* ─── Collection index links ─── */
function CollectionLinks({ collections }: { collections: Collection[] }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
      {collections.map((c) => (
        <Link
          key={c.slug}
          href={`/photography/${c.slug}`}
          className="text-sm font-mono font-medium tracking-widest uppercase text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          {c.title}{c.year && <span className="text-gray-400 ml-2">{c.year}</span>}
        </Link>
      ))}
    </div>
  );
}
