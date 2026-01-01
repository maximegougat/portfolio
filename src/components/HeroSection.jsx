import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block opacity-0 animate-fade-in">Bonjour, je suis</span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Maxime
            </span>
            <span className="block text-gradient opacity-0 animate-fade-in-delay-2">
              GOUGAT !
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Mon portfolio sera bientôt disponible. Revenez bientôt pour découvrir mon parcours, mes projets et mes compétences !
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

{/* export const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md-text-6-xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Bonjour, je suis</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Maxime</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">GOUGAT !</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Je suis étudiant en troisième année de <a href="https://iut.uca.fr/formations/but-gestion-des-entreprises-des-administrations-clermont" target="_blank" rel="noopener noreferrer">BUT Gestion des Entreprises et des Administrations (parcours Gestion, Entrepreneuriat et Management d'Activités)</a>.
          <br/>
            Passionné par l'immobilier et la bourse, et fort d'une expérience entrepreneuriale dans la restauration (<a className="text-primary font-bold" href="https://www.biss-app.fr" target="_blank" rel="noopener noreferrer">Biss'App</a>), je souhaite mettre mon expérience à profit pour mener à bien mon projet professionnel : devenir conseiller bancaire spécialisé en gestion de patrimoine ou chargé de clientèle entreprises.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">VOIR MES RÉALISATIONS</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  )
} */}