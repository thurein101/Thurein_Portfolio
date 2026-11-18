
"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  Code2,
  GraduationCap,
  Maximize2,
  X,
  type LucideIcon,
} from "lucide-react";

import CertiLab from "@/public/Thurein MyoMin MERN stack Certificate.jpg";
import Next from "@/public/nextjs.jpg";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";

type Certificate = {
  label: string;
  image: StaticImageData;
};

type Milestone = {
  date: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  certificate?: Certificate;
};

export default function Journey() {
  const { t } = useLanguage();

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const milestones: Milestone[] = [
    {
      date: "2025 — PRESENT",
      title: "Full Stack Web Development",
      subtitle: "MERN Stack Certification",
      icon: Code2,
      description: t(
        "Gained hands-on experience building web applications with MongoDB, Express.js, React, and Node.js. Practiced frontend development, API integration, database operations, and application logic through practical projects.",
        "MongoDB၊ Express.js၊ React နှင့် Node.js တို့ကို အသုံးပြုပြီး Web Application များ တည်ဆောက်ခြင်းကို လက်တွေ့လေ့လာခဲ့သည်။ Frontend Development၊ API Integration၊ Database Operations နှင့် Application Logic များကို Project များမှတစ်ဆင့် လေ့ကျင့်ခဲ့သည်။"
      ),
      certificate: {
        label: "CodeLab MERN Stack Certificate",
        image: CertiLab,
      },
    },
    {
      date: "DEC 2022 — OCT 2026",
      title: "Bachelor of Arts in English",
      subtitle: "English Specialization",
      icon: GraduationCap,
      description: t(
        "Developed communication, reading, writing, research, and critical thinking skills. These skills support my ability to understand technical documentation, communicate ideas clearly, and approach development challenges thoughtfully.",
        "ဆက်သွယ်ပြောဆိုမှု၊ စာဖတ်ခြင်း၊ စာရေးခြင်း၊ သုတေသနပြုလုပ်ခြင်းနှင့် ဝေဖန်ပိုင်းခြားတွေးခေါ်ခြင်း စွမ်းရည်များကို တိုးတက်စေခဲ့သည်။ ထိုစွမ်းရည်များသည် Technical Documentation များကို နားလည်ခြင်း၊ အတွေးအမြင်များကို ရှင်းလင်းစွာ ဖော်ပြခြင်းနှင့် Development ပြဿနာများကို စနစ်တကျ ဖြေရှင်းခြင်းတို့တွင် အထောက်အကူပြုသည်။"
      ),
    },
    {
      date: "FULL STACK CLASS",
      title: "Next.js Full Stack Development",
      subtitle: "Next.js Class Certificate",
      icon: Code2,
      description: t(
        "Explored full-stack application development using Next.js, TypeScript, Prisma, and PostgreSQL. Practiced building application features, connecting databases, implementing authentication, and working with server-side logic.",
        "Next.js၊ TypeScript၊ Prisma နှင့် PostgreSQL တို့ကို အသုံးပြု၍ Full Stack Application များ တည်ဆောက်ခြင်းကို လေ့လာခဲ့သည်။ Application Features များ ဖန်တီးခြင်း၊ Database ချိတ်ဆက်ခြင်း၊ Authentication နှင့် Server-side Logic များကို လက်တွေ့လေ့ကျင့်ခဲ့သည်။"
      ),
      certificate: {
        label: "Next.js Full Stack Class Certificate",
        image: Next,
      },
    },
  ];

  const openCertificate = (
    certificate: Certificate,
    button: HTMLButtonElement
  ) => {
    triggerRef.current = button;
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    triggerRef.current?.focus();
  };

  // Lock background scrolling and handle Escape key.
  useEffect(() => {
    if (!selectedCertificate) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  // Keep keyboard focus inside the certificate dialog.
  const handleDialogKeyDown = (
    event: ReactKeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <section id="about" className="section-block">
      <div className="page-shell">
        <SectionHeading
          index="02"
          eyebrow={t("Chronicle", "မှတ်တမ်းမှတ်ရာများ")}
          title={t(
            "Education & Journey",
            "ပညာရေးနှင့် ဖြတ်သန်းမှုခရီး"
          )}
        />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <span className="eyebrow">
            {t("Education / Certification", "ပညာရေး / အသိအမှတ်ပြုလက်မှတ်")}
          </span>

          <span className="mono">
            03 MILESTONES · THUREIN MYOMIN
          </span>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <Reveal
                key={milestone.title}
                delay={index * 120}
                className={
                  index === 2
                    ? "lg:col-span-2 lg:mx-auto lg:w-1/2"
                    : "h-full"
                }
              >
                <article className="journey-card panel panel-hover flex h-full flex-col">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
                    <span className="index-chip">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mono text-right">
                      {milestone.date}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                    <div className="flex items-start gap-3">
                      <span className="icon-tile shrink-0">
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <div className="min-w-0">
                        <h3 className="card-title">
                          {milestone.title}
                        </h3>

                        <p className="mt-1 text-xs text-foreground-muted">
                          {milestone.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-[13px] leading-6 text-foreground-muted">
                      {milestone.description}
                    </p>

                    {/* Certificate Preview */}
                    {milestone.certificate ? (
                      <div className="journey-certificate mt-5 border-t border-line pt-4">
                        <button
                          type="button"
                          onClick={(event) =>
                            openCertificate(
                              milestone.certificate!,
                              event.currentTarget
                            )
                          }
                          className="certificate-trigger group"
                          aria-label={t(
                            `View ${milestone.certificate.label}`,
                            `${milestone.certificate.label} ကို ကြည့်ရှုရန်`
                          )}
                        >
                          <span className="certificate-thumb">
                            <Image
                              src={milestone.certificate.image}
                              alt={milestone.certificate.label}
                              fill
                              sizes="(max-width: 640px) 104px, 128px"
                              className="object-cover"
                            />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="mono block leading-5">
                              {milestone.certificate.label}
                            </span>

                            <span className="mt-1 flex items-center gap-1.5 text-[11px] text-highlight">
                              <Maximize2
                                className="h-3 w-3 shrink-0"
                                aria-hidden="true"
                              />

                              {t(
                                "View certificate",
                                "လက်မှတ်ကို ကြည့်ရန်"
                              )}
                            </span>
                          </span>
                        </button>
                      </div>
                    ) : (
                      <div className="mt-auto pt-5">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="certificate-overlay is-open"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCertificate();
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-preview-title"
            onKeyDown={handleDialogKeyDown}
            className="certificate-sheet"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3.5 sm:px-5">
              <div className="min-w-0">
                <span className="eyebrow">
                  {t("Certificate Preview", "လက်မှတ် ကြည့်ရှုခြင်း")}
                </span>

                <h2
                  id="certificate-preview-title"
                  className="card-title mt-1 break-words"
                >
                  {selectedCertificate.label}
                </h2>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={closeCertificate}
                className="icon-button shrink-0"
                aria-label={t(
                  "Close certificate preview",
                  "လက်မှတ် ကြည့်ရှုမှုကို ပိတ်ရန်"
                )}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Certificate Image */}
            <div className="certificate-sheet-body">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.label}
                fill
                sizes="(max-width: 640px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-4 py-3 sm:px-5">
              <span className="mono break-words">
                {selectedCertificate.label}
              </span>

              <span className="mono text-foreground-subtle">
                {t("CERTIFICATE", "လက်မှတ်")}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
