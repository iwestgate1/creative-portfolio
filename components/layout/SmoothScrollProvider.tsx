"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

const HEADER_OFFSET = 24;

function resolveHashTarget(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  const path = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex + 1);
  if (!hash) return null;
  if (path !== window.location.pathname) return null;
  return hash;
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Land smoothly on a hash target when arriving from another page, e.g. /#contact
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) lenis.scrollTo(target, { offset: -HEADER_OFFSET, duration: 1.4 });
      });
    }

    // Intercept in-page anchor links (nav, "back to work", magnetic buttons) so
    // Lenis drives the scroll instead of an abrupt native jump it then fights.
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest("a[href*='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const id = resolveHashTarget(href);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -HEADER_OFFSET, duration: 1.4 });
      history.pushState(null, "", `#${id}`);
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
