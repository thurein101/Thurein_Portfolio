"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useLanguage } from "../language";
import Pro from "@/public/Pro.png";
import ecom from "@/public/Screenshot 2026-06-22 153008.png";

import aiShortImg from "@/public/Sass.png"; 

export default function ProjectsCom() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;
  const { t } = useLanguage();

  const projectsData = [
    {
      id: 1,
      title: "Amara8 Telecom",
      subtitleEn: "Corporate Web Solution",
      subtitleMm: "ကုမ္ပဏီသုံး ဝဘ်ဆော့ဖ်ဝဲစနစ်",
      techScope: "NEXT.JS — PRODUCTION",
      techStacks: ["Neon Pg", "Prisma", "Tailwind"],
      imgSrc: Pro,
      githubUrl: "https://github.com/thurein101/A8telecom",
      liveUrl: "https://www.amara8.com"
    },
    {
      id: 2,
      title: "THUSHOP Ecommerce With Admin Dashboard",
      subtitleEn: "Business & Stock Management",
      subtitleMm: "ကုန်ပစ္စည်းရောင်းဝယ်ရေးနှင့် စီမံ ခန့်ခွဲမှု",
      techScope: "NEXT.JS — PRODUCTION",
      techStacks: ["Next.js","Neon Pg", "Prisma", "Tailwind", "Better Auth"],
      imgSrc: ecom,
      githubUrl: "https://github.com/thurein101/Thurein_Portfolio",
      liveUrl: "https://thushop.vercel.app/"
    },
    {
      id: 3,
      title: "AI Short Video Maker (SaaS)",
      subtitleEn: "AI-Powered Video Generation Platform",
      subtitleMm: "AI အသုံးပြု ဗီဒီယိုဖန်တီးမှုဆော့ဖ်ဝဲ",
      techScope: "NEXT.JS — PRODUCTION",
      techStacks: ["Next.js", "Clerk", "Drizzle", "Neon Pg", "Tailwind"],
      imgSrc: aiShortImg, 
      githubUrl: "https://github.com/thurein101/thu-ai-short-vd",
      liveUrl: "https://thu-ai-short-vd.vercel.app"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 } 
    }
  };

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemFadeUpVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full bg-transparent px-6 py-20 sm:px-12 md:px-16 overflow-hidden">
      
      {/* Background Smooth Ambient Glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-[300px] w-[600px] blur-[130px] rounded-full transition-colors duration-500 ${
        isDark ? "bg-indigo-500/[0.02]" : "bg-indigo-500/[0.01]"
      }`} />

      {/* Main Container max-w-5xl */}
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xs font-bold uppercase tracking-widest ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {t("Showcase", "လုပ်ငန်းခွင်မှတ်တမ်းများ")}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`mt-2 text-xl font-bold tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed uppercase sm:text-2xl ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            {t("Featured Projects", "အထူးပြု တည်ဆောက်မှုများ")}
          </motion.h2>
        </div>

        {/* ➔ BOX GRID */}
        {/* Project ၃ ခုဖြစ်သွားတဲ့အတွက် lg:grid-cols-3 ပြောင်းသုံးချင်ရင် grid-cols-1 md:grid-cols-2 lg:grid-cols-3 လို့ ပြင်နိုင်ပါတယ် */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants as any}
              whileHover={{ y: -4 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-500 ${
                isDark 
                  ? "border-zinc-800/60 bg-zinc-900/10 backdrop-blur-sm hover:border-zinc-700/80 hover:bg-zinc-900/20" 
                  : "border-zinc-200 bg-white hover:border-zinc-300 shadow-sm hover:shadow-md"
              }`}
            >
              
              {/* Inside Content Area */}
              <motion.div variants={contentContainerVariants} className="flex flex-col flex-grow">
                
                {/* Tech Scope Badge */}
                <motion.span 
                  variants={itemFadeUpVariants as any}
                  className={`font-mono text-[10px] tracking-widest font-bold block ${
                    isDark ? "text-indigo-400/80" : "text-indigo-600"
                  }`}
                >
                  {project.techScope}
                </motion.span>

                {/* Title and Subtitle */}
                <motion.div variants={itemFadeUpVariants as any} className="flex items-start justify-between gap-4 mt-2 mb-4">
                  <div>
                    <h3 className={`text-base sm:text-lg font-bold tracking-wide transition-colors duration-500 ${
                      isDark ? "text-white group-hover:text-indigo-300" : "text-zinc-900 group-hover:text-indigo-600"
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-[11px] font-medium transition-colors duration-300 mt-0.5 ${
                      isDark ? "text-zinc-500" : "text-zinc-400"
                    }`}>
                      {t(project.subtitleEn, project.subtitleMm)}
                    </p>
                  </div>
                  <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isDark ? "text-zinc-500 bg-zinc-800/40" : "text-zinc-400 bg-zinc-100"}`}>
                    <Code2 className="h-4 w-4 stroke-[1.5]" />
                  </div>
                </motion.div>

                {/* Thumbnail Image */}
                <motion.div 
                  variants={itemFadeUpVariants as any}
                  className={`relative mt-2 w-full overflow-hidden rounded-xl border bg-zinc-950 group/img aspect-[16/10] ${
                    isDark ? "border-white/5" : "border-zinc-200/80"
                  }`}
                >
                  <Image 
                    src={project.imgSrc}
                    alt={`${project.title} Thumbnail`}
                    className="w-full h-full object-cover opacity-85 grayscale transition-all duration-700 ease-out group-hover/img:opacity-100 group-hover/img:grayscale-0 group-hover/img:scale-[1.02]"
                  />
                </motion.div>

                {/* Tech Tags Cloud */}
                <motion.div 
                  variants={itemFadeUpVariants as any}
                  className="flex flex-wrap gap-1.5 mt-4 mb-6"
                >
                  {project.techStacks.map((tech) => (
                    <span 
                      key={tech} 
                      className={`text-[10px] px-2 py-0.5 rounded border font-mono transition-colors duration-300 ${
                        isDark 
                          ? "bg-zinc-950/60 border-zinc-800 text-zinc-500 group-hover:border-zinc-700" 
                          : "bg-zinc-50 border-zinc-200 text-zinc-400"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

              </motion.div>

              {/* Action Buttons Area */}
              <div className="flex items-center gap-2.5 pt-2 border-t border-dashed border-zinc-800/20 dark:border-zinc-800/60">
                <a 
                  href={project.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 text-[11px] font-mono tracking-wider font-semibold py-2 rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? "border-zinc-800/80 bg-zinc-900/20 text-zinc-400 hover:border-zinc-700 hover:text-white hover:bg-zinc-800/40" 
                      : "border-zinc-200 bg-zinc-50/50 text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 hover:bg-zinc-100"
                  }`}
                >
                  <FiGithub className="h-3.5 w-3.5" />
                  {t("CODE", "ကုဒ်")}
                </a>

                <a 
                  href={project.liveUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 text-[11px] font-mono tracking-wider font-semibold py-2 rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? "border-indigo-500/20 bg-indigo-500/[0.03] text-indigo-300 hover:border-indigo-400/50 hover:bg-indigo-500/[0.08] hover:text-white" 
                      : "border-indigo-100 bg-indigo-50/50 text-indigo-600 hover:border-indigo-200 hover:bg-indigo-100/70 hover:text-indigo-700"
                  }`}
                >
                  {t("LIVE", "လင့်ခ်")}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}