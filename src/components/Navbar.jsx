import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./Thème";

const navItems = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#a-propos" },
  { name: "Formations", href: "#formations"},
  { name: "Expériences", href: "#experiences" },
  { name: "Compétences", href: "#competences" },
  { name: "Projets", href: "#projets" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#accueil");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Met en évidence la section visible à l'écran
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 px-3 sm:px-4 pt-3 sm:pt-4">
      <div
        className={cn(
          "relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-2 sm:gap-3 rounded-full pl-4 pr-2 sm:px-5 py-2 transition-all duration-300",
          isScrolled || isMenuOpen
            ? "border border-border bg-background/75 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)]"
            : "border border-transparent"
        )}
      >
        <a
          href="#accueil"
          className="relative z-50 min-w-0 truncate font-display text-sm min-[400px]:text-base sm:text-lg font-bold text-foreground"
        >
          Portfolio de <span className="text-primary">Maxime GOUGAT</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-colors",
                activeHref === item.href
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {activeHref === item.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{item.name}</span>
            </a>
          ))}
        </div>

        <div className="relative z-50 flex shrink-0 items-center gap-2">
          <ThemeToggle />

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center transition-opacity duration-300 lg:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              style={{ transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms" }}
              className={cn(
                "font-display text-2xl sm:text-3xl font-semibold transition-all duration-500",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                activeHref === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
