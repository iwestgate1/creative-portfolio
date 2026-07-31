import type { ScorecardRow } from "@/data/content";

const statusMap: Record<ScorecardRow["status"], { label: string; dot: string; text: string }> = {
  "on-track": { label: "On Track", dot: "bg-olive", text: "text-olive-dark" },
  watch: { label: "Watch", dot: "bg-rust", text: "text-rust" },
  "at-risk": { label: "At Risk", dot: "bg-[#8a3a2a]", text: "text-[#8a3a2a]" },
};

/** A CSS-only status dashboard, for the Channel Health Scorecard. */
export default function ScorecardGrid({
  heading,
  description,
  rows,
}: {
  heading: string;
  description: string;
  rows: ScorecardRow[];
}) {
  return (
    <div className="shadow-paper w-full bg-white p-6 sm:p-8">
      <p className="font-type mb-1 text-[10px] tracking-[0.14em] text-ink-soft/60">Dashboard</p>
      <h3 className="font-serif mb-2 text-xl text-ink sm:text-2xl">{heading}</h3>
      <p className="mb-6 max-w-xl text-sm text-ink-soft">{description}</p>

      <div className="flex flex-col border-t border-line">
        <div className="font-type grid grid-cols-[1fr_auto] gap-4 border-b border-line py-2 text-[9px] tracking-[0.12em] text-ink-soft/50 sm:grid-cols-[1fr_auto_2fr]">
          <span>Channel</span>
          <span>Status</span>
          <span className="hidden sm:block">Note</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.channel}
            className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line/70 py-3 text-sm sm:grid-cols-[1fr_auto_2fr]"
          >
            <span className="text-ink">{row.channel}</span>
            <span className={`font-type inline-flex items-center gap-2 text-[10px] tracking-[0.1em] ${statusMap[row.status].text}`}>
              <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${statusMap[row.status].dot}`} />
              {statusMap[row.status].label}
            </span>
            <span className="hidden text-ink-soft/80 sm:block">{row.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
