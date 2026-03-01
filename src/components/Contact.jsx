import { Linkedin, Mail } from "lucide-react";
import { MessageCircleMoreIcon } from "./ui/message-circle-more";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-secondary/30"
    >
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <MessageCircleMoreIcon
              size={40}
              className="text-primary sm:w-[50px] sm:h-[50px]"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Contactez-<span className="text-primary">moi</span>
          </h2>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Vous avez un projet en tête ou souhaitez simplement échanger ?
            N'hésitez pas à me contacter par e-mail ou via LinkedIn.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 lg:p-10">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
            
            {/* Email */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">E-mail</h4>
                <a
                  href="mailto:contact@maximegougat.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  contact@maximegougat.com
                </a>
              </div>
            </div>

            {/* Divider desktop */}
            <div className="hidden sm:block w-px h-20 bg-border" />

            {/* LinkedIn */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/maxime-gougat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-80 transition"
                >
                  Voir mon profil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};