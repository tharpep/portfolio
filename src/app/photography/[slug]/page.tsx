import Link from 'next/link';
import { notFound } from 'next/navigation';
import PhotoNav from '@/components/PhotoNav';
import PhotoGallery from '@/components/PhotoGallery';
import { getCollection } from '@/lib/collections';
import { getCollectionPhotos, getDiscoveredCollectionSlugs } from '@/lib/cloudinary';
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

  const yearSuffix = collection.year ? ` (${collection.year})` : '';

  return {
    title: `${collection.title}${yearSuffix} – Photography – Pryce Tharpe`,
    description: collection.description,
    alternates: { canonical: `/photography/${slug}` },
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

  const isDark = collection.mood === 'dark';
  const bg = isDark ? 'bg-[#0f0f0f]' : 'bg-white';
  const textPrimary = isDark ? 'text-gray-100' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-100';

  return (
    <>
      <PhotoNav />
      <main className={`min-h-screen ${bg}`}>

        {/* Collection Header */}
        <section className="px-6 md:px-12 lg:px-16 pt-14 pb-10">
          <Link
            href="/photography"
            className={`inline-flex items-center gap-2 text-xs tracking-widest uppercase ${textSecondary} ${isDark ? 'hover:text-gray-100' : 'hover:text-gray-900'} transition-colors duration-200 mb-10 block`}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All Collections
          </Link>

          <p className={`text-xs font-mono tracking-widest uppercase ${textSecondary} mb-2`}>
            {collection.year}
          </p>
          <h1
            className={`font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-medium ${textPrimary} leading-tight mb-5`}
          >
            {collection.title}
          </h1>
          <p className={`text-base ${textSecondary} max-w-xl leading-relaxed`}>
            {collection.description}
          </p>
        </section>

        {/* Masonry Grid */}
        <section className="px-6 md:px-12 lg:px-16 pb-20">
          <PhotoGallery photos={photos} isDark={isDark} />
        </section>

        {/* Collection meta footer */}
        <div className={`border-t ${borderColor} py-8 px-6 md:px-12 lg:px-16`}>
          <div className={`flex flex-wrap gap-6 text-xs font-mono ${textSecondary}`}>
            {collection.location && <span>{collection.location}</span>}
            {collection.camera && <span>{collection.camera}</span>}
            <span>{photos.length} {photos.length === 1 ? 'photograph' : 'photographs'}</span>
          </div>
        </div>

      </main>
    </>
  );
}
