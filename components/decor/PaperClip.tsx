interface PaperClipProps {
  rotate?: number;
  size?: number;
  className?: string;
}

/** A silver paper clip rendered as inline SVG. */
export default function PaperClip({ rotate = 0, size = 34, className = "" }: PaperClipProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 44"
      width={size}
      height={size * (44 / 24)}
      className={`pointer-events-none absolute drop-shadow-[0_2px_2px_rgba(23,20,15,0.25)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M7 8 C7 4 10 2 13 2 C16 2 19 4 19 8 L19 30 C19 35 15 38 11 38 C7 38 4 35 4 30 L4 12 C4 9.5 6 8 8.2 8 C10.4 8 12 9.5 12 12 L12 28"
        fill="none"
        stroke="#9a9a92"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M7 8 C7 4 10 2 13 2 C16 2 19 4 19 8 L19 30 C19 35 15 38 11 38 C7 38 4 35 4 30 L4 12 C4 9.5 6 8 8.2 8 C10.4 8 12 9.5 12 12 L12 28"
        fill="none"
        stroke="#c9c9c0"
        strokeWidth="1"
        strokeLinecap="round"
        transform="translate(-0.6,-0.6)"
      />
    </svg>
  );
}
