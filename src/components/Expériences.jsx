import { HistoryIcon } from "./ui/history";

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
        "Stage alterné (100 jours en entreprise) de troisième année de BUT GEA (bac +3)",
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
      logo: "/icons/Biss'App.png",
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
      contract: "Stage de deuxième année de BUT GEA (bac +2)",
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
      contract: "Stage de première année de BUT GEA (bac +1)",
      tasks: [
        "Accueil et aide à la clientèle",
        "Réponse aux appels téléphoniques",
        "Envois postaux de cartes bancaires, chéquiers, …",
        "Service à table",
        "Envoi de mails et SMS aux clients",
        "Traitement des dépôts de chèques",
      ],
    },
  ];

  return (
    <section
      id="experiences"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="flex justify-center mb-4">
            <HistoryIcon
              size={40}
              className="text-primary sm:w-[50px] sm:h-[50px]"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Mes <span className="text-primary">expériences</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical line (desktop only centered) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-border" />

          {/* Vertical line mobile */}
          <div className="lg:hidden absolute left-4 top-0 h-full w-[2px] bg-border" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
                    relative flex flex-col lg:flex-row items-start
                    ${isLeft ? "lg:flex-row-reverse" : ""}
                  `}
                >
                  {/* Timeline dot */}
                  <div
                    className="
                      absolute
                      left-4 lg:left-1/2
                      -translate-x-1/2
                      w-4 h-4
                      bg-primary
                      rounded-full
                      border-4
                      border-background
                    "
                  />

                  {/* Dates */}
                  <div
                    className={`
                      mb-4 lg:mb-0
                      pl-12 lg:pl-0
                      lg:w-1/2
                      text-sm text-muted-foreground
                      ${isLeft ? "lg:text-left" : "lg:text-right"}
                    `}
                  >
                    {exp.start} à {exp.end}
                  </div>

                  {/* Card */}
                  <div className="pl-12 lg:pl-10 lg:w-1/2">
                    <div className="bg-card p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                      
                      {/* Logo */}
                      {exp.logo && (
                        <div className="flex justify-center lg:justify-start mb-3">
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-14 h-14 object-contain"
                            />
                          </a>
                        </div>
                      )}

                      {/* Company */}
                      {exp.company && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-semibold mb-1 text-center lg:text-left"
                        >
                          {exp.company}
                        </a>
                      )}

                      {/* Position */}
                      <p className="text-sm sm:text-base text-primary font-medium mb-2 text-center lg:text-left">
                        {exp.position}
                      </p>

                      {/* Contract */}
                      {exp.contract && (
                        <p className="text-sm text-muted-foreground mb-3 text-center lg:text-left">
                          {exp.contract}
                        </p>
                      )}

                      {/* Tasks */}
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 text-left">
                        {exp.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};