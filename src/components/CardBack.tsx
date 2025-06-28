import Image from 'next/image';
import CDChart from './CDChart';

interface Genre {
  name: string;
  value: number;
}

export default function CardBack({ genres }: { genres: Genre[] }) {
  return (
    <div className="relative h-[400px] w-[300px]">
      {/* TODO: replace with actual back image asset */}
      <Image src="/assets/back.png" alt="back" fill className="rounded-lg object-cover" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <CDChart data={genres} />
      </div>
    </div>
  );
}
