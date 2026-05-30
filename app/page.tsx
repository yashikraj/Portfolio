import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import DeveloperPresence from "@/components/DeveloperPresence";
import Contact from "@/components/Contact";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />

      <main className="relative z-10">
        <Navbar />

        <Hero />

        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-32 py-24">

          <section id="about">
            <FadeIn>
              <About />
            </FadeIn>
          </section>

          <section id="skills">
            <FadeIn>
              <Skills />
            </FadeIn>
          </section>

          <section id="projects">
            <FadeIn>
              <Projects />
            </FadeIn>
          </section>

          <section id="journey">
            <FadeIn>
              <Journey />
            </FadeIn>
          </section>

          <section id="developer-presence">
            <FadeIn>
              <DeveloperPresence />
            </FadeIn>
          </section>

          <section id="contact">
            <FadeIn>
              <Contact />
            </FadeIn>
          </section>

        </div>
      </main>
    </div>
  );
}