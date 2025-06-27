import Image from 'next/image';
import CDChart from './CDChart';

interface Props {
  genres: { name: string; value: number }[];
}

export default function CardBack({ genres }: Props) {
  return (
    <div className="relative h-[400px] w-[300px]">
      <Image src="/assets/card-back.png" alt="back" fill className="rounded-lg object-cover" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <CDChart data={genres} />
      </div>
    </div>
  );
}
