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
    <section id="experiences" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-center">
          <HistoryIcon size={50} className="text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Mes <span className="text-primary">expériences</span>
        </h2>

        <div className="relative">
          {/* Barre verticale centrale */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-border" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    isLeft ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Dates */}
                  <div
                    className={`w-1/2 px-10 text-sm text-muted-foreground ${
                      isLeft ? "text-left" : "text-right"
                    }`}
                  >
                    {exp.start} à {exp.end}
                  </div>

                  {/* Point central */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  {/* Carte */}
                  <div className="w-1/2 px-10">
                    <div className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center text-center">
                      {/* Logo */}
                      {exp.logo && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-16 h-16 object-contain mb-2"
                          />
                        </a>
                      )}

                      {/* Nom de l'entreprise */}
                      {exp.company && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold mb-2"
                        >
                          {exp.company}
                        </a>
                      )}

                      {/* Poste */}
                      <p className="text-sm text-primary font-medium mb-3">
                        {exp.position}
                      </p>

                      {/* Contrat */}
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.contract}
                      </p>

                      {/* Tâches alignées à gauche */}
                      <ul className="list-disc list-inside text-sm text-muted-foreground text-left space-y-1 w-full max-w-[18rem]">
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