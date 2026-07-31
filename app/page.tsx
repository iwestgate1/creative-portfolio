import Header from "@/components/layout/Header";
import Intro from "@/components/sections/Intro";
import Desk from "@/components/sections/Desk";
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
        <Intro />
        <Desk />
        <SelectedWork />
        <Collage />
        <AboutSection />
        <ExperienceSection />
        <Contact />
      </main>
    </>
  );
}
