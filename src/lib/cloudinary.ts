import 'server-only';
import { v2 as cloudinary } from 'cloudinary';
import { unstable_cache } from 'next/cache';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CollectionCover {
  url: string;
  aspectRatio: number; // width/height — < 1 means portrait
}

export interface ExifData {
  make?: string;
  model?: string;
  lens?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: number;
  focalLength?: string;
}

export interface CloudinaryPhoto {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  aspectRatio: number;
  exif?: ExifData;
  blurDataURL?: string;
}

interface ImageMetadataRaw {
  Make?: string;
  Model?: string;
  LensModel?: string;
  FNumber?: string | number;
  ExposureTime?: string | number;
  ISOSpeedRatings?: string | number | number[];
  FocalLength?: string | number;
}

interface CloudinaryResource {
  public_id: string;
  asset_folder?: string;
  display_name?: string;
  filename?: string;
  width: number;
  height: number;
  secure_url: string;
  image_metadata?: ImageMetadataRaw;
}

interface ResourceApiResponse {
  resources: CloudinaryResource[];
  next_cursor?: string;
}

function extractTitle(resource: CloudinaryResource): string {
  const name = resource.display_name ?? resource.filename ?? resource.public_id.split('/').pop() ?? '';
  return name
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

function formatShutterSpeed(value: string | number): string {
  const str = String(value);
  if (str.includes('/')) return `${str}s`;
  const num = parseFloat(str);
  if (isNaN(num)) return str;
  if (num >= 1) return `${num}s`;
  const denom = Math.round(1 / num);
  return `1/${denom}s`;
}

function formatFocalLength(value: string | number): string {
  const num = parseFloat(String(value).replace(/\s*mm$/i, '').trim());
  if (isNaN(num)) return String(value);
  return `${Math.round(num)}mm`;
}

function formatExif(meta: ImageMetadataRaw): ExifData {
  const exif: ExifData = {};
  if (meta.Make) exif.make = String(meta.Make).trim();
  if (meta.Model) exif.model = String(meta.Model).trim();
  if (meta.LensModel) exif.lens = String(meta.LensModel).trim();
  if (meta.FNumber !== undefined) {
    const n = parseFloat(String(meta.FNumber));
    if (!isNaN(n)) exif.aperture = `f/${n}`;
  }
  if (meta.ExposureTime !== undefined) {
    exif.shutterSpeed = formatShutterSpeed(meta.ExposureTime);
  }
  if (meta.ISOSpeedRatings !== undefined) {
    const raw = Array.isArray(meta.ISOSpeedRatings)
      ? meta.ISOSpeedRatings[0]
      : meta.ISOSpeedRatings;
    const iso = parseInt(String(raw), 10);
    if (!isNaN(iso)) exif.iso = iso;
  }
  if (meta.FocalLength !== undefined) {
    exif.focalLength = formatFocalLength(meta.FocalLength);
  }
  return exif;
}

const generateBlurDataURL = unstable_cache(
  async (publicId: string): Promise<string | undefined> => {
    try {
      const url = cloudinary.url(publicId, {
        width: 20,
        quality: 10,
        fetch_format: 'jpg',
        effect: 'blur:400',
        crop: 'scale',
        secure: true,
      });
      const res = await fetch(url);
      if (!res.ok) return undefined;
      const buf = await res.arrayBuffer();
      return `data:image/jpeg;base64,${Buffer.from(buf).toString('base64')}`;
    } catch {
      return undefined;
    }
  },
  ['cloudinary-blur'],
  { revalidate: 86400 } // blur placeholders never change — cache 24h
);

export async function getCollectionPhotos(slug: string): Promise<CloudinaryPhoto[]> {
  if (!process.env.CLOUDINARY_API_KEY) return [];
  try {
    const allResources: CloudinaryResource[] = [];
    let nextCursor: string | undefined;

    do {
      const result = await cloudinary.api.resources_by_asset_folder(`photography/${slug}`, {
        max_results: 200,
        resource_type: 'image',
        image_metadata: true,
        ...(nextCursor ? { next_cursor: nextCursor } : {}),
      }) as ResourceApiResponse;

      if (Array.isArray(result.resources)) {
        allResources.push(...result.resources);
      }

      nextCursor = result.next_cursor;
    } while (nextCursor);

    return await Promise.all(allResources.map(async (r) => {
      const [blurDataURL] = await Promise.all([
        generateBlurDataURL(r.public_id),
      ]);
      const rawExif = r.image_metadata ? formatExif(r.image_metadata) : undefined;
      const exif = rawExif && Object.keys(rawExif).length > 0 ? rawExif : undefined;

      return {
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
        exif,
        blurDataURL,
      };
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

    return await Promise.all((result.resources as CloudinaryResource[]).map(async (r) => {
      const blurDataURL = await generateBlurDataURL(r.public_id);
      return {
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
        blurDataURL,
      };
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
