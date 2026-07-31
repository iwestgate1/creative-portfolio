"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Reveals its children like a page lifting into view, rather than a plain fade.
 * A subtle rotateX + clip-path combo, anchored at the top edge like a hinge.
 */
export default function PageReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          clipPath: "inset(0 0 100% 0)",
          rotateX: 8,
          y: 40,
          transformPerspective: 1200,
          transformOrigin: "top center",
        },
        {
          clipPath: "inset(0 0 0% 0)",
          rotateX: 0,
          y: 0,
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [reducedMotion, delay]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
