import { research } from "@/content";
import { ResearchSpotlight } from "@/components/research-spotlight";
import { Reveal } from "@/components/reveal";

export function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-24 px-6 pb-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <ResearchSpotlight items={research} />
        </Reveal>
      </div>
    </section>
  );
}
