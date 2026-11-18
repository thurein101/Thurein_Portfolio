"use client";

import { ArrowUp } from "lucide-react";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-line">
      <div className="page-shell py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="brand-mark" aria-hidden="true">
                TM
              </span>
              <span className="mono">End of document</span>
            </div>
            <p className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Thurein <span className="text-foreground-muted">MyoMin</span>
            </p>
            <div className="mono mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-foreground-subtle">
              <span className="text-foreground">THUREIN MYOMIN</span>
              <span aria-hidden="true">/</span>
              <span>
                © {currentYear} {t("ALL RIGHTS RESERVED", "မူပိုင်ခွင့်အားလုံး ရရှိပြီး ဖြစ်ပါသည်")}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <LanguageToggle />
            <button type="button" onClick={scrollToTop} className="btn-secondary">
              {t("BACK TO TOP", "အပေါ်ပြန်တက်ရန်")}
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
