export const LegalNoticePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Informations générales</h2>
            <p>Ce site est la propriété de Maxime GOUGAT.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
            <p>Pour toute question concernant ce site, veuillez utiliser le formulaire de contact disponible sur la page d'accueil.</p>
          </section>
        </div>
        
        <div className="mt-12">
          <a 
            href="/" 
            className="text-primary hover:underline"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
}
