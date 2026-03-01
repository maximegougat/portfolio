import { Briefcase, ChartSplineIcon, Code, HomeIcon, ShieldCheckIcon, User } from "lucide-react"
import { KeyCircleIcon } from "./ui/key-circle"
import { CircleHelpIcon } from "./ui/circle-help"
import { IdCardIcon } from "./ui/id-card"

export const AboutSection = () => {
  return (
    <section id="a-propos" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-center">
          <IdCardIcon size={50} className="text-primary"/>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos de <span className="text-primary">moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionné par l'immobilier et la bourse
            </h3>
            <p className="text-muted-foreground text-lg">
              Investir intelligemment, c'est comprendre comment votre argent peut travailler pour vous sur le long terme.
              <br/><br/>
              Dans <span className="text-primary font-bold">l'immobilier</span>, les intérêts composés se manifestent par la valeur qui s'accumule sur vos biens au fil du temps.<br/>Chaque loyer perçu peut être réinvesti pour acquérir un nouveau bien ou améliorer un bien existant, ce qui augmente progressivement votre patrimoine. Même de petites sommes réinvesties régulièrement peuvent, sur plusieurs années, produire un effet boule de neige impressionnant.
              <br/><br/>
              En <span className="text-primary font-bold">bourse</span>, le principe est similaire : les gains que vous réalisez peuvent être réinvestis pour générer encore plus de gains. Avec le temps, cette réinjection continue de vos profits peut produire une croissance exponentielle de votre capital, même avec des investissements modestes au départ.
              <br/><br/>
              Comprendre et appliquer les intérêts composés dans ces deux domaines vous permet de faire travailler votre argent efficacement et de maximiser vos chances d'atteindre vos objectifs financiers sur le long terme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center hidden">
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Télécharger le simulateur d'intérêts composés
              </a>

              <a href="#contact" className="cosmic-button hidden">
                ME CONTACTER
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <HomeIcon className="h-8 w-8 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Immobilier
                  </h4>
                  <p className="text-muted-foreground">
                    Je m'intéresse à divers invetissements en immobilier tels que le crowdfunding/crowdlending, les <a href="https://www.economie.gouv.fr/particuliers/investir-dans-limmobilier/scpi-investissez-dans-limmobilier-avec-un-placement#:~:text=La%20SCPI%2C%20appel%C3%A9e%20%C3%A9galement%20%C2%AB%20pierre,immobilier%20destin%C3%A9%20%C3%A0%20la%20location." target="_blank" rel="noopener noreferrer">SCPI</a>, et la structuration de projets de détention de biens immobiliers via des holdings.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartSplineIcon className="h-8 w-8 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Bourse
                  </h4>
                  <p className="text-muted-foreground">
                    J'établis actuellement une stratégie avant de rentrer en bourse (sur un MSCI World) sur du long terme.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheckIcon className="h-8 w-8 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Certification AMF
                  </h4>
                  <p className="text-muted-foreground">
                    Je me prépare actuellement à passer la certification AMF pour approfondir mes connaissances en finance et en réglementation des marchés financiers.
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