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
 * Format total listening time from milliseconds to "Xh Ym" or "Ym"
 */
export function formatListeningTime(ms: number): string {
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
}
