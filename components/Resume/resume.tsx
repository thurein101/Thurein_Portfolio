"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, ArrowUpRight } from 'lucide-react';
import CertiLab from "@/public/Thurein MyoMin MERN stack Certificate.jpg";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useLanguage } from "../language";

export default function Resume() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-transparent px-6 py-16 sm:px-12 md:px-24 overflow-hidden">
      
      {/* Background ambient light mesh */}
      <div className={`absolute top-1/4 left-1/4 -z-10 h-[250px] w-[500px] blur-[100px] rounded-full transition-colors duration-500 ${
        isDark ? "bg-indigo-500/[0.03]" : "bg-indigo-500/[0.01]"
      }`} />

      {/* Container size max-w-3xl for compact alignment */}
      <div className="mx-auto max-w-3xl">
        
        {/* Section Header */}
        <div className="mb-16 relative">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xs font-bold uppercase tracking-widest ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {/* 🎯 Chronicle စာသားကိုပါ ENG / MM အလိုအလျောက်ပြောင်းပေးနိုင်အောင် ဖြည့်ပေးထားပါတယ် bro */}
            {t("Chronicle", "မှတ်တမ်းမှတ်ရာများ")}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`mt-2 tracking-tight text-sm sm:text-base md:text-xl font-bold tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed transition-colors duration-500 uppercase sm:text-3xl ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            {/* 🎯 Section Main Title ကိုပါ လိုက်ပြောင်းပေးနိုင်အောင် လုပ်ထားပါတယ် */}
            {t("Education & Journey", "ပညာရေးနှင့် ဖြတ်သန်းမှုခရီး")}
          </motion.h2>
        </div>

        {/* Deep Timeline Track */}
        <div className="relative ml-2 md:ml-8 space-y-12">
          
          {/* Vertical Track Line */}
          <div className={`absolute -left-[1px] top-2 bottom-2 w-[1px] transition-colors duration-500 ${
            isDark 
              ? "bg-gradient-to-b from-zinc-800 via-zinc-700 to-transparent" 
              : "bg-gradient-to-b from-zinc-200 via-zinc-300 to-transparent"
          }`} />
          
          {/* 1. MERN STACK CERTIFICATION CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative pl-6 md:pl-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6"
          >
            {/* Timeline Dot Indicator */}
            <div className={`absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full transition-all duration-500 group-hover:scale-125 ${
              isDark 
                ? "bg-zinc-700 group-hover:bg-zinc-100" 
                : "bg-zinc-300 group-hover:bg-zinc-900"
            }`} />

            {/* Asymmetrical Date Column */}
            <div className="lg:col-span-3 pt-0.5">
              <span className={`font-mono text-[11px] sm:text-xs tracking-wider font-semibold block transition-colors duration-300 ${
                isDark ? "text-zinc-500 group-hover:text-zinc-400" : "text-zinc-400 group-hover:text-zinc-600"
              }`}>
                2025 — PRESENT {/* 🎯 FIXED: English အတိုင်း ချန်ထားပါတယ် */}
              </span>
            </div>

            {/* Main Card Content */}
            <div className={`lg:col-span-9 relative overflow-hidden rounded-xl border p-6 sm:p-8 transition-all duration-500 ${
              isDark 
                ? "border-zinc-800/40 bg-zinc-900/10 backdrop-blur-md hover:border-zinc-700" 
                : "border-zinc-200/60 bg-white/40 hover:border-zinc-300"
            }`}>
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className={`mb-3 text-sm sm:text-base md:text-xl font-bold tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed transition-colors duration-500 uppercase ${
                    isDark ? "text-white group-hover:text-indigo-300" : "text-zinc-900 group-hover:text-indigo-600"
                  }`}>
                    Full Stack Web Development {/* 🎯 FIXED: English အတိုင်း ချန်ထားပါတယ် */}
                  </h3>
                  <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}>
                    Certification Programs {/* 🎯 FIXED: English အတိုင်း ချန်ထားပါတယ် */}
                  </p>
                </div>
                <div className={`p-2 rounded-lg transition-colors duration-300 ${isDark ? "text-zinc-400 bg-zinc-800/50" : "text-zinc-500 bg-zinc-100"}`}>
                  <Code2 className="h-5 w-5 stroke-[1.5]" />
                </div>
              </div>

              {/* 🎯 FIXED: Main Description ကိုပဲ စနစ်တကျ လှလှပပ မြန်မာပြန်ပေးထားပါတယ် bro */}
              <p className={`text-sm sm:text-base leading-relaxed mb-6 max-w-xl transition-colors duration-300 ${
                isDark ? "text-zinc-300 group-hover:text-white" : "text-zinc-600 group-hover:text-zinc-900"
              }`}>
                {t(
                  "Intensive hands-on engineering track focusing on building architecture using MongoDB, Express.js, React, and Node.js. Mastered state management, secure backend integration APIs, database modeling, and server-side logic deployments.",
                  "MongoDB, Express.js, React နှင့် Node.js တို့ကို အသုံးပြု၍ ခိုင်မာတောင့်တင်းသော Web Architecture များ တည်ဆောက်ခြင်းကို လက်တွေ့အဓိကထား အပြင်းအထန် လေ့လာခဲ့သော သင်တန်းဖြစ်ပါသည်။ State Management စနစ်များ၊ လုံခြုံစိတ်ချရသော Backend APIs ချိတ်ဆက်မှုများ၊ Database Modeling နှင့် Server-side Logic သုံး Deployment လုပ်ဆောင်မှုများကို ကျွမ်းကျင်စွာ တတ်မြောက်ခဲ့ပါသည်။"
                )}
              </p>

              {/* Certificate Image Container */}
              <div className={`relative mt-4 max-w-xs overflow-hidden rounded-lg border bg-zinc-950 group/img shadow-sm ${
                isDark ? "border-white/5" : "border-zinc-200/80"
              }`}>
                <Image 
                  src={CertiLab} 
                  alt="CodeLab MERN Stack Certificate" 
                  className="w-full h-auto object-cover opacity-85 grayscale transition-all duration-500 group-hover/img:opacity-100 group-hover/img:grayscale-0 group-hover/img:scale-[1.01]"
                />
                <div className="absolute top-2 right-2 rounded-full bg-zinc-900/80 p-1.5 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/img:opacity-100 border border-white/10">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Monochrome Hover Line */}
              <div className="absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-500 ease-out group-hover:w-full">
                <div className={`absolute inset-0 z-10 bg-gradient-to-r from-transparent to-transparent ${
                  isDark ? "via-zinc-500" : "via-zinc-300"
                }`} />
                <div className={`absolute inset-0 blur-sm opacity-40 ${
                  isDark ? "via-zinc-500" : "via-zinc-300"
                }`} />
              </div>
            </div>
          </motion.div>


          {/* 2. UNIVERSITY EDUCATION CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group relative pl-6 md:pl-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6"
          >
            {/* Timeline Dot Indicator */}
            <div className={`absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full transition-all duration-500 group-hover:scale-125 ${
              isDark 
                ? "bg-zinc-700 group-hover:bg-zinc-100" 
                : "bg-zinc-300 group-hover:bg-zinc-900"
            }`} />

            {/* Asymmetrical Date Column */}
            <div className="lg:col-span-3 pt-0.5">
              <span className={`font-mono text-[11px] sm:text-xs tracking-wider font-semibold block transition-colors duration-300 ${
                isDark ? "text-zinc-500 group-hover:text-zinc-400" : "text-zinc-400 group-hover:text-zinc-600"
              }`}>
                DEC 2022 — OCT 2026 {/* 🎯 FIXED: English အတိုင်း ချန်ထားပါတယ် */}
              </span>
            </div>

            {/* Main Card Content */}
            <div className={`lg:col-span-9 relative overflow-hidden rounded-xl border p-6 sm:p-8 transition-all duration-500 ${
              isDark 
                ? "border-zinc-800/40 bg-zinc-900/10 backdrop-blur-md hover:border-zinc-700" 
                : "border-zinc-200/60 bg-white/40 hover:border-zinc-300"
            }`}>
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className={`mb-3 text-sm sm:text-base md:text-xl font-bold tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed transition-colors duration-500 uppercase ${
                    isDark ? "text-white group-hover:text-indigo-300" : "text-zinc-900 group-hover:text-indigo-600"
                  }`}>
                    Bachelor of Arts in English {/* 🎯 FIXED: English အတိုင်း ချန်ထားပါတယ် */}
                  </h3>
                  <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}>
                    English Specialization {/* 🎯 FIXED: English အတိုင်း ချန်ထားပါတယ် */}
                  </p>
                </div>
                <div className={`p-2 rounded-lg transition-colors duration-300 ${isDark ? "text-zinc-400 bg-zinc-800/50" : "text-zinc-500 bg-zinc-100"}`}>
                  <GraduationCap className="h-5 w-5 stroke-[1.5]" />
                </div>
              </div>

              {/* 🎯 FIXED: Main University Description ကိုပဲ သေသပ်လှပစွာ မြန်မာပြန်ပေးထားပါတယ် bro */}
              <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                isDark ? "text-zinc-300 group-hover:text-white" : "text-zinc-600 group-hover:text-zinc-900"
              }`}>
                {t(
                  "Developed critical analysis, systemic research execution methodologies, and professional communication workflows. This foundational background strongly accelerates technical documentation reading capabilities, clear architectural logic planning, and semantic code structuring.",
                  "ဝေဖန်ပိုင်းခြားနိုင်စွမ်းရှိသော အတွေးအခေါ်များ၊ စနစ်ကျသော သုတေသနပြုလုပ်ခြင်းဆိုင်ရာ လုပ်ထုံးလုပ်နည်းများနှင့် Professional ကျသော လုပ်ငန်းခွင် ဆက်သွယ်ပြောဆိုမှု ပုံစံများကို တည်ဆောက်နိုင်ခဲ့ပါသည်။ ဤအခြေခံဗဟုသုတကောင်းများသည် နည်းပညာဆိုင်ရာ အချက်အလက် (Technical Documentations) များကို လျင်မြန်စွာ ဖတ်ရှုနားလည်နိုင်စွမ်း၊ ရှင်းလင်းပြတ်သားသော Web Architectural Logic များကို စနစ်တကျ စဉ်းစားတွေးခေါ်နိုင်စွမ်းနှင့် ကုဒ်များကို အဓိပ္ပာယ်ပြည့်စုံစွာ ဖွဲ့စည်းတည်ဆောက်နိုင်စွမ်းတို့ကို အရှိန်အဟုန်ဖြင့် ပိုမိုအားကောင်းစေပါသည်။"
                )}
              </p>

              {/* Monochrome Hover Line */}
              <div className="absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-500 ease-out group-hover:w-full">
                <div className={`absolute inset-0 z-10 bg-gradient-to-r from-transparent to-transparent ${
                  isDark ? "via-zinc-500" : "via-zinc-300"
                }`} />
                <div className={`absolute inset-0 blur-sm opacity-40 ${
                  isDark ? "via-zinc-500" : "via-zinc-300"
                }`} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}