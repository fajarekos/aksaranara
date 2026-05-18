import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Navbar />
      <main>
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <WorkExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
