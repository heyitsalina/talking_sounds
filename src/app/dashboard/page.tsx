'use client';
import { useEffect, useState } from 'react';
import IdentityCard from '@/components/IdentityCard';
import { getTopArtists, getTopTracks } from '@/lib/spotify';
import { mapPersonality } from '@/lib/personality';

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const t = sessionStorage.getItem('spotify_token');
    if (t) setToken(t);
  }, []);

  // TODO: fetch data once token is set and store in state
  const artists: any[] = [];
  const tracks: any[] = [];

  const personality = mapPersonality(artists, tracks);

  return (
    <main className="p-8">
      <IdentityCard
        title={personality}
        description="Your music personality"
        accent="#000"
        genres={[]}
      />
    </main>
  );
}
