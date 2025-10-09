import { SpotifyDisplayData } from './spotify-types';

/**
 * Load Spotify data from the JSON file
 * Medium confidence — Heuristic, aligned with project pattern
 */
export async function getSpotifyData(): Promise<SpotifyDisplayData | null> {
  try {
    // Import the JSON data
    const spotifyData = await import('@/data/spotify-data.json');
    return spotifyData.default as SpotifyDisplayData;
  } catch (error) {
    console.error('Failed to load Spotify data:', error);
    return null;
  }
}

/**
 * Format duration from milliseconds to MM:SS
 * High confidence — Direct utility function
 */
export function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format last updated date for display
 * Medium confidence — Heuristic, aligned with project pattern
 */
export function formatLastUpdated(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'Updated just now';
  } else if (diffInHours < 24) {
    return `Updated ${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `Updated ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }
}
