import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/content";
import { ProjectGraphic } from "@/components/project-graphic";
import { TagPill } from "@/components/tag-pill";
import { Reveal } from "@/components/reveal";

export function CaseStudyShell({
  backHref,
  backLabel,
  meta,
  title,
  tagline,
  description,
  tags,
  gradient,
  caseStudy,
  links,
  statsSlot,
}: {
  backHref: string;
  backLabel: string;
  meta: ReactNode;
  title: string;
  tagline: string;
  description?: string;
  tags: string[];
  gradient: [string, string];
  caseStudy: CaseStudy;
  links?: { label: string; href: string }[];
  statsSlot?: ReactNode;
}) {
  const sections: { label: string; content: string | string[] }[] = [
    { label: "Context", content: caseStudy.context },
    { label: "What I did", content: caseStudy.whatIDid },
    { label: "Result", content: caseStudy.result },
  ];

  return (
    <article>
      <ProjectGraphic gradient={gradient} className="h-64 w-full sm:h-80" />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <Link href={backHref} className="text-sm text-fg-muted hover:text-accent">
            ← {backLabel}
          </Link>

          <div className="mt-6 flex items-center justify-between gap-4">{meta}</div>

          <h1 className="mt-3 font-display text-3xl leading-tight text-fg sm:text-4xl">{title}</h1>
          <p className="mt-2 text-lg font-medium text-accent">{tagline}</p>
          {description && <p className="mt-4 leading-relaxed text-fg-muted">{description}</p>}

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>

          {statsSlot && <div className="mt-8">{statsSlot}</div>}

          {links && links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg underline-offset-4 hover:text-accent hover:underline"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </Reveal>

        <div className="mt-14 flex flex-col gap-10">
          {sections.map((section, i) => (
            <Reveal key={section.label} delay={0.05 + i * 0.05}>
              <h2 className="mb-3 font-display text-xl text-fg">{section.label}</h2>
              {Array.isArray(section.content) ? (
                <ul className="flex flex-col gap-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex gap-3 leading-relaxed text-fg-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed text-fg-muted">{section.content}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
