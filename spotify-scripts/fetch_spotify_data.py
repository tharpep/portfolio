#!/usr/bin/env python3
"""
Spotify Data Fetcher for Portfolio
Fetches personal Spotify listening data and updates the portfolio's JSON file.

Usage:
    python fetch_spotify_data.py

Requirements:
    - Spotify API credentials in .env file
    - spotipy library installed
    - Valid Spotify refresh token
"""

import os
import json
import sys
from datetime import datetime
from typing import Dict, List, Any
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Spotify API configuration
SPOTIFY_CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
SPOTIFY_CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
SPOTIFY_REDIRECT_URI = os.getenv('SPOTIFY_REDIRECT_URI', 'http://localhost:8080/callback')
SPOTIFY_USERNAME = os.getenv('SPOTIFY_USERNAME')

# Scopes needed for personal data
SCOPE = "user-top-read user-read-recently-played"

def get_spotify_client():
    """Initialize Spotify client with OAuth authentication."""
    if not all([SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET]):
        raise ValueError("Missing Spotify API credentials. Check your .env file.")
    
    auth_manager = SpotifyOAuth(
        client_id=SPOTIFY_CLIENT_ID,
        client_secret=SPOTIFY_CLIENT_SECRET,
        redirect_uri=SPOTIFY_REDIRECT_URI,
        scope=SCOPE,
        username=SPOTIFY_USERNAME,
        cache_path=".spotify_cache"
    )
    
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
        print("Connecting to Spotify...")
        sp = get_spotify_client()
        
        print("Fetching your top artists for the year...")
        top_artists_year = get_top_artists_year(sp)
        
        print("Fetching your top tracks for the week...")
        top_tracks_week = get_top_tracks_week(sp)
        
        print("Fetching your #1 track for today...")
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
        
        print(f"Successfully updated Spotify data!")
        print(f"Data saved to: {output_path}")
        print(f"Last updated: {spotify_data['lastUpdated']}")
        
        # Print summary
        print(f"\nSummary:")
        print(f"   - Top Artists: {len(top_artists_year)}")
        print(f"   - Top Tracks: {len(top_tracks_week)}")
        print(f"   - #1 Track: {top_track_day['name']}")
        
    except Exception as e:
        print(f"Error updating Spotify data: {e}")
        sys.exit(1)

if __name__ == "__main__":
    update_spotify_data()
