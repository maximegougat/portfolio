import React from 'react'

const LegalNoticePage = () => {
  return (
    <main className="max-w-4xl p-6 text-left">
      <article>
        <h1 className="text-primary text-4xl font-extrabold mb-8 uppercase">
          MENTIONS LÉGALES
        </h1>

        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-4 uppercase">
            1. ÉDITEUR DU SITE
          </h2>
          <p>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l&rsquo;Économie Numérique (LCEN),
            il est précisé aux utilisateurs du présent site l&rsquo;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Nom et prénom : <a href="https://linkedin/in/maxime-gougat" target="_blank" rel="noopener noreferrer">Maxime GOUGAT</a></li>
            <li>Adresse e-mail : <a href="mailto:contact@maximegougat.com" className="text-primary underline">contact@maximegougat.com</a></li>
            <li>Directeur de la publication : <a href="https://linkedin/in/maxime-gougat" target="_blank" rel="noopener noreferrer">Maxime GOUGAT</a></li>
          </ul>
          <p className="mt-3">
            Conformément à l&rsquo;article 6-III-2 de la LCEN, l&rsquo;éditeur a choisi de ne pas faire apparaître son adresse personnelle.
            Son identité complète pourra être communiquée par l&rsquo;hébergeur aux autorités judiciaires sur demande.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-4 uppercase">
            2. HÉBERGEUR DU SITE
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Nom : Vercel Inc.</li>
            <li>Adresse : 440 North Barranca Avenue, Suite 4133 (Covina, CA 91723)</li>
            <li>Adresse e-mail : <a href="mailto:support@vercel.com" className="text-primary underline">support@vercel.com</a></li>
            <li>Téléphone : <a href="tel:+19513836898">+1 (951) 383-6898</a></li>
            <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://vercel.com</a></li>
            <li>Contacter Vercel : <a href="https://vercel.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary">https://vercel.com/contact</a></li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-4 uppercase">
            3. PROPRIÉTÉ INTELLECTUELLE
          </h2>
          <p>
            L&rsquo;ensemble des contenus présents sur ce site (textes, images, graphismes, logos, vidéos, structure du site, etc.)
            est protégé par le droit de la propriété intellectuelle.
          </p>
          <p className="mt-2">
            Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable
            est strictement interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-4 uppercase">
            4. RESPONSABILITÉ
          </h2>
          <p>
            L&rsquo;éditeur s&rsquo;efforce de fournir des informations exactes et à jour, mais ne saurait garantir l&rsquo;exactitude,
            la complétude ou l&rsquo;actualité des informations diffusées sur le site.
          </p>
          <p className="mt-2">
            L&rsquo;utilisation du site se fait sous l&rsquo;entière responsabilité de l&rsquo;utilisateur.
            L&rsquo;éditeur ne pourra être tenu responsable de dommages directs ou indirects résultant de l&rsquo;accès ou de l&rsquo;utilisation du site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-4 uppercase">
            5. LIENS HYPERTEXTES
          </h2>
          <p>
            Le site peut contenir des liens vers des sites tiers.
            L&rsquo;éditeur décline toute responsabilité quant au contenu de ces sites.
          </p>
        </section>

        <section>
          <h2 className="text-primary text-2xl font-bold mb-4 uppercase">
            6. DROIT APPLICABLE
          </h2>
          <p>
            Les présentes mentions légales sont régies par le droit français.
          </p>
        </section>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
      </article>
    </main>
  )
}

export default LegalNoticePage