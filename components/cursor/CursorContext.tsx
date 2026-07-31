"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import CustomCursor from "./CustomCursor";

export type CursorLabel = "View" | "Open" | "Drag" | "Explore" | "Read" | null;

const CursorSetContext = createContext<(label: CursorLabel) => void>(() => {});

export function useCursorLabel() {
  return useContext(CursorSetContext);
}

/** Convenience hook: spread the returned handlers onto any hoverable element. */
export function useCursorHover(label: CursorLabel) {
  const setLabel = useCursorLabel();
  return {
    onMouseEnter: () => setLabel(label),
    onMouseLeave: () => setLabel(null),
  };
}

interface CursorProviderProps {
  children: ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
  const [label, setLabel] = useState<CursorLabel>(null);

  const set = useCallback((next: CursorLabel) => setLabel(next), []);

  return (
    <CursorSetContext.Provider value={set}>
      {children}
      <CustomCursor label={label} />
    </CursorSetContext.Provider>
  );
}
