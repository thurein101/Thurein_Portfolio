"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../language";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  isDark: boolean; // isDark ကို Props အနေနဲ့ လက်ခံလိုက်ပါတယ်
}

const ServiceCard = ({
  title,
  description,
  icon,
  delay,
  isDark,
}: ServiceCardProps) => {
  return (
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay, ease: "easeOut" }}
  whileHover={{
    y: -10,
    scale: 1.02,
    transition: { duration: 0.25, ease: "easeOut" },
  }}
  className={`group relative overflow-hidden rounded-2xl border p-8 shadow-sm transition-all duration-300 ${
    isDark
      ? "border-white/10 bg-zinc-900/40 backdrop-blur-md hover:border-indigo-500/30 hover:bg-[#1d2238]/60"
      : "border-zinc-200/80 bg-white/70 hover:border-indigo-200 hover:shadow-xl"
  }`}
>

  <div
    className={`absolute inset-0 -z-10 bg-gradient-to-br via-violet-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
      isDark ? "from-indigo-500/20" : "from-indigo-500/15"
    }`}
  />


  <div
    className={`mb-5 inline-flex rounded-xl p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white ${
      isDark
        ? "bg-zinc-800 text-indigo-400 group-hover:bg-indigo-500"
        : "bg-zinc-100 text-zinc-700"
    }`}
  >
    {icon}
  </div>

 
  <h3
    className={`mb-4 text-sm sm:text-base md:text-xl font-bold tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed transition-colors duration-500 uppercase ${
      isDark
        ? "text-white group-hover:text-indigo-300"
        : "text-zinc-900 group-hover:text-indigo-600"
    }`}
  >
    {title}
  </h3>

  {/* Description Text */}
  <p
    className={`text-sm leading-relaxed transition-colors duration-300 ${
      isDark
        ? "text-zinc-300 group-hover:text-white"
        : "text-zinc-600 group-hover:text-zinc-900"
    }`}
  >
    {description}
  </p>

  {/* Bottom Accent Line */}
  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
</motion.div>
  );
};

export default function Services() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;
  const {t} = useLanguage()

  const services = [
  {
    title: "Fullstack Web Development", 
    description: t(
      "Engineering robust, scalable, and secure web applications from scratch, encompassing database modeling and high-performance backend architecture.",
      "ခိုင်မာတောင့်တင်းပြီး စကေးချဲ့နိုင်မယ့် Web App တွေကို အစအဆုံး စနစ်တကျ ဖန်တီးပေးခြင်း။ လုံခြုံစိတ်ချရတဲ့ Database တည်ဆောက်မှုနဲ့ စွမ်းဆောင်ရည်မြင့်မားတဲ့ Backend ပိုင်းတွေကို စနစ်တကျ ပေါင်းစပ်ပုံဖော်ပေးပါတယ်။"
    ),
    icon: <Terminal className="h-6 w-6" />,
  },
  {
    title: "Pixel-Perfect UI Matching", 
    description: t(
      "Translating complex design mockups into flawless, fluid interfaces with an obsessive attention to layout spacing, modern typography, and fluid motion aesthetics.",
      "ဒီဇိုင်းပုံကြမ်း (Mockups) တွေကို လုံးဝ အပြစ်အနာအဆာကင်းပြီး ချောမွေ့တဲ့ Interfaces တွေဖြစ်အောင် ပြောင်းလဲပေးခြင်း။ Layout Spacing၊ Typography နဲ့ ခေတ်မီတဲ့ Motion ဒီဇိုင်းပိုင်းတွေကို စေ့စပ်သေချာစွာ အာရုံစိုက်ပြီး ဖန်တီးပါတယ်။"
    ),
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Latest Tech Architecture", // 🎯 FIXED: English အတိုင်းပဲ ထားလိုက်ပါပြီ
    description: t(
      "Architecting modern web experiences utilizing cutting-edge ecosystems, advanced global state handling, and secure next-generation authentication layers.",
      "နောက်ဆုံးပေါ် နည်းပညာ Ecosystem တွေ သုံးပြီး ခေတ်မီတဲ့ ဝဘ်အတွေ့အကြုံတွေကို ဖန်တီးပေးခြင်း။ အဆင့်မြင့် Global State Handling ပိုင်းတွေအပြင် လုံခြုံစိတ်ချရတဲ့ ခေတ်မီဆန်းသစ်သော Auth Layers တွေကိုပါ ထည့်သွင်းတည်ဆောက်ပေးပါတယ်။"
    ),
    icon: <Code2 className="h-6 w-6" />,
  },
];

 

  return (
    <section className="relative w-full bg-transparent px-6 py-24 sm:px-12 md:px-24">
      {/* Ambient background blur inside sync pattern */}
      <div
        className={`absolute top-0 left-1/2 -z-10 h-[350px] w-[700px] -translate-x-1/2 blur-[130px] rounded-full ${
          isDark ? "bg-indigo-500/10" : "bg-indigo-500/5"
        }`}
      />

      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xs font-bold uppercase tracking-widest ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Capabilities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-sm sm:text-base md:text-xl font-bold tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed transition-colors duration-500 uppercase  "
          >
            {/* Heading text color handling via ternary pattern */}
            <p className={isDark ? "text-white" : "text-black"}>
              {t(`Services & Expertise`,`ဝန်ဆောင်မှု နဲ့ စွမ်းရည်များ`)}
            </p>
          </motion.h2>
        </div>

        {/* Services Grid Layout - Clean track mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
              isDark={isDark} // 👈 Child card ဆီကို state ကို လက်ဆင့်ကမ်းပေးလိုက်ပါတယ်
            />
          ))}
        </div>
      </div>
    </section>
  );
}
