import { useState } from "react";
import { cn } from "@/lib/utils";
import { RocketIcon } from "./ui/rocket";

// Liste des formations / certifications / diplômes / MOOC
const formations = [
  { 
    name: "Premiers Secours Citoyen (PSC)",
    category: "Formations",
    date: "06/2016",
    organization: "Fédération Nationale des Sapeurs-Pompiers de France",
    logo: "/icons/Fédération Nationale des Sapeurs-Pompiers de France.png",
    website: "https://www.pompiers.fr/federation/",
    presentationLink: "https://www.croix-rouge.fr/formation/prevention-et-secours-civique-de-niveau-1-psc1",
  },
  { 
    name: "Hygiène alimentaire adaptée à l'activité des établissements de restauration commerciale",
    category: "Formations",
    date: "06/2025",
    organization: "CMA Auvergne-Rhône-Alpes",
    logo: "/icons/CMA AURA.svg",
    website: "https://www.cma-auvergnerhonealpes.fr/",
    presentationLink: "https://www.cma-auvergnerhonealpes.fr/formations/reglementaire/formation-hygiene-alimentaire/",
  },
  { 
    name: "TOEIC",
    category: "Certifications",
    date: "02/2026",
    organization: "ETS",
    logo: "/icons/ETS.svg",
    website: "https://www.etsglobal.org",
    presentationLink: "https://www.etsglobal.org/fr/en/test-type-family/toeic-listening-and-reading-test",
  },
  { 
    name: "Score IAE Message",
    category: "Certifications",
    date: "02/2026",
    organization: "Score IAE Message",
    logo: "/icons/IAE Score Message.png",
    website: "https://www.iae-message.fr/",
    presentationLink: "https://www.iae-message.fr/presentation.php?lang=fr",
    comment: "Score obtenu : 234/400"
  },
  { 
    name: "Baccalauréat Sciences & Technologies du Management et de la Gestion (spécialité marketing)",
    category: "Diplômes",
    date: "09/2020 - 07/2023",
    organization: "Lycée René Descartes",
    logo: "/icons/Ministère de l'Éducation Nationale et de la Jeunesse.svg",
    website: "https://www.onisep.fr/",
    presentationLink: "https://www.onisep.fr/formation/apres-la-3-la-voie-generale-et-technologique/qu-est-ce-que-la-voie-generale-et-technologique/la-voie-technologique-en-premiere-et-en-terminale/le-bac-stmg-sciences-et-technologies-du-management-et-de-la-gestion",
    comment: "Moyenne obtenue : 14,82/20 (mention bien)"
  },
  { 
    name: "Certification AMF",
    category: "Certifications",
    date: "2026",
    organization: "AMF",
    logo: "/icons/AMF.svg",
    website: "https://www.amf-france.org/fr",
    presentationLink: "https://www.amf-france.org/fr/actualites-publications/dossiers-thematiques/certification-professionnelle#Lexamen_AMF",
    hidden: true,
  },
  { 
    name: "Certification AMF Finance Durable",
    category: "Certifications",
    date: "2026",
    organization: "AMF",
    logo: "/icons/AMF.svg",
    website: "https://www.amf-france.org/fr",
    presentationLink: "https://www.amf-france.org/fr/actualites-publications/dossiers-thematiques/certification-professionnelle#Lexamen_AMF_Finance_durable",
    hidden: true,
  },
  { 
    name: "BUT Gestion des Entreprises et des Administrations (parcours GEMA)",
    category: "Diplômes",
    date: "09/2023 - 07/2026",
    organization: "IUT Clermont Auvergne (site d'Aubière)",
    logo: "/icons/IUT UCA.png",
    website: "https://iut.uca.fr/",
    presentationLink: "https://iut.uca.fr/formations/but-gestion-des-entreprises-des-administrations-clermont",
  },
  {
    name: "SecNumacadémie",
    category: "MOOC",
    date: "02/2026",
    organization: "ANSSI",
    logo: "/icons/ANSSI.svg",
    website: "https://cyber.gouv.fr/",
    presentationLink: "https://cyber.gouv.fr/offre-de-service/formations-entrainement-et-decouverte-des-metiers/formations/formations-delivrees-par-lanssi/mooc-secnumacademie/",
  },
  {
    name: "Connaissance des billets de banque en euros",
    category: "MOOC",
    date: "08/2025",
    organization: "Banco de Portugal",
    logo: "/icons/Banco de Portugal.png",
    website: "https://www.bportugal.pt/",
    presentationLink: "https://elearning.bportugal.pt/?lang=fr",
  }
];

const categories = ["Toutes", "Diplômes", "Certifications", "Formations", "MOOC"];

// Helper pour trier les dates (on prend la date de fin si elle existe)
const getSortableDate = (date) => {
  const endDate = date.includes("-")
    ? date.split("-")[1].trim()
    : date;

  if (endDate.length === 4) {
    return new Date(`${endDate}-12-31`).getTime();
  }

  const [month, year] = endDate.split("/");
  return new Date(`${year}-${month}-01`).getTime();
};

export const FormationsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filteredFormations = formations
    .filter((formation) => !formation.hidden)
    .filter(
      (formation) =>
        activeCategory === "Toutes" ||
        formation.category === activeCategory
    )
    .sort((a, b) => getSortableDate(b.date) - getSortableDate(a.date));

  return (
    <section
      id="formations"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-4">
            <RocketIcon
              size={40}
              className="text-primary sm:w-[50px] sm:h-[50px]"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Mes <span className="text-primary">formations</span>
          </h2>
        </div>

        {/* Filtres (scroll mobile) */}
        <div className="flex gap-3 overflow-x-auto pb-4 sm:justify-center sm:flex-wrap mb-10 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredFormations.map((formation, key) => (
            <div
              key={key}
              className="group bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6"
            >
              {/* Logo */}
              {formation.logo && (
                <div className="flex justify-center mb-4">
                  <a
                    href={formation.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={formation.logo}
                      alt={formation.organization}
                      className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                </div>
              )}

              {/* Titre */}
              <div className="text-center mb-3">
                <h3 className="font-semibold text-sm sm:text-base leading-snug line-clamp-4">
                  {formation.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {formation.organization}
                </p>
              </div>

              {/* Date */}
              <div className="text-center text-xs sm:text-sm text-muted-foreground mb-4">
                {formation.date}
              </div>

              {/* Footer */}
              <div className="mt-auto flex flex-col items-center gap-2">
                {formation.presentationLink && (
                  <a
                    href={formation.presentationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-primary hover:underline"
                  >
                    Présentation
                  </a>
                )}

                {formation.comment && (
                  <span className="text-xs text-muted-foreground text-center">
                    {formation.comment}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};