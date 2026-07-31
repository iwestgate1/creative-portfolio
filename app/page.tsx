import Header from "@/components/layout/Header";
import ArchiveHero from "@/components/sections/ArchiveHero";
import Desk from "@/components/sections/Desk";
import PhotographySection from "@/components/sections/PhotographySection";
import SelectedWork from "@/components/sections/SelectedWork";
import Collage from "@/components/sections/Collage";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ArchiveHero />
        <Desk />
        <PhotographySection />
        <SelectedWork />
        <Collage />
        <AboutSection />
        <ExperienceSection />
        <Contact />
      </main>
    </>
  );
}
