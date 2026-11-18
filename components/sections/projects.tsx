
"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  LockKeyhole,
  Copy,
  Check,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";

import Pro from "@/public/Pro.png";
import ecom from "@/public/Screenshot 2026-06-22 153008.png";
import aiShortImg from "@/public/Sass.png";
import aura from "@/public/aura.png";
import stu from "@/public/stu-management.png";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  subtitleEn: string;
  subtitleMm: string;
  descriptionEn: string;
  descriptionMm: string;
  techScope: string;
  techStacks: string[];
  imgSrc: typeof Pro;
  githubUrl?: string;
  isPrivate?: boolean;
  liveUrl: string;
  demoAccess?: {
    role: string;
    email: string;
    password: string;
  };
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Amara8 Telecom",
    subtitleEn: "Corporate Web Solution",
    subtitleMm: "ကုမ္ပဏီသုံး ဝဘ်ဆော့ဖ်ဝဲစနစ်",
    descriptionEn:
      "A corporate website built to present business information through a modern and responsive web experience.",
    descriptionMm:
      "လုပ်ငန်းဆိုင်ရာ အချက်အလက်များကို ခေတ်မီပြီး Device အမျိုးမျိုးတွင် အသုံးပြုရလွယ်ကူစွာ ပြသနိုင်ရန် တည်ဆောက်ထားသော Corporate Website ဖြစ်ပါတယ်။",
    techScope: "NEXT.JS — PRODUCTION",
    techStacks: ["Next.js", "Neon Pg", "Prisma", "Tailwind"],
    imgSrc: Pro,
    githubUrl: "https://github.com/thurein101/A8telecom",
    liveUrl: "https://www.amara8.com",
  },
  {
    id: 2,
    title: "THUSHOP Ecommerce",
    subtitleEn: "E-commerce & Admin Dashboard",
    subtitleMm: "အွန်လိုင်းစျေးဝယ်နှင့် စီမံခန့်ခွဲမှုစနစ်",
    descriptionEn:
      "A full-stack e-commerce application with product management, shopping cart, checkout, and an admin dashboard for managing store operations.",
    descriptionMm:
      "Product Management၊ Shopping Cart၊ Checkout နှင့် Admin Dashboard များပါဝင်သော Full-stack E-commerce Application ဖြစ်ပါတယ်။",
    techScope: "NEXT.JS — FULL STACK",
    techStacks: [
      "Next.js",
      "Neon Pg",
      "Prisma",
      "Tailwind",
      "Better Auth",
    ],
    imgSrc: ecom,
    githubUrl: "https://github.com/thurein101/Thurein_Portfolio",
    liveUrl: "https://thushop.vercel.app/",
  },
  {
    id: 3,
    title: "AI Short Video Maker",
    subtitleEn: "AI-Powered Video Generation SaaS",
    subtitleMm: "AI အသုံးပြု ဗီဒီယိုဖန်တီးမှု Platform",
    descriptionEn:
      "An AI-powered web application designed to simplify short-form video creation through an interactive user experience.",
    descriptionMm:
      "Short-form Video များကို ပိုမိုလွယ်ကူစွာ ဖန်တီးနိုင်ရန် AI နည်းပညာကို အသုံးပြုထားသော Interactive Web Application ဖြစ်ပါတယ်။",
    techScope: "NEXT.JS — FULL STACK",
    techStacks: [
      "Next.js",
      "Clerk",
      "Drizzle",
      "Neon Pg",
      "Tailwind",
    ],
    imgSrc: aiShortImg,
    githubUrl: "https://github.com/thurein101/thu-ai-short-vd",
    liveUrl: "https://thu-ai-short-vd.vercel.app",
  },
  {
    id: 4,
    title: "Thu University Management",
    subtitleEn: "Role-Based University Management System",
    subtitleMm: "တက္ကသိုလ် စီမံခန့်ခွဲမှုစနစ်",
    descriptionEn:
      "A university management platform for Students, Teachers, and Admins, featuring an admin approval workflow, pending registration system, Drizzle ORM, PostgreSQL, Cache Components, and skeleton loading.",
    descriptionMm:
      "Student၊ Teacher နှင့် Admin Role သုံးမျိုးပါဝင်သော University Management System ဖြစ်ပါတယ်။ Admin Approval၊ Pending Registration၊ Drizzle ORM၊ PostgreSQL၊ Cache Components နှင့် Skeleton Loading များ အသုံးပြုထားပါတယ်။",
    techScope: "NEXT.JS — FULL STACK",
    techStacks: [
      "Next.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Better Auth",
      "Cache Components",
    ],
    imgSrc: stu,
    isPrivate: true,
    liveUrl: "https://thu-university-management.vercel.app/",
    demoAccess: {
      role: "Admin",
      email: "ukyaw@gmail.com",
      password: "tttttttttt",
    },
  },
  {
    id: 5,
    title: "Aura Fashion Shop",
    subtitleEn: "Full-Stack Fashion E-commerce",
    subtitleMm: "Fashion Online Shopping Platform",
    descriptionEn:
      "A full-stack fashion e-commerce platform built with Next.js, Prisma 7, and PostgreSQL. Features include OTP and OAuth authentication, password recovery, optimistic UI updates, skeleton loading, and SWR-based data revalidation. Pagination is implemented across key areas such as orders, comments, receipts, and favourites.",
    descriptionMm:
      "Next.js၊ Prisma 7 နှင့် PostgreSQL တို့ဖြင့် တည်ဆောက်ထားသော Fashion E-commerce Platform ဖြစ်ပါတယ်။ OTP နှင့် OAuth Authentication၊ Password Recovery၊ Optimistic UI Updates၊ Skeleton Loading နှင့် SWR Data Revalidation တို့ပါဝင်ပါတယ်။ Orders၊ Comments၊ Receipts နှင့် Favourites များတွင်လည်း Pagination ထည့်သွင်းထားပါတယ်။",
    techScope: "NEXT.JS — FULL STACK",
    techStacks: [
      "Next.js",
      "Prisma 7",
      "PostgreSQL",
      "SWR",
      "Cache Components",
    ],
    imgSrc: aura,
    liveUrl: "https://aura-fashion-shop.vercel.app/",
  },
];

// Demo Access Component
function DemoAccess({
  email,
  password,
  role,
}: {
  email: string;
  password: string;
  role: string;
}) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState("");

  const copyCredential = async (
    type: string,
    value: string,
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);

      window.setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch {
      setCopied("");
    }
  };

  return (
    <details className="group mt-5 overflow-hidden rounded-xl border border-line bg-background/60 transition-colors duration-300 open:border-highlight">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <LockKeyhole
            className="h-3.5 w-3.5 text-highlight"
            aria-hidden="true"
          />
          {t("Demo Admin Access", "Demo Admin ဝင်ရောက်ရန်")}
        </span>

        <ArrowUpRight className="h-3.5 w-3.5 text-foreground-muted transition-transform duration-300 group-open:rotate-45" />
      </summary>

      <div className="grid gap-3 border-t border-line px-4 py-4">
        <p className="text-xs leading-5 text-foreground-muted">
          {t(
            "Use these credentials to explore the application.",
            "Application ကို စမ်းသပ်ကြည့်ရှုရန် အောက်ပါ Account ကို အသုံးပြုနိုင်ပါတယ်။",
          )}
        </p>

        <div className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface p-3">
          <div className="min-w-0">
            <span className="mono text-[9px] text-foreground-muted">
              EMAIL
            </span>
            <p className="mt-1 break-all text-sm text-foreground">
              {email}
            </p>
          </div>

          <button
            type="button"
            onClick={() => copyCredential("email", email)}
            aria-label="Copy demo email"
            className="flex shrink-0 items-center gap-1.5 rounded-md border border-line px-2.5 py-2 text-[10px] font-medium text-foreground-muted transition-colors hover:border-highlight hover:text-highlight"
          >
            {copied === "email" ? (
              <>
                <Check className="h-3 w-3" />
                {t("COPIED", "ကူးယူပြီး")}
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                {t("COPY", "ကူးယူရန်")}
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface p-3">
          <div className="min-w-0">
            <span className="mono text-[9px] text-foreground-muted">
              PASSWORD
            </span>
            <p className="mt-1 break-all text-sm text-foreground">
              {password}
            </p>
          </div>

          <button
            type="button"
            onClick={() => copyCredential("password", password)}
            aria-label="Copy demo password"
            className="flex shrink-0 items-center gap-1.5 rounded-md border border-line px-2.5 py-2 text-[10px] font-medium text-foreground-muted transition-colors hover:border-highlight hover:text-highlight"
          >
            {copied === "password" ? (
              <>
                <Check className="h-3 w-3" />
                {t("COPIED", "ကူးယူပြီး")}
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                {t("COPY", "ကူးယူရန်")}
              </>
            )}
          </button>
        </div>

        <span className="text-[10px] text-foreground-muted">
          {t(
            "Demo account for portfolio visitors.",
            "Portfolio လာရောက်ကြည့်ရှုသူများအတွက် Demo Account ဖြစ်ပါတယ်။",
          )}
        </span>
      </div>
    </details>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-block">
      <div className="page-shell">
        <SectionHeading
          index="01"
          eyebrow={t("Showcase", "လုပ်ငန်းခွင်မှတ်တမ်းများ")}
          title={t("Featured Projects", "အထူးပြု တည်ဆောက်မှုများ")}
        />

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 80}
              className="h-full"
            >
              <article className="panel panel-hover project-card flex h-full flex-col">
                <div className="project-media">
                  <Image
                    src={project.imgSrc}
                    alt={`${project.title} Thumbnail`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />

                  <div
                    className="project-shade"
                    aria-hidden="true"
                  />

                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="mono">{project.techScope}</span>

                  <h3 className="card-title mt-3 text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-highlight">
                    {t(project.subtitleEn, project.subtitleMm)}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-foreground-muted">
                    {t(
                      project.descriptionEn,
                      project.descriptionMm,
                    )}
                  </p>

                  {project.demoAccess && (
                    <DemoAccess
                      role={project.demoAccess.role}
                      email={project.demoAccess.email}
                      password={project.demoAccess.password}
                    />
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStacks.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5">
                    {project.githubUrl ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action"
                      >
                        <FiGithub
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        {t("CODE", "ကုဒ်")}
                      </Link>
                    ) : project.isPrivate ? (
                      <span
                        className="project-action cursor-default opacity-60"
                        title="Source code is private"
                      >
                        <LockKeyhole
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        {t("PRIVATE REPO", "Private Repository")}
                      </span>
                    ) : (
                      <span />
                    )}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action"
                    >
                      {t("LIVE DEMO", "စမ်းသပ်ကြည့်ရန်")}
                      <ArrowUpRight
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
