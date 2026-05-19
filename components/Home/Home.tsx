"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Hero from "../Hero/Hero";
import Services from "../Service/Services";
import Resume from "../Resume/resume";
import Skills from "../Skills/skillCom";
import Contact from "../Contact/contactCom";
import Footer from "../Footer/Footer";

function HomeCom() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "mm">("en");


  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
<div
  className={`relative flex min-h-screen flex-col overflow-x-hidden transition-colors duration-700 ${
    isDark
      ? "bg-[radial-gradient(circle_at_right,_rgba(59,130,246,0.08),transparent_26%),linear-gradient(135deg,_#0b0f19_0%,_#11131c_35%,_#171923_70%,_#1d2230_100%)] text-zinc-300"
      : "bg-[radial-gradient(circle_at_right,_rgba(96,165,250,0.08),transparent_26%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_35%,_#eef2f7_70%,_#e8edf5_100%)] text-slate-950"
  }`}
>
      <main className="w-full flex-1 flex flex-col">
        <Hero />

        {/* Line*/}
        <div className="relative w-full h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-zinc-500 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-zinc-500 blur-sm opacity-50" />
        </div>

        <Resume />

        {/* Line*/}
        <div className="relative w-full h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-zinc-500 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-zinc-500 blur-sm opacity-50" />
        </div>

        <Services />

           {/* Line*/}
        <div className="relative w-full h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-zinc-500 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-zinc-500 blur-sm opacity-50" />
        </div>

        <Skills isDark={isDark}/>

        
           {/* Line*/}
        <div className="relative w-full h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-zinc-500 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-zinc-500 blur-sm opacity-50" />
        </div>

        <Contact isDark={isDark}/>

       <Footer lang={lang} setLang={setLang} />
      </main>
    </div>
  );
}

export default HomeCom;
