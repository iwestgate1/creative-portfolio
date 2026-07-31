interface BinderClipProps {
  rotate?: number;
  size?: number;
  className?: string;
}

/** A black binder / bulldog clip rendered as inline SVG, sits at the top edge of a page. */
export default function BinderClip({ rotate = 0, size = 36, className = "" }: BinderClipProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 30"
      width={size}
      height={size * 0.75}
      className={`pointer-events-none absolute drop-shadow-[0_3px_4px_rgba(23,20,15,0.35)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <rect x="2" y="6" width="36" height="12" rx="2.5" fill="#221a15" />
      <rect x="2" y="6" width="36" height="4" rx="2" fill="#3a2c22" />
      <path d="M10 18 L10 26 L20 21 Z" fill="#221a15" />
      <path d="M30 18 L30 26 L20 21 Z" fill="#221a15" />
      <circle cx="20" cy="12" r="2" fill="#4a392c" />
    </svg>
  );
}
