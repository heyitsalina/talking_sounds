import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Redirects the user to Spotify authorization screen.
 * All Spotify credentials must be present in the environment.
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

  // Validate that required environment variables exist
  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    res.status(500).json({ error: 'Missing Spotify credentials' });
    return;
  }

  // Build the authorization URL
  const redirect = encodeURIComponent(REDIRECT_URI);
  const url =
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}` +
    `&scope=user-top-read&redirect_uri=${redirect}`;

  // Redirect the user to Spotify's authorization endpoint
  res.redirect(url);
}
