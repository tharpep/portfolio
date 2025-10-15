'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

export interface AzurePhoto {
  id: string;
  secureUrl: string;
  thumbnailUrl?: string;
  title: string;
  collection: string;
  expiresAt: Date;
  metadata?: {
    date?: string;
    camera?: string;
    location?: string;
    fileSize?: number;
  };
}

interface UseAzurePhotosResult {
  photos: AzurePhoto[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Custom hook for loading photos from Azure Blob Storage
 * Medium confidence — Heuristic, aligned with project pattern
 */
export function useAzurePhotos(collection: string): UseAzurePhotosResult {
  const [photos, setPhotos] = useState<AzurePhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  type ApiPhoto = Omit<AzurePhoto, 'expiresAt'> & { expiresAt: string | Date };

  const fetchPhotos = useCallback(async () => {
    if (!collection) {
      setError('Collection name is required');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/photos/${encodeURIComponent(collection)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch photos');
      }

      if (data.success) {
        // Convert expiresAt strings back to Date objects
        const photosWithDates = (data.photos as ApiPhoto[]).map((photo) => ({
          ...photo,
          expiresAt: new Date(photo.expiresAt)
        }));
        
        setPhotos(photosWithDates);
      } else {
        throw new Error(data.error || 'Unknown error occurred');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load photos';
      setError(errorMessage);
      console.error('Error fetching photos:', err);
      setPhotos([]); // Reset to empty array on error
    } finally {
      setLoading(false);
    }
  }, [collection]);

  const refetch = () => {
    fetchPhotos();
  };

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return { photos, loading, error, refetch };
}

interface UseCollectionCoversResult {
  covers: Record<string, string | null>;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Custom hook for loading collection cover photos
 * Medium confidence — Heuristic, aligned with project pattern
 */
export function useCollectionCovers(collections: string[]): UseCollectionCoversResult {
  const [covers, setCovers] = useState<Record<string, string | null>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const collectionsKey = useMemo(() => collections.join(','), [collections]);

  const fetchCovers = useCallback(async () => {
    if (!collections.length) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/photos/covers?collections=${encodeURIComponent(collectionsKey)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch collection covers');
      }

      if (data.success) {
        setCovers(data.covers);
      } else {
        throw new Error(data.error || 'Unknown error occurred');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load collection covers';
      setError(errorMessage);
      console.error('Error fetching collection covers:', err);
      setCovers({});
    } finally {
      setLoading(false);
    }
  }, [collections.length, collectionsKey]);

  const refetch = () => {
    fetchCovers();
  };

  useEffect(() => {
    fetchCovers();
  }, [fetchCovers]);

  return { covers, loading, error, refetch };
}

/**
 * Check if a photo URL has expired and needs refresh
 * High confidence — Direct rule match (SysPmt 2.4.2)
 */
export function usePhotoUrlValidation(photo: AzurePhoto | null) {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (!photo) return;

    const checkExpiration = () => {
      const now = new Date();
      const expired = now >= photo.expiresAt;
      setIsExpired(expired);
    };

    // Check immediately
    checkExpiration();

    // Set up interval to check expiration (every minute)
    const interval = setInterval(checkExpiration, 60000);

    return () => clearInterval(interval);
  }, [photo]);

  return isExpired;
}