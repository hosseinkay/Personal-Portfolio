import { site, hero } from "@/content";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { SocialIcon } from "@/components/social-icon";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-content">
        <SectionHeading
          index="04 / Contact"
          title="Get in touch"
          description="Open to public-sector analytics, health technology, responsible AI, and strategy/transformation opportunities."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="flex flex-col gap-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-fg-subtle">Email</p>
              <a href={`mailto:${site.email}`} className="text-lg text-fg hover:text-accent">
                {site.email}
              </a>
            </div>
            {site.phone && (
              <div>
                <p className="text-sm uppercase tracking-wide text-fg-subtle">Phone</p>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="text-lg text-fg hover:text-accent">
                  {site.phone}
                </a>
              </div>
            )}
            <div>
              <p className="text-sm uppercase tracking-wide text-fg-subtle">LinkedIn</p>
              <a
                href={hero.socials.find((s) => s.icon === "linkedin")?.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-lg text-fg hover:text-accent"
              >
                <SocialIcon icon="linkedin" />
                hossein-khoshhal
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-fg-subtle">GitHub</p>
              <a
                href={hero.socials.find((s) => s.icon === "github")?.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-lg text-fg hover:text-accent"
              >
                <SocialIcon icon="github" />
                hosseinkay
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
