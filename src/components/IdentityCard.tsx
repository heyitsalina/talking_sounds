'use client';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface Genre {
  name: string;
  value: number;
}

interface Props {
  title: string;
  description: string;
  accent: string;
  genres: Genre[];
}

export default function IdentityCard({ title, description, accent, genres }: Props) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const download = async () => {
    if (!cardRef.current) return;
    // TODO: optionally customize file name
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'identity-card.png';
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={cardRef}
        className="[perspective:1000px]"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className="relative h-[400px] w-[300px] duration-700 [transform-style:preserve-3d]"
          style={{ transform: flipped ? 'rotateY(180deg)' : undefined }}
        >
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <CardFront title={title} description={description} accent={accent} />
          </div>
          <div
            className="absolute inset-0 [backface-visibility:hidden]"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <CardBack genres={genres} />
          </div>
        </div>
      </div>
      <button
        onClick={download}
        className="rounded bg-blue-600 px-3 py-1 text-white"
      >
        Download
      </button>
    </div>
  );
}
