import Link from 'next/link';
import Image from 'next/image';
import PhotoNav from '@/components/PhotoNav';
import { getAllCollections, type Collection } from '@/lib/collections';
import { getCollectionCoverUrl, getFeaturedPhotos } from '@/lib/cloudinary';
import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Photography – Pryce Tharpe',
  description: 'Photography portfolio and collections by Pryce Tharpe.',
  alternates: { canonical: '/photography' },
};

export default async function Photography() {
  const [allCollections, featuredPhotos] = await Promise.all([
    getAllCollections(),
    getFeaturedPhotos(),
  ]);

  const heroPhoto = featuredPhotos[0] ?? null;
  const featured = allCollections.find((c) => c.featured) ?? allCollections[0];
  const rest = allCollections.filter((c) => !c.featured);

  // Fetch all cover images in parallel at ISR time
  const coverEntries = await Promise.all(
    allCollections.map(async (c) => [c.slug, await getCollectionCoverUrl(c.slug)] as const)
  );
  const coverMap = Object.fromEntries(coverEntries) as Record<string, string | null>;

  return (
    <>
      <PhotoNav transparent={!!heroPhoto} />
      <main className="min-h-screen bg-white text-gray-900">

        {/* Full-bleed Hero */}
        {heroPhoto ? (
          <section className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
            <Image
              src={heroPhoto.url}
              alt="Photography by Pryce Tharpe"
              fill
              className="object-cover"
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

        {/* Collections */}
        <div className="relative bg-white">
          {/* Page Header */}
          <header className="px-6 md:px-12 lg:px-16 pt-16 pb-10">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3 font-light">
              Collections
            </p>
            <div className="border-t border-gray-100 mt-4" />
          </header>

          {/* Featured Collection */}
          {featured && (
            <section className="px-6 md:px-12 lg:px-16 pb-12">
              <FeaturedCard collection={featured} coverUrl={coverMap[featured.slug]} />
            </section>
          )}

          {/* Remaining Collections — staggered grid */}
          {rest.length > 0 && (
            <section className="px-6 md:px-12 lg:px-16 pb-20">
              <StaggeredGrid collections={rest} coverMap={coverMap} />
            </section>
          )}

          {/* Footer */}
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
          </footer>
        </div>
      </main>
    </>
  );
}

/* ─── Featured Card ─── */
function FeaturedCard({
  collection,
  coverUrl,
}: {
  collection: Collection;
  coverUrl: string | null;
}) {
  return (
    <Link
      href={`/photography/${collection.slug}`}
      className="group block"
      aria-label={`View ${collection.title} collection`}
    >
      {/* Cover image */}
      <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '16/9' }}>
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={collection.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21,15 16,10 5,21" />
            </svg>
          </div>
        )}
      </div>

      {/* Caption */}
      <div className="pt-4 pb-2 flex items-end justify-between">
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-1 font-light">Featured</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-4xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
            {collection.title}
          </h2>
        </div>
        <span className="text-xs font-mono text-gray-400 mb-1">{collection.year}</span>
      </div>
    </Link>
  );
}

/* ─── Staggered Grid ─── */
function StaggeredGrid({
  collections: cols,
  coverMap,
}: {
  collections: Collection[];
  coverMap: Record<string, string | null>;
}) {
  const [primary, ...secondary] = cols;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
      {/* Left — tall portrait card */}
      {primary && (
        <div className="md:col-span-3">
          <CollectionCard collection={primary} coverUrl={coverMap[primary.slug]} tall />
        </div>
      )}

      {/* Right — stacked landscape cards */}
      {secondary.length > 0 && (
        <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
          {secondary.map((c) => (
            <CollectionCard key={c.slug} collection={c} coverUrl={coverMap[c.slug]} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Collection Card ─── */
function CollectionCard({
  collection,
  coverUrl,
  tall = false,
}: {
  collection: Collection;
  coverUrl: string | null;
  tall?: boolean;
}) {
  return (
    <Link
      href={`/photography/${collection.slug}`}
      className="group block"
      aria-label={`View ${collection.title} collection`}
    >
      <div
        className="relative w-full overflow-hidden bg-gray-100"
        style={{ aspectRatio: tall ? '2/3' : '3/2' }}
      >
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={collection.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21,15 16,10 5,21" />
            </svg>
          </div>
        )}
      </div>

      <div className="pt-3 pb-1 flex items-baseline justify-between">
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
          {collection.title}
        </h3>
        <span className="text-xs font-mono text-gray-400 ml-3 flex-shrink-0">{collection.year}</span>
      </div>
    </Link>
  );
}
