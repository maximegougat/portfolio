import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { RocketIcon } from "./ui/rocket";
import { SectionHeading } from "./ui/section-heading";
import { FilterTabs } from "./ui/filter-tabs";


// Liste des formations
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
    comment: "Score obtenu : 705/990"
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
    comment: "Diplômé (bac + 3)"
  },
  { 
    name: "Master Management Stratégique (parcours POMD)",
    category: "Diplômes",
    date: "09/2026 - 09/2028",
    organization: "IAE Clermont Auvergne",
    logo: "/icons/IAE Clermont Auvergne.png",
    website: "https://iae.uca.fr/",
    presentationLink: "https://iae.uca.fr/formation/master/master-management-strategique",
  },
  {
    name: "SecNumacadémie",
    category: "E-learning",
    date: "02/2026",
    organization: "ANSSI",
    logo: "/icons/ANSSI.svg",
    website: "https://cyber.gouv.fr/",
    presentationLink: "https://cyber.gouv.fr/offre-de-service/formations-entrainement-et-decouverte-des-metiers/formations/formations-delivrees-par-lanssi/mooc-secnumacademie/",
  },
  {
    name: "Connaissance des billets de banque en euros",
    category: "E-learning",
    date: "08/2025",
    organization: "Banco de Portugal",
    logo: "/icons/Banco de Portugal.png",
    website: "https://www.bportugal.pt/",
    presentationLink: "https://elearning.bportugal.pt/?lang=fr",
  },
  {
    name: "L'atelier RGPD",
    category: "E-learning",
    date: "08/2025",
    organization: "CNIL",
    logo: "/icons/CNIL.jpg",
    website: "https://www.cnil.fr/",
    presentationLink: "https://atelier-rgpd.cnil.fr/",
  }
];

const categories = ["Toutes", "Diplômes", "Certifications", "Formations", "E-learning"];

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
    <section id="formations" className="py-20 md:py-28 px-4 relative bg-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading icon={RocketIcon}>
          Mes <span className="text-gradient">formations</span>
        </SectionHeading>

        {/* Filtres */}
        <FilterTabs
          id="formations"
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Cartes */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFormations.map((formation) => (
              <motion.div
                key={formation.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="surface card-hover p-5 sm:p-6 flex flex-col text-left"
              >
                {/* HEADER */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  {formation.logo && (
                    <a
                      href={formation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-border"
                    >
                      <img
                        src={formation.logo}
                        alt={formation.organization}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </a>
                  )}
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
                    {formation.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="font-sans font-semibold leading-snug">
                  {formation.name}
                </h3>
                <span className="text-sm text-muted-foreground mt-1">
                  {formation.organization}
                </span>

                {/* COMMENT */}
                {formation.comment && (
                  <span className="mt-4 self-start rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                    {formation.comment}
                  </span>
                )}

                {/* META / ACTIONS */}
                <div className="flex-1 min-h-5" />
                <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/70">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {formation.date}
                  </span>
                  {formation.presentationLink && (
                    <a
                      href={formation.presentationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      Présentation
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
