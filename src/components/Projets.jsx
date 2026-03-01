import { ArrowRight, ExternalLink } from "lucide-react";
import { FolderClockIcon } from "./ui/folder-clock";

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
    <section id="projets" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Icône et titre */}
        <div className="flex justify-center mb-4">
          <FolderClockIcon size={50} className="text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes principaux
          <span className="text-primary"> projets</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voici quelques-uns de mes projets récents, réalisés avec passion et détermination.
        </p>

        {/* Grid projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isInProgress = project.tags.includes("En cours de développement");

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-transform hover:scale-105"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col justify-between h-full">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Titre & description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Lien externe si finalisé */}
                  {!isInProgress && project.link && (
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-foreground/80 hover:text-primary transition-colors duration-300 gap-1"
                      >
                        Voir le projet <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};