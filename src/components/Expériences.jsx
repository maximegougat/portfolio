import { CalendarDays } from "lucide-react";
import { HistoryIcon } from "./ui/history";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export const ExperienceSection = () => {
  const experiences = [
    {
      start: "11/2025",
      end: "06/2026",
      company: "",
      website: "https://www.manpower.fr",
      logo: "/icons/Manpower.svg",
      position: "Conseiller et chargé de recrutement",
      contract:
        "Stage alterné (100 jours en entreprise) de troisième année de BUT GEA (bac + 3)",
      tasks: [
        "Promotion du Compte Épargne Temps rémunéré à 8% par an",
        "Accueil et aide aux candidats et intérimaires",
        "Création et actualisation de dossiers de candidats",
        "Réalisation d'entretiens de pré-qualification",
        "Diffusion d'annonces sur les jobboards",
        "Sourcing dans le but de dénicher les candidats les plus compétents par poste",
        "Commandes de cartes BTP afin que les intérimaires travaillent dans un cadre légal",
        "Demandes de contrôle des titres de séjour auprès de la préfecture",
        "Réalisation d'entretiens avec des candidats lors des Rencontres Intérim organisées avec France Travail le 13/01/2026",
        "Contrôle de l'authenticité des titres d'identité à l'aide de la méthode TRI (Toucher, Regarder, Incliner) et d'une lampe UV",
      ],
    },
    {
      start: "06/2025",
      end: "aujourd'hui",
      company: "",
      website: "https://www.biss-app.fr",
      logo: "/icons/Biss'App.svg",
      position: "Gérant",
      contract: "",
      tasks: [
        "Création et gestion de la société (aspects marketing, juridiques, financiers et administratifs)",
        "Élaboration et mise en place de la stratégie globale",
        "Développement complet du site web de l'entreprise (front-end et back-end) avec une stack moderne et performante, assurant une expérience utilisateur unique, fluide, responsable, scalable et sécurisée",
        "Référencement SEO naturel",
        "Détermination (pour la société) des moyens et finalités de traitement des données à caractère personnel",
        "Mise en œuvre et pilotage de la politique de l'entreprise en termes de protection des données (RGPD ➡️ Privacy by design ➡️ Gouvernance)",
      ],
    },
    {
      start: "04/2025",
      end: "06/2025",
      company: "",
      website: "https://www.maigastudio.com",
      logo: "/icons/Maïga Studio.webp",
      position: "Assistant de gestion",
      contract: "Stage de deuxième année de BUT GEA (bac + 2)",
      tasks: [
        "Mise en place de documents administratifs comptables",
        "Gestion à la mise en place du 1er centre de formation pour cheveux multi-textures à Clermont-Ferrand (Maïga Universal School)",
        "Préparation de l'ouverture officielle du salon de coiffure (éléments administratifs, lettres d'invitations, …)",
        "Création et gestion partielle de la page Instagram de l'entreprise",
        "Réalisation de fichiers Excel automatisés (ventes, parrainages, planning espace de co-working, …)",
        "Réalisation de divers designs (offre d'emploi, lettre d'invitation à l'inauguration, plan de formation, règlement intérieur, …)",
      ],
    },
    {
      start: "04/2024",
      end: "02/2025",
      company: "Servicies",
      website: "https://www.linkedin.com/company/servicies/",
      logo: "/icons/Servicies.svg",
      position: "Auto-entrepreneur",
      contract: "",
      tasks: [
        "Création sur mesure de classeurs Excel, présentations Powerpoint et documents Word",
      ],
    },
    {
      start: "06/2024",
      end: "07/2024",
      company: "McDonald's",
      website: "https://www.mcdonalds.fr",
      logo: "/icons/McDonald's.svg",
      position: "Équipier polyvalent",
      contract: "CDI",
      tasks: [
        "Prise de commandes",
        "Encaissement de commandes",
        "Préparation de commandes",
        "Service à table",
        "Aide à la clientèle",
        "Entretien du restaurant et des parkings",
      ],
    },
    {
      start: "01/2024",
      end: "02/2024",
      company: "Crédit Mutuel Enseignant",
      logo: "/icons/Crédit Mutuel Enseignant.png",
      position: "Agent d'accueil",
      contract: "Stage de première année de BUT GEA (bac + 1)",
      tasks: [
        "Accueil et aide à la clientèle",
        "Réponse aux appels téléphoniques",
        "Envois postaux de cartes bancaires, chéquiers, …",
        "Envoi de mails et SMS aux clients",
        "Traitement des dépôts de chèques",
      ],
    },
  ];

  return (
    <section id="experiences" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading icon={HistoryIcon}>
          Mes <span className="text-gradient">expériences</span>
        </SectionHeading>

        <div className="relative">
          {/* Barre verticale (à gauche sur mobile, centrée sur desktop) */}
          <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-linear-to-b from-primary/60 via-border to-accent/50" />

          <div className="flex flex-col gap-10 md:gap-14">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* Point */}
                  <div className="absolute left-[12px] md:left-1/2 -translate-x-1/2 top-2.5 md:top-[1.85rem] flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                  {/* Dates */}
                  <Reveal
                    className={`mb-3 md:mb-0 md:pt-6 md:row-start-1 ${
                      isLeft ? "md:col-start-2 md:text-left" : "md:col-start-1 md:text-right"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3.5 py-1.5 text-sm font-medium text-muted-foreground">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      {exp.start} à {exp.end}
                    </span>
                  </Reveal>

                  {/* Carte */}
                  <Reveal
                    delay={0.08}
                    className={`md:row-start-1 ${isLeft ? "md:col-start-1" : "md:col-start-2"}`}
                  >
                    <div className="surface card-hover p-5 sm:p-6 text-left">
                      <div className="flex items-center gap-4 mb-4">
                        {/* Logo */}
                        {exp.logo && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-border"
                          >
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              loading="lazy"
                              className="max-h-full max-w-full object-contain"
                            />
                          </a>
                        )}

                        <div className="min-w-0">
                          {/* Nom de l'entreprise */}
                          {exp.company && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block font-display text-lg font-semibold hover:text-primary transition-colors"
                            >
                              {exp.company}
                            </a>
                          )}

                          {/* Poste */}
                          <p className="font-display text-base sm:text-lg text-primary font-semibold leading-snug">
                            {exp.position}
                          </p>
                        </div>
                      </div>

                      {/* Contrat */}
                      {exp.contract && (
                        <p className="mb-4 inline-block rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                          {exp.contract}
                        </p>
                      )}

                      {/* Tâches */}
                      <ul className="text-sm text-muted-foreground space-y-2">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="flex gap-2.5">
                            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
