"use client";

import { ArrowUpRight, Code2, Layers, Terminal } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";

export default function Services() {
  const { t } = useLanguage();

 
const services = [
  {
    title: "Website Development",
    description: t(
      "Creating modern, responsive user interfaces and interactive web applications, with a focus on clean design, smooth user experiences, and engaging software demonstrations.",
      "ခေတ်မီပြီး အသုံးပြုရလွယ်ကူတဲ့ UI များနှင့် Interactive Web Application များကို ဖန်တီးခြင်း။ သပ်ရပ်တဲ့ Design၊ ချောမွေ့တဲ့ User Experience နဲ့ Software Project များကို ထိရောက်စွာ ပြသနိုင်မယ့် Demo Experience များကို အလေးထားပါတယ်။"
    ),
    icon: Terminal,
    scope: "WEB DEVELOPMENT",
  },
  {
    title: "Mobile & UI Development",
    description: t(
      "Creating clean, user-friendly interfaces with modern design, smooth interactions, and responsive layouts.",
      "သပ်ရပ်လှပပြီး အသုံးပြုရလွယ်ကူတဲ့ UI တွေကို ခေတ်မီ Design နဲ့ Smooth Interactions တွေ ပေါင်းစပ်ဖန်တီးခြင်း။"
    ),
    icon: Layers,
    scope: "FRONTEND",
  },
  {
    title: "Backend & Database",
    description: t(
      "Developing APIs, connecting databases, implementing authentication, and building the core features behind web applications.",
      "API များ ရေးသားခြင်း၊ Database ချိတ်ဆက်ခြင်း၊ Authentication နဲ့ Web Application တွေအတွက် လိုအပ်တဲ့ Feature များ တည်ဆောက်ခြင်း။"
    ),
    icon: Code2,
    scope: "BACKEND",
  },
];

  return (
    <section id="services" className="section-block">
      <div className="page-shell">
        <SectionHeading
          index="03"
          eyebrow="Capabilities"
          title={t("Services & Expertise", "ဝန်ဆောင်မှု နဲ့ စွမ်းရည်များ")}
        />

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 80} className="h-full">
                <article className="panel panel-hover flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="icon-tile">
                      <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="mono">{service.scope}</span>
                  </div>

                  <div className="mt-9">
                    <span className="mono text-highlight">
                      {String(index + 1).padStart(2, "0")} / 03
                    </span>
                    <h3 className="card-title mt-3 text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-foreground-muted">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 border-t border-line pt-6">
                    <span className="mono">{t("INCLUDED", "ပါဝင်သည်")}</span>
                    <ArrowUpRight
                      className="ml-auto h-3.5 w-3.5 text-highlight"
                      aria-hidden="true"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
