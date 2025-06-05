"use client";
import { useEffect, useState } from 'react';
import PersonalityCard from '@/components/PersonalityCard';

interface Artist {
  name: string;
  popularity: number;
  genres: string[];
}

interface Track {
  name: string;
  artists: { name: string }[];
}

export default function Dashboard() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    if (!token) return;

    fetch('/api/spotify/top?type=artists', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setArtists(data.items || []));

    fetch('/api/spotify/top?type=tracks', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setTracks(data.items || []));
  }, []);

  if (!artists.length || !tracks.length) {
    return (
      <main className="flex h-screen items-center justify-center">
        Loading your music data...
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-6">
      <PersonalityCard artists={artists} tracks={tracks} />
    </main>
  );
}
