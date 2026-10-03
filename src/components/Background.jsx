// Fond décoratif fixe, 100 % CSS : halos colorés qui dérivent lentement,
// grain léger et vignettage. Aucune logique JavaScript à maintenir.
export const Background = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Halos lumineux */}
      <div className="aurora-blob animate-aurora-1 -top-[25%] -left-[15%] bg-[radial-gradient(circle,hsl(var(--primary)/0.22),transparent_65%)]" />
      <div className="aurora-blob animate-aurora-2 top-[20%] -right-[25%] bg-[radial-gradient(circle,hsl(var(--accent)/0.22),transparent_65%)]" />
      <div className="aurora-blob animate-aurora-3 -bottom-[30%] left-[10%] bg-[radial-gradient(circle,hsl(var(--glow)/0.18),transparent_65%)]" />

      {/* Grille discrète, visible surtout en haut de page */}
      <div className="absolute inset-0 opacity-40 dark:opacity-[0.07] bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_top,black_10%,transparent_65%)] dark:bg-[linear-gradient(hsl(0_0%_100%)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%)_1px,transparent_1px)]" />

      {/* Grain */}
      <div className="bg-grain absolute inset-0 opacity-[0.035] dark:opacity-[0.06] mix-blend-overlay" />

      {/* Vignettage (thème sombre) */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_center,transparent_50%,hsl(var(--background))_100%)]" />
    </div>
  );
};
