export interface ExifData {
  make?: string;
  model?: string;
  camera?: string;
  lens?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: number;
  focalLength?: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  aspectRatio: number;
  collectionSlug: string;
  collectionTitle: string;
  year?: string;
  location?: string;
  exif?: ExifData;
  dominantColor?: string;
  blurDataURL?: string;
}

export interface Collection {
  slug: string;
  title: string;
  year: string;
  description: string;
  location?: string;
  camera?: string;
  photoCount: number;
  coverUrl: string;
}

export interface ModeProps {
  photos: PhotoItem[];
  collections: Collection[];
  selectedPhoto: PhotoItem | null;
  onSelectPhoto: (photo: PhotoItem | null) => void;
  activeCollection?: string | null;
  onFilterCollection?: (slug: string | null) => void;
}

export interface GalleryModeModule {
  id: string;
  label: string;
  description: string;
  icon: string; // Lucide icon name
  order: number;
  Component: React.ComponentType<ModeProps>;
}
