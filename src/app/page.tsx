import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SkillsBentoSection,
} from "@/components/sections";
import { Footer, Navbar } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-alabaster text-[#1A1C20] selection:bg-[#E04D2D] selection:text-white">
      {/* 1. Navbar (Sticky & Dynamic) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. About Me (Typographic Focus & Scroll Reveal) */}
        <AboutSection />

        {/* 4. Featured Projects (Interactive Sticky Stacking Cards) */}
        <ProjectsSection />

        {/* 5. Skills (Interactive Bento Box) */}
        <SkillsBentoSection />

        {/* 6. Contact (High Impact with TanStack Form) */}
        <ContactSection />
      </main>

      {/* 7. Footer (The Sign-Off with 100vw Watermark) */}
      <Footer />
    </div>
  );
}
