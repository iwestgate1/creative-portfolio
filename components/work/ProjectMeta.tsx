import type { Project } from "@/data/content";

/** Shared metadata block used inside every project-format card. */
export default function ProjectMeta({ project, tone = "ink" }: { project: Project; tone?: "ink" | "cream" }) {
  const textTone = tone === "cream" ? "text-cream/90" : "text-ink";
  const dimTone = tone === "cream" ? "text-cream/60" : "text-ink-soft/70";
  return (
    <div className="flex flex-col gap-2">
      <div className={`font-type flex items-center gap-3 text-[10px] tracking-[0.14em] ${dimTone}`}>
        <span>{project.number}</span>
        <span aria-hidden>—</span>
        <span>{project.year}</span>
        <span aria-hidden>—</span>
        <span>{project.category}</span>
      </div>
      <h3 className={`font-serif text-2xl leading-tight ${textTone} sm:text-3xl`}>{project.title}</h3>
      <p className={`font-type text-[11px] tracking-[0.1em] ${dimTone}`}>{project.role}</p>
      <p className={`max-w-sm text-sm leading-relaxed ${textTone} opacity-80`}>{project.description}</p>
      <span className={`font-type mt-1 inline-flex w-fit items-center gap-2 border-b border-current pb-0.5 text-[10px] tracking-[0.14em] ${textTone}`}>
        Open case study
        <span aria-hidden>→</span>
      </span>
    </div>
  );
}
