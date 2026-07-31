"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { siteConfig } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { HandwrittenNote } from "@/components/decor";

const annotations = [
  { label: "Est. film, developed digital", className: "left-[4%] top-[4%]" },
  { label: "Black & white, always", className: "right-[2%] top-[4%] text-right hidden sm:block" },
  { label: "Fig. 01 — Self portrait", className: "left-[2%] bottom-[3%]" },
];

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".intro-eyebrow", { opacity: 0, y: 16, duration: 0.8 })
        .from(".intro-name-word", { opacity: 0, y: 60, stagger: 0.12, duration: 1 }, "-=0.5")
        .from(".intro-subtitle", { opacity: 0, y: 20, duration: 0.9 }, "-=0.6")
        .fromTo(
          maskRef.current,
          { opacity: 1 },
          { opacity: 0, duration: reducedMotion ? 0.01 : 1.6, ease: "power2.inOut" },
          "-=0.5"
        )
        .fromTo(
          portraitRef.current,
          { filter: "grayscale(1) contrast(1.3)", scale: 1.06 },
          { filter: "grayscale(0.85) contrast(1.05)", scale: 1, duration: reducedMotion ? 0.01 : 1.8, ease: "power2.out" },
          "<"
        )
        .from(".intro-annotation", { opacity: 0, x: -10, stagger: 0.15, duration: 0.7 }, "-=0.6")
        .from(".intro-scroll-cue", { opacity: 0, duration: 0.8 }, "-=0.3");

      if (!reducedMotion) {
        const xToFirst = gsap.quickTo(firstNameRef.current, "x", { duration: 0.7, ease: "power3.out" });
        const xToLast = gsap.quickTo(lastNameRef.current, "x", { duration: 0.7, ease: "power3.out" });

        const handleMove = (event: MouseEvent) => {
          const relative = event.clientX / window.innerWidth - 0.5;
          xToFirst(relative * -22);
          xToLast(relative * 22);
        };
        sectionRef.current?.addEventListener("mousemove", handleMove);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          animation: gsap.to(portraitRef.current, { yPercent: 12, ease: "none" }),
        });

        return () => sectionRef.current?.removeEventListener("mousemove", handleMove);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const [firstName, ...rest] = siteConfig.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-paper px-6 pb-16 pt-32 text-center"
    >
      <p className="intro-eyebrow font-type mb-6 text-[11px] tracking-[0.24em] text-ink-soft/70">
        {siteConfig.tagline}
      </p>

      <h1 className="flex flex-col items-center font-serif text-[15vw] font-light leading-[0.92] tracking-tight text-ink sm:text-[9vw]">
        <span className="intro-name-word overflow-hidden">
          <span ref={firstNameRef} className="inline-block will-change-transform">
            {firstName}
          </span>
        </span>
        <span className="intro-name-word overflow-hidden italic">
          <span ref={lastNameRef} className="inline-block will-change-transform">
            {lastName}
          </span>
        </span>
      </h1>

      <p className="intro-subtitle mt-8 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
        {siteConfig.title}
      </p>

      <div className="relative mx-auto mt-14 aspect-[3/4] w-[62vw] max-w-xs sm:w-[26vw]">
        <div ref={portraitRef} className="relative h-full w-full overflow-hidden shadow-paper-lg">
          <EditorialImage
            alt="Black and white editorial portrait"
            caption="Portrait — replace in data/content.ts (siteConfig / intro image)"
            tone="cream"
            priority
            sizes="30vw"
          />
        </div>
        <div ref={maskRef} className="halftone-dots pointer-events-none absolute inset-0 bg-paper" />

        {annotations.map((item) => (
          <span
            key={item.label}
            className={`intro-annotation font-type absolute w-max max-w-[9rem] text-[9px] leading-tight tracking-[0.1em] text-ink-soft/70 ${item.className}`}
          >
            {item.label}
          </span>
        ))}
      </div>

      <div className="intro-scroll-cue absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <HandwrittenNote size="sm" rotate={-2} className="text-ink-soft/70">
          {siteConfig.scrollCue}
        </HandwrittenNote>
        <span className="h-8 w-px animate-pulse bg-ink-soft/40" />
      </div>
    </section>
  );
}
