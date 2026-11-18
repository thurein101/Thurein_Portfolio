"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

type LangType = "en" | "mm";

interface LanguageContextType {
  lang: LangType;
  setLang: (lang: LangType) => void;
  t: (enText: string, mmText: string) => string;
}

const STORAGE_KEY = "portfolio-lang";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function getSnapshot(): LangType {
  return localStorage.getItem(STORAGE_KEY) === "mm" ? "mm" : "en";
}

function getServerSnapshot(): LangType {
  return "en";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = (newLang: LangType) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    listeners.forEach((listener) => listener());
  };

  const t = (enText: string, mmText: string) =>
    lang === "en" ? enText : mmText;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
