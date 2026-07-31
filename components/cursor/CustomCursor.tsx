"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useMediaQuery } from "@/lib/useMediaQuery";
import type { CursorLabel } from "./CursorContext";

export default function CustomCursor({ label }: { label: CursorLabel }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const enabled = useMediaQuery("(hover: hover) and (pointer: fine)");

  useEffect(() => {
    if (!enabled || !dotRef.current) return;
    document.documentElement.classList.add("cursor-none");

    const xTo = gsap.quickTo(dotRef.current, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(dotRef.current, "y", { duration: 0.5, ease: "power3.out" });

    const move = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className={`flex items-center justify-center rounded-full border border-ink/70 bg-cream/90 font-type text-[10px] text-ink transition-[width,height,opacity] duration-300 ${
          label ? "h-16 w-16 opacity-100" : "h-2.5 w-2.5 opacity-70"
        }`}
      >
        {label && <span className="tracking-[0.12em]">{label}</span>}
      </div>
    </div>
  );
}
