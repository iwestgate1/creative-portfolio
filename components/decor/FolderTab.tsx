import type { ReactNode } from "react";

interface FolderTabProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

/** A manila-folder tab label, sits along the top edge of a folder-style card. */
export default function FolderTab({ children, className = "", align = "left" }: FolderTabProps) {
  const alignClass = align === "left" ? "left-4" : align === "right" ? "right-4" : "left-1/2 -translate-x-1/2";
  return (
    <div
      className={`absolute -top-5 ${alignClass} rounded-t-md border border-b-0 border-ink/10 bg-folder px-4 py-1.5 shadow-[0_-2px_4px_rgba(23,20,15,0.05)] ${className}`}
    >
      <span className="font-type text-[10px] tracking-[0.14em] text-ink-soft">{children}</span>
    </div>
  );
}
