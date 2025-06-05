"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    if (accessToken) {
      sessionStorage.setItem('access_token', accessToken);
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <main className="flex h-screen items-center justify-center">
      Returning from Spotify...
    </main>
  );
}
