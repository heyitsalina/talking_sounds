export type Personality =
  | 'The Ace'
  | 'The Seeker'
  | 'The Voyager'
  | 'The Oracle'
  | 'The Rebel'
  | 'The Maestro'
  | 'The Dreamer'
  | 'The Adventurer'
  | 'The Wanderer'
  | 'The Champion'
  | 'The Visionary'
  | 'The Mystic'
  | 'The Maverick'
  | 'The Architect'
  | 'The Alchemist';

interface Artist {
  genres: string[];
  popularity: number;
}

interface Track {
  danceability: number;
  energy: number;
}

export function scorePersonality(
  artists: Artist[],
  tracks: Track[],
): Personality {
  const avgPopularity =
    artists.reduce((a, b) => a + b.popularity, 0) / artists.length;
  const avgDance = tracks.reduce((a, b) => a + b.danceability, 0) / tracks.length;
  if (avgPopularity > 80 && avgDance > 0.7) return 'The Ace';
  if (avgPopularity > 60) return 'The Seeker';
  if (avgDance > 0.8) return 'The Voyager';
  if (avgPopularity < 40) return 'The Rebel';
  return 'The Oracle';
}
