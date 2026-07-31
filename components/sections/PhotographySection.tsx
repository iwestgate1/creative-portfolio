"use client";

import { useMemo, useState } from "react";
import { photographyProjects, photographySection, type PhotographyCategory } from "@/data/content";
import ProjectCard from "@/components/work/ProjectCard";

type Filter = (typeof photographySection.filters)[number];

export default function PhotographySection() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return photographyProjects;
    return photographyProjects.filter((project) => project.categories?.includes(filter as PhotographyCategory));
  }, [filter]);

  return (
    <section id="photography" className="relative w-full bg-cream px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto mb-14 max-w-3xl">
        <p className="font-type mb-3 text-[11px] tracking-[0.24em] text-ink-soft/70">{photographySection.eyebrow}</p>
        <h2 className="font-serif max-w-2xl text-4xl leading-[1.05] text-ink sm:text-6xl">
          {photographySection.heading}
        </h2>
        <p className="mt-4 max-w-xl text-sm text-ink-soft sm:text-base">{photographySection.subheading}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {photographySection.filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`font-type rounded-full border px-4 py-2 text-[10px] tracking-[0.14em] transition-colors ${
                filter === f
                  ? "border-ink bg-ink text-cream"
                  : "border-line text-ink-soft hover:border-ink/40 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-24">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} className={project.number === "01" ? "sm:col-span-2" : ""} />
        ))}
      </div>
    </section>
  );
}
