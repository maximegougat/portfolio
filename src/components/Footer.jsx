import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 py-8 px-4 border-t border-border bg-card/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col-reverse items-center gap-5 sm:flex-row sm:justify-between">

        {/* Gauche : Copyright */}
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/maxime-gougat" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline underline-offset-4">Maxime GOUGAT</a>. Tous droits réservés.
        </p>

        {/* Centre : bouton retour en haut */}
        <a
          href="#accueil"
          className="flex h-11 w-11 items-center justify-center rounded-full icon-tile hover:-translate-y-1 transition-transform"
          aria-label="Retour en haut"
        >
          <ArrowUp size={20} />
        </a>

        {/* Droite : Mentions légales */}
        <a
          href="/mentions-legales"
          className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          Mentions légales
        </a>
      </div>
    </footer>
  );
};
