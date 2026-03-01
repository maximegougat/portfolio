import { ChartSplineIcon, HomeIcon, ShieldCheckIcon } from "lucide-react"
import { IdCardIcon } from "./ui/id-card"

export const AboutSection = () => {
  return (
    <section
      id="a-propos"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <IdCardIcon
            size={40}
            className="text-primary mb-4 sm:mb-6 sm:w-[50px] sm:h-[50px]"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            À propos de <span className="text-primary">moi</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left column */}
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Passionné par l'immobilier et la bourse
            </h3>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Investir intelligemment, c'est comprendre comment votre argent
              peut travailler pour vous sur le long terme.
              <br /><br />
              Dans <span className="text-primary font-bold">l'immobilier</span>, 
              les intérêts composés se manifestent par la valeur qui s'accumule
              sur vos biens au fil du temps. Chaque loyer perçu peut être
              réinvesti pour acquérir un nouveau bien ou améliorer un bien
              existant.
              <br /><br />
              En <span className="text-primary font-bold">bourse</span>, 
              le principe est similaire : les gains réalisés peuvent être
              réinvestis pour générer une croissance exponentielle du capital.
              <br /><br />
              Comprendre et appliquer les intérêts composés vous permet
              de maximiser vos chances d’atteindre vos objectifs financiers.
            </p>
          </div>

          {/* Right column */}
          <div className="grid gap-6">
            
            {/* Card 1 */}
            <div className="gradient-border p-5 sm:p-6 rounded-2xl card-hover">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <HomeIcon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Immobilier
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Intérêt pour le crowdfunding, les SCPI et la structuration
                    de projets immobiliers via des holdings.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-5 sm:p-6 rounded-2xl card-hover">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <ChartSplineIcon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Bourse
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Mise en place d'une stratégie long terme sur un ETF MSCI World.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-5 sm:p-6 rounded-2xl card-hover">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <ShieldCheckIcon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Certification AMF
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Préparation à la certification AMF pour approfondir
                    mes connaissances en finance et réglementation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}