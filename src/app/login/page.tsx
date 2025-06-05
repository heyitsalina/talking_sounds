"use client";
import { useEffect } from 'react';

export default function Login() {
  const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI as string;

  const login = () => {
    const scopes = ['user-top-read'];
    const params = new URLSearchParams({
      response_type: 'token',
      client_id: SPOTIFY_CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: scopes.join(' '),
    });
    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <button
        className="rounded bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600"
        onClick={login}
      >
        Login with Spotify
      </button>
    </main>
  );
}
