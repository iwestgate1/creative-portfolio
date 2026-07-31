interface ProjectStampProps {
  label: string;
  rotate?: number;
  className?: string;
  tone?: "olive" | "rust" | "ink";
}

const toneMap = {
  olive: "border-olive text-olive",
  rust: "border-rust text-rust",
  ink: "border-ink text-ink",
};

/** A rubber-stamp style badge, double ring border, monospace label. */
export default function ProjectStamp({ label, rotate = -8, className = "", tone = "olive" }: ProjectStampProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none flex h-20 w-20 items-center justify-center rounded-full border-[3px] p-1.5 opacity-80 mix-blend-multiply ${toneMap[tone]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className={`flex h-full w-full items-center justify-center rounded-full border ${toneMap[tone]}`}>
        <span className="font-type text-center text-[9px] leading-tight tracking-[0.1em]">{label}</span>
      </div>
    </div>
  );
}
