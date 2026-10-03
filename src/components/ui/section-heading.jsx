import { Reveal } from "./reveal";

// En-tête commun à toutes les sections : icône, titre et sous-titre optionnel
export const SectionHeading = ({ icon: Icon, children, subtitle }) => {
  return (
    <Reveal className="flex flex-col items-center text-center mb-10 md:mb-14">
      {Icon && (
        <div className="icon-tile rounded-2xl h-16 w-16 mb-5">
          <Icon size={34} />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {children}
      </h2>
      <span className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent" />
      {subtitle && (
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </Reveal>
  );
};
