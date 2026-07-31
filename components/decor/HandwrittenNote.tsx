interface HandwrittenNoteProps {
  children: string;
  rotate?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

/** A short handwritten-style annotation, for margin notes and accents. */
export default function HandwrittenNote({ children, rotate = -2, className = "", size = "md" }: HandwrittenNoteProps) {
  return (
    <span
      className={`font-hand inline-block leading-none text-ink-soft ${sizeMap[size]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
