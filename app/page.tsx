import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Navigation />
      <main role="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}