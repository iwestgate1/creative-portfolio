import type { ExperienceItem } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { ProjectStamp } from "@/components/decor";
import BackLink from "@/components/casestudy/BackLink";

export default function ExperienceHero({ item }: { item: ExperienceItem }) {
  return (
    <header className="relative w-full overflow-hidden bg-ink text-cream">
      <div className="relative z-10 flex flex-col justify-between px-6 pb-16 pt-28 sm:px-10 sm:pt-32">
        <BackLink href="/#experience" label="Back to experience" />
        <div className="mt-16 flex flex-col gap-4 sm:mt-24">
          <div className="font-type flex flex-wrap items-center gap-3 text-[11px] tracking-[0.2em] text-cream/60">
            <span>{item.company}</span>
            <span aria-hidden>—</span>
            <span>{item.year}</span>
            <span aria-hidden>—</span>
            <span>{item.location}</span>
          </div>
          <h1 className="font-serif max-w-4xl text-4xl leading-[0.98] sm:text-7xl">{item.role}</h1>
        </div>
      </div>

      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <EditorialImage {...item.image} tone="espresso" priority sizes="100vw" />
        <ProjectStamp label={`${item.company} ${item.year}`} className="absolute bottom-6 right-6 hidden sm:flex" />
      </div>
    </header>
  );
}
