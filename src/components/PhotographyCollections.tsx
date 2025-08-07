'use client';

import { useCollectionCovers } from '@/hooks/useAzurePhotos';
import EnhancedCollectionCard from './EnhancedCollectionCard';

const collections = [
  {
    slug: "nyc-2025",
    title: "New York City",
    subtitle: "Urban Landscapes",
    year: "2025",
    desc: "A week exploring the concrete jungle, capturing the raw energy and hidden beauty of urban life.",
  },
  {
    slug: "zoo-2022", 
    title: "Wildlife",
    subtitle: "Natural Moments",
    year: "2022",
    desc: "Intimate portraits of animals in their element, showcasing the grace and power of the natural world.",
  },
  {
    slug: "mountains-2021",
    title: "Mountain Peaks",
    subtitle: "Landscape Poetry",
    year: "2021",
    desc: "Chasing light across mountain ranges, finding solitude and grandeur in nature's cathedral.",
  },
];

export default function PhotographyCollections() {
  const collectionSlugs = collections.map(c => c.slug);
  const { covers, loading, error } = useCollectionCovers(collectionSlugs);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin tracking-widest text-amber-100 mb-6">
            COLLECTIONS
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg font-light text-amber-200/70 max-w-2xl mx-auto leading-relaxed">
            Each collection tells a unique story, exploring different themes, emotions, and perspectives through the lens
          </p>
        </div>

        {error && (
          <div className="text-center mb-8 p-4 border border-amber-900/20 bg-amber-900/10 rounded">
            <p className="text-amber-300/80 text-sm">
              Unable to load cover photos: {error}
            </p>
            <p className="text-amber-400/60 text-xs mt-1">
              Collections will display with placeholder images
            </p>
          </div>
        )}

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <EnhancedCollectionCard
              key={collection.slug}
              title={collection.title}
              subtitle={collection.subtitle}
              year={collection.year}
              desc={collection.desc}
              href={`/photography/${collection.slug}`}
              coverUrl={covers[collection.slug] || null}
            />
          ))}
        </div>

        {loading && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center text-amber-400/60 text-sm">
              <svg className="animate-spin w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Loading cover photos...
            </div>
          </div>
        )}
      </div>
    </section>
  );
}