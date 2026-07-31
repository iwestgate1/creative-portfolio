"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { collageItems } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { Tape } from "@/components/decor";

const layout = [
  { top: "6%", left: "6%", width: "26%", scatter: { x: -160, y: -120 } },
  { top: "2%", left: "40%", width: "22%", scatter: { x: 0, y: -180 } },
  { top: "14%", left: "68%", width: "26%", scatter: { x: 180, y: -100 } },
  { top: "44%", left: "16%", width: "24%", scatter: { x: -200, y: 40 } },
  { top: "48%", left: "56%", width: "30%", scatter: { x: 200, y: 60 } },
  { top: "62%", left: "36%", width: "20%", scatter: { x: 0, y: 180 } },
];

export default function Collage() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".collage-item");
      const tapes = gsap.utils.toArray<HTMLElement>(".collage-tape");
      const notes = gsap.utils.toArray<HTMLElement>(".collage-note");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 0.7,
          pin: true,
        },
      });

      items.forEach((item, i) => {
        const scatter = layout[i % layout.length].scatter;
        gsap.set(item, { x: scatter.x, y: scatter.y, opacity: 0, rotate: 0 });
        tl.to(
          item,
          { x: 0, y: 0, opacity: 1, rotate: item.dataset.rotate ? Number(item.dataset.rotate) : 0, duration: 1, ease: "power3.out" },
          i * 0.18
        );
      });

      tl.from(tapes, { opacity: 0, scale: 0.6, duration: 0.5, stagger: 0.08 }, "+=0.1");

      if (notes.length) {
        tl.fromTo(
          notes,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.8, stagger: 0.2 },
          "-=0.2"
        );
      }

      tl.to(items, {
        x: (i) => layout[i % layout.length].scatter.x * 0.12,
        y: (i) => layout[i % layout.length].scatter.y * 0.12,
        duration: 1,
        ease: "power1.inOut",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] w-full flex-col justify-center overflow-hidden bg-espresso px-6"
    >
      <p className="font-type absolute left-6 top-24 z-10 text-[11px] tracking-[0.24em] text-cream/60 sm:left-10 sm:top-28">
        The Collage
      </p>

      <div className="relative mx-auto h-[70vh] w-full max-w-5xl">
        {collageItems.map((item, i) => {
          const pos = layout[i % layout.length];
          return (
            <div
              key={i}
              className="collage-item absolute"
              data-rotate={item.rotate}
              style={{ top: pos.top, left: pos.left, width: pos.width }}
            >
              <div className="shadow-paper-lg relative aspect-[4/5] w-full overflow-hidden bg-white p-1.5">
                <div className="relative h-full w-full overflow-hidden">
                  <EditorialImage {...item.image} tone="espresso" className="grayscale" sizes="30vw" />
                </div>
              </div>
              {item.note && (
                <p className="font-hand collage-note absolute -bottom-6 left-1 text-lg text-cream/90">{item.note}</p>
              )}
            </div>
          );
        })}

        <Tape rotate={-10} width={70} className="collage-tape left-[8%] top-[2%]" tone="white" />
        <Tape rotate={6} width={60} className="collage-tape right-[10%] top-[40%]" tone="cream" />
        <Tape rotate={-4} width={80} className="collage-tape left-[42%] bottom-[6%]" tone="kraft" />
      </div>

      <p className="font-serif absolute bottom-10 right-6 z-10 max-w-xs text-right text-lg italic text-cream/70 sm:right-10">
        &ldquo;A portfolio should feel handled, not printed.&rdquo;
      </p>
    </section>
  );
}
