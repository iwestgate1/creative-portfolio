import type { Project } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import ProjectMeta from "../ProjectMeta";

const swatchTones = ["bg-olive", "bg-taupe", "bg-rust", "bg-folder-dark"];

/** Branding work, presented as a moodboard / sample-book page. */
export default function Moodboard({ project }: { project: Project }) {
  const images = (project.images.length ? project.images : [project.cover]).slice(0, 2);
  return (
    <div className="shadow-paper-lg flex flex-col gap-6 bg-white p-6 sm:flex-row sm:p-8">
      <div className="grid w-full shrink-0 grid-cols-3 gap-2 sm:w-48">
        {images.map((image, i) => (
          <div key={i} className="relative col-span-3 aspect-[4/3] overflow-hidden first:col-span-3">
            <EditorialImage {...image} tone="folder" sizes="200px" />
          </div>
        ))}
        <div className="col-span-3 flex gap-2">
          {swatchTones.map((tone) => (
            <span key={tone} className={`h-8 flex-1 ${tone}`} />
          ))}
        </div>
      </div>
      <ProjectMeta project={project} />
    </div>
  );
}
