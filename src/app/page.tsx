import Link from 'next/link';

export default function Home() {
  return (
    <main className="font-poppins flex h-screen flex-col items-center justify-center gap-6 bg-white text-black">
      <p className="text-4xl">🌀 welcome to talking sounds! ready to discover your music self?</p>
      <Link href="/login" className="rounded bg-green-500 px-6 py-3 text-lg font-semibold text-white hover:bg-green-600">
        Login with Spotify
      </Link>
    </main>
  );
}