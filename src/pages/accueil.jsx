import { ThemeToggle } from "../components/Thème"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/Accueil"
import { AboutSection } from "../components/A propos"
import { IdCardIcon } from "@/components/ui/id-card"
import { SkillsSection } from "@/components/Compétences"
import { ProjectsSection } from "@/components/Projets"
import { ContactSection } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ExperienceSection } from "@/components/Expériences"
import { FormationsSection } from "@/components/Formations"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Theme toggle */}
        <ThemeToggle />
      {/* Background effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar/>
      {/* Main content */}
      <main>
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