import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, site } from "@/content";
import { CaseStudyShell } from "@/components/case-study-shell";
import { StatusDot } from "@/components/status-dot";
import { StatRow } from "@/components/stat-row";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${site.title}`,
      description: project.description,
      url: `${site.url}${project.links.caseStudy}`,
      type: "article",
    },
  };
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const links = [
    project.links.live && { label: "Live", href: project.links.live },
    project.links.source && { label: "Source", href: project.links.source },
    project.links.docs && { label: "Docs", href: project.links.docs },
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <CaseStudyShell
      backHref="/#projects"
      backLabel="All projects"
      meta={
        <>
          <StatusDot status={project.status} />
          <span className="text-xs uppercase tracking-wide text-fg-subtle">{project.year}</span>
        </>
      }
      title={project.title}
      tagline={project.tagline}
      tags={project.techStack}
      gradient={project.gradient}
      caseStudy={project.caseStudy}
      links={links}
      statsSlot={project.stats && project.stats.length > 0 ? <StatRow stats={project.stats} /> : undefined}
    />
  );
}
