"use client";

import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress,     
  SiPostgresql, 
  SiMongodb, 
  SiPrisma, 
  SiGit,         
  SiGithub 
} from "react-icons/si";
import { ShieldCheck, Database } from "lucide-react"; 

interface SkillProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillProps) {
  
  const skillsData = [
    // 1. Frontend List
    { name: "JavaScript", category: "frontend", icon: <SiJavascript className="text-[#F7DF1E]" />, color: "#F7DF1E" },
    { name: "TypeScript", category: "frontend", icon: <SiTypescript className="text-[#3178C6]" />, color: "#3178C6" },
    { name: "Next.js", category: "frontend", icon: <SiNextdotjs className={isDark ? "text-white" : "text-black"} />, color: isDark ? "#FFFFFF" : "#000000" },
    { name: "React.js", category: "frontend", icon: <SiReact className="text-[#61DAFB]" />, color: "#61DAFB" },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss className="text-[#06B6D4]" />, color: "#06B6D4" },
    
    // 2. Backend List
    { name: "Node.js", category: "backend", icon: <SiNodedotjs className="text-[#339933]" />, color: "#339933" },
    { name: "Express.js", category: "backend", icon: <SiExpress className={isDark ? "text-white" : "text-black"} />, color: isDark ? "#FFFFFF" : "#000000" }, 
    { name: "Better Auth", category: "backend", icon: <ShieldCheck className="text-[#FF4500]" />, color: "#FF4500" },
    { name: "PostgreSQL", category: "backend", icon: <SiPostgresql className="text-[#4169E1]" />, color: "#4169E1" },
    { name: "MongoDB", category: "backend", icon: <SiMongodb className="text-[#47A248]" />, color: "#47A248" },
    { name: "Neon DB", category: "backend", icon: <Database className="text-[#00E599]" />, color: "#00E599" }, 
    { name: "Prisma ORM", category: "backend", icon: <SiPrisma className={isDark ? "text-white" : "text-[#2D3748]"} />, color: isDark ? "#FFFFFF" : "#2D3748" },
    
  // 3. Tools List


{ name: "Git", category: "tools", icon: <SiGit className="text-[#F05032]" />, color: "#F05032" }, 
{ name: "GitHub", category: "tools", icon: <SiGithub className={isDark ? "text-white" : "text-[#181717]"} />, color: isDark ? "#FFFFFF" : "#181717" },
  ]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const renderSkillGroup = (categoryType: string, title: string) => {
    const filteredSkills = skillsData.filter(skill => skill.category === categoryType);

    return (
      <div className="mb-14">
        <h3 className={`text-xs font-mono font-bold tracking-[0.2em] uppercase mb-6 px-2 ${
          isDark ? "text-indigo-400" : "text-indigo-600"
        }`}>
          // {title}
        </h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants as any}
              whileHover={{ 
                y: -6,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className={`relative overflow-hidden rounded-xl p-5 flex flex-col items-center justify-center min-h-[120px] border transition-all duration-300 group cursor-pointer ${
                isDark 
                  ? "bg-[#090d16]/90 border-zinc-800/80 hover:border-indigo-500/40 hover:bg-[#0f1626]" 
                  : "bg-zinc-50/60 border-zinc-200/50 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-200/40"
              }`}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none filter blur-lg"
                style={{ backgroundColor: skill.color }}
              />

              <div className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-105 mb-3 flex items-center justify-center">
                {skill.icon}
              </div>

              <span className={`text-xs sm:text-sm font-semibold tracking-wide text-center transition-colors duration-300 ${
                isDark ? "text-zinc-300 group-hover:text-white" : "text-zinc-700 group-hover:text-zinc-900"
              }`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 w-full relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6">
        
  
<div className="mb-10 text-center">
  <h2 className={`text-xl sm:text-2xl font-bold tracking-wider mb-2 uppercase opacity-90 ${
    isDark ? "text-white" : "text-zinc-900"
  }`}>
    My Tech Stack
  </h2>
</div>

        {renderSkillGroup("frontend", "Frontend Development")}
        {renderSkillGroup("backend", "Backend & Core Architecture")}
        {renderSkillGroup("tools", "DevOps & Cloud Tools")}

      </div>
    </section>
  );
}