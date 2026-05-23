"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiArrowUp, FiGlobe } from "react-icons/fi";
import { useLanguage } from "../language"; 

export default function Footer() {

  const currentYear = new Date().getFullYear();


  const { lang, setLang, t } = useLanguage();

  // Smooth Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <footer
      className={`w-full py-10 border-t transition-colors duration-300 ${
        isDark
          ? "border-zinc-900 bg-transparent"
          : "border-zinc-200 bg-transparent"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* 🏷️ Left: Copyright & Name Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-[11px] tracking-wider">
          <span
            className={
              isDark ? "text-zinc-200 font-bold" : "text-zinc-950 font-bold"
            }
          >
            THUREIN MYOMIN
          </span>
          <span
            className={`hidden sm:inline ${isDark ? "text-zinc-800" : "text-zinc-300"}`}
          >
            |
          </span>
          <span className={isDark ? "text-zinc-500" : "text-zinc-400"}>
          
            © {currentYear}{" "}
            {t("ALL RIGHTS RESERVED", "မူပိုင်ခွင့်အားလုံး ရရှိပြီး ဖြစ်ပါသည်")}
          </span>
        </div>

       
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setLang(lang === "en" ? "mm" : "en")}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`px-3 py-2 rounded-xl text-[10px] font-mono font-bold tracking-widest flex items-center gap-1.5 cursor-pointer border border-amber-900 transition-all duration-300 ${
              isDark
                ? "bg-zinc-900 text-zinc-400 hover:text-zinc-100"
                : "bg-[#eee] text-zinc-600 hover:text-zinc-950"
            }`}
          >
            <FiGlobe className="text-xs" />
            <span>{lang === "en" ? "EN" : "MM"}</span>
            <span
              className={`text-[9px] font-normal ${isDark ? "text-zinc-600" : "text-zinc-400"}`}
            >
              {lang === "en" ? "/ MM" : "/ EN"}
            </span>
          </motion.button>

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -3,
              boxShadow: isDark
                ? "0px 10px 20px rgba(255, 255, 255, 0.03)"
                : "0px 10px 15px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.97 }}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium tracking-wide flex items-center gap-2 cursor-pointer transition-all duration-300 border-none ${
              isDark
                ? "bg-zinc-900 text-zinc-400 shadow-[2px_2px_6px_rgba(0,0,0,0.4)] hover:text-zinc-100"
                : "bg-[#eee] text-zinc-600 shadow-[3px_3px_6px_#dfd9d9,_-3px_-3px_6px_#ffffff] hover:text-zinc-950"
            }`}
          >
    
            <span>{t("BACK TO TOP", "အပေါ်ပြန်တက်ရန်")}</span>
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FiArrowUp className="text-sm" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
