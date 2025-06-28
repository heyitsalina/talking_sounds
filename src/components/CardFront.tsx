import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  accent: string;
}

export default function CardFront({ title, description, accent }: Props) {
  return (
    <div className="relative h-[400px] w-[300px] text-white" style={{ color: accent }}>
      {/* TODO: replace with actual front image assets */}
      <Image src="/assets/fronts/front-1.png" alt="front" fill className="rounded-lg object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 text-center">
        <h2 className="text-2xl font-bold drop-shadow">{title}</h2>
        <p className="text-sm drop-shadow">{description}</p>
      </div>
    </div>
  );
}
