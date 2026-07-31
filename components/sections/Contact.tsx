import { siteConfig } from "@/data/content";
import MagneticButton from "@/components/layout/MagneticButton";
import { HandwrittenNote, PaperTexture } from "@/components/decor";

const links = [
  { label: "Email", href: `mailto:${siteConfig.email}`, value: siteConfig.email },
  { label: "LinkedIn", href: siteConfig.linkedin, value: "View profile" },
  { label: "Instagram", href: siteConfig.instagram, value: "Follow along" },
  { label: "Résumé", href: siteConfig.resumeHref, value: "Download PDF" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-[90svh] w-full flex-col justify-between overflow-hidden bg-espresso px-6 py-20 text-cream sm:px-10">
      <PaperTexture strong className="mix-blend-overlay" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 text-center">
        <p className="font-type text-[11px] tracking-[0.24em] text-cream/60">Start a Conversation</p>
        <h2 className="font-serif max-w-3xl text-4xl leading-[1.05] sm:text-7xl">{siteConfig.closingLine}</h2>
        <HandwrittenNote size="lg" rotate={-3} className="text-taupe-light">
          {siteConfig.handwrittenAccent}
        </HandwrittenNote>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/15 pt-10 sm:grid-cols-4">
        {links.map((link) => (
          <MagneticButton
            key={link.label}
            href={link.href}
            as="a"
            className="flex min-w-0 flex-col items-start gap-1 text-left"
            strength={0.25}
          >
            <span className="font-type text-[10px] tracking-[0.14em] text-cream/50">{link.label}</span>
            <span className="w-full break-words text-sm text-cream sm:text-base">{link.value}</span>
          </MagneticButton>
        ))}
      </div>

      <p className="font-type relative z-10 mx-auto mt-14 text-[10px] tracking-[0.14em] text-cream/40">
        © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.tagline}
      </p>
    </section>
  );
}
