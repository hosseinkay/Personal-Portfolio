import { experience } from "@/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          index="02 / Experience"
          title="Where I've worked"
          description="Consulting roles in public-sector and health technology, plus a research role in AI safety."
        />

        <ol className="flex flex-col divide-y divide-border border-t border-border">
          {experience.map((entry, i) => (
            <Reveal as="li" key={entry.organization} delay={i * 0.05} className="grid gap-4 py-10 sm:grid-cols-[1fr_2.2fr] sm:gap-10">
              <div>
                <p className="font-display text-lg text-fg">{entry.organization}</p>
                <p className="text-sm font-medium text-accent">{entry.role}</p>
                <p className="mt-1 text-sm text-fg-subtle">
                  {entry.start} – {entry.end} · {entry.location}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {entry.summary && (
                  <p className="text-[0.95rem] leading-relaxed text-fg-muted">{entry.summary}</p>
                )}
                <ul className="flex flex-col gap-3">
                  {entry.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-[0.95rem] leading-relaxed text-fg-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
