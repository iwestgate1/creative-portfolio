import type { Project } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { Tape } from "@/components/decor";
import ProjectMeta from "../ProjectMeta";

const layout = [
  { top: "0%", left: "4%", width: "58%", rotate: -3, z: 3 },
  { top: "8%", left: "46%", width: "50%", rotate: 4, z: 2 },
  { top: "42%", left: "0%", width: "44%", rotate: 2, z: 1 },
];

/** Layered, pinned photographs — for curated/personal photography collections. */
export default function PinnedCollage({ project }: { project: Project }) {
  const frames = (project.images.length ? project.images : [project.cover]).slice(0, 3);
  return (
    <div className="flex flex-col gap-8">
      <div className="relative h-72 w-full sm:h-80">
        {frames.map((image, i) => {
          const pos = layout[i % layout.length];
          return (
            <div
              key={i}
              className="shadow-paper-lg absolute bg-white p-1.5"
              style={{ top: pos.top, left: pos.left, width: pos.width, transform: `rotate(${pos.rotate}deg)`, zIndex: pos.z }}
            >
              <Tape rotate={pos.rotate * -2} width={40} className="-top-2 left-1/2 -translate-x-1/2" />
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <EditorialImage {...image} tone="folder" sizes="30vw" />
              </div>
            </div>
          );
        })}
      </div>
      <ProjectMeta project={project} />
    </div>
  );
}
