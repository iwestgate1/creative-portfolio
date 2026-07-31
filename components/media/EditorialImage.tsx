import Image from "next/image";
import type { ImageRef } from "@/data/content";

interface EditorialImageProps extends ImageRef {
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  tone?: "cream" | "olive" | "espresso" | "folder";
}

const toneMap: Record<NonNullable<EditorialImageProps["tone"]>, string> = {
  cream: "bg-paper-dim text-ink-soft",
  olive: "bg-olive/15 text-olive-dark",
  espresso: "bg-espresso text-taupe-light",
  folder: "bg-folder text-ink-soft",
};

/**
 * Renders a real photo via next/image when `src` is provided, otherwise
 * renders an art-directed placeholder swatch so the layout still reads as
 * intentional. Replace by adding a file under /public/images and setting
 * `src` in data/content.ts.
 */
export default function EditorialImage({
  src,
  alt,
  caption,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  fill = true,
  tone = "cream",
}: EditorialImageProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`grain relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-ink/15 text-center ${toneMap[tone]} ${className}`}
    >
      <span className="font-type text-[9px] tracking-[0.18em] opacity-60">IMAGE PLACEHOLDER</span>
      <span className="max-w-[80%] font-serif text-sm italic leading-snug opacity-80">{caption ?? alt}</span>
    </div>
  );
}
