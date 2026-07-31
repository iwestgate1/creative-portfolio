import type { ReactNode } from "react";
import PageReveal from "./PageReveal";
import { FolderTab } from "@/components/decor";

const toneMap = {
  cream: "bg-cream",
  white: "bg-white",
  folder: "bg-folder",
  paper: "bg-paper",
};

interface CaseStudySectionProps {
  label: string;
  heading: string;
  children: ReactNode;
  tone?: keyof typeof toneMap;
}

export default function CaseStudySection({ label, heading, children, tone = "paper" }: CaseStudySectionProps) {
  return (
    <PageReveal className="relative w-full px-6 py-16 sm:px-10 sm:py-24">
      <div className={`shadow-paper relative mx-auto max-w-3xl ${toneMap[tone]} px-6 pb-10 pt-12 sm:px-14 sm:pb-14 sm:pt-14`}>
        <FolderTab align="left">{label}</FolderTab>
        <h2 className="font-serif mb-6 text-3xl italic text-ink sm:text-5xl">{heading}</h2>
        <div className="max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">{children}</div>
      </div>
    </PageReveal>
  );
}
