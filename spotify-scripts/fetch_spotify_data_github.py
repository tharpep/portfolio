#!/usr/bin/env python3
"""
Spotify Data Fetcher for GitHub Actions
Uses refresh token directly (no browser authentication needed).

This version is designed to run in GitHub Actions with secrets.
"""

import os
import json
import sys
from datetime import datetime
from typing import Dict, List, Any
import spotipy
from spotipy.oauth2 import SpotifyOAuth

def get_spotify_client_with_refresh_token():
    """Initialize Spotify client using refresh token directly."""
    client_id = os.getenv('SPOTIFY_CLIENT_ID')
    client_secret = os.getenv('SPOTIFY_CLIENT_SECRET')
    refresh_token = os.getenv('SPOTIFY_REFRESH_TOKEN')
    
    if not all([client_id, client_secret, refresh_token]):
        raise ValueError("Missing required environment variables: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN")
    
    # Create OAuth manager
    auth_manager = SpotifyOAuth(
        client_id=client_id,
        client_secret=client_secret,
        redirect_uri='http://localhost:8888/callback',  # Not used with refresh token
        scope='user-top-read user-read-recently-played'
    )
    
    # Set the refresh token directly
    auth_manager.refresh_access_token(refresh_token)
    
    return spotipy.Spotify(auth_manager=auth_manager)

def get_top_artists_year(sp: spotipy.Spotify, limit: int = 5) -> List[Dict[str, Any]]:
    """Get top artists for the year (long_term)."""
    try:
        results = sp.current_user_top_artists(time_range='long_term', limit=limit)
        if not results or 'items' not in results:
            return []
        
        return [
            {
                "name": artist['name'],
                "image": artist['images'][0]['url'] if artist.get('images') else "https://via.placeholder.com/300x300/1db954/ffffff?text=Artist",
                "spotifyUrl": artist['external_urls']['spotify']
            }
            for artist in results['items']
        ]
    except Exception as e:
        print(f"Error fetching top artists: {e}")
        return []

def get_top_tracks_week(sp: spotipy.Spotify, limit: int = 5) -> List[Dict[str, Any]]:
    """Get top tracks for the week (short_term)."""
    try:
        results = sp.current_user_top_tracks(time_range='short_term', limit=limit)
        if not results or 'items' not in results:
            return []
        
        return [
            {
                "name": track['name'],
                "artists": ", ".join([artist['name'] for artist in track['artists']]),
                "albumImage": track['album']['images'][0]['url'] if track['album'].get('images') else "https://via.placeholder.com/300x300/1db954/ffffff?text=Album",
                "spotifyUrl": track['external_urls']['spotify']
            }
            for track in results['items']
        ]
    except Exception as e:
        print(f"Error fetching top tracks: {e}")
        return []

def get_top_track_day(sp: spotipy.Spotify) -> Dict[str, Any]:
    """Get the #1 track for the day (short_term, limit=1)."""
    try:
        results = sp.current_user_top_tracks(time_range='short_term', limit=1)
        if results and 'items' in results and results['items']:
            track = results['items'][0]
            return {
                "name": track['name'],
                "artists": ", ".join([artist['name'] for artist in track['artists']]),
                "albumImage": track['album']['images'][0]['url'] if track['album'].get('images') else "https://via.placeholder.com/300x300/1db954/ffffff?text=Album",
                "spotifyUrl": track['external_urls']['spotify']
            }
        else:
            return {
                "name": "No data available",
                "artists": "Unknown",
                "albumImage": "https://via.placeholder.com/300x300/1db954/ffffff?text=No+Data",
                "spotifyUrl": "https://open.spotify.com"
            }
    except Exception as e:
        print(f"Error fetching top track: {e}")
        return {
            "name": "Error loading data",
            "artists": "Unknown",
            "albumImage": "https://via.placeholder.com/300x300/1db954/ffffff?text=Error",
            "spotifyUrl": "https://open.spotify.com"
        }

def update_spotify_data():
    """Main function to fetch and update Spotify data."""
    try:
        print("🎵 Connecting to Spotify...")
        sp = get_spotify_client_with_refresh_token()
        
        print("📊 Fetching your top artists for the year...")
        top_artists_year = get_top_artists_year(sp)
        
        print("🎶 Fetching your top tracks for the week...")
        top_tracks_week = get_top_tracks_week(sp)
        
        print("⭐ Fetching your #1 track for today...")
        top_track_day = get_top_track_day(sp)
        
        # Create the data structure
        spotify_data = {
            "lastUpdated": datetime.now().isoformat() + "Z",
            "topArtistsYear": top_artists_year,
            "topTracksWeek": top_tracks_week,
            "topTrackDay": top_track_day
        }
        
        # Write to JSON file
        output_path = "../src/data/spotify-data.json"
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(spotify_data, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Successfully updated Spotify data!")
        print(f"📁 Data saved to: {output_path}")
        print(f"🕒 Last updated: {spotify_data['lastUpdated']}")
        
        # Print summary
        print(f"\n📈 Summary:")
        print(f"   • Top Artists: {len(top_artists_year)}")
        print(f"   • Top Tracks: {len(top_tracks_week)}")
        print(f"   • #1 Track: {top_track_day['name']}")
        
    except Exception as e:
        print(f"❌ Error updating Spotify data: {e}")
        sys.exit(1)

if __name__ == "__main__":
    update_spotify_data()
