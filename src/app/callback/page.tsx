import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

/**
 * Handles Spotify OAuth callback by exchanging the authorization code for tokens.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

  // Ensure required environment variables are set
  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    res.status(500).json({ error: 'Missing Spotify credentials' });
    return;
  }

  // Extract the authorization code from query parameters
  const code = Array.isArray(req.query.code) ? req.query.code[0] : req.query.code;
  if (!code) {
    res.status(400).json({ error: 'Authorization code missing' });
    return;
  }

  try {
    // Prepare form data for token exchange
    const form = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    });

    // Basic authentication header with client credentials
    const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    // Exchange authorization code for access and refresh tokens
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      form.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${authHeader}`,
        },
        validateStatus: () => true, // allow handling of non-2xx statuses
      }
    );

    // Handle non-200 responses from Spotify
    if (response.status !== 200) {
      res
        .status(502)
        .json({ error: 'Token exchange failed', details: response.data });
      return;
    }

    const { access_token, expires_in, refresh_token } = response.data as {
      access_token: string;
      expires_in: number;
      refresh_token: string;
    };

    // Store the access token in a secure, httpOnly cookie
    res.setHeader(
      'Set-Cookie',
      `spotify_token=${access_token}; HttpOnly; Secure; Path=/; Max-Age=${expires_in}`
    );

    // Redirect to the dashboard after successful authentication
    res.redirect('/dashboard');
  } catch (err: any) {
    // Catch and report unexpected errors
    res.status(500).json({
      error: 'Internal server error',
      message: err.message,
    });
  }
}