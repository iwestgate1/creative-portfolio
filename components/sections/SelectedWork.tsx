"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { projects } from "@/data/content";
import ProjectCard from "@/components/work/ProjectCard";

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const track = trackRef.current;
      if (!track) return;

      const scrollDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -scrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.scrollTrigger?.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative w-full overflow-hidden bg-white">
      <div className="px-6 pb-10 pt-24 sm:px-10">
        <p className="font-type mb-3 text-[11px] tracking-[0.24em] text-ink-soft/70">Selected Work</p>
        <h2 className="font-serif max-w-2xl text-4xl leading-[1.05] text-ink sm:text-6xl">
          Six projects, six formats — one point of view.
        </h2>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex gap-10 overflow-x-auto px-6 pb-24 sm:gap-16 sm:px-10 md:w-max md:pb-32"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} className="w-[82vw] shrink-0 sm:w-[420px]" />
        ))}
        <div className="hidden w-[10vw] shrink-0 sm:block" aria-hidden />
      </div>
    </section>
  );
}
