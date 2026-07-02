import Link from "next/link";
import type { Project } from "@/content";
import { StatusDot } from "@/components/status-dot";
import { TagPill } from "@/components/tag-pill";
import { StatRow } from "@/components/stat-row";
import { ProjectGraphic } from "@/components/project-graphic";

export function ProjectCard({ project }: { project: Project }) {
  const { title, tagline, description, year, status, techStack, stats, links } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-colors hover:border-accent/40">
      <ProjectGraphic gradient={project.gradient} className="h-48 w-full sm:h-56" />

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <StatusDot status={status} />
          <span className="text-xs uppercase tracking-wide text-fg-subtle">{year}</span>
        </div>

        <div>
          <h3 className="font-display text-2xl text-fg sm:text-[1.75rem]">
            <Link href={links.caseStudy} className="transition-colors hover:text-accent">
              {title}
            </Link>
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{tagline}</p>
        </div>

        <p className="text-[0.95rem] leading-relaxed text-fg-muted">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TagPill key={tech}>{tech}</TagPill>
          ))}
        </div>

        {stats && stats.length > 0 && <StatRow stats={stats} />}

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm font-medium">
          <Link href={links.caseStudy} className="text-fg underline-offset-4 hover:text-accent hover:underline">
            Case study →
          </Link>
          {links.live && (
            <a href={links.live} target="_blank" rel="noreferrer" className="text-fg-muted underline-offset-4 hover:text-accent hover:underline">
              Live
            </a>
          )}
          {links.source && (
            <a href={links.source} target="_blank" rel="noreferrer" className="text-fg-muted underline-offset-4 hover:text-accent hover:underline">
              Source
            </a>
          )}
          {links.docs && (
            <a href={links.docs} target="_blank" rel="noreferrer" className="text-fg-muted underline-offset-4 hover:text-accent hover:underline">
              Docs
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
