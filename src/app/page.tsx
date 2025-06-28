import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="font-sans text-[#CB1F1F] text-3xl">Willkommen!</h1>
      <Link
        href="/api/spotify/login"
        className="rounded bg-green-600 px-6 py-2 text-white"
      >
        Login with Spotify
      </Link>
    </main>
  );
}
