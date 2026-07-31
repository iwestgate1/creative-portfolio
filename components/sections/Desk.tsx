"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, Draggable } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useCursorHover } from "@/components/cursor/CursorContext";
import { projects, desk } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { Tape, BinderClip, PaperClip, HandwrittenNote, FolderTab } from "@/components/decor";
import TiltCard from "@/components/work/TiltCard";

const deskProjects = projects.slice(0, 3);

function DeskPhoto({ project, className, rotate }: { project: (typeof projects)[number]; className: string; rotate: number }) {
  const cursorProps = useCursorHover("Drag");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !photoRef.current || !wrapperRef.current) return;
    const instances = Draggable.create(photoRef.current, {
      type: "x,y",
      bounds: wrapperRef.current,
      inertia: false,
      edgeResistance: 0.7,
    });
    return () => instances.forEach((instance) => instance.kill());
  }, [reducedMotion]);

  return (
    <div ref={wrapperRef} className={`absolute ${className}`}>
      <div
        ref={photoRef}
        {...cursorProps}
        className="group shadow-paper-lg relative w-32 cursor-grab bg-white p-2 pb-8 active:cursor-grabbing sm:w-40"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <EditorialImage {...project.cover} tone="cream" sizes="160px" />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="font-type text-[9px] tracking-[0.12em] text-cream">{project.category}</span>
            <span className="font-type text-[9px] tracking-[0.12em] text-cream/70">{project.year}</span>
          </div>
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="absolute inset-x-2 bottom-2 text-center font-type text-[9px] tracking-[0.1em] text-ink-soft/70 hover:text-ink"
          onClick={(event) => event.stopPropagation()}
        >
          Open folder ↗
        </Link>
      </div>
    </div>
  );
}

export default function Desk() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>("[data-speed]");
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed ?? "0");
        gsap.to(layer, {
          yPercent: speed * 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="archive"
      className="relative w-full overflow-hidden bg-folder px-6 py-32 sm:px-10"
    >
      <div className="relative z-10 mx-auto mb-20 max-w-2xl text-center">
        <p className="font-type mb-3 text-[11px] tracking-[0.24em] text-ink-soft/70">{desk.eyebrow}</p>
        <h2 className="font-serif text-4xl italic text-ink sm:text-6xl">{desk.heading}</h2>
        <p className="mt-4 text-sm text-ink-soft sm:text-base">{desk.subheading}</p>
      </div>

      <div className="relative mx-auto h-[520px] max-w-4xl sm:h-[620px]">
        {/* decorative, non-interactive desk elements — parallax layers */}
        <div data-speed="-0.6" className="absolute left-[4%] top-[6%] w-40 rotate-[-4deg] sm:left-[8%] sm:w-56">
          <div className="shadow-paper relative bg-white p-5 pt-8">
            <FolderTab align="left">Field Notes</FolderTab>
            <p className="font-hand text-xl leading-snug text-ink-soft">
              keep every frame&nbsp;honest
            </p>
          </div>
        </div>

        <div data-speed="0.8" className="absolute right-[6%] top-[2%] w-28 sm:right-[10%] sm:w-36">
          <BinderClip rotate={8} className="left-1/2 top-0 -translate-x-1/2" />
          <div className="shadow-paper mt-4 aspect-[3/4] bg-cream p-3">
            <HandwrittenNote size="sm" rotate={2} className="block text-ink-soft/80">
              press notes
            </HandwrittenNote>
          </div>
        </div>

        <div data-speed="0.4" className="absolute bottom-[4%] left-[10%] sm:left-[14%]">
          <Tape rotate={-12} width={64} />
          <PaperClip rotate={20} size={26} className="left-8 top-6" />
        </div>

        {/* draggable project photos */}
        <DeskPhoto project={deskProjects[0]} className="left-[2%] top-[24%] sm:left-[6%]" rotate={-6} />
        <DeskPhoto project={deskProjects[1]} className="left-[38%] top-[8%]" rotate={4} />
        <DeskPhoto project={deskProjects[2]} className="right-[4%] bottom-[6%] sm:right-[10%]" rotate={-3} />

        {/* tilt-only decorative photograph */}
        <div data-speed="-0.3" className="absolute right-[2%] top-[42%] hidden w-28 sm:block">
          <TiltCard>
            <div className="shadow-paper bg-white p-2 pb-6" style={{ transform: "rotate(6deg)" }}>
              <div className="relative aspect-square w-full overflow-hidden">
                <EditorialImage alt="Detail photograph from the studio" tone="cream" sizes="120px" />
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
