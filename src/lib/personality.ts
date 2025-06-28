export type Personality =
  | 'TypeA'
  | 'TypeB'
  | 'TypeC'
  | 'TypeD';

export function mapPersonality(artists: any[], tracks: any[]): Personality {
  // TODO: implement real scoring logic mapping to 16 types
  if (artists.length > 0 && tracks.length > 0) {
    return 'TypeA';
  }
  return 'TypeB';
}
