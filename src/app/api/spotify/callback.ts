import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!code || !clientId || !clientSecret || !baseUrl) {
    return NextResponse.json(
      { error: 'Missing Spotify credentials' },
      { status: 400 },
    );
  }

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: `${baseUrl}/api/spotify/callback`,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!tokenRes.ok) {
    const err = await tokenRes.json();
    return NextResponse.json(err, { status: tokenRes.status });
  }

  const data = await tokenRes.json();
  const redirect = NextResponse.redirect(`${baseUrl}/dashboard`);
  redirect.headers.set('Set-Cookie', `spotify_token=${data.access_token}; Path=/`);
  return redirect;
}
