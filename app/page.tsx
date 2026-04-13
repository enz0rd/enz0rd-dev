import ExperiencesSection from "@/components/ExperiencesSection";
import HiddenDuck from "@/components/HiddenDuck";
import HomeSection from "@/components/HomeSection";
import InfoSection from "@/components/InfoSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialSection from "@/components/SocialSection";
import TechnologiesSection from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 lg:py-25 md:py-20 gap-10 py-15 text-mist-100 bg-radial from-mist-800 to-mist-950">
      <HomeSection />
      <InfoSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ExperiencesSection />
      <SocialSection />
      <HiddenDuck />
    </div>
  );
}
