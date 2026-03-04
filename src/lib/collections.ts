import { generateCollectionMetadata } from './ai-metadata';
import { getDiscoveredCollectionSlugs, collectionExists } from './cloudinary';

export interface Collection {
  slug: string;
  title: string;
  year: string;
  description: string;
  featured?: boolean;
  mood: 'light' | 'dark';
  location?: string;
  camera?: string;
}

// Manual overrides — only specify what you want to change.
// Everything else is auto-generated from the folder name via Haiku.
// To add a new collection: just upload to Cloudinary. No entry needed here.
export const collectionOverrides: Record<string, Partial<Collection>> = {
  'nyc-2025': {
    featured: true,
    location: 'Manhattan, Brooklyn',
    camera: 'Sony A7C',
  }
};

function extractYear(slug: string): string {
  const match = slug.match(/\d{4}/);
  return match ? match[0] : '';
}

export async function getAllCollections(): Promise<Collection[]> {
  const slugs = await getDiscoveredCollectionSlugs();

  const collections = await Promise.all(
    slugs.map(async (slug) => {
      const ai = await generateCollectionMetadata(slug);
      const override = collectionOverrides[slug] ?? {};
      return {
        slug,
        year: extractYear(slug),
        ...ai,
        ...override,
      } as Collection;
    })
  );

  // Sort newest first
  collections.sort(
    (a, b) => b.year.localeCompare(a.year) || a.title.localeCompare(b.title)
  );

  // Auto-feature the newest if none explicitly marked
  if (!collections.some((c) => c.featured) && collections.length > 0) {
    collections[0] = { ...collections[0], featured: true };
  }

  return collections;
}

export async function getCollection(slug: string): Promise<Collection | null> {
  if (slug === 'featured') return null;
  const exists = await collectionExists(slug);
  if (!exists) return null;
  const ai = await generateCollectionMetadata(slug);
  const override = collectionOverrides[slug] ?? {};
  return {
    slug,
    year: extractYear(slug),
    ...ai,
    ...override,
  } as Collection;
}
