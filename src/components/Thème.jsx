import { useState } from "react"
import { SunIcon } from "./ui/sun";
import { MoonIcon } from "./ui/moon";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => {
  // Le thème initial est appliqué par le script de index.html
  const [isDarkMode, setIsDarkMode] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const next = !isDarkMode;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // stockage indisponible (navigation privée…)
    }
    setIsDarkMode(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Activer le thème clair" : "Activer le thème sombre"}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur transition-colors duration-300 hover:border-primary/50",
        className
      )}
    >
      {isDarkMode ? (
        <SunIcon size={20} className="text-yellow-300"/>
      ) : (
        <MoonIcon size={20} className="text-blue-900" />
      )}
    </button>
  )
}
