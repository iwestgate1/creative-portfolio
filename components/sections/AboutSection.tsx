"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { about, roles } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { HandwrittenNote } from "@/components/decor";

const roleLabelPositions = [
  "left-[4%] top-[8%]",
  "right-[6%] top-[20%]",
  "left-[0%] top-[46%]",
  "right-[2%] top-[64%]",
  "left-[10%] bottom-[4%]",
];

export default function AboutSection() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (reducedMotion || !wrapper || !portraitRef.current) return;
    const xTo = gsap.quickTo(portraitRef.current, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(portraitRef.current, "y", { duration: 0.8, ease: "power3.out" });

    const handleMove = (event: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      xTo(px * 24);
      yTo(py * 18);
    };
    wrapper.addEventListener("mousemove", handleMove);
    return () => wrapper.removeEventListener("mousemove", handleMove);
  }, [reducedMotion]);

  return (
    <section id="about" className="relative w-full bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-10">
        <div ref={wrapperRef} className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div ref={portraitRef} className="relative h-full w-full overflow-hidden shadow-paper-lg will-change-transform">
            <EditorialImage
              alt="Black and white editorial portrait for About section"
              caption="About portrait — replace in AboutSection"
              tone="cream"
              className="grayscale"
              sizes="40vw"
            />
          </div>
          {roles.map((role, i) => (
            <span
              key={role}
              className={`font-type absolute rounded-full border border-ink/15 bg-cream/90 px-3 py-1.5 text-[10px] tracking-[0.12em] text-ink-soft shadow-paper ${roleLabelPositions[i % roleLabelPositions.length]}`}
            >
              {role}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-14">
          <div>
            <p className="font-type mb-3 text-[11px] tracking-[0.24em] text-ink-soft/70">{about.eyebrow}</p>
            <h2 className="font-serif text-6xl leading-[0.95] text-ink sm:text-7xl">ABOUT</h2>
            <div className="mt-5 flex max-w-md flex-col gap-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-ink-soft sm:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-4xl italic text-ink sm:text-5xl">EXPERIENCE</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {about.experience.map((item) => (
                <li key={item.role} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line/70 pb-2">
                  <span className="text-sm text-ink sm:text-base">
                    {item.role} <span className="text-ink-soft/70">— {item.org}</span>
                  </span>
                  <span className="font-type text-[10px] tracking-[0.1em] text-ink-soft/60">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-4xl italic text-ink sm:text-5xl">EDUCATION</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {about.education.map((item) => (
                  <li key={item.credential}>
                    <p className="text-sm text-ink sm:text-base">{item.credential}</p>
                    <p className="font-type text-[10px] tracking-[0.1em] text-ink-soft/60">
                      {item.org} — {item.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-4xl italic text-ink sm:text-5xl">SKILLS</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-type rounded-full border border-line px-3 py-1.5 text-[10px] tracking-[0.1em] text-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <HandwrittenNote size="lg" rotate={-2} className="text-olive-dark/80">
            still building.
          </HandwrittenNote>
        </div>
      </div>
    </section>
  );
}
