import { useState } from "react";
import { cn } from "@/lib/utils";
import { RocketIcon } from "./ui/rocket";

const skills = [
  { name: "Autonomie", category: "Soft skills" },
  { name: "Intelligence émotionnelle", category: "Soft skills" },
  { name: "Polyvalence", category: "Soft skills" },
  { name: "Ouverture d'esprit", category: "Soft skills" },
  { name: "Adaptabilité", category: "Soft skills" },
  { name: "Rigueur", category: "Soft skills" },
  { name: "Écoute active", category: "Soft skills" },
  { name: "Persévérance", category: "Soft skills" },

  { name: "Excel", category: "Logiciels", icon: "/icons/Excel.svg", link: "https://www.microsoft.com/fr-fr/microsoft-365/excel" },
  { name: "PowerPoint", category: "Logiciels", icon: "/icons/PowerPoint.svg", link: "https://www.microsoft.com/fr-fr/microsoft-365/powerpoint" },
  { name: "Word", category: "Logiciels", icon: "/icons/Word.svg", link: "https://www.microsoft.com/fr-fr/microsoft-365/word" },
  { name: "Power BI", category: "Logiciels", icon: "/icons/Power BI.svg", link: "https://www.microsoft.com/fr-fr/power-platform/products/power-bi/" },
  { name: "Teams", category: "Logiciels", icon: "/icons/Teams.svg", link: "https://www.microsoft.com/fr-fr/microsoft-teams/download-app" },
  { name: "Outlook", category: "Logiciels", icon: "/icons/Outlook.svg", link: "https://www.microsoft.com/fr-fr/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook" },
  { name: "Heflo", category: "Logiciels", icon: "/icons/Heflo.avif", link: "https://www.heflo.com/" },
  { name: "Visual Studio Code", category: "Logiciels", icon: "/icons/Visual Studio Code.svg", link: "https://code.visualstudio.com" },

  { name: "HTML", category: "Développement frontend", icon: "/icons/HTML5.svg" },
  { name: "CSS", category: "Développement frontend", icon: "/icons/CSS3.svg" },

  { name: "VBA", category: "Programmation", icon: "/icons/Visual Basic for Applications.png", link: "https://learn.microsoft.com/fr-fr/office/vba/api/overview/" },
];

const categories = [
  "Toutes",
  "Soft skills",
  "Logiciels",
  "Développement frontend",
  "Programmation",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "Toutes" || skill.category === activeCategory
  );

  return (
    <section
      id="competences"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <RocketIcon size={40} className="text-primary mb-4 sm:w-[50px] sm:h-[50px]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Mes <span className="text-primary">compétences</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 sm:justify-center sm:flex-wrap mb-10 scrollbar-hide">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base transition-all duration-300 shrink-0",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredSkills.map((skill, key) => {
            const CardWrapper = skill.link ? "a" : "div";

            return (
              <CardWrapper
                key={key}
                {...(skill.link && {
                  href: skill.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="group bg-card p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <span className="font-semibold text-base sm:text-lg">
                  {skill.name}
                </span>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};