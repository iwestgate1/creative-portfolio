import type { ReactNode } from "react";

interface PolaroidFrameProps {
  children: ReactNode;
  caption?: string;
  rotate?: number;
  className?: string;
}

/** A white polaroid-style frame with a bottom caption strip in a handwritten font. */
export default function PolaroidFrame({ children, caption, rotate = -2, className = "" }: PolaroidFrameProps) {
  return (
    <div
      className={`shadow-paper-lg flex w-full flex-col bg-white p-3 pb-6 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-dim">{children}</div>
      {caption && (
        <p className="font-hand mt-3 text-center text-lg leading-none text-ink-soft">{caption}</p>
      )}
    </div>
  );
}
