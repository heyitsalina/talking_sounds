# Talking Sounds

Talking Sounds is a small demo web app that connects with your Spotify account and builds a short music personality card based on your top artists and tracks. The app is built with **Next.js**, **Tailwind CSS** and uses the **Spotify Web API**.

## Development

```
npm install
npm run dev
```

Set the environment variables `NEXT_PUBLIC_SPOTIFY_CLIENT_ID` and `NEXT_PUBLIC_SPOTIFY_REDIRECT_URI` in a `.env.local` file. The redirect URI must match the one configured in your Spotify developer dashboard.

## Features

- Login with Spotify (OAuth implicit flow)
- Fetch top artists and tracks
- Simple rule-based personality assignment
- Downloadable card preview

No data is stored on the server. Everything happens in-memory in the browser.
