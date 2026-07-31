"use client";

import Link from "next/link";
import type { Project } from "@/data/content";
import { useCursorHover } from "@/components/cursor/CursorContext";
import TiltCard from "./TiltCard";
import BrandFolder from "./formats/BrandFolder";
import ContactSheetFormat from "./formats/ContactSheetFormat";
import MagazineSpread from "./formats/MagazineSpread";
import MobileStack from "./formats/MobileStack";
import ClippedDocument from "./formats/ClippedDocument";
import Moodboard from "./formats/Moodboard";

const formatComponents = {
  folder: BrandFolder,
  "contact-sheet": ContactSheetFormat,
  "magazine-spread": MagazineSpread,
  "mobile-stack": MobileStack,
  "clipped-document": ClippedDocument,
  moodboard: Moodboard,
};

export default function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  const cursorProps = useCursorHover("Open");
  const Format = formatComponents[project.format];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`block ${className}`}
      {...cursorProps}
      aria-label={`Open case study: ${project.title}`}
    >
      <TiltCard>
        <Format project={project} />
      </TiltCard>
    </Link>
  );
}
