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
  width: number;
  height: number;
  secure_url: string;
}

function extractTitle(publicId: string): string {
  const filename = publicId.split('/').pop() ?? '';
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export async function getCollectionPhotos(slug: string): Promise<CloudinaryPhoto[]> {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: `photography/${slug}/`,
      max_results: 200,
      resource_type: 'image',
    });

    return (result.resources as CloudinaryResource[]).map((r) => ({
      id: r.public_id,
      url: cloudinary.url(r.public_id, {
        fetch_format: 'auto',
        quality: 'auto',
        secure: true,
      }),
      width: r.width,
      height: r.height,
      title: extractTitle(r.public_id),
      aspectRatio: r.width / r.height,
    }));
  } catch {
    return [];
  }
}

export async function getCollectionCoverUrl(slug: string): Promise<string | null> {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: `photography/${slug}/`,
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
  } catch {
    return null;
  }
}
