import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
{/*import { AboutSection } from "../components/AboutSection"
import { IdCardIcon } from "@/components/ui/id-card"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"*/}
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

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
        {/*<AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>*/}
        <ContactSection/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  )
}