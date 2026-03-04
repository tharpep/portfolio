import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
    const result = await cloudinary.api.resources_by_asset_folder(`photography/${slug}`, {
      max_results: 200,
      resource_type: 'image',
    });

    return (result.resources as CloudinaryResource[]).map((r) => ({
      id: r.public_id,
      url: r.secure_url,
      width: r.width,
      height: r.height,
      title: extractTitle(r),
      aspectRatio: r.width / r.height,
    }));
  } catch (err) {
    console.error('[cloudinary] getCollectionPhotos failed for slug:', slug, err);
    return [];
  }
}

export async function getCollectionCoverUrl(slug: string): Promise<string | null> {
  if (!process.env.CLOUDINARY_API_KEY) return null;
  try {
    const result = await cloudinary.api.resources_by_asset_folder(`photography/${slug}`, {
      max_results: 1,
      resource_type: 'image',
    });

    const first = (result.resources as CloudinaryResource[])[0];
    if (!first) return null;

    return cloudinary.url(first.public_id, {
      fetch_format: 'auto',
      quality: 'auto',
      width: 1200,
      crop: 'limit',
      secure: true,
    });
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

export async function getDiscoveredCollectionSlugs(): Promise<string[]> {
  if (!process.env.CLOUDINARY_API_KEY) return [];
  try {
    const result = await cloudinary.api.sub_folders('photography');
    return (result.folders as { name: string; path: string }[])
      .map((f) => f.name)
      .filter((name) => name !== 'featured');
  } catch (err) {
    console.error('[cloudinary] getDiscoveredCollectionSlugs failed:', err);
    return [];
  }
}

export async function getFeaturedPhotos(): Promise<CloudinaryPhoto[]> {
  return getCollectionPhotos('featured');
}
