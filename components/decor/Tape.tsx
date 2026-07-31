interface TapeProps {
  rotate?: number;
  width?: number;
  className?: string;
  tone?: "cream" | "white" | "kraft";
}

const toneMap = {
  cream: "bg-[#efe6cf]/80",
  white: "bg-white/70",
  kraft: "bg-[#cbb890]/75",
};

/** A small piece of translucent tape, CSS-only, for pinning "photos" to the page. */
export default function Tape({ rotate = -3, width = 72, className = "", tone = "cream" }: TapeProps) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute block h-6 ${toneMap[tone]} shadow-[0_1px_2px_rgba(23,20,15,0.15)] backdrop-blur-[1px] ${className}`}
      style={{
        width,
        transform: `rotate(${rotate}deg)`,
        clipPath:
          "polygon(2% 10%, 6% 0%, 94% 0%, 98% 12%, 100% 88%, 94% 100%, 6% 100%, 0% 90%)",
      }}
    />
  );
}
