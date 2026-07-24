import { Link } from 'next-view-transitions';
import Image from 'next/image';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import PhotoNav from '@/components/PhotoNav';
import PhotoGallery from '@/components/PhotoGallery';
import MoodBackground from '@/components/photography/MoodBackground';
import { getCollection } from '@/lib/collections';
import { getCollectionPhotos, getDiscoveredCollectionSlugs, getCollectionCoverUrl } from '@/lib/cloudinary';
import { heroTransitionName } from '@/lib/photoTransitionName';
import type { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getDiscoveredCollectionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollection(slug);
  if (!collection) return {};
  const cover = await getCollectionCoverUrl(collection.folder);

  const yearSuffix = collection.year ? ` (${collection.year})` : '';
  const title = `${collection.title}${yearSuffix} – Photography – Pryce Tharpe`;
  const description = collection.description || `Photography collection: ${collection.title}.`;

  const ogImages = cover
    ? [{ url: cover.url, width: 1600, height: Math.round(1600 / cover.aspectRatio), alt: collection.title }]
    : [];

  return {
    title,
    description,
    alternates: { canonical: `/photography/${slug}` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `/photography/${slug}`,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map((img) => img.url),
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === 'featured') notFound();

  const collection = await getCollection(slug);
  if (!collection) notFound();

  const photos = await getCollectionPhotos(collection.folder);
  // Hero photo (editorial opening) is deliberately excluded from the gallery
  // strip below it — the same photo carrying view-transition-name in two
  // places at once on one page breaks the View Transitions API's name
  // uniqueness requirement.
  const heroPhoto = photos[0] ?? null;
  const stripPhotos = photos.length > 0 ? photos.slice(1) : [];

  const isDark = collection.mood === 'dark';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-100';

  return (
    <>
      <Script
        id={`schema-collection-${collection.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: collection.title,
            description: collection.description,
            author: { '@type': 'Person', name: 'Pryce Tharpe' },
            url: `https://pryce-tharpe.dev/photography/${collection.slug}`,
          }),
        }}
      />
      <PhotoNav isDark={isDark} />
      <main style={{ viewTransitionName: 'photo-main' }} className="min-h-screen">
        <MoodBackground
          isDark={isDark}
          hero={
            heroPhoto ? (
              <section className="relative h-[68vh] min-h-[420px] max-h-[760px] overflow-hidden">
                <div className="absolute inset-0" style={{ viewTransitionName: heroTransitionName(heroPhoto.id) }}>
                  <Image
                    src={heroPhoto.url}
                    alt={collection.title}
                    fill
                    className={heroPhoto.aspectRatio < 1 ? 'object-contain bg-black' : 'object-cover'}
                    priority
                    sizes="100vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 px-6 md:px-12 lg:px-16 pb-10">
                  <Link
                    href="/photography"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200 mb-6"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    All Collections
                  </Link>
                  <p className="text-sm font-mono text-white/60 mb-2">{collection.year}</p>
                  <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-semibold text-white leading-tight mb-4">
                    {collection.title}
                  </h1>
                  <p className="text-base text-white/80 max-w-xl leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </section>
            ) : (
              <section className="px-6 md:px-12 lg:px-16 pt-14 pb-10">
                <Link
                  href="/photography"
                  className={`inline-flex items-center gap-2 text-sm ${textSecondary} ${isDark ? 'hover:text-gray-100' : 'hover:text-gray-900'} transition-colors duration-200 mb-10`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  All Collections
                </Link>
                <p className={`text-sm font-mono ${textSecondary} mb-2`}>{collection.year}</p>
                <h1
                  className={`font-[family-name:var(--font-display)] text-5xl md:text-7xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'} leading-tight mb-5`}
                >
                  {collection.title}
                </h1>
                <p className={`text-base ${textSecondary} max-w-xl leading-relaxed`}>
                  {collection.description}
                </p>
              </section>
            )
          }
        >
          {/* Horizontal gallery — only rendered when there's anything left
              after the hero. A collection with exactly one photo has that
              photo already shown as the hero, so an empty strip here isn't
              "no photos" (PhotoGallery's own empty state) — it's correctly
              zero, and showing that message would contradict the hero photo
              the visitor just saw. */}
          {stripPhotos.length > 0 && (
            <section className="pt-10 pb-20">
              <PhotoGallery photos={stripPhotos} isDark={isDark} />
            </section>
          )}
          {photos.length === 0 && (
            <div className="px-6 md:px-12 lg:px-16 pb-20">
              <p className={`text-sm ${textSecondary} font-light`}>
                No photos in this collection yet.
              </p>
            </div>
          )}

          {/* Collection meta footer */}
          <div className={`border-t ${borderColor} py-8 px-6 md:px-12 lg:px-16`}>
            <div className={`flex flex-wrap gap-6 text-xs font-mono ${textSecondary}`}>
              {collection.location && <span>{collection.location}</span>}
              {collection.camera && <span>{collection.camera}</span>}
              <span>{photos.length} {photos.length === 1 ? 'photograph' : 'photographs'}</span>
            </div>
          </div>
        </MoodBackground>
      </main>
    </>
  );
}
