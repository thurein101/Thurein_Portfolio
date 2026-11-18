"use client";

import { useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { toast } from "sonner";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import Link from "next/link";

const socialLinks = [
  { name: "Phone", icon: Phone, href: "tel:+959689686153" },
  {
    name: "Facebook",
    icon: FiFacebook,
    href: "https://facebook.com/ko.kothurein.1195",
  },
  { name: "GitHub", icon: FiGithub, href: "https://github.com/thurein101" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: { success?: boolean; error?: string } = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-block">
      <div className="page-shell">
        <SectionHeading
          index="05"
          eyebrow="Correspondence"
          title="CONTACT"
          id="contact-heading"
        />

        <div className="mt-9 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="panel panel-pad flex h-full flex-col">
              <span className="eyebrow">Let&apos;s talk</span>
              <p className="mt-6 text-sm leading-7 text-foreground-muted">
                {t(
                  "Have an exciting project in mind, looking for a full-stack developer to join your team, or just want to discuss a new idea? Let's collaborate and turn your vision into a solid, high-performance digital experience. Drop me a message, and let's build something extraordinary together.",
                  "စိတ်လှုပ်ရှားစရာ ပရောဂျက်အသစ်တွေ ဖန်တီးဖို့ပဲဖြစ်ဖြစ်၊ သင့်အဖွဲ့ထဲမှာ ပါဝင်မယ့် Full-Stack Developer တစ်ယောက် ရှာနေတာပဲဖြစ်ဖြစ်၊ ဒါမှမဟုတ် အိုင်ဒီယာအသစ်တွေကို ဆွေးနွေးချင်ရုံတင်ပဲဖြစ်ဖြစ် အဆင်ပြေပါတယ်။ သင့်ရဲ့ စိတ်ကူးစိတ်သန်းတွေကို ကောင်းမွန်ပြီး စွမ်းဆောင်ရည်မြင့်မားတဲ့ ဒီဂျစ်တယ်ထုတ်ကုန်တစ်ခုဖြစ်အောင် အတူတူ ပူးပေါင်းတည်ဆောက်ကြစို့။ မက်ဆေ့ခ်ျ ပို့ထားလိုက်ပါ၊ အလန်းစားအရာတွေကို အတူတူ ဖန်တီးလိုက်ရအောင်။"
                )}
              </p>

              <div className="mt-auto border-t border-line pt-7">
                <span className="mono">Elsewhere</span>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                        aria-label={social.name}
                        className="social-button"
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {social.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="panel panel-pad h-full">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label htmlFor="contact-name" className="mono">
                      Name
                    </label>
                    <span className="mono text-foreground-subtle">01</span>
                  </div>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Type your name..."
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({ ...formData, name: event.target.value })
                    }
                    className="field-control"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label htmlFor="contact-email" className="mono">
                      Email
                    </label>
                    <span className="mono text-foreground-subtle">02</span>
                  </div>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Type your email..."
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    className="field-control"
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label htmlFor="contact-message" className="mono">
                    Message
                  </label>
                  <span className="mono text-foreground-subtle">03</span>
                </div>
                <textarea
                  id="contact-message"
                  placeholder="Type your message..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({ ...formData, message: event.target.value })
                  }
                  className="field-control resize-none"
                />
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
                <span className="mono">FORM / 05</span>
                <button
                  type="submit"
                  disabled={isSending}
                  className="btn-primary min-w-[210px]"
                >
                  {isSending ? (
                    <span className="animate-pulse">TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>{t("Submit Message", "ပေးပို့မည်")}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
