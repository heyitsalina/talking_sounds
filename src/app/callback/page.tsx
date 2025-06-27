'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Callback() {
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) return;
    fetch(`/api/spotify/callback?code=${code}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          sessionStorage.setItem('access_token', data.access_token);
          router.push('/dashboard');
        }
      });
  }, [router]);
  return (
    <main className="flex h-screen items-center justify-center">Returning from Spotify...</main>
  );
}
