import type { Project } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import ProjectMeta from "../ProjectMeta";

/** Social media work, presented as a small stack of offset mobile screens. */
export default function MobileStack({ project }: { project: Project }) {
  const screens = (project.images.length ? project.images : [project.cover]).slice(0, 3);
  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
      <div className="relative h-64 w-full shrink-0 sm:w-40">
        {screens.map((image, i) => (
          <div
            key={i}
            className="shadow-paper absolute inset-x-0 top-0 aspect-[9/17.5] w-32 overflow-hidden rounded-[1.4rem] border-[6px] border-espresso bg-espresso sm:w-36"
            style={{
              transform: `translate(${i * 18}px, ${i * 14}px) rotate(${(i - 1) * 4}deg)`,
              zIndex: 10 - i,
            }}
          >
            <EditorialImage {...image} tone="espresso" sizes="150px" />
          </div>
        ))}
      </div>
      <ProjectMeta project={project} />
    </div>
  );
}
