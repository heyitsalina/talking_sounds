"use client";
import { useEffect, useState } from 'react';
import IdentityCard from '@/components/IdentityCard';
import { scorePersonality } from '@/lib/personality';

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

  const personality = scorePersonality(
    artists.map((a) => ({ genres: a.genres, popularity: a.popularity })),
    tracks.map((t) => ({ danceability: 0.5, energy: 0.5 })),
  );
  const sampleGenres = artists[0].genres.slice(0, 5).map((g) => ({ name: g, value: 1 }));

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-6">
      <IdentityCard
        title={personality}
        description="Your unique music vibe"
        accent="#ff0"
        genres={sampleGenres}
      />
    </main>
  );
}
