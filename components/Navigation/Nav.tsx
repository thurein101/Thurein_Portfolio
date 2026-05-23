"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../language";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); 
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    {name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 shadow-md right-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? `${isDark ? "bg-[#0F0F1A]/90 border-white/5 shadow-black/40" : "bg-white/90 border-zinc-200 shadow-zinc-200/50"} backdrop-blur-md shadow-lg h-16`
          : `${isDark ? "bg-[#141424]/95 border-white/[0.02]" : "bg-white/95 border-transparent"} backdrop-blur-sm h-20`
      }`}
    >
      <div className="w-full max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo & Title */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-zinc-900 flex items-center justify-center font-bold text-white text-sm border border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-300">
            TM
          </div>
          <span
            className={`font-bold text-base tracking-tight uppercase ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Thurein{" "}
            <span
              className={`${isDark ? "text-zinc-400" : "text-zinc-500"} font-light lowercase`}
            >
              MyoMin
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          <ul
            className={`flex items-center gap-1.5 p-1 rounded-xl border ${isDark ? "bg-black/40 border-white/[0.03]" : "bg-zinc-100 border-zinc-200"}`}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 block ${
                      isActive
                        ? `${isDark ? "text-white bg-zinc-800 border-white/10 shadow-inner" : "text-slate-900 bg-white border-zinc-200 shadow-sm"} border`
                        : `${isDark ? "text-zinc-400 hover:text-white hover:bg-white/[0.02]" : "text-zinc-500 hover:text-slate-900 hover:bg-zinc-200/50"}`
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action Buttons (Desktop) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`p-2 rounded-xl border transition-all active:scale-95 ${
                isDark
                  ? "text-zinc-400 hover:text-white hover:bg-white/5 border-white/10"
                  : "text-zinc-500 hover:text-slate-900 hover:bg-zinc-100 border-zinc-200"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href="/resume.pdf"
              download
              className={`inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-[0.97] border ${
                isDark
                  ? "text-white bg-zinc-800 hover:bg-zinc-700 border-white/10 shadow-lg"
                  : "text-slate-900 bg-zinc-100 hover:bg-zinc-200 border-zinc-200 shadow-sm"
              }`}
            >
            
              {t("Download CV", "CV ဖောင်ဒေါင်းရန်")}
            </a>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-xl transition-colors ${isDark ? "text-zinc-400 hover:bg-white/5" : "text-zinc-500 hover:bg-zinc-100"}`}
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl transition-colors ${isDark ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-slate-900"}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden w-full transition-all duration-300 ease-in-out border-t ${
          isOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } ${isDark ? "bg-[#0F0F1A] border-white/5" : "bg-white border-zinc-200"}`}
      >
        <ul className="px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? `${isDark ? "text-white bg-zinc-800 border-white/5" : "text-slate-900 bg-zinc-100 border-zinc-200"}`
                      : `${isDark ? "text-zinc-400 hover:text-white hover:bg-white/[0.02]" : "text-zinc-500 hover:text-slate-900 hover:bg-zinc-100"}`
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

          <li className="pt-2">
            <a
              href="/resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className={`w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${
                isDark
                  ? "text-white bg-zinc-800 hover:bg-zinc-700 border-white/10"
                  : "text-slate-900 bg-zinc-100 hover:bg-zinc-200 border-zinc-200"
              }`}
            >
             
              {t("Download CV", "CV ဖောင်ဒေါင်းရန်")} 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}