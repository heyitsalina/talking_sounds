# Talking Sounds

Bootstrap project for a Spotify powered music personality card using Next.js and Tailwind CSS.

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Fill `.env.local` with your Spotify credentials and base URL:
   ```
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   NEXT_PUBLIC_BASE_URL=http://127.0.0.1:3000
   ```
3. Replace the placeholder images in `public/assets` with exports from your Figma file and drop your custom font into `public/fonts/AppleGaramond.woff2`.

Run the dev server with:
```bash
npm run dev
```

## Spotify setup

Create a Spotify application at <https://developer.spotify.com>. Add `http://127.0.0.1:3000/api/spotify/callback` and your production URL to the redirect URIs. Copy the client ID and secret into `.env.local`.

## Deployment

Deploy to Vercel and set the same environment variables in the dashboard. Attach your custom domain when ready.

## Notes

- `src/lib/spotify.ts` contains simple wrappers for the Spotify API.
- `src/lib/personality.ts` holds placeholder logic mapping top artists and tracks to one of 16 personality types.
- All image and font files are placeholders you should replace with your own assets.
