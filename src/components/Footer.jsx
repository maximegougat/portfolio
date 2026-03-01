import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/maxime-gougat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-80 transition"
          >
            Maxime GOUGAT
          </a>
          . Tous droits réservés.
        </p>

        {/* Back to top */}
        <a
          href="#accueil"
          className="order-first sm:order-none p-2 sm:p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105"
          aria-label="Retour en haut"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>

        {/* Legal */}
        <a
          href="/mentions-legales"
          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline text-center sm:text-right"
        >
          Mentions légales
        </a>

      </div>
    </footer>
  );
};