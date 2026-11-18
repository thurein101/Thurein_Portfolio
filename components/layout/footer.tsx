
"use client";

import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="page-shell relative py-7 sm:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand & Contact */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="brand-mark transition-transform duration-300 hover:scale-105">
                TM
              </span>

              <span className="mono text-[10px]">
                END OF DOCUMENT
              </span>

              <span className="hidden text-foreground-subtle sm:inline">
                /
              </span>

              <a
                href="mailto:myothureinmin1991@gmail.com"
                className="group inline-flex min-w-0 items-center gap-1.5 text-xs text-foreground-muted transition-colors duration-300 hover:text-highlight"
              >
                <Mail className="h-3 w-3 shrink-0" />

                <span className="break-all">
                  myothureinmin1991@gmail.com
                </span>

                <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mono mt-3 text-[9px] leading-4 text-foreground-subtle">
              <span className="text-foreground">THUREIN MYOMIN</span>
              <span className="mx-2">/</span>
              © {currentYear}{" "}
              {t("ALL RIGHTS RESERVED", "မူပိုင်ခွင့်အားလုံး ရရှိပြီး ဖြစ်ပါသည်")}
            </p>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2.5">
            <LanguageToggle />

            <button
              type="button"
              onClick={scrollToTop}
              className="group btn-secondary inline-flex items-center gap-1.5 !px-3 !py-2 text-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-highlight hover:text-highlight active:translate-y-0"
            >
              {t("BACK TO TOP", "အပေါ်ပြန်တက်ရန်")}

              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Subtle accent */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-highlight/30 via-line to-transparent" />
      </div>
    </footer>
  );
}
