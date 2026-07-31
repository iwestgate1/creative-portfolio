import type { Project } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import ProjectMeta from "../ProjectMeta";

/** Creative-direction work, presented as a two-page magazine spread. */
export default function MagazineSpread({ project }: { project: Project }) {
  return (
    <div className="shadow-paper-lg grid grid-cols-1 bg-white sm:grid-cols-[1.1fr_0.9fr]">
      <div className="relative aspect-[4/5] sm:aspect-auto">
        <EditorialImage {...project.cover} tone="cream" sizes="50vw" />
        <span className="font-serif absolute left-4 top-4 text-6xl italic text-white/90 mix-blend-difference">
          {project.number}
        </span>
      </div>
      <div className="flex flex-col justify-center gap-4 border-l border-line/70 p-6 sm:p-8">
        <ProjectMeta project={project} />
      </div>
    </div>
  );
}
