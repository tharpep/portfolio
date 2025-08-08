import { BlobServiceClient, BlobSASPermissions, SASProtocol } from '@azure/storage-blob';

const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'photos';

/**
 * Lazily create a ContainerClient. Returns null when storage is not configured.
 * High confidence — avoids import-time crashes while infra is not provisioned (SysPmt 2.4.6)
 */
function getContainerClient() {
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  if (!connectionString) {
    return null;
  }
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    return blobServiceClient.getContainerClient(containerName);
  } catch {
    return null;
  }
}

export interface SecurePhoto {
  id: string;
  secureUrl: string;        // Time-limited SAS URL
  thumbnailUrl?: string;    // Optional smaller version
  title: string;
  collection: string;
  expiresAt: Date;          // When URL expires
  metadata?: {
    date?: string;
    camera?: string;
    location?: string;
    fileSize?: number;
  };
}

/**
 * Generate a secure, time-limited SAS URL for a blob
 * High confidence — Direct rule match (SysPmt 2.4.2)
 */
export async function getSecurePhotoUrl(
  blobPath: string, 
  expiryHours: number = 24
): Promise<string> {
  try {
    const containerClient = getContainerClient();
    if (!containerClient) {
      throw new Error('Azure Storage is not configured');
    }
    const blobClient = containerClient.getBlobClient(blobPath);
    
    // Create SAS token with minimal permissions and time limit
    const sasOptions = {
      permissions: BlobSASPermissions.parse('r'), // Read only
      startsOn: new Date(),
      expiresOn: new Date(Date.now() + expiryHours * 60 * 60 * 1000),
      protocol: SASProtocol.Https, // HTTPS only (SysPmt 13.1.1)
    };

    const sasUrl = await blobClient.generateSasUrl(sasOptions);
    return sasUrl;
  } catch {
    throw new Error('Failed to generate secure image URL');
  }
}

/**
 * List all photos in a collection with secure URLs
 * Medium confidence — Heuristic, aligned with project pattern
 */
export async function listSecurePhotos(collection: string): Promise<SecurePhoto[]> {
  try {
    const containerClient = getContainerClient();
    if (!containerClient) {
      // Infra not configured; return empty for graceful degradation on personal site
      return [];
    }
    const photos: SecurePhoto[] = [];
    const prefix = `${collection}/`; // Collection folder structure
    
    // List blobs with collection prefix
    for await (const blob of containerClient.listBlobsFlat({ 
      prefix,
      includeMetadata: true 
    })) {
      // Only process image files
      if (blob.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
        try {
          const secureUrl = await getSecurePhotoUrl(blob.name);
          const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
          
          photos.push({
            id: blob.name,
            secureUrl,
            title: extractTitleFromPath(blob.name),
            collection,
            expiresAt,
            metadata: {
              date: blob.properties.lastModified?.toISOString(),
              fileSize: blob.properties.contentLength,
              ...blob.metadata // Custom metadata from Azure
            }
          });
        } catch {
          // Continue processing other photos
        }
      }
    }
    
    // Sort by date (newest first)
    return photos.sort((a, b) => 
      (b.metadata?.date || '').localeCompare(a.metadata?.date || '')
    );
  } catch {
    return []; // Return empty array on error for graceful degradation
  }
}

/**
 * Get collections with cover photos
 * Medium confidence — Heuristic, aligned with project pattern
 */
export async function getCollectionCover(collection: string): Promise<string | null> {
  try {
    const photos = await listSecurePhotos(collection);
    return photos.length > 0 ? photos[0].secureUrl : null;
  } catch {
    return null;
  }
}

/**
 * Refresh an expired photo URL
 * High confidence — Direct rule match (SysPmt 2.4.2)
 */
export async function refreshPhotoUrl(photoId: string): Promise<string> {
  return getSecurePhotoUrl(photoId, 24);
}

/**
 * Extract a clean title from blob path
 * Low confidence — No clear rule, suggest verifying with user
 */
function extractTitleFromPath(blobName: string): string {
  const fileName = blobName.split('/').pop() || '';
  return fileName
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[-_]/g, ' ')    // Replace dashes/underscores with spaces
    .replace(/\b\w/g, l => l.toUpperCase()); // Title case
}

/**
 * Check if a photo URL has expired
 * Medium confidence — Heuristic, aligned with project pattern
 */
export function isPhotoUrlExpired(photo: SecurePhoto): boolean {
  return new Date() >= photo.expiresAt;
}

/**
 * Get photo metadata without downloading the file
 * High confidence — Direct rule match (SysPmt 4.2.1)
 */
export async function getPhotoMetadata(blobPath: string): Promise<Record<string, string> | null> {
  try {
    const containerClient = getContainerClient();
    if (!containerClient) {
      return null;
    }
    const blobClient = containerClient.getBlobClient(blobPath);
    const properties = await blobClient.getProperties();
    return properties.metadata || null;
  } catch {
    return null;
  }
}