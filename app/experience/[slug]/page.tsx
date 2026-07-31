import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import PageReveal from "@/components/casestudy/PageReveal";
import CaseStudyClosing from "@/components/casestudy/CaseStudyClosing";
import ExperienceHero from "@/components/experience/ExperienceHero";
import NextExperience from "@/components/experience/NextExperience";
import WorkflowDiagram from "@/components/decor/diagrams/WorkflowDiagram";
import ScorecardGrid from "@/components/decor/diagrams/ScorecardGrid";
import { FolderTab } from "@/components/decor";
import { experience } from "@/data/content";

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = experience.find((e) => e.slug === slug);
  if (!item) return {};
  return {
    title: `${item.role} at ${item.company}`,
    description: item.description,
  };
}

const toneMap = { cream: "bg-cream", white: "bg-white", paper: "bg-paper" } as const;

function DossierSection({
  label,
  heading,
  tone = "paper",
  children,
}: {
  label: string;
  heading: string;
  tone?: keyof typeof toneMap;
  children: React.ReactNode;
}) {
  return (
    <PageReveal className="relative w-full px-6 py-16 sm:px-10 sm:py-24">
      <div className={`shadow-paper relative mx-auto max-w-3xl ${toneMap[tone]} px-6 pb-10 pt-12 sm:px-14 sm:pb-14 sm:pt-14`}>
        <FolderTab align="left">{label}</FolderTab>
        <h2 className="font-serif mb-6 text-3xl italic text-ink sm:text-5xl">{heading}</h2>
        <div className="max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">{children}</div>
      </div>
    </PageReveal>
  );
}

export default async function ExperienceDossierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = experience.find((e) => e.slug === slug);
  if (!item) notFound();

  const { dossier } = item;
  const currentIndex = experience.findIndex((e) => e.slug === slug);
  const next = experience[(currentIndex + 1) % experience.length];

  return (
    <>
      <Header />
      <main className="bg-paper">
        <ExperienceHero item={item} />

        <DossierSection label="Overview" heading="Overview" tone="paper">
          <p>{dossier.overview}</p>
        </DossierSection>

        <PageReveal className="w-full bg-cream px-6 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="font-type mb-4 text-[11px] tracking-[0.24em] text-ink-soft/60">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {dossier.focusAreas.map((area) => (
                <span
                  key={area}
                  className="font-type rounded-full border border-line bg-white px-4 py-2 text-[10px] tracking-[0.12em] text-ink-soft"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </PageReveal>

        <DossierSection label="Process" heading="Process" tone="white">
          <div className="flex flex-col gap-8">
            {dossier.process.map((step, i) => (
              <div key={step.title} className="border-l-2 border-olive/40 pl-5">
                <p className="font-type mb-1 text-[10px] tracking-[0.12em] text-olive-dark">{`0${i + 1}`}</p>
                <h3 className="font-serif mb-1 text-xl text-ink">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </DossierSection>

        {dossier.workflow && (
          <PageReveal className="w-full bg-folder px-6 py-16 sm:px-10 sm:py-24">
            <div className="mx-auto max-w-3xl">
              <WorkflowDiagram {...dossier.workflow} />
            </div>
          </PageReveal>
        )}

        {dossier.scorecard && (
          <PageReveal className="w-full bg-cream px-6 py-16 sm:px-10 sm:py-24">
            <div className="mx-auto max-w-3xl">
              <ScorecardGrid {...dossier.scorecard} />
            </div>
          </PageReveal>
        )}

        <DossierSection label="Documentation" heading="Documentation & Tooling" tone="white">
          <ul className="flex flex-col gap-3">
            {dossier.documentation.map((doc) => (
              <li key={doc} className="flex items-start gap-3 border-b border-line/70 pb-3">
                <span aria-hidden className="font-type text-ink-soft/40">
                  —
                </span>
                {doc}
              </li>
            ))}
          </ul>
        </DossierSection>

        <DossierSection label="Collaboration" heading="Collaboration" tone="cream">
          <p>{dossier.collaboration}</p>
        </DossierSection>

        <CaseStudyClosing caseStudy={dossier} />

        <NextExperience item={next} />
      </main>
      <Contact />
    </>
  );
}
