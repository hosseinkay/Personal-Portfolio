import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { research, site } from "@/content";
import { CaseStudyShell } from "@/components/case-study-shell";

export function generateStaticParams() {
  return research.map((item) => ({ slug: item.slug }));
}

function getResearch(slug: string) {
  return research.find((item) => item.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getResearch(params.slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: `${item.title} — ${site.title}`,
      description: item.description,
      url: `${site.url}${item.links.caseStudy}`,
      type: "article",
    },
  };
}

export default function ResearchCaseStudyPage({ params }: { params: { slug: string } }) {
  const item = getResearch(params.slug);
  if (!item) notFound();

  const links = item.links.docs ? [{ label: "Docs", href: item.links.docs }] : [];

  return (
    <CaseStudyShell
      backHref="/#research"
      backLabel="All research"
      meta={
        <>
          <span className="rounded-full border border-accent/40 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-accent">
            {item.label}
          </span>
          <span className="text-xs uppercase tracking-wide text-fg-subtle">{item.year}</span>
        </>
      }
      title={item.title}
      tagline={item.framing}
      tags={item.tags}
      gradient={item.gradient}
      caseStudy={item.caseStudy}
      links={links}
    />
  );
}
