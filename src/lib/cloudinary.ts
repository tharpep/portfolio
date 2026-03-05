import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CollectionCover {
  url: string;
  aspectRatio: number; // width/height — < 1 means portrait
}

export interface CloudinaryPhoto {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  aspectRatio: number;
}

interface CloudinaryResource {
  public_id: string;
  asset_folder?: string;
  display_name?: string;
  filename?: string;
  width: number;
  height: number;
  secure_url: string;
}

function extractTitle(resource: CloudinaryResource): string {
  const name = resource.display_name ?? resource.filename ?? resource.public_id.split('/').pop() ?? '';
  return name
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export async function getCollectionPhotos(slug: string): Promise<CloudinaryPhoto[]> {
  if (!process.env.CLOUDINARY_API_KEY) return [];
  try {
    const allResources: CloudinaryResource[] = [];
    let nextCursor: string | undefined;

    do {
      const result = await cloudinary.api.resources_by_asset_folder(`photography/${slug}`, {
        max_results: 200,
        resource_type: 'image',
        ...(nextCursor ? { next_cursor: nextCursor } : {}),
      });

      if (Array.isArray(result.resources)) {
        allResources.push(...(result.resources as CloudinaryResource[]));
      }

      nextCursor = result.next_cursor;
    } while (nextCursor);

    return allResources.map((r) => ({
      id: r.public_id,
      url: cloudinary.url(r.public_id, {
        fetch_format: 'auto',
        quality: 'auto',
        width: 2560,
        crop: 'limit',
        secure: true,
      }),
      width: Math.min(r.width, 2560),
      height: r.width > 2560 ? Math.round(r.height * (2560 / r.width)) : r.height,
      title: extractTitle(r),
      aspectRatio: r.width / r.height,
    }));
  } catch (err) {
    console.error('[cloudinary] getCollectionPhotos failed for slug:', slug, err);
    return [];
  }
}

export async function getCollectionCoverUrl(slug: string): Promise<CollectionCover | null> {
  if (!process.env.CLOUDINARY_API_KEY) return null;
  try {
    const result = await cloudinary.api.resources_by_asset_folder(`photography/${slug}`, {
      max_results: 1,
      resource_type: 'image',
    });

    const first = (result.resources as CloudinaryResource[])[0];
    if (!first) return null;

    return {
      url: cloudinary.url(first.public_id, {
        fetch_format: 'auto',
        quality: 'auto',
        width: 1600,
        crop: 'limit',
        secure: true,
      }),
      aspectRatio: first.width / first.height,
    };
  } catch (err) {
    console.error('[cloudinary] getCollectionCoverUrl failed for slug:', slug, err);
    return null;
  }
}

export async function collectionExists(slug: string): Promise<boolean> {
  if (!process.env.CLOUDINARY_API_KEY) return false;
  try {
    const result = await cloudinary.api.resources_by_asset_folder(`photography/${slug}`, {
      max_results: 1,
      resource_type: 'image',
    });
    return (result.resources as CloudinaryResource[]).length > 0;
  } catch {
    return false;
  }
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export interface DiscoveredCollection {
  slug: string;   // URL-safe (e.g. "new-york-city")
  folder: string; // Cloudinary folder name (e.g. "New York City")
}

export async function getDiscoveredCollections(): Promise<DiscoveredCollection[]> {
  if (!process.env.CLOUDINARY_API_KEY) return [];
  try {
    const result = await cloudinary.api.sub_folders('photography');
    return (result.folders as { name: string; path: string }[])
      .filter((f) => f.name !== 'featured' && f.name !== 'about')
      .map((f) => ({ slug: slugify(f.name), folder: f.name }));
  } catch (err) {
    console.error('[cloudinary] getDiscoveredCollections failed:', err);
    return [];
  }
}

export async function getDiscoveredCollectionSlugs(): Promise<string[]> {
  const collections = await getDiscoveredCollections();
  return collections.map((c) => c.slug);
}

export async function getFeaturedPhotos(): Promise<CloudinaryPhoto[]> {
  return getCollectionPhotos('featured');
}

export async function getCollectionPreviewPhotos(slug: string, limit: number): Promise<CloudinaryPhoto[]> {
  if (!process.env.CLOUDINARY_API_KEY) return [];
  try {
    const result = await cloudinary.api.resources_by_asset_folder(`photography/${slug}`, {
      max_results: limit,
      resource_type: 'image',
    });

    return (result.resources as CloudinaryResource[]).map((r) => ({
      id: r.public_id,
      url: cloudinary.url(r.public_id, {
        fetch_format: 'auto',
        quality: 'auto',
        width: 1200,
        crop: 'limit',
        secure: true,
      }),
      width: Math.min(r.width, 1200),
      height: r.width > 1200 ? Math.round(r.height * (1200 / r.width)) : r.height,
      title: extractTitle(r),
      aspectRatio: r.width / r.height,
    }));
  } catch (err) {
    console.error('[cloudinary] getCollectionPreviewPhotos failed for slug:', slug, err);
    return [];
  }
}

export async function getAboutPhoto(): Promise<CloudinaryPhoto | null> {
  const photos = await getCollectionPhotos('about');
  return photos[0] ?? null;
}
