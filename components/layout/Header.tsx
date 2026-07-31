import Link from "next/link";
import { siteConfig } from "@/data/content";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { href: "/#about", label: "The Story" },
  { href: "/#experience", label: "Where I've Created" },
  { href: "/#photography", label: "Featured Projects" },
  { href: "/#contact", label: "Start a Conversation" },
];

export default function Header() {
  return (
    <header data-site-header className="pointer-events-none fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="pointer-events-auto flex items-center justify-between px-5 py-5 text-cream sm:px-10 sm:py-7">
        <Link href="/" className="font-serif text-sm tracking-[0.05em] sm:text-base">
          {siteConfig.shortName}
        </Link>
        <nav className="hidden gap-8 font-type text-[11px] tracking-[0.14em] sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </nav>
        <MagneticButton
          href="/#contact"
          className="font-type rounded-full border border-cream px-4 py-2 text-[10px] tracking-[0.14em]"
        >
          Say hello
        </MagneticButton>
      </div>
    </header>
  );
}
