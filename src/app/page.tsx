import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
// import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Navbar />
      <main>
        <AboutSection />
        <ExperienceTimeline />
        <SkillSection />
        <WorkExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
