import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 sm:space-y-8">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">
              Bonjour, je suis
            </span>

            <span className="block mt-2">
              <a
                href="https://www.linkedin.com/in/maxime-gougat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary opacity-0 animate-fade-in-delay-1 inline-block"
              >
                Maxime
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/maxime-gougat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient opacity-0 animate-fade-in-delay-2 inline-block"
              >
                GOUGAT
              </a>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                {" "}!
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            Je suis étudiant en troisième année de{" "}
            <a
              href="https://iut.uca.fr/formations/but-gestion-des-entreprises-des-administrations-clermont"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              BUT Gestion des Entreprises et des Administrations
            </a>.
            <br /><br />
            Passionné par l'immobilier et la bourse, et fort d'une expérience
            entrepreneuriale dans la restauration (
            <a
              href="https://www.biss-app.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:opacity-80 transition"
            >
              Biss'App
            </a>
            ), je souhaite devenir chargé de clientèle de professionnels
            ou chargé de clientèle patrimoniale.
          </p>

          {/* CTA */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projets"
              className="cosmic-button inline-block w-full sm:w-auto"
            >
              VOIR MES RÉALISATIONS
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};