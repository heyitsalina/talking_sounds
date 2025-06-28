import type { NextApiRequest, NextApiResponse } from 'next';

export default function login(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/callback`;

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: 'user-top-read',
    redirect_uri: redirectUri,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
}