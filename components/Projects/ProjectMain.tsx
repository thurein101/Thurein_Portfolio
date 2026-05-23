"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ProjectsCom from "./ProjectCom";



function ProjectMain() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
      <ProjectsCom/>
      </main>
    </div>
  );
}

export default ProjectMain;
