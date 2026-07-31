"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { experience } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { useCursorLabel } from "@/components/cursor/CursorContext";

export default function ExperienceSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const setCursorLabel = useCursorLabel();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !previewRef.current) return;
    const xTo = gsap.quickTo(previewRef.current, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(previewRef.current, "y", { duration: 0.5, ease: "power3.out" });
    const handleMove = (event: MouseEvent) => {
      xTo(event.clientX + 24);
      yTo(event.clientY + 24);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reducedMotion]);

  return (
    <section id="experience" className="relative w-full bg-cream px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <p className="font-type mb-3 text-[11px] tracking-[0.24em] text-ink-soft/70">The Index</p>
        <h2 className="font-serif mb-14 text-4xl italic text-ink sm:text-6xl">Experience Archive</h2>

        <ul className="flex flex-col">
          {experience.map((item, i) => (
            <li key={item.role} className="border-t border-line/70 last:border-b">
              <button
                type="button"
                onClick={() => setExpanded(expanded === i ? null : i)}
                onMouseEnter={() => {
                  setHovered(i);
                  setCursorLabel("View");
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setCursorLabel(null);
                }}
                className={`flex w-full flex-col gap-1 py-6 text-left transition-transform duration-500 sm:flex-row sm:items-baseline sm:justify-between ${
                  hovered === i ? "translate-x-3" : ""
                }`}
              >
                <span className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-serif text-2xl text-ink sm:text-3xl">{item.role}</span>
                  <span className="font-type text-[11px] tracking-[0.1em] text-ink-soft/70">{item.company}</span>
                </span>
                <span className="font-type flex gap-4 text-[10px] tracking-[0.1em] text-ink-soft/60">
                  <span>{item.location}</span>
                  <span>{item.year}</span>
                </span>
              </button>

              <div
                className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ maxHeight: expanded === i ? 220 : 0, opacity: expanded === i ? 1 : 0 }}
              >
                <div className="grid gap-6 pb-8 sm:grid-cols-[160px_1fr]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden shadow-paper sm:w-40">
                    <EditorialImage {...item.image} tone="folder" sizes="160px" />
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* cursor-following preview */}
      <div
        ref={previewRef}
        className={`shadow-paper-lg pointer-events-none fixed left-0 top-0 z-40 hidden h-40 w-32 overflow-hidden bg-white p-1.5 transition-opacity duration-300 sm:block ${
          hovered !== null && !reducedMotion ? "opacity-100" : "opacity-0"
        }`}
      >
        {hovered !== null && (
          <div className="relative h-full w-full overflow-hidden">
            <EditorialImage {...experience[hovered].image} tone="cream" sizes="140px" />
          </div>
        )}
      </div>
    </section>
  );
}
