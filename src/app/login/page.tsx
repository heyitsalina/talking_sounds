'use client';

export default function Login() {
  const handleLogin = () => {
    window.location.href = '/api/spotify/login';
  };
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6">
      <button
        onClick={handleLogin}
        className="rounded bg-green-600 px-6 py-3 text-white"
      >
        Login with Spotify
      </button>
    </main>
  );
}
