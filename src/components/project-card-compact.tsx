import Link from "next/link";
import type { Project } from "@/content";
import { StatusDot } from "@/components/status-dot";
import { ProjectGraphic } from "@/components/project-graphic";

export function ProjectCardCompact({ project }: { project: Project }) {
  const { title, tagline, year, status, links } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated transition-colors hover:border-accent/40">
      <ProjectGraphic gradient={project.gradient} className="h-32 w-full" />

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-4">
          <StatusDot status={status} />
          <span className="text-xs uppercase tracking-wide text-fg-subtle">{year}</span>
        </div>

        <h3 className="font-display text-lg leading-snug text-fg">
          <Link href={links.caseStudy} className="transition-colors hover:text-accent">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-fg-muted">{tagline}</p>

        <Link
          href={links.caseStudy}
          className="mt-auto pt-3 text-sm font-medium text-fg underline-offset-4 hover:text-accent hover:underline"
        >
          Case study →
        </Link>
      </div>
    </article>
  );
}
