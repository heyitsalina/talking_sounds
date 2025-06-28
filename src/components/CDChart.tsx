interface Slice {
  name: string;
  value: number;
}

export default function CDChart({ data }: { data: Slice[] }) {
  // TODO: implement vinyl style chart using SVG or D3
  const total = data.reduce((t, s) => t + s.value, 0) || 1;
  let offset = 0;
  const radius = 120;
  const center = 150;
  return (
    <svg width={300} height={300} viewBox="0 0 300 300">
      {data.map((d, i) => {
        const dash = (d.value / total) * 2 * Math.PI * radius;
        const gap = 2 * Math.PI * radius - dash;
        const circle = (
          <circle
            key={i}
            r={radius}
            cx={center}
            cy={center}
            fill="none"
            strokeWidth={40}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-offset}
            stroke={`hsl(${(i * 40) % 360},70%,50%)`}
          />
        );
        offset += dash;
        return circle;
      })}
      <circle r={60} cx={center} cy={center} fill="#111" />
    </svg>
  );
}
