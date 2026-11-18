import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Journey from "@/components/sections/journey";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Journey />
      <Services />
      <Skills />
      <ContactForm />
    </>
  );
}
