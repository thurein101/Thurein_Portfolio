import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export default function AboutPage() {
  return (
    <section className="section-block min-h-[60vh]">
      <div className="page-shell">
        <SectionHeading
          as="h1"
          index="00"
          eyebrow="About"
          title="This is About Page"
        />
        <Reveal delay={80}>
          <div className="panel panel-pad mt-12 max-w-2xl">
            <span className="eyebrow">About</span>
            <p className="mono mt-4">00 / PLACEHOLDER</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
