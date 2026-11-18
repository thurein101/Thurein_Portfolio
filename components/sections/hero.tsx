"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import profilePic from "@/public/7e10e8c4-e2a2-4548-9352-1fd57cb0da90.png";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/components/providers/language-provider";

const roles = [
  "Creative Web Developer",
  "Frontend Developer",
  "FullStack Developer",
  "Software Developer",
];

const ROLE_STEP_MS = 2500;


const stagger = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("about")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hero-line" style={stagger(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-elevated px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-highlight" aria-hidden="true" />
              <span className="mono text-foreground-muted">
                Portfolio / FullStack Developer
              </span>
            </span>
          </div>

          <h1 className="hero-title mt-6 text-foreground">
            <span className="hero-line" style={stagger(90)}>
              Crafting modern <span className="text-gradient">web applications</span>{" "}
            </span>
            <span className="hero-line" style={stagger(180)}>
              with clean code &amp; modern tech
            </span>
          </h1>

          <Reveal delay={220} className="mt-8 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="portrait-orbit group">
                <div className="portrait-ring">
                  <Image
                    src={profilePic}
                    alt="Thurein MyoMin Profile"
                    fill
                    priority
                    sizes="(max-width: 640px) 132px, (max-width: 1024px) 148px, 160px"
                    className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.035]"
                  />
                </div>
              </div>
              <span className="mono mt-3">Thurein MyoMin</span>
            </div>
          </Reveal>

          <p
            className="hero-line mx-auto mt-7 max-w-xl text-sm leading-7 text-foreground-muted"
            style={stagger(300)}
          >
            Hi, I&apos;m{" "}
            <span className="font-semibold text-foreground">Thurein MyoMin</span> — a
            passionate{" "}
            <span className="font-medium text-foreground">
              <span className="sr-only">{roles.join(", ")}</span>
              <span className="role-carousel" aria-hidden="true">
                {roles.map((role, index) => (
                  <span
                    key={role}
                    className="role-word text-[#567BAE] font-semibold"
                    style={{
                      animationDelay: `${index * ROLE_STEP_MS}ms`,
                      animationDuration: `${roles.length * ROLE_STEP_MS}ms`,
                    }}
                  >
                    {role}
                  </span>
                ))}
              </span>
            </span>
          </p>

          <div className="hero-line mt-7 flex justify-center" style={stagger(380)}>
            <button type="button" onClick={scrollToAbout} className="btn-primary">
              {t("Explore About Me", "ဆက်လေ့လာရန်")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

     
      </div>
    </section>
  );
}
