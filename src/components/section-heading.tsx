import { Reveal } from "@/components/reveal";

export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 flex flex-col gap-3 sm:mb-16">
      <span className="font-display text-sm tracking-[0.3em] text-accent">{index}</span>
      <h2 className="font-display text-3xl text-fg sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-fg-muted">{description}</p>}
    </Reveal>
  );
}
