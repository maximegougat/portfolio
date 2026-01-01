import { cn } from "@/lib/utils";
import { Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-3xl flex flex-col items-center space-y-12">
        {/* Titre */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contactez-<span className="text-primary">moi</span>
          </h2>
          <p className="text-muted-foreground">
            Vous avez un projet en tête ou souhaitez simplement échanger ? N'hésitez pas à me contacter par mail ou sur LinkedIn.
          </p>
        </div>

        {/* Informations de contact */}
        <div className="flex flex-col items-center space-y-8 w-full">
          {/* E-mail */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <a
              href="mailto:contact@maximegougat.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Envoyer un email à Maxime Gougat"
            >
              contact@maximegougat.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="font-medium text-lg">Connectez-vous avec moi</h4>
            <a
              href="https://www.linkedin.com/in/maxime-gougat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter mon profil LinkedIn"
              className="text-primary hover:text-primary/80 transition"
            >
              <Linkedin size={40} />
            </a>
          </div>
        </div>

        {/* Formulaire de contact */}
        {/*<div className="bg-card p-8 rounded-lg shadow-md w-full max-w-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">Envoyer un message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Prénom NOM"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Votre adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="prenom.nom@domaine.fr"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Bonjour, j'ai des questions sur votre parcours"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
            >
              <Send size={16} />
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>*/}
      </div>
    </section>
  );
};