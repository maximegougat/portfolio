import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Filtres en "pilule" avec indicateur animé, défilables horizontalement sur mobile
export const FilterTabs = ({ id, categories, active, onChange }) => {
  return (
    <div className="-mx-4 px-4 mb-10 md:mb-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="mx-auto w-max surface rounded-full! p-1.5 flex gap-1">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={active === category}
            className={cn(
              "relative px-4 sm:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300",
              active === category
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {active === category && (
              <motion.span
                layoutId={`filter-${id}`}
                className="absolute inset-0 rounded-full bg-primary shadow-[0_6px_20px_-6px_hsl(var(--primary)/0.7)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
