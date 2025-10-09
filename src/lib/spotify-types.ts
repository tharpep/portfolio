export interface SpotifyTrack {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: {
    id: string;
    name: string;
    images: SpotifyImage[];
  };
  external_urls: {
    spotify: string;
  };
  duration_ms: number;
  popularity: number;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images?: SpotifyImage[];
  popularity?: number;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyData {
  lastUpdated: string;
  topArtistsYear: SpotifyArtist[];
  topTracksWeek: SpotifyTrack[];
  topTrackDay: SpotifyTrack;
}

export interface SpotifyDisplayData {
  lastUpdated: string;
  topArtistsYear: {
    name: string;
    image: string;
    spotifyUrl: string;
  }[];
  topTracksWeek: {
    name: string;
    artists: string;
    albumImage: string;
    spotifyUrl: string;
  }[];
  topTrackDay: {
    name: string;
    artists: string;
    albumImage: string;
    spotifyUrl: string;
  };
}
