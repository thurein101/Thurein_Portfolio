"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { useTheme } from "next-themes";
import profilePic from "@/public/7e10e8c4-e2a2-4548-9352-1fd57cb0da90.png";
import { motion } from "framer-motion"; 
import { useLanguage } from "../language";


export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;
  const {t} = useLanguage()

  return ( 
    <section>
        <div className=" relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-4 pt-24 md:pt-32 pb-12 overflow-hidden">
      
      {isDark && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-zinc-800/10 blur-[120px] rounded-full pointer-events-none z-0" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
        
        
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className={`absolute inset-0 rounded-full blur-md opacity-30 transition-all duration-500 ${isDark ? "bg-zinc-500 group-hover:scale-105" : "bg-transparent"}`}
          />
          <Image
            src={profilePic}
            alt="Thurein MyoMin Profile"
            width={160}
            height={160}
            priority
            className={`relative rounded-full border-4 shadow-xl transition-all duration-300 w-[135px] h-[135px] sm:w-[160px] sm:h-[160px] ${
              isDark ? "border-zinc-800 bg-[#141424]" : "border-zinc-200 bg-zinc-50"
            }`}
          />
        </motion.div>

    
        <motion.div 
          className="w-full max-w-3xl px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <h1
            className={`text-sm sm:text-base md:text-xl font-bold tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed transition-colors duration-500 uppercase text-center ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Crafting modern web applications <br />
            <span className="bg-gradient-to-r from-slate-400 via-zinc-400 to-slate-500 dark:from-zinc-400 dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
              with clean code & modern tech
            </span>
          </h1>
        </motion.div>

        
        <motion.h2
          className={`text-xs sm:text-sm md:text-base font-medium tracking-[0.05em] uppercase flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 transition-colors duration-500 ${
            isDark ? "text-zinc-400" : "text-zinc-500"
          }`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <span className="opacity-90">
            Hi, I'm{" "}
            <span className="font-extrabold tracking-normal normal-case bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 bg-clip-text text-transparent">
              Thurein MyoMin
            </span>{" "}
            — a passionate
          </span>

          <span
            className={`px-3 py-0.5 rounded-md font-bold inline-block tracking-normal normal-case transition-all duration-300 ${
              isDark
                ? "bg-white/[0.03] border border-white/5 shadow-inner shadow-black/40"
                : "bg-zinc-100 border border-zinc-200 shadow-sm"
            }`}
          >
            <TypewriterComponent
              options={{
                strings: [
                  isDark
                    ? '<span class="text-blue-400">Creative Web Developer</span>'
                    : '<span class="text-blue-600">Creative Web Developer</span>',
                  isDark
                    ? '<span class="text-indigo-400">Frontend Developer</span>'
                    : '<span class="text-indigo-600">Frontend Developer</span>',
                  isDark
                    ? '<span class="text-teal-400">FullStack Developer</span>'
                    : '<span class="text-teal-600">FullStack Developer</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
                wrapperClassName: "inline-block",
              }}
            />
          </span>
        </motion.h2>

       <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="pt-2"
        >
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });
            }}
            className="cursor-pointer group flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border border-zinc-200 bg-zinc-50 text-slate-800 shadow-sm hover:bg-zinc-100 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:border-white/20"
          >
            <span>{t("Explore About Me", "ဆက်လေ့လာရန်")}</span>
            
            <motion.svg
              variants={{
                hover: { x: 4 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-3 h-3 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>

      </div>
    </div>
    </section>
    
  );
}