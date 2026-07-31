import type { Metadata } from "next";
import { Fraunces, Bricolage_Grotesque, Space_Mono, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { CursorProvider } from "@/components/cursor/CursorContext";
import { siteConfig } from "@/data/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${bricolage.variable} ${spaceMono.variable} ${caveat.variable}`}
    >
      <body className="paper-texture min-h-screen">
        <CursorProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
