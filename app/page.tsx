import Header from "@/components/layout/Header";
import ArchiveHero from "@/components/sections/ArchiveHero";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PhotographySection from "@/components/sections/PhotographySection";
import Contact from "@/components/sections/Contact";

// Parked for later — not deleted, just not rendered on the homepage yet:
// Desk (components/sections/Desk.tsx), SelectedWork (components/sections/SelectedWork.tsx),
// Collage (components/sections/Collage.tsx)

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ArchiveHero />
        <AboutSection />
        <ExperienceSection />
        <PhotographySection />
        <Contact />
      </main>
    </>
  );
}
