import { Hero } from "@/components/hero";
import { WhatIWorkOnSection } from "@/components/what-i-work-on";
import { ProjectsSection } from "@/components/projects-section";
import { ResearchSection } from "@/components/research-section";
import { ExperienceSection } from "@/components/experience-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIWorkOnSection />
      <ProjectsSection />
      <ResearchSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
