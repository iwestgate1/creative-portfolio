import type { WorkflowStep } from "@/data/content";

/** A CSS-only automation/workflow diagram — labeled nodes connected by arrows. */
export default function WorkflowDiagram({
  heading,
  description,
  steps,
}: {
  heading: string;
  description: string;
  steps: WorkflowStep[];
}) {
  return (
    <div className="shadow-paper w-full bg-white p-6 sm:p-8">
      <p className="font-type mb-1 text-[10px] tracking-[0.14em] text-ink-soft/60">Workflow</p>
      <h3 className="font-serif mb-2 text-xl text-ink sm:text-2xl">{heading}</h3>
      <p className="mb-8 max-w-xl text-sm text-ink-soft">{description}</p>

      <div className="flex flex-col items-stretch gap-0 overflow-x-auto sm:flex-row sm:items-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center sm:contents">
            <div className="flex min-w-[9rem] flex-col gap-1 border border-olive/40 bg-olive/5 px-4 py-3">
              <span className="font-type text-[9px] tracking-[0.12em] text-olive-dark">{`0${i + 1}`}</span>
              <span className="text-sm font-medium text-ink">{step.label}</span>
              {step.detail && <span className="text-xs text-ink-soft/80">{step.detail}</span>}
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden className="mx-2 my-2 flex shrink-0 items-center justify-center text-olive-dark sm:my-0">
                <svg width="20" height="12" viewBox="0 0 20 12" className="rotate-90 sm:rotate-0">
                  <path d="M0 6h17M12 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
