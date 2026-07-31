import type { Project } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { BinderClip, HandwrittenNote } from "@/components/decor";
import ProjectMeta from "../ProjectMeta";

/** Entrepreneurship work, presented as a clipped case-study document. */
export default function ClippedDocument({ project }: { project: Project }) {
  return (
    <div className="shadow-paper-lg relative mt-5 bg-cream p-6 pt-9 sm:p-8 sm:pt-10">
      <BinderClip rotate={-4} className="-top-5 left-8" />
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="relative aspect-[3/4] w-full shrink-0 rotate-[1.5deg] border border-line bg-white p-2 sm:w-40">
          <div className="relative h-full w-full overflow-hidden">
            <EditorialImage {...project.cover} tone="cream" sizes="180px" />
          </div>
        </div>
        <ProjectMeta project={project} />
      </div>
      <HandwrittenNote rotate={-3} size="sm" className="absolute bottom-4 right-6 opacity-70">
        worth the risk
      </HandwrittenNote>
    </div>
  );
}
