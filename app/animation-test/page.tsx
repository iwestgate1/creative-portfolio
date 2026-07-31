import type { Metadata } from "next";
import { Beau_Rivage } from "next/font/google";
import { about, siteConfig } from "@/data/content";
import styles from "./archive-box.module.css";

const beauRivage = Beau_Rivage({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animation Test",
  robots: { index: false, follow: false },
};

export default function AnimationTestPage() {
  return (
    <main>
      {/* 1. Full-screen limestone hero + 2. archive box, centered */}
      <section className={styles.hero}>
        <div className={styles.boxWrap}>
          <div className={styles.contactShadow} />
          <div className={styles.box}>
            <div className={styles.sheen} />
          </div>

          <div className={`${styles.pinRail} ${styles.pinRailLeft}`} />
          <div className={`${styles.pinRail} ${styles.pinRailRight}`} />
          <div className={`${styles.pin} ${styles.pinTl}`} />
          <div className={`${styles.pin} ${styles.pinBl}`} />
          <div className={`${styles.pin} ${styles.pinTr}`} />
          <div className={`${styles.pin} ${styles.pinBr}`} />

          <div className={styles.name}>
            <span className={`${styles.line} ${styles.line1} ${beauRivage.className}`}>Isabella</span>
            <span className={`${styles.line} ${styles.line2} ${beauRivage.className}`}>Westgate</span>
          </div>

          <svg className={`${styles.flourish} ${styles.flourishTop}`} viewBox="0 0 200 40" preserveAspectRatio="none">
            <path d="M2 20 C 50 8, 110 6, 198 18" />
          </svg>
          <svg className={`${styles.flourish} ${styles.flourishBottom}`} viewBox="0 0 150 40" preserveAspectRatio="none">
            <path d="M2 12 C 40 30, 90 32, 148 10" />
          </svg>
        </div>
      </section>

      {/* 3. Simple About section */}
      <section className="bg-paper px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <p className="font-type mb-3 text-[11px] tracking-[0.24em] text-ink-soft/70">About</p>
          <h2 className="font-serif mb-6 text-4xl text-ink sm:text-5xl">{siteConfig.name}</h2>
          <div className="flex flex-col gap-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-ink-soft sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
