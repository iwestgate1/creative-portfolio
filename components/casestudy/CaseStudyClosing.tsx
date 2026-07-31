import { HandwrittenNote } from "@/components/decor";
import PageReveal from "./PageReveal";

interface ClosingContent {
  results: string[];
  reflection: string;
}

export default function CaseStudyClosing({ caseStudy }: { caseStudy: ClosingContent }) {
  return (
    <PageReveal className="w-full bg-espresso px-6 py-20 text-cream sm:px-10 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="font-type mb-4 text-[11px] tracking-[0.24em] text-cream/50">Results</p>
        <ul className="mb-14 flex flex-col gap-3">
          {caseStudy.results.map((result) => (
            <li key={result} className="flex items-start gap-3 border-b border-cream/10 pb-3 text-sm sm:text-base">
              <span aria-hidden className="font-type text-cream/40">
                ✓
              </span>
              {result}
            </li>
          ))}
        </ul>

        <p className="font-type mb-4 text-[11px] tracking-[0.24em] text-cream/50">Reflection</p>
        <p className="font-serif mb-8 max-w-2xl text-2xl italic leading-snug text-cream/90 sm:text-4xl">
          {caseStudy.reflection}
        </p>
        <HandwrittenNote size="lg" rotate={-2} className="text-taupe-light">
          onto the next one.
        </HandwrittenNote>
      </div>
    </PageReveal>
  );
}
