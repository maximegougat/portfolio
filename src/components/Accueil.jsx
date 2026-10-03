import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { VideoPresentation } from "./VideoPresentation";

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
    <>
      {/* ───────────── LANDING : titre + vidéo de présentation ───────────── */}
      <section
        id="accueil"
        className="relative min-h-svh flex flex-col items-center justify-center px-4 pt-24 pb-20 sm:pt-28"
      >
        <div className="container max-w-6xl mx-auto z-10 flex flex-col items-center">
          <h1 className="font-display text-[2.1rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center">
            <span className="opacity-0 animate-fade-in">Bonjour, je suis{" "}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block">
              <a href="https://www.linkedin.com/in/maxime-gougat/" target="_blank" rel="noopener noreferrer" className="text-gradient">Maxime</a>
            </span>
            <span className="ml-2 sm:ml-3 opacity-0 animate-fade-in-delay-2 inline-block">
              <a href="https://www.linkedin.com/in/maxime-gougat/" target="_blank" rel="noopener noreferrer" className="text-gradient">GOUGAT</a>
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2 inline-block">{" "}!</span>
          </h1>

          {/* Vidéo de présentation — la largeur s'adapte pour que la vidéo tienne dans l'écran */}
          <div
            className="relative w-full mt-8 sm:mt-12 opacity-0 animate-fade-in-delay-3"
            style={{ maxWidth: "max(18rem, min(64rem, calc((100svh - 22rem) * 16 / 9)))" }}
          >
            {/* Halo lumineux */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 sm:-inset-8 rounded-[2.5rem] bg-linear-to-r from-primary/40 via-accent/30 to-primary/40 blur-3xl opacity-60 dark:opacity-50"
            />

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl gradient-border shadow-2xl">
              <VideoPresentation />
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <a
          href="#presentation"
          aria-label="Scroll"
          className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <span className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5">
            <span className="h-1.5 w-1 rounded-full bg-primary animate-scroll-dot" />
          </span>
        </a>
      </section>

      {/* ───────────── PRÉSENTATION ───────────── */}
      <section id="presentation" className="relative px-4 pb-16 md:pb-24">
        <div className="container max-w-4xl mx-auto">
          <Reveal className="surface p-6 sm:p-10 md:p-12 text-left">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Je suis étudiant en première année de <a href="https://iae.uca.fr/formation/master/master-management-strategique" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline underline-offset-4">Master Management Stratégique (parcours Pilotage des Organisations et Management Durable)</a> à l'<a href="https://iae.uca.fr/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#732280] dark:text-[#c77dd4] hover:underline underline-offset-4">IAE Clermont Auvergne</a>.
            </p>
            <div className="my-6 md:my-8 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Passionné par l'immobilier et la bourse, et fort d'une expérience entrepreneuriale dans la restauration ({duration} à la tête de{" "}
              <a className="text-primary font-bold hover:underline underline-offset-4" href="https://www.biss-app.fr" target="_blank" rel="noopener noreferrer">Biss'App</a>) qui m'a permis de développer de nombreuses compétences et acquérir de nombreuses connaissances : des démarches administratives à la stratégie globale en passant par le développement du site web ; je souhaite aujourd'hui, à {age} ans, mettre tout ce que ça m'a appris au service d'un projet plus grand que le mien, avec une équipe autour de moi.
            </p>
            <div className="pt-8 flex justify-center sm:justify-start">
              <a href="#projets" className="cosmic-button group">
                VOIR MES RÉALISATIONS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
