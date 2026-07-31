import type { ImageRef } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";

interface ContactSheetProps {
  images: ImageRef[];
  className?: string;
  circled?: number[];
}

function Sprockets() {
  return (
    <div className="flex shrink-0 flex-col justify-between bg-espresso py-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="mx-1.5 block h-1.5 w-2.5 rounded-[1px] bg-paper/70" />
      ))}
    </div>
  );
}

/** A film contact-sheet grid: sprocket edges, a frame grid, and a circled "pick." */
export default function ContactSheet({ images, className = "", circled = [0] }: ContactSheetProps) {
  return (
    <div className={`shadow-paper-lg flex bg-espresso-2 p-1 ${className}`}>
      <Sprockets />
      <div className="grid flex-1 grid-cols-3 gap-1 p-1">
        {images.map((image, i) => (
          <div key={i} className="relative aspect-[3/2] bg-ink">
            <EditorialImage {...image} tone="espresso" className="grayscale" sizes="20vw" />
            {circled.includes(i) && (
              <span className="pointer-events-none absolute inset-1 rounded-[50%] border-2 border-rust/80 mix-blend-screen" />
            )}
          </div>
        ))}
      </div>
      <Sprockets />
    </div>
  );
}
