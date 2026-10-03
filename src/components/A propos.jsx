import { ChartSplineIcon, HomeIcon, ShieldCheckIcon } from "lucide-react"
import { IdCardIcon } from "./ui/id-card"
import { SectionHeading } from "./ui/section-heading"
import { Reveal } from "./ui/reveal"

const interests = [
  {
    icon: HomeIcon,
    title: "Immobilier",
    content: (
      <>
        Je m'intéresse à divers invetissements en immobilier tels que le crowdfunding/crowdlending, les <a href="https://www.economie.gouv.fr/particuliers/investir-dans-limmobilier/scpi-investissez-dans-limmobilier-avec-un-placement#:~:text=La%20SCPI%2C%20appel%C3%A9e%20%C3%A9galement%20%C2%AB%20pierre,immobilier%20destin%C3%A9%20%C3%A0%20la%20location." target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline decoration-primary/40 underline-offset-4 hover:decoration-primary">SCPI</a>, et la structuration de projets de détention de biens immobiliers via des holdings.
      </>
    ),
  },
  {
    icon: ChartSplineIcon,
    title: "Bourse",
    content: "J'établis actuellement une stratégie avant de rentrer en bourse (sur un MSCI World) sur du long terme.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Certification AMF",
    content: "Je me prépare actuellement à passer la certification AMF pour approfondir mes connaissances en finance et en réglementation des marchés financiers.",
  },
]

export const AboutSection = () => {
  return (
    <section id="a-propos" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading icon={IdCardIcon}>
          À propos de <span className="text-gradient">moi</span>
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-10 items-start">
          <Reveal className="surface p-6 sm:p-8 md:p-10 text-left space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Passionné par l'immobilier et la bourse
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
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
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6 lg:sticky lg:top-28">
            {interests.map(({ icon: Icon, title, content }, index) => (
              <Reveal key={title} delay={index * 0.1} className="h-full">
                <div className="surface card-hover h-full p-5 sm:p-6 flex flex-row sm:flex-col lg:flex-row gap-4 text-left">
                  <div className="icon-tile rounded-xl h-12 w-12 shrink-0">
                    <Icon className="h-6 w-6"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {title}
                    </h4>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {content}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
