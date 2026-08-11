import { education, skills, certifications } from "@/content";
import { SectionHeading } from "@/components/section-heading";
import { TagPill } from "@/components/tag-pill";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading index="03 / About" title="Background" />

        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-fg-muted">
              I have a background in public policy and data analytics, with an M.S. from Carnegie
              Mellon and a B.A. in International Politics and Philosophy from George Mason.
            </p>
            <p className="text-lg leading-relaxed text-fg-muted">
              I currently work as a consultant on public-sector projects that combine data
              analysis, process mapping, and technology implementation.
            </p>
            <p className="text-lg leading-relaxed text-fg-muted">
              I&apos;m interested in using tools like Python, SQL, GIS, and optimization models to
              help government and public-service organizations work better.
            </p>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-fg-subtle">
                Education
              </h3>
              <div className="flex flex-col gap-6">
                {education.map((entry) => (
                  <div key={entry.institution}>
                    <p className="font-display text-lg text-fg">{entry.institution}</p>
                    <p className="text-sm text-fg-muted">{entry.credential}</p>
                    <p className="text-sm text-fg-subtle">
                      {entry.location} · {entry.date}
                    </p>
                    {entry.detail && (
                      <p className="mt-2 text-sm leading-relaxed text-fg-subtle">{entry.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-10">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-fg-subtle">
                Skills &amp; tools
              </h3>
              <div className="flex flex-col gap-4">
                {skills.map((group) => (
                  <div key={group.category} className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-fg-subtle">
                Certifications
              </h3>
              <ul className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-3 text-[0.95rem] text-fg-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {cert.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
