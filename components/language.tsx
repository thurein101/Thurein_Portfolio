"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type LangType = "en" | "mm";

interface LanguageContextType {
  lang: LangType;
  setLang: (lang: LangType) => void;
  t: (enText: string, mmText: string) => string; 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangType>("en");

  // User ရဲ့ Preference ကို Browser မှာ မှတ်ထားပေးခြင်း
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as LangType;
    if (savedLang) setLangState(savedLang);
  }, []);

  const setLang = (newLang: LangType) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  // Translation Helper: လက်ရှိ lang အပေါ်မူတည်ပြီး စာသားထုတ်ပေးမယ်
  const t = (enText: string, mmText: string) => {
    return lang === "en" ? enText : mmText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom Hook: Component တိုင်းမှာ အလွယ်ခေါ်သုံးဖို့
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}