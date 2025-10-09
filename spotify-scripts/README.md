# Spotify Data Fetcher

This folder contains scripts to fetch your personal Spotify listening data and update your portfolio website.

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure environment:**
   - Copy `env_example.txt` to `.env`
   - Fill in your Spotify API credentials:
     - `SPOTIFY_CLIENT_ID`: Your Spotify app's client ID
     - `SPOTIFY_CLIENT_SECRET`: Your Spotify app's client secret
     - `SPOTIFY_USERNAME`: Your Spotify username

3. **Get Spotify API credentials:**
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new app
   - Add redirect URI: `http://localhost:8080/callback`

## Usage

### First Time Setup (Authentication)
1. Run the script: `python fetch_spotify_data.py`
2. It will open your browser for Spotify authentication
3. After authentication, a `.spotify_cache` file will be created
4. The script will fetch your data and update `../src/data/spotify-data.json`

### Regular Updates
Just run: `python fetch_spotify_data.py`

The script will:
- ✅ Fetch your top 5 artists for the year
- ✅ Fetch your top 5 songs for the week  
- ✅ Fetch your #1 song for the day
- ✅ Update the JSON file for your portfolio

## Data Structure

The script creates a JSON file with this structure:
```json
{
  "lastUpdated": "2025-01-27T12:00:00.000Z",
  "topArtistsYear": [...],
  "topTracksWeek": [...],
  "topTrackDay": {...}
}
```

## Troubleshooting

- **Authentication issues**: Delete `.spotify_cache` and re-run
- **Missing data**: Check your Spotify account has listening history
- **API errors**: Verify your credentials and app permissions

## Security Note

- Never commit your `.env` file or `.spotify_cache` file
- These files are already in `.gitignore`
- Keep your Spotify client secret secure
