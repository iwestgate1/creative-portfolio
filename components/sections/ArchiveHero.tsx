"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { siteConfig } from "@/data/content";
import EditorialImage from "@/components/media/EditorialImage";
import { HandwrittenNote } from "@/components/decor";

type ArtifactType = "photo" | "contact-sheet" | "note" | "moodboard" | "film-strip" | "sketch" | "magazine" | "notebook";

interface Artifact {
  type: ArtifactType;
  top: string;
  left: string;
  width: string;
  rotate: number;
  depth: number; // 0 (back) – 1 (front): drives rise distance + stacking
}

const artifacts: Artifact[] = [
  { type: "photo", top: "8%", left: "6%", width: "20%", rotate: -6, depth: 0.9 },
  { type: "contact-sheet", top: "4%", left: "58%", width: "26%", rotate: 4, depth: 0.6 },
  { type: "note", top: "40%", left: "2%", width: "17%", rotate: 5, depth: 1 },
  { type: "moodboard", top: "46%", left: "66%", width: "22%", rotate: -3, depth: 0.5 },
  { type: "film-strip", top: "10%", left: "34%", width: "18%", rotate: -2, depth: 0.75 },
  { type: "sketch", top: "56%", left: "24%", width: "20%", rotate: 3, depth: 0.65 },
  { type: "magazine", top: "18%", left: "78%", width: "18%", rotate: 7, depth: 0.4 },
  { type: "notebook", top: "58%", left: "48%", width: "16%", rotate: -8, depth: 0.85 },
];

function Artifact({ artifact }: { artifact: Artifact }) {
  const base = "shadow-natural w-full";
  switch (artifact.type) {
    case "photo":
      return (
        <div className={`${base} bg-white p-1.5 pb-4`}>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-dim">
            <EditorialImage alt="Archive photograph" tone="folder" sizes="200px" />
          </div>
        </div>
      );
    case "contact-sheet":
      return (
        <div className={`${base} grid grid-cols-3 gap-[2px] bg-charcoal p-1.5`}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="aspect-[4/3] bg-espresso-2/80" />
          ))}
        </div>
      );
    case "note":
      return (
        <div className={`${base} texture-linen p-4`}>
          <HandwrittenNote size="sm" rotate={0} className="text-ink-soft/80">
            keep looking closely
          </HandwrittenNote>
        </div>
      );
    case "moodboard":
      return (
        <div className={`${base} flex flex-col gap-1.5 bg-white p-2`}>
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-paper-dim">
            <EditorialImage alt="Moodboard reference" tone="folder" sizes="200px" />
          </div>
          <div className="flex gap-1">
            <span className="h-4 flex-1 bg-olive" />
            <span className="h-4 flex-1 bg-taupe" />
            <span className="h-4 flex-1 bg-rust" />
          </div>
        </div>
      );
    case "film-strip":
      return (
        <div className={`${base} flex gap-[2px] bg-charcoal p-1`}>
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="aspect-[2/3] w-full bg-espresso-2/80" />
          ))}
        </div>
      );
    case "sketch":
      return (
        <div className={`${base} texture-linen relative overflow-hidden p-3`}>
          <svg viewBox="0 0 100 70" className="h-full w-full opacity-60">
            <rect x="6" y="10" width="88" height="50" fill="none" stroke="#4a433a" strokeWidth="0.6" />
            <line x1="6" y1="30" x2="94" y2="30" stroke="#4a433a" strokeWidth="0.4" />
            <line x1="34" y1="10" x2="34" y2="60" stroke="#4a433a" strokeWidth="0.4" />
            <line x1="64" y1="10" x2="64" y2="60" stroke="#4a433a" strokeWidth="0.4" />
          </svg>
        </div>
      );
    case "magazine":
      return (
        <div className={`${base} bg-cream p-3`}>
          <span className="font-serif block text-lg italic leading-tight text-ink-soft">Field &amp; Form</span>
          <span className="font-type mt-1 block text-[7px] tracking-[0.14em] text-ink-soft/50">No. 04</span>
        </div>
      );
    case "notebook":
      return (
        <div
          className={`${base} bg-paper-dim p-3`}
          style={{
            backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 9px, rgba(74,67,58,0.15) 10px)",
          }}
        >
          <span className="font-hand text-ink-soft/70">notes —</span>
        </div>
      );
  }
}

export default function ArchiveHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const artifactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cueRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    document.body.classList.add("has-archive");

    const ctx = gsap.context(() => {
      gsap.set(lidRef.current, { transformOrigin: "50% 0%", transformPerspective: 1600 });
      artifactRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { y: 60 + artifacts[i].depth * 40, opacity: 0, scale: 0.94 });
      });
      gsap.set(cueRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=280%",
          scrub: 0.8,
          pin: stageRef.current,
          onUpdate: (self) => {
            document.body.classList.toggle("nav-visible", self.progress > 0.82);
          },
        },
      });

      tl.to(lidRef.current, { rotateX: -108, duration: 1.4, ease: "power2.inOut" }, 0.15)
        .to(
          artifactRefs.current.filter(Boolean),
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: { each: 0.12, from: "random" },
            ease: "power2.out",
          },
          0.7
        )
        .to(artifactRefs.current.filter(Boolean), {
          y: (i) => -18 - artifacts[i].depth * 26,
          duration: 1.1,
          stagger: 0.05,
          ease: "power1.inOut",
        }, 1.9)
        .to(cueRef.current, { opacity: 1, duration: 0.5 }, 1.1)
        .to(stageRef.current, { opacity: 0, scale: 1.06, duration: 0.8, ease: "power1.in" }, 2.55);
    }, wrapperRef);

    return () => {
      ctx.revert();
      document.body.classList.remove("has-archive", "nav-visible");
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <section className="texture-stone relative flex min-h-[100svh] w-full flex-col items-center justify-center gap-16 px-6 py-24">
        <div className="texture-wood shadow-natural relative flex w-full max-w-2xl items-center justify-center py-20">
          <h1 className="emboss-text font-serif text-4xl tracking-[0.08em] sm:text-5xl">{siteConfig.name.toUpperCase()}</h1>
        </div>
        <div className="relative grid w-full max-w-3xl grid-cols-3 gap-4 sm:grid-cols-4">
          {artifacts.map((artifact, i) => (
            <div key={i} className="relative aspect-[4/5]" style={{ transform: `rotate(${artifact.rotate}deg)` }}>
              <Artifact artifact={artifact} />
            </div>
          ))}
        </div>
        <p className="font-hand text-xl text-ink-soft/70">{siteConfig.scrollCue}</p>
      </section>
    );
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div ref={stageRef} className="texture-stone sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(43,38,34,0.22)_100%)]" />

        <div className="relative flex w-full max-w-3xl flex-col items-center" style={{ perspective: 1600 }}>
          {/* ambient contact shadow beneath the box */}
          <div
            aria-hidden
            className="absolute -bottom-4 h-10 w-[80%] rounded-[50%] bg-charcoal/25 blur-2xl"
          />

          {/* box body + interior */}
          <div className="texture-wood shadow-natural relative h-[46vh] w-full max-w-xl overflow-hidden">
            <div className="absolute inset-3 overflow-hidden">
              {artifacts.map((artifact, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    artifactRefs.current[i] = el;
                  }}
                  className="absolute"
                  style={{
                    top: artifact.top,
                    left: artifact.left,
                    width: artifact.width,
                    transform: `rotate(${artifact.rotate}deg)`,
                    zIndex: Math.round(artifact.depth * 10),
                  }}
                >
                  <Artifact artifact={artifact} />
                </div>
              ))}
            </div>
          </div>

          {/* lid — hinged at the back edge, lifts open on scroll */}
          <div
            ref={lidRef}
            className="texture-wood shadow-natural backface-hidden absolute top-0 flex h-[46vh] w-full max-w-xl items-center justify-center"
          >
            <h1 className="emboss-text font-serif px-6 text-center text-[9vw] tracking-[0.06em] sm:text-5xl">
              {siteConfig.name.toUpperCase()}
            </h1>
          </div>
        </div>

        <div ref={cueRef} className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <HandwrittenNote size="sm" rotate={-2} className="text-ink-soft/70">
            {siteConfig.scrollCue}
          </HandwrittenNote>
          <span className="h-8 w-px bg-ink-soft/40" />
        </div>
      </div>
    </div>
  );
}
