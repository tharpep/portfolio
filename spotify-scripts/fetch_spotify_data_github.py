#!/usr/bin/env python3
"""
Spotify Data Fetcher for GitHub Actions
Uses refresh token directly (no browser authentication needed).

Polls recently played tracks every 2 hours and accumulates a rolling
7-day history. Completed weeks are archived permanently.
"""

import os
import json
import sys
from datetime import datetime, timezone, timedelta
from typing import Dict, List, Any, Optional
from collections import Counter
import spotipy
from spotipy.oauth2 import SpotifyOAuth


# File paths (relative to spotify-scripts/)
HISTORY_PATH = "../src/data/spotify-history.json"
ARCHIVE_PATH = "../src/data/spotify-archive.json"
DATA_PATH = "../src/data/spotify-data.json"


# ─────────── Spotify Client ───────────

def get_spotify_client_with_refresh_token():
    """Initialize Spotify client using refresh token directly."""
    client_id = os.getenv('SPOTIFY_CLIENT_ID')
    client_secret = os.getenv('SPOTIFY_CLIENT_SECRET')
    refresh_token = os.getenv('SPOTIFY_REFRESH_TOKEN')

    if not all([client_id, client_secret, refresh_token]):
        raise ValueError("Missing required environment variables: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN")

    auth_manager = SpotifyOAuth(
        client_id=client_id,
        client_secret=client_secret,
        redirect_uri='http://localhost:8888/callback',
        scope='user-top-read user-read-recently-played'
    )
    auth_manager.refresh_access_token(refresh_token)

    return spotipy.Spotify(auth_manager=auth_manager)


# ─────────── Top Tracks / Artists (unchanged) ───────────

def get_top_artists_year(sp: spotipy.Spotify, limit: int = 5) -> List[Dict[str, Any]]:
    """Get top artists for recent listening."""
    try:
        results = sp.current_user_top_artists(time_range='medium_term', limit=limit)
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
            return {"name": "No data available", "artists": "Unknown", "albumImage": "https://via.placeholder.com/300x300/1db954/ffffff?text=No+Data", "spotifyUrl": "https://open.spotify.com"}
    except Exception as e:
        print(f"Error fetching top track: {e}")
        return {"name": "Error loading data", "artists": "Unknown", "albumImage": "https://via.placeholder.com/300x300/1db954/ffffff?text=Error", "spotifyUrl": "https://open.spotify.com"}


# ─────────── History & Archive ───────────

def load_json(path: str, default: Any) -> Any:
    """Load a JSON file, returning default if not found or invalid."""
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def save_json(path: str, data: Any) -> None:
    """Write data to a JSON file."""
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def played_at_to_unix_ms(played_at: str) -> int:
    """Convert ISO played_at string to Unix milliseconds."""
    dt = datetime.fromisoformat(played_at.replace('Z', '+00:00'))
    return int(dt.timestamp() * 1000)


def fetch_new_plays(sp: spotipy.Spotify, after_cursor: Optional[str]) -> List[Dict[str, Any]]:
    """Fetch recently played tracks, optionally after a cursor timestamp."""
    new_plays = []
    try:
        kwargs: Dict[str, Any] = {"limit": 50}
        if after_cursor:
            kwargs["after"] = int(after_cursor)

        results = sp.current_user_recently_played(**kwargs)
        page = 1
        while results and results.get('items'):
            for item in results['items']:
                new_plays.append({
                    "track": item['track']['name'],
                    "artists": ", ".join(a['name'] for a in item['track']['artists']),
                    "durationMs": item['track']['duration_ms'],
                    "playedAt": item['played_at']
                })

            if not results.get('next'):
                break
            results = sp.next(results)
            page += 1
            print(f"    Page {page}: {len(new_plays)} plays so far...")
    except Exception as e:
        print(f"Error fetching recent plays: {e}")

    return new_plays


def prune_old_plays(plays: List[Dict], days: int = 8) -> List[Dict]:
    """Remove plays older than `days` days. Uses 8 days to ensure
    complete data is available for week archiving on Mondays."""
    cutoff = datetime.now(timezone.utc) - timedelta(days=days)
    return [
        p for p in plays
        if datetime.fromisoformat(p['playedAt'].replace('Z', '+00:00')) >= cutoff
    ]


def get_week_key(dt: datetime) -> str:
    """Get ISO week string like '2026-W10'. Monday is first day."""
    iso_year, iso_week, _ = dt.isocalendar()
    return f"{iso_year}-W{iso_week:02d}"


def get_week_start(dt: datetime) -> datetime:
    """Get Monday 00:00 UTC for the week containing dt."""
    monday = dt - timedelta(days=dt.weekday())
    return monday.replace(hour=0, minute=0, second=0, microsecond=0, tzinfo=timezone.utc)


def archive_completed_weeks(plays: List[Dict], archive: Dict) -> Dict:
    """Archive any completed weeks not already in the archive."""
    now = datetime.now(timezone.utc)
    current_week = get_week_key(now)
    archived_weeks = {w['week'] for w in archive.get('weeks', [])}

    # Group plays by week
    weeks: Dict[str, List[Dict]] = {}
    for play in plays:
        played_at = datetime.fromisoformat(play['playedAt'].replace('Z', '+00:00'))
        week = get_week_key(played_at)
        if week not in weeks:
            weeks[week] = []
        weeks[week].append(play)

    # Archive completed weeks (skip current week)
    for week_key, week_plays in weeks.items():
        if week_key == current_week or week_key in archived_weeks:
            continue

        total_ms = sum(p['durationMs'] for p in week_plays)
        track_count = len(week_plays)

        # Top track by play count
        track_counter = Counter(f"{p['track']}|||{p['artists']}" for p in week_plays)
        top_track_str, top_track_plays = track_counter.most_common(1)[0]
        top_track_name, top_track_artists = top_track_str.split('|||', 1)

        # Top artist by play count
        artist_counter: Counter = Counter()
        for p in week_plays:
            for artist in p['artists'].split(', '):
                artist_counter[artist.strip()] += 1
        top_artist_name, top_artist_plays = artist_counter.most_common(1)[0]

        # Week date range
        sample_dt = datetime.fromisoformat(week_plays[0]['playedAt'].replace('Z', '+00:00'))
        week_start = get_week_start(sample_dt)
        week_end = week_start + timedelta(days=6)

        archive['weeks'].append({
            "week": week_key,
            "weekStart": week_start.strftime('%Y-%m-%d'),
            "weekEnd": week_end.strftime('%Y-%m-%d'),
            "totalMs": total_ms,
            "trackCount": track_count,
            "topTrack": {"name": top_track_name, "artists": top_track_artists, "plays": top_track_plays},
            "topArtist": {"name": top_artist_name, "plays": top_artist_plays}
        })
        total_min = total_ms // 60000
        print(f"  Archived {week_key}: {track_count} plays, {total_min // 60}h {total_min % 60}m")

    archive['weeks'].sort(key=lambda w: w['week'])
    return archive


def compute_weekly_stats(plays: List[Dict]) -> Dict[str, Any]:
    """Compute stats for the current week (Monday–Sunday) from rolling history."""
    now = datetime.now(timezone.utc)
    current_week = get_week_key(now)

    week_plays = [
        p for p in plays
        if get_week_key(datetime.fromisoformat(p['playedAt'].replace('Z', '+00:00'))) == current_week
    ]

    return {
        "totalMs": sum(p['durationMs'] for p in week_plays),
        "trackCount": len(week_plays)
    }


# ─────────── Main ───────────

def update_spotify_data():
    """Main function to fetch and update all Spotify data."""
    try:
        print("Connecting to Spotify...")
        sp = get_spotify_client_with_refresh_token()

        # ─── Top tracks/artists ───
        print("Fetching your top artists (last 6 months)...")
        top_artists_year = get_top_artists_year(sp)

        print("Fetching your top tracks for the week...")
        top_tracks_week = get_top_tracks_week(sp)

        print("Fetching your #1 track for today...")
        top_track_day = get_top_track_day(sp)

        # ─── Play history accumulation ───
        print("Loading play history...")
        history = load_json(HISTORY_PATH, {"lastCursor": None, "plays": []})
        archive = load_json(ARCHIVE_PATH, {"weeks": []})

        print(f"  Existing: {len(history['plays'])} plays, cursor: {history['lastCursor']}")

        print("Fetching new plays...")
        new_plays = fetch_new_plays(sp, history['lastCursor'])
        print(f"  Fetched {len(new_plays)} plays from API")

        # Deduplicate by playedAt timestamp
        existing_timestamps = {p['playedAt'] for p in history['plays']}
        unique_new = [p for p in new_plays if p['playedAt'] not in existing_timestamps]
        print(f"  {len(unique_new)} new after dedup")

        # Merge new plays
        history['plays'].extend(unique_new)

        # Update cursor to newest play
        if history['plays']:
            newest = max(history['plays'], key=lambda p: p['playedAt'])
            history['lastCursor'] = str(played_at_to_unix_ms(newest['playedAt']))

        # Archive completed weeks (before pruning so we have full data)
        print("Checking for completed weeks to archive...")
        archive = archive_completed_weeks(history['plays'], archive)

        # Prune plays older than 8 days (extra day ensures full week for archiving)
        history['plays'] = prune_old_plays(history['plays'], days=8)
        history['plays'].sort(key=lambda p: p['playedAt'], reverse=True)

        print(f"  History after prune: {len(history['plays'])} plays")

        # Compute current week stats for widget
        weekly_listening = compute_weekly_stats(history['plays'])

        # ─── Save all files ───
        save_json(HISTORY_PATH, history)
        save_json(ARCHIVE_PATH, archive)

        spotify_data = {
            "lastUpdated": datetime.now().isoformat() + "Z",
            "topArtistsYear": top_artists_year,
            "topTracksWeek": top_tracks_week,
            "topTrackDay": top_track_day,
            "weeklyListening": weekly_listening
        }
        save_json(DATA_PATH, spotify_data)

        print(f"\nSuccessfully updated all Spotify data!")
        print(f"Last updated: {spotify_data['lastUpdated']}")

        print(f"\nSummary:")
        print(f"   - Top Artists: {len(top_artists_year)}")
        print(f"   - Top Tracks: {len(top_tracks_week)}")
        print(f"   - #1 Track: {top_track_day['name']}")
        total_min = weekly_listening['totalMs'] // 60000
        print(f"   - This Week: {total_min // 60}h {total_min % 60}m ({weekly_listening['trackCount']} plays)")
        print(f"   - Total History: {len(history['plays'])} plays in rolling window")
        print(f"   - Archive: {len(archive['weeks'])} weeks stored")

    except Exception as e:
        print(f"Error updating Spotify data: {e}")
        sys.exit(1)


if __name__ == "__main__":
    update_spotify_data()
