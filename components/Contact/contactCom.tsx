"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../language";
import {
  FiPhone,
  FiMail,
  FiFacebook,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";
import { toast } from 'sonner';

interface ContactProps {
  isDark: boolean;
}

export default function ContactCom({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Message sent successfully')
        setFormData({ name: "", email: "", message: "" }); // Form ကို Reset ပြန်ချတာ
      } else {
        alert("Something went wrong: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    { name: "Phone", icon: <FiPhone />, href: "tel:+959689686153" },

    {
      name: "Facebook",
      icon: <FiFacebook />,
      href: "https://facebook.com/ko.kothurein.1195",
    },
    {
      name: "GitHub",
      icon: <FiGithub />,
      href: "https://github.com/thurein101",
    },
  ];

  const arrowMotion = {
    animate: {
      x: [0, 3, 0],
      y: [0, -3, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section id="contact" className="py-24 w-full relative overflow-hidden">
      <div className="w-full max-w-xl mx-auto px-6">
        {/* 🎯 Header */}
        <div className="mb-2 text-left">
          <h2
            className={` font-bold uppercase tracking-widest text-lg text-center ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            CONTACT
          </h2>
        </div>

        <div className="mb-12 text-left">
          <p
            className={`text-lg text-center font-bold sm:text-sm font-mono tracking-tight leading-relaxed max-w-lg ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {t(
              `Have an exciting project in mind, looking for a full-stack developer to join your team, or just want to discuss a new idea? Let's collaborate and turn your vision into a solid, high-performance digital experience. Drop me a message, and let's build something extraordinary together.`,

              `စိတ်လှုပ်ရှားစရာ ပရောဂျက်အသစ်တွေ ဖန်တီးဖို့ပဲဖြစ်ဖြစ်၊ သင့်အဖွဲ့ထဲမှာ ပါဝင်မယ့် Full-Stack Developer တစ်ယောက် ရှာနေတာပဲဖြစ်ဖြစ်၊ ဒါမှမဟုတ် အိုင်ဒီယာအသစ်တွေကို ဆွေးနွေးချင်ရုံတင်ပဲဖြစ်ဖြစ် အဆင်ပြေပါတယ်။ သင့်ရဲ့ စိတ်ကူးစိတ်သန်းတွေကို ကောင်းမွန်ပြီး စွမ်းဆောင်ရည်မြင့်မားတဲ့ ဒီဂျစ်တယ်ထုတ်ကုန်တစ်ခုဖြစ်အောင် အတူတူ ပူးပေါင်းတည်ဆောက်ကြစို့။ မက်ဆေ့ခ်ျ ပို့ထားလိုက်ပါ၊ အလန်းစားအရာတွေကို အတူတူ ဖန်တီးလိုက်ရအောင်။`,
            )}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Type your name..."
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-5 py-4 text-sm rounded-2xl border-none outline-none transition-all duration-300 ${
                isDark
                  ? "bg-[#0b0f19] text-zinc-200 placeholder-zinc-700 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.5),_inset_-4px_-4px_10px_rgba(255,255,255,0.02)] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  : "bg-[#eee] text-zinc-800 placeholder-zinc-400 shadow-[inset_4px_4px_8px_#dfd9d9,_inset_-4px_-4px_8px_#ffffff] focus:bg-white focus:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
              }`}
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Type your email..."
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-5 py-4 text-sm rounded-2xl border-none outline-none transition-all duration-300 ${
                isDark
                  ? "bg-[#0b0f19] text-zinc-200 placeholder-zinc-700 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.5),_inset_-4px_-4px_10px_rgba(255,255,255,0.02)] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  : "bg-[#eee] text-zinc-800 placeholder-zinc-400 shadow-[inset_4px_4px_8px_#dfd9d9,_inset_-4px_-4px_8px_#ffffff] focus:bg-white focus:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
              }`}
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              placeholder="Type your message..."
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full px-5 py-4 text-sm rounded-2xl border-none outline-none resize-none transition-all duration-300 ${
                isDark
                  ? "bg-[#0b0f19] text-zinc-200 placeholder-zinc-700 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.5),_inset_-4px_-4px_10px_rgba(255,255,255,0.02)] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  : "bg-[#eee] text-zinc-800 placeholder-zinc-400 shadow-[inset_4px_4px_8px_#dfd9d9,_inset_-4px_-4px_8px_#ffffff] focus:bg-white focus:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
              }`}
            />
          </div>

      
          <motion.button
            type="submit"
            disabled={isSending}
           
            whileHover={{
              y: -3,
              boxShadow: isDark
                ? "0 10px 25px rgba(255, 255, 255, 0.05)"
                : "0 10px 20px rgba(0, 0, 0, 0.06)",
            }}
            whileTap={{ scale: 0.98 }}
            className={`w-full max-w-[200px] mx-auto py-3 rounded-xl font-mono font-bold text-[11px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-none ${
              isDark
                ? "bg-zinc-800 text-zinc-100 shadow-[4px_4px_10px_rgba(0,0,0,0.3)] hover:bg-zinc-700"
                : "bg-[#eee] text-zinc-800 shadow-[4px_4px_10px_#dfd9d9,_-4px_-4px_10px_#ffffff] hover:bg-zinc-200"
            }`}
          >
            {isSending ? (
              <span className="animate-pulse">TRANSMITTING...</span>
            ) : (
              <div className="flex items-center gap-1.5">
                <span>{t(`Submit Message`,`ပေးပို့မည်`)}</span>
                <motion.span variants={arrowMotion as any} animate="animate">
                  <FiArrowUpRight className="text-base" />
                </motion.span>
              </div>
            )}
          </motion.button>
        </form>

       
        <div className="mt-16 pt-6 border-t border-dashed border-zinc-200/10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm transition-all duration-300 transform hover:-translate-y-1 ${
                  isDark
                    ? "text-zinc-500 hover:text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-950"
                }`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
