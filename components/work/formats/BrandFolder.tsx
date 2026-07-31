import type { Project } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { FolderTab, Tape } from "@/components/decor";
import ProjectMeta from "../ProjectMeta";

/** Brand identity work, presented as an open manila folder with a peeking sheet. */
export default function BrandFolder({ project }: { project: Project }) {
  return (
    <div className="shadow-paper-lg relative mt-6 flex flex-col gap-6 bg-folder p-6 pt-8 sm:flex-row sm:p-8 sm:pt-10">
      <FolderTab>{project.category}</FolderTab>
      <div className="relative aspect-[4/5] w-full shrink-0 rotate-[-2deg] bg-white p-2 sm:w-48">
        <Tape rotate={-8} width={54} className="-left-3 -top-3" />
        <div className="relative h-full w-full overflow-hidden">
          <EditorialImage {...project.cover} tone="folder" sizes="200px" />
        </div>
      </div>
      <ProjectMeta project={project} />
    </div>
  );
}
