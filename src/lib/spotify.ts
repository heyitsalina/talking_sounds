export async function getTopArtists(token: string) {
  const res = await fetch('https://api.spotify.com/v1/me/top/artists?limit=10', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch top artists');
  return res.json();
}

export async function getTopTracks(token: string) {
  const res = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch top tracks');
  return res.json();
}

export async function getAudioFeatures(token: string, trackIds: string[]) {
  const res = await fetch(
    `https://api.spotify.com/v1/audio-features?ids=${trackIds.join(',')}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  if (!res.ok) throw new Error('Failed to fetch audio features');
  return res.json();
}
