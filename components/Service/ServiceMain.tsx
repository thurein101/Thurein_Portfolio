"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Hero from "../Hero/Hero";
import Services from "../Service/Services";

function ServiceMain() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <div
      className={`relative flex min-h-screen flex-col transition-colors duration-500 w-full overflow-x-hidden ${
        isDark
          ? "bg-gradient-to-r from-[#1f1f25] via-[#0b0c10] to-[#161d40] "
          : "bg-gradient-to-r from-[#ffffff] via-[#f5f7fa] to-[#e4e8f0] "
      }`}
    >
      <main className="w-full flex-1 flex flex-col">
        <Services />
      </main>
    </div>
  );
}

export default ServiceMain;
