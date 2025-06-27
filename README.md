# Talking Sounds

Talking Sounds is a demo Next.js + TypeScript project that analyses your Spotify listening habits and renders an interactive music personality card. Everything runs completely in the browser and no data is persisted.

## Installation

```bash
npm install
npm run dev
```

Create a `.env.local` file and add the following variables:

```
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/api/spotify/callback
```

## Spotify Setup

1. Create an app in the [Spotify Developer Dashboard](https://developer.spotify.com).
2. Add the redirect URIs `http://127.0.0.1:3000/api/spotify/callback` and `https://talkingsounds.com/api/spotify/callback`.
3. Grab the client id and client secret and put them in `.env.local`.

## Deployment

Deploy the project to Vercel and set the same environment variables in the dashboard. Attach your custom domain `talkingsounds.com`.

## Usage

- Visit `/login` and authenticate with Spotify.
- The dashboard fetches your top artists and tracks and maps them to one of the predefined personality types found in `lib/personality.ts`.
- Click the card to flip between front and back. Use the **Download** button to save a PNG snapshot of the card.

The `public/assets` folder contains the images exported from Figma used for the card backgrounds. A local font is loaded from `public/fonts` via `@font-face` in `globals.css`.

