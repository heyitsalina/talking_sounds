const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string;
const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI as string;

const login = () => {
  const scopes = ['user-top-read'];
  const params = new URLSearchParams({
    response_type: 'token',
    client_id: SPOTIFY_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: scopes.join(' '),
  });
  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
};