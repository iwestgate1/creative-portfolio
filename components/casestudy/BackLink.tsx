"use client";

import Link from "next/link";
import { useCursorHover } from "@/components/cursor/CursorContext";

export default function BackLink({ href = "/#work", label = "Back to work" }: { href?: string; label?: string }) {
  const cursorProps = useCursorHover("Explore");
  return (
    <Link
      href={href}
      {...cursorProps}
      className="font-type inline-flex w-fit items-center gap-2 text-[11px] tracking-[0.14em] text-cream/70 transition-colors hover:text-cream"
    >
      <span aria-hidden>←</span> {label}
    </Link>
  );
}
