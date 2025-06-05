"use client";
import html2canvas from 'html2canvas';
import { useMemo, useRef } from 'react';

interface Artist {
  name: string;
  popularity: number;
  genres: string[];
}

interface Track {
  name: string;
  artists: { name: string }[];
}

interface Props {
  artists: Artist[];
  tracks: Track[];
}

function mapToPersonality(artists: Artist[], tracks: Track[]) {
  // very naive scoring for demo
  const avgPopularity =
    artists.reduce((sum, a) => sum + a.popularity, 0) / artists.length;
  if (avgPopularity > 70) return 'The Trendsetter';
  if (avgPopularity > 50) return 'The Explorer';
  return 'The Rebel';
}

export default function PersonalityCard({ artists, tracks }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const personality = useMemo(
    () => mapToPersonality(artists, tracks),
    [artists, tracks]
  );

  const download = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement('a');
    link.download = 'personality-card.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={cardRef}
        className="w-80 rounded-lg border bg-white p-6 text-center shadow"
      >
        <h2 className="mb-4 text-2xl font-bold">{personality}</h2>
        <div className="h-40 w-40 rounded-full border-4 border-dashed border-gray-400" />
      </div>
      <button
        className="rounded bg-blue-600 px-4 py-2 font-semibold text-white"
        onClick={download}
      >
        Download Card
      </button>
    </div>
  );
}
