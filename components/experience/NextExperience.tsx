import Link from "next/link";
import type { ExperienceItem } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";

export default function NextExperience({ item }: { item: ExperienceItem }) {
  return (
    <Link
      href={`/experience/${item.slug}`}
      className="group relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden bg-ink px-6 py-24 text-center text-cream sm:py-32"
    >
      <div className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-50">
        <EditorialImage {...item.image} tone="espresso" sizes="100vw" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <span className="font-type text-[11px] tracking-[0.24em] text-cream/60">Next in the archive</span>
        <h2 className="font-serif text-4xl italic transition-transform duration-500 group-hover:-translate-y-1 sm:text-6xl">
          {item.role}
        </h2>
        <span className="font-type text-[10px] tracking-[0.14em] text-cream/50">
          {item.company} — {item.year}
        </span>
      </div>
    </Link>
  );
}
