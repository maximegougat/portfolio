import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/Accueil"
import { AboutSection } from "../components/A propos"
import { SkillsSection } from "@/components/Compétences"
import { ProjectsSection } from "@/components/Projets"
import { ContactSection } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ExperienceSection } from "@/components/Expériences"
import { FormationsSection } from "@/components/Formations"

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      {/* Background effects */}
      <StarBackground />
      {/* Navbar (inclut le bouton de thème) */}
      <Navbar/>
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection/>
        <AboutSection/>
        <FormationsSection/>
        <ExperienceSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
