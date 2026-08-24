import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("fr-FR", {
      timeZone: "Europe/Paris",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
      .formatToParts(new Date())
      .filter((p) => p.type !== "literal")
      .map((p) => [p.type, parseInt(p.value, 10)])
  );

  let age = parts.year - 2005;
  if (parts.month < 12 || (parts.month === 12 && parts.day < 21)) age--;

  const months = (parts.year - 2025) * 12 + (parts.month - 6);
  const mark = Math.floor(months / 6);
  const exact = months % 6 === 0;
  const years = Math.floor(mark / 2);
  const half = mark % 2 === 1;
  const word = years === 1 ? "an" : "ans";
  const label =
    mark <= 0 ? null : mark === 1 ? "6 mois" : `${years} ${word}${half ? " et demi" : ""}`;
  const duration = !label
    ? "quelques mois"
    : exact
    ? label
    : `${label.startsWith("1 ") ? "plus d'" : "plus de "}${label}`;

  return (
    <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Bonjour, je suis {" "}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"><a href="https://www.linkedin.com/in/maxime-gougat/" target="_blank" rel="noopener noreferrer">Maxime</a></span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"><a href="https://www.linkedin.com/in/maxime-gougat/" target="_blank" rel="noopener noreferrer">GOUGAT</a></span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}!</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Je suis étudiant en première année de <a href="https://iae.uca.fr/formation/master/master-management-strategique" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">Master Management Stratégique (parcours Pilotage des Organisations et Management Durable)</a> à l'<a href="https://iae.uca.fr/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#732280]">IAE Clermont Auvergne</a>.
          <br/>
          <br/>
            Passionné par l'immobilier et la bourse, et fort d'une expérience entrepreneuriale dans la restauration ({duration} à la tête de{" "}
            <a className="text-primary font-bold" href="https://www.biss-app.fr" target="_blank" rel="noopener noreferrer">Biss'App</a>) qui m'a permis de développer de nombreuses compétences et acquérir de nombreuses connaissances : des démarches administratives à la stratégie globale en passant par le développement du site web ; je souhaite aujourd'hui, à {age} ans, mettre tout ce que ça m'a appris au service d'un projet plus grand que le mien, avec une équipe autour de moi.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projets" className="cosmic-button">VOIR MES RÉALISATIONS</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  )
}