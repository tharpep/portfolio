import type { MetadataRoute } from 'next';
import { getDiscoveredCollectionSlugs } from '@/lib/cloudinary';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pryce-tharpe.dev';
  const now = new Date().toISOString();

  const collectionSlugs = await getDiscoveredCollectionSlugs();

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resume`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/photography`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/photography/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    ...collectionSlugs.map((slug) => ({
      url: `${baseUrl}/photography/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
