import { ExternalLink } from "lucide-react";
import { FolderClockIcon } from "./ui/folder-clock";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

const projects = [
  {
    id: 1,
    title: "Biss'App",
    description: "Production artisanale de boissons et snacks africains",
    image: "/projets/Biss'App.webp",
    tags: ["Concrétisé le 01/06/2025"],
    link: "https://biss-app.fr/",
  },
  {
    id: 2,
    title: "Projet mystère 1",
    description: "Affaire à suivre...",
    image: "/projets/Projet mystère 1.png",
    tags: ["En cours de développement"],
  },
  {
    id: 3,
    title: "Projet mystère 2",
    description: "Affaire à suivre...",
    image: "/projets/Projet mystère 2.jpg",
    tags: ["En cours de développement"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projets" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          icon={FolderClockIcon}
          subtitle="Voici quelques-uns de mes projets récents, réalisés avec passion et détermination."
        >
          Mes principaux
          <span className="text-gradient"> projets</span>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isInProgress = project.tags.includes("En cours de développement");

            return (
              <Reveal key={project.id} delay={index * 0.1} className="h-full">
                <div className="group surface card-hover h-full overflow-hidden flex flex-col text-left">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-transparent" />

                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-black/55 text-white backdrop-blur-md ring-1 ring-white/15"
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${isInProgress ? "bg-amber-400 animate-pulse" : "bg-emerald-400"}`} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-1 items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-1">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>

                    {!isInProgress && project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visiter ${project.title}`}
                        className="icon-tile rounded-full h-11 w-11 shrink-0 transition-all duration-300 hover:scale-110 hover:text-white hover:bg-none hover:bg-primary"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
