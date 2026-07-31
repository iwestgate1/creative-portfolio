import type { Project } from "@/data/content";
import { ContactSheet } from "@/components/decor";
import ProjectMeta from "../ProjectMeta";

/** Photography work, presented as a film contact sheet. */
export default function ContactSheetFormat({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6">
      <ContactSheet images={project.images.length ? project.images : [project.cover]} circled={[1]} />
      <ProjectMeta project={project} />
    </div>
  );
}
