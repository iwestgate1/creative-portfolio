import type { Project } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import ProjectMeta from "../ProjectMeta";

function Sprockets() {
  return (
    <div className="flex shrink-0 flex-col justify-between bg-charcoal py-1.5" aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="mx-1 block h-1.5 w-2 rounded-[1px] bg-paper/60" />
      ))}
    </div>
  );
}

/** Sequential photography, presented as a horizontal film strip. */
export default function FilmStrip({ project }: { project: Project }) {
  const frames = (project.images.length ? project.images : [project.cover]).slice(0, 4);
  return (
    <div className="flex flex-col gap-6">
      <div className="shadow-paper-lg flex bg-charcoal p-1">
        <Sprockets />
        <div className="flex flex-1 gap-[2px]">
          {frames.map((image, i) => (
            <div key={i} className="relative aspect-[3/4] flex-1 bg-ink">
              <EditorialImage {...image} tone="espresso" className="grayscale" sizes="20vw" />
            </div>
          ))}
        </div>
        <Sprockets />
      </div>
      <ProjectMeta project={project} />
    </div>
  );
}
