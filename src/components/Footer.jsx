import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Gauche : Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/maxime-gougat" target="_blank" rel="noopener noreferrer" className="text-primary">Maxime GOUGAT</a>. Tous droits réservés.
        </p>

        {/* Centre : bouton retour en haut */}
        <a
          href="#accueil"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Retour en haut"
        >
          <ArrowUp size={20} />
        </a>

        {/* Droite : Mentions légales */}
        <a
          href="/mentions-legales"
          className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4"
        >
          Mentions légales
        </a>
      </div>
    </footer>
  );
};