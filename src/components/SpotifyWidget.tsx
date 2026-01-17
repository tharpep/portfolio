import Image from 'next/image';
import { SpotifyDisplayData } from '@/lib/spotify-types';

interface SpotifyWidgetProps {
  data: SpotifyDisplayData;
}

export default function SpotifyWidget({ data }: SpotifyWidgetProps) {
  return (
    <section className="mb-20 px-4 md:px-0">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">
          My Music
        </h2>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        
        {/* Top Track Today */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-green-400">#1</span>
            Today&apos;s Top Song
          </h3>
          <div className="rounded-xl border border-green-500/30 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 hover:border-green-400/50 transition-all duration-300 group flex-1 flex flex-col justify-center">
            <div className="flex flex-col items-center text-center gap-6">
              <Image 
                src={data.topTrackDay.albumImage} 
                alt={`${data.topTrackDay.name} album cover`}
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 rounded-xl shadow-lg group-hover:scale-105 transition-transform"
              />
              <div className="w-full">
                <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors mb-2 text-lg">
                  {data.topTrackDay.name}
                </h4>
                <p className="text-sm text-neutral-300 mb-4">
                  {data.topTrackDay.artists}
                </p>
                <a 
                  href={data.topTrackDay.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Play on Spotify
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Songs This Week - Hidden on mobile */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-green-400">Top 5</span>
            This Week
          </h3>
          <div className="space-y-3">
            {data.topTracksWeek.map((track, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-700 bg-gradient-to-r from-neutral-800/70 to-neutral-900/30 hover:border-green-500/30 hover:from-green-900/20 hover:to-emerald-900/20 transition-all duration-300 group"
              >
                <span className="text-sm font-mono text-green-400 w-6 text-center">
                  {index + 1}
                </span>
                <Image 
                  src={track.albumImage} 
                  alt={`${track.name} album cover`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white text-sm truncate group-hover:text-green-300 transition-colors">
                    {track.name}
                  </h4>
                  <p className="text-xs text-neutral-400 truncate">
                    {track.artists}
                  </p>
                </div>
                <a 
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-4 h-4 text-green-400 hover:text-green-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Top 5 Artists This Year - Hidden on mobile */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-green-400">Top 5</span>
            Artists This Year
          </h3>
          <div className="space-y-3">
            {data.topArtistsYear.map((artist, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg border border-neutral-700 bg-gradient-to-r from-neutral-800/70 to-neutral-900/30 hover:border-green-500/30 hover:from-green-900/20 hover:to-emerald-900/20 transition-all duration-300 group"
              >
                <span className="text-sm font-mono text-green-400 w-6 text-center">
                  {index + 1}
                </span>
                <Image 
                  src={artist.image} 
                  alt={`${artist.name} profile`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white text-sm truncate group-hover:text-green-300 transition-colors">
                    {artist.name}
                  </h4>
                </div>
                <a 
                  href={artist.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-4 h-4 text-green-400 hover:text-green-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tech Stack Indicators - Hidden on mobile */}
      <div className="hidden md:flex justify-center gap-2 mt-8">
        <span className="px-3 py-1 text-xs bg-green-900/30 text-green-300 rounded-full border border-green-700/50 font-medium">
          Spotify API
        </span>
        <span className="px-3 py-1 text-xs bg-green-900/30 text-green-300 rounded-full border border-green-700/50 font-medium">
          Python
        </span>
        <span className="px-3 py-1 text-xs bg-green-900/30 text-green-300 rounded-full border border-green-700/50 font-medium">
          GitHub Actions
        </span>
        <span className="px-3 py-1 text-xs bg-green-900/30 text-green-300 rounded-full border border-green-700/50 font-medium">
          TypeScript
        </span>
      </div>
    </section>
  );
}
