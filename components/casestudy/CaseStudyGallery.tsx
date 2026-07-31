import type { ImageRef } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { Tape, PaperClip } from "@/components/decor";
import PageReveal from "./PageReveal";

const rotations = [-3, 2, -1.5, 3, -2.5, 1.5];
const pins: Array<"tape" | "clip"> = ["tape", "clip", "tape", "clip", "tape", "clip"];

export default function CaseStudyGallery({ images }: { images: ImageRef[] }) {
  return (
    <PageReveal className="w-full bg-folder px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-type mb-10 text-[11px] tracking-[0.24em] text-ink-soft/70">Gallery</p>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative"
              style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
            >
              {pins[i % pins.length] === "tape" ? (
                <Tape rotate={-14} width={46} className="-top-3 left-1/2 -translate-x-1/2" />
              ) : (
                <PaperClip rotate={-6} size={22} className="-top-3 left-3" />
              )}
              <div className="shadow-paper-lg relative aspect-[4/5] w-full bg-white p-2">
                <div className="relative h-full w-full overflow-hidden">
                  <EditorialImage {...image} tone="folder" sizes="(max-width: 640px) 45vw, 30vw" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageReveal>
  );
}
