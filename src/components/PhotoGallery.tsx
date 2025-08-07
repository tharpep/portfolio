'use client';

import Image from 'next/image';
import { useAzurePhotos, AzurePhoto } from '@/hooks/useAzurePhotos';

interface PhotoGalleryProps {
  collection: string;
}

interface PhotoCardProps {
  photo: AzurePhoto;
  index: number;
}

function PhotoCard({ photo, index }: PhotoCardProps) {
  return (
    <div 
      className={`
        group relative overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 
        hover:shadow-2xl hover:shadow-amber-400/10 transition-all duration-500 cursor-pointer
        ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
        ${index % 7 === 0 ? 'lg:row-span-2' : ''}
      `}
      style={{
        aspectRatio: index % 5 === 0 ? '3/2' : index % 3 === 0 ? '4/5' : '1/1'
      }}
    >
      {/* Azure Image */}
      <div className="absolute inset-0">
        <Image
          src={photo.secureUrl}
          alt={photo.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={`${index % 5 === 0 ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}`}
          priority={index < 3} // Prioritize first 3 images
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
      
      {/* Hover Info */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="text-center">
          <div className="text-amber-100 text-sm font-light tracking-wide mb-2">
            {photo.title}
          </div>
          <div className="w-8 h-px bg-amber-400 mx-auto"></div>
          {photo.metadata?.date && (
            <div className="text-amber-300/60 text-xs mt-2">
              {new Date(photo.metadata.date).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PlaceholderCard({ index }: { index: number }) {
  return (
    <div 
      className={`
        relative overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 
        animate-pulse
        ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
        ${index % 7 === 0 ? 'lg:row-span-2' : ''}
      `}
      style={{
        aspectRatio: index % 5 === 0 ? '3/2' : index % 3 === 0 ? '4/5' : '1/1'
      }}
    >
      {/* Loading placeholder with your existing SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-12 h-12 text-amber-400/20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21,15 16,10 5,21"/>
        </svg>
      </div>
    </div>
  );
}

function ErrorCard({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div className="col-span-full text-center py-12">
      <div className="text-amber-400/60 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <h3 className="text-amber-100 text-lg font-light mb-2">Unable to load photos</h3>
      <p className="text-amber-300/60 text-sm mb-6">{error}</p>
      <button
        onClick={onRetry}
        className="px-6 py-2 border border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-300 text-sm font-light tracking-wider uppercase"
      >
        Try Again
      </button>
    </div>
  );
}

export default function PhotoGallery({ collection }: PhotoGalleryProps) {
  const { photos, loading, error, refetch } = useAzurePhotos(collection);

  // Show error state
  if (error) {
    return (
      <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ErrorCard error={error} onRetry={refetch} />
      </div>
    );
  }

  // Show loading placeholders (maintaining your existing design)
  if (loading) {
    return (
      <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(12)].map((_, i) => (
          <PlaceholderCard key={i} index={i} />
        ))}
      </div>
    );
  }

  // Show message if no photos found
  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-amber-400/60 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
        </div>
        <h3 className="text-amber-100 text-lg font-light mb-2">No photos found</h3>
        <p className="text-amber-300/60 text-sm">This collection doesn't contain any photos yet.</p>
      </div>
    );
  }

  // Render actual photos
  return (
    <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, i) => (
        <PhotoCard key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  );
}