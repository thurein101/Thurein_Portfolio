import { Database, ShieldCheck } from "lucide-react";
import {
  SiExpo,
  SiExpress,
  SiGithub,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "Expo", icon: <SiExpo /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend & Core Architecture",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Better Auth", icon: <ShieldCheck /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Neon DB", icon: <Database /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
    ],
  },
  {
    title: "DevOps & Cloud Tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="page-shell">
        <SectionHeading index="04" eyebrow="Stack" title="My Tech Stack" />

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 80} className="h-full">
              <article className="panel panel-pad flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="index-chip">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="mono">
                    {String(group.skills.length).padStart(2, "0")} TOOLS
                  </span>
                </div>

                <h3 className="card-title mt-6 text-foreground">
                  {group.title}
                </h3>

                <div className="mt-6 grid gap-1.5 border-t border-line pt-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-row">
                      <span className="skill-icon">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
