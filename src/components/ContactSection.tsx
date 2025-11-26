import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-secondary/30 border border-border rounded-3xl p-8 lg:p-16 text-center shadow-2xl shadow-black/10">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="inline-flex w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl items-center justify-center mb-4">
                <MessageSquare className="w-10 h-10 text-primary" />
              </div>

              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Pronto para
                  <span className="text-gradient-primary block mt-2">Decolar Seu Negócio?</span>
                </h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                  Agende sua <span className="font-semibold text-primary">consultoria gratuita</span> agora mesmo. Vamos descobrir juntos a melhor solução digital para o seu sucesso!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={() => window.open("https://wa.me/5551981302801?text=Olá! Quero agendar minha consultoria gratuita.", "_blank")}
                  className="w-full sm:w-auto"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Agendar Consultoria Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Resposta em até 2h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
