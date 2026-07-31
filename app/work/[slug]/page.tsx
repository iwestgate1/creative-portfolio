import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudySection from "@/components/casestudy/CaseStudySection";
import CaseStudyGallery from "@/components/casestudy/CaseStudyGallery";
import CaseStudyClosing from "@/components/casestudy/CaseStudyClosing";
import NextProject from "@/components/casestudy/NextProject";
import { projects, photographyProjects } from "@/data/content";

const allProjects = [...projects, ...photographyProjects];

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const next = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <>
      <Header />
      <main className="bg-paper">
        <CaseStudyHero project={project} />

        <CaseStudySection label="Overview" heading="Overview" tone="paper">
          <p>{caseStudy.overview}</p>
        </CaseStudySection>

        <CaseStudySection label="Challenge" heading="The Challenge" tone="cream">
          <p>{caseStudy.challenge}</p>
        </CaseStudySection>

        <CaseStudySection label="Concept" heading="The Concept" tone="white">
          <p>{caseStudy.concept}</p>
        </CaseStudySection>

        <CaseStudySection label="Strategy" heading="Strategy" tone="cream">
          <p>{caseStudy.strategy}</p>
        </CaseStudySection>

        <CaseStudySection label="Creative Direction" heading="Creative Direction" tone="white">
          <p>{caseStudy.creativeDirection}</p>
        </CaseStudySection>

        <CaseStudySection label="Execution" heading="Execution" tone="cream">
          <p>{caseStudy.execution}</p>
        </CaseStudySection>

        <CaseStudyGallery images={caseStudy.gallery} />

        <CaseStudyClosing caseStudy={caseStudy} />

        <NextProject project={next} />
      </main>
      <Contact />
    </>
  );
}
