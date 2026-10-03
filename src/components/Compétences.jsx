import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { RocketIcon } from "./ui/rocket";
import { SectionHeading } from "./ui/section-heading";
import { FilterTabs } from "./ui/filter-tabs";

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
    <section id="competences" className="py-20 md:py-28 px-4 relative bg-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading icon={RocketIcon}>
          Mes <span className="text-gradient">compétences</span>
        </SectionHeading>

        <FilterTabs
          id="competences"
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <motion.div layout className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.a
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group surface card-hover p-4 sm:p-5 flex items-center gap-4 text-left"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-border p-2">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <Sparkles className="h-5 w-5 text-primary" />
                  )}
                </span>
                <span className="font-semibold text-base md:text-lg leading-snug">{skill.name}</span>
                {skill.link && (
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
                )}
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
