import { projects } from "@/content";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ProjectCardCompact } from "@/components/project-card-compact";
import { Reveal } from "@/components/reveal";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          index="01 / Projects"
          title="Selected work"
          description="Engagements where the analysis had to hold up — in front of a client, in production, or in a peer-reviewed room."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h3 className="mb-6 font-display text-xl text-fg">More work</h3>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.08}>
                  <ProjectCardCompact project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
