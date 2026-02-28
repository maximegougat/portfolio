import { useState } from "react";
import { cn } from "@/lib/utils";
import { RocketIcon } from "./ui/rocket";

const skills = [
  { name: "Autonomie", category: "Soft skills", icon: "" },
  { name: "Intelligence émotionnelle", category: "Soft skills", icon: "" },
  { name: "Polyvalence", category: "Soft skills", icon: "" },
  { name: "Ouverture d'esprit", category: "Soft skills", icon: "" },
  { name: "Adaptabilité", category: "Soft skills", icon: "" },
  { name: "Rigueur", category: "Soft skills", icon: "" },
  { name: "Écoute active", category: "Soft skills", icon: "" },
  { name: "Persévérance", category: "Soft skills", icon: "" },
  { name: "Excel", category: "Logiciels", icon: "/icons/Excel.svg", link : "https://www.microsoft.com/fr-fr/microsoft-365/excel" },
  { name: "PowerPoint", category: "Logiciels", icon: "/icons/PowerPoint.svg", link : "https://www.microsoft.com/fr-fr/microsoft-365/powerpoint" },
  { name: "Word", category: "Logiciels", icon: "/icons/Word.svg", link : "https://www.microsoft.com/fr-fr/microsoft-365/word" },
  { name: "Power BI", category: "Logiciels", icon: "/icons/Power BI.svg", link : "https://www.microsoft.com/fr-fr/power-platform/products/power-bi/" },
  { name: "Teams", category: "Logiciels", icon: "/icons/Teams.svg", link : "https://www.microsoft.com/fr-fr/microsoft-teams/download-app" },
  { name: "Outlook", category: "Logiciels", icon: "/icons/Outlook.svg", link : "https://www.microsoft.com/fr-fr/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook" },
  { name: "Heflo", category: "Logiciels", icon: "/icons/Heflo.avif", link : "https://www.heflo.com/" },
  { name: "Visual Studio Code", category: "Logiciels", icon: "/icons/Visual Studio Code.svg", link: "https://www.code.visualstudio.com"},
  { name: "HTML", category: "Développement frontend", icon: "/icons/HTML5.svg"},
  { name: "CSS", category: "Développement frontend", icon: "/icons/CSS3.svg" },
  { name: "Visual Basic for Applications (VBA)", category: "Programmation", icon: "/icons/Visual Basic for Applications.png", link: "https://learn.microsoft.com/fr-fr/office/vba/api/overview/"},
];

const categories = ["Toutes", "Soft skills", "Logiciels", "Développement frontend", "Programmation"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Toutes" || skill.category === activeCategory
  );

  return (
    <section id="competences" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-center">
          <RocketIcon size={50} className="text-primary"/>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <a
              key={key}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-lg shadow-xs flex items-center justify-center gap-3 card-hover"
            >
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
              )}
              <span className="font-semibold text-lg">{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};