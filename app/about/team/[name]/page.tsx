import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

type Props = {
  params: Promise<{
    name: string;
  }>;
};

export default async function TeamDetailPage({ params }: Props) {
  const { name } = await params;

  return (
    <section className="section-block min-h-[60vh]">
      <div className="page-shell">
        <SectionHeading
          as="h1"
          index="00"
          eyebrow="About / Team"
          title={name}
        />
        <Reveal delay={80}>
          <div className="panel panel-pad mt-12 max-w-2xl">
            <span className="eyebrow">About / Team</span>
            <p className="mono mt-4">00 / PLACEHOLDER</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
