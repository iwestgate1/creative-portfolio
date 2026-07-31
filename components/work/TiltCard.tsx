"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Wraps a project card with a subtle cursor-driven tilt, like lifting a physical page. */
export default function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    gsap.to(ref.current, {
      rotateX: py * -4,
      rotateY: px * 6,
      duration: 0.6,
      ease: "power3.out",
      transformPerspective: 900,
    });
  };

  const handleLeave = () => {
    if (reducedMotion || !ref.current) return;
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power3.out" });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
