import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background/70 backdrop-blur-xl">
      <Header />
      <main className="flex flex-1 flex-col gap-20 py-16 md:gap-28 md:py-20">
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <CertificationsSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
