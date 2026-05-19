"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  // resolvedTheme ကို သုံးလိုက်ရင် current theme က "system" ဖြစ်နေရင်တောင် "dark" သို့မဟုတ် "light" ဆိုတာကို အမှန်အတိုင်း သိပေးပါတယ်
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Next.js Hydration Mismatch Error မတက်အောင် ကာကွယ်ခြင်း
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Client-side ပေါ်မရောက်ခင် Layout မပျက်အောင် Placeholder ပြထားခြင်း
    return <div className="h-8 w-8 rounded-xl border border-zinc-200 dark:border-white/10" />;
  }

  return (
    <button
      // 🌟 resolvedTheme ကို စစ်ပြီး Toggle လုပ်ထားလို့ System Theme သမားတွေပါ လုံးဝ အလုပ်လုပ်သွားပါပြီ
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-xl text-zinc-400 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 border border-zinc-200 dark:border-white/10 transition-colors active:scale-95 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {/* Sun Icon: Light Mode မှာ ပြပြီး Dark Mode မှာ ပျောက်မယ် */}
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      
      {/* Moon Icon: Dark Mode ရောက်မှ လည်ပြီး ပေါ်လာမယ် (Absolute center alignment ကို ပိုသန့်အောင် ညှိထားပါတယ်) */}
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}