import Link from "next/link";
import type { ResearchItem } from "@/content";
import { TagPill } from "@/components/tag-pill";
import { ProjectGraphic } from "@/components/project-graphic";
import { Reveal } from "@/components/reveal";

export function ResearchSpotlight({ items }: { items: ResearchItem[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-bg-elevated to-bg-elevated-2 shadow-[0_0_0_1px_rgba(79,168,154,0.08)]">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center gap-4 p-8 sm:p-10 lg:p-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Research Spotlight
          </span>
          <h3 className="font-display text-3xl leading-tight text-fg sm:text-4xl text-balance">
            Most analysts stop at the dashboard. I publish research.
          </h3>
          <p className="max-w-md text-fg-muted">
            Alongside client delivery, I do independent and academic research on the systems
            questions that consulting engagements only get to answer partway — the kind of work
            that holds up outside a slide deck.
          </p>
        </div>

        <div className="flex flex-col gap-6 border-t border-border p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          {items.map((item) => (
            <Reveal key={item.slug}>
              <div className="overflow-hidden rounded-xl border border-border bg-bg">
                <ProjectGraphic gradient={item.gradient} className="h-28 w-full" />
                <div className="flex flex-col gap-3 p-6">
                  <span className="w-fit rounded-full border border-accent/40 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-accent">
                    {item.label}
                  </span>
                  <h4 className="font-display text-xl text-fg">
                    <Link href={item.links.caseStudy} className="hover:text-accent">
                      {item.title}
                    </Link>
                  </h4>
                  <p className="text-sm italic text-fg-muted">{item.framing}</p>
                  <p className="text-sm leading-relaxed text-fg-muted">{item.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 pt-2 text-sm font-medium">
                    <Link href={item.links.caseStudy} className="text-fg underline-offset-4 hover:text-accent hover:underline">
                      Case study →
                    </Link>
                    {item.links.docs && (
                      <a href={item.links.docs} target="_blank" rel="noreferrer" className="text-fg-muted underline-offset-4 hover:text-accent hover:underline">
                        Docs
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
