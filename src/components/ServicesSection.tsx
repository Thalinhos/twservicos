import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, ShoppingCart, MessageSquare, BarChart3, Palette } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Sites & Landing Pages",
      description: "Presença digital profissional para seu negócio."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Loja virtual completa e integrada."
    },
    {
      icon: Smartphone,
      title: "Sistemas Personalizados",
      description: "Soluções sob medida para sua empresa."
    },
    {
      icon: MessageSquare,
      title: "Automação & Integrações",
      description: "WhatsApp, APIs e processos automatizados."
    },
    {
      icon: BarChart3,
      title: "Consultoria Digital",
      description: "Performance, SEO e otimização de conversão."
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      description: "Branding e design profissional."
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            O Que <span className="text-gradient-primary">Fazemos</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Transformamos ideias em soluções digitais que impulsionam seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 p-6 group hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-primary-sm">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-foreground/70 flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Não sabe por onde começar?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-md">
              Agende uma <span className="font-semibold text-primary">consultoria gratuita</span> e descubra a melhor solução para o seu negócio.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Quero agendar uma consultoria gratuita.", "_blank")}
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Agendar Consultoria Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
