import { generateCollectionMetadata } from './ai-metadata';
import { getDiscoveredCollections } from './cloudinary';

export interface Collection {
  slug: string;
  folder: string; // actual Cloudinary folder name (may differ from slug if it contains spaces)
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
  const discovered = await getDiscoveredCollections();

  const collections = await Promise.all(
    discovered.map(async ({ slug, folder }) => {
      const ai = await generateCollectionMetadata(folder);
      const override = collectionOverrides[slug] ?? {};
      return {
        slug,
        folder,
        year: extractYear(slug) || extractYear(folder),
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
  const discovered = await getDiscoveredCollections();
  const match = discovered.find((d) => d.slug === slug);
  if (!match) return null;
  const { folder } = match;
  const ai = await generateCollectionMetadata(folder);
  const override = collectionOverrides[slug] ?? {};
  return {
    slug,
    folder,
    year: extractYear(slug) || extractYear(folder),
    ...ai,
    ...override,
  } as Collection;
}
