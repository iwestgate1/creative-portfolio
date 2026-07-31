"use client";

import { useRef, type ReactNode, type ElementType } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: ElementType;
  strength?: number;
}

/** A button/link that gently pulls toward the cursor within its bounds. */
export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  as,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const Component = (as ?? (href ? "a" : "button")) as ElementType;

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, { x: x * strength, y: y * strength, duration: 0.5, ease: "power3.out" });
  };

  const handleLeave = () => {
    if (reducedMotion || !ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-flex items-center justify-center will-change-transform ${className}`}
    >
      {children}
    </Component>
  );
}
