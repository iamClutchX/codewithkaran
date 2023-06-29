
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactPage from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero /> 
      <Skills/>
      <Projects />
      <Blog />
      <ContactPage />
    </>
  );
}
