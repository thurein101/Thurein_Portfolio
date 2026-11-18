"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "mm" : "en")}
      aria-label="Switch language"
      className={`language-control ${className}`.trim()}
    >
      <span key={`active-${lang}`} className="language-label mono text-foreground">
        {lang === "en" ? "EN" : "MM"}
      </span>
      <span
        key={`next-${lang}`}
        className="language-label mono text-foreground-subtle"
      >
        / {lang === "en" ? "MM" : "EN"}
      </span>
    </button>
  );
}
