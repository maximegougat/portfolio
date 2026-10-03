import { cn } from "@/lib/utils";
import { Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { MessageCircleMoreIcon } from "./ui/message-circle-more";
import { Reveal } from "./ui/reveal";

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
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-secondary/40">
      <div className="container mx-auto max-w-4xl flex flex-col items-center space-y-12">
        <Reveal className="relative w-full">
          {/* Halo */}
          <div aria-hidden="true" className="absolute -inset-6 rounded-[3rem] bg-linear-to-r from-primary/25 via-accent/20 to-primary/25 blur-3xl opacity-70" />

          <div className="relative gradient-border px-5 py-10 sm:px-10 sm:py-14 md:px-16 text-center shadow-xl">
            {/* Titre */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="icon-tile rounded-2xl h-16 w-16">
                  <MessageCircleMoreIcon size={34}/>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Contactez-<span className="text-gradient">moi</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Vous avez un projet en tête ou souhaitez simplement échanger ? N'hésitez pas à me contacter par mail ou sur LinkedIn.
              </p>
            </div>

            {/* Informations de contact */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {/* E-mail */}
              <a
                href="mailto:contact@maximegougat.com"
                className="group surface card-hover flex items-center gap-4 p-4 sm:p-5"
                aria-label="Envoyer un email à Maxime Gougat"
              >
                <div className="icon-tile rounded-xl h-12 w-12 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="min-w-0 break-all sm:break-normal text-sm min-[400px]:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  contact@maximegougat.com
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/maxime-gougat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visiter mon profil LinkedIn"
                className="group surface card-hover flex items-center gap-4 p-4 sm:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] text-white">
                  <Linkedin className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-base min-[400px]:text-lg [text-wrap:wrap] group-hover:text-primary transition-colors">Connectez-vous avec moi</h4>
              </a>
            </div>
          </div>
        </Reveal>

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