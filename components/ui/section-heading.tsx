import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  index?: string;
  eyebrow?: string;
  title: string;
  id?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  id,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal>
      <header>
        <div className="flex items-center gap-3">
          {index ? <span className="index-chip">{index}</span> : null}
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        </div>
        <Heading id={id} className="section-title mt-5 max-w-3xl text-foreground">
          {title}
        </Heading>
      </header>
    </Reveal>
  );
}
