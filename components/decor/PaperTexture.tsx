interface PaperTextureProps {
  className?: string;
  strong?: boolean;
}

/** Absolute-positioned grain overlay, drop into any relatively-positioned container. */
export default function PaperTexture({ className = "", strong = false }: PaperTextureProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${strong ? "opacity-[0.12]" : "opacity-[0.05]"} mix-blend-multiply ${className}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "140px 140px",
      }}
    />
  );
}
