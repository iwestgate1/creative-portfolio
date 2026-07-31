import type { Project } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { ProjectStamp } from "@/components/decor";
import BackLink from "./BackLink";

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <header className="relative w-full overflow-hidden bg-ink text-cream">
      <div className="relative z-10 flex flex-col justify-between px-6 pb-16 pt-28 sm:px-10 sm:pt-32">
        <BackLink />
        <div className="mt-16 flex flex-col gap-4 sm:mt-24">
          <div className="font-type flex flex-wrap items-center gap-3 text-[11px] tracking-[0.2em] text-cream/60">
            <span>{project.number}</span>
            <span aria-hidden>—</span>
            <span>{project.year}</span>
            <span aria-hidden>—</span>
            <span>{project.category}</span>
            <span aria-hidden>—</span>
            <span>{project.role}</span>
          </div>
          <h1 className="font-serif max-w-4xl text-5xl leading-[0.95] sm:text-8xl">{project.title}</h1>
        </div>
      </div>

      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <EditorialImage {...project.cover} tone="espresso" priority sizes="100vw" />
        <ProjectStamp label={`${project.category} ${project.year}`} className="absolute bottom-6 right-6 hidden sm:flex" />
      </div>
    </header>
  );
}
