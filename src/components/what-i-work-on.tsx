import { workAreas } from "@/content";
import { Reveal } from "@/components/reveal";

export function WhatIWorkOnSection() {
  return (
    <section className="px-6 pb-8 pt-4">
      <div className="mx-auto max-w-content">
        <div className="grid gap-6 sm:grid-cols-3">
          {workAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-bg-elevated p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl text-fg">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
