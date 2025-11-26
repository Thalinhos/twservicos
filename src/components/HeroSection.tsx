import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Honeycomb Pattern Background */}
      <div className="absolute inset-0 honeycomb-pattern opacity-60"></div>

      {/* Animated Glow Orbs - reduced opacity */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 pt-20 pb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full text-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground/90 font-medium">Transformação Digital de Excelência</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
            Transforme Seu Negócio com
            <span className="text-gradient-primary block mt-2">Soluções Digitais</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Sites, sistemas e automação para alavancar sua empresa.
            Agende uma <span className="font-semibold text-primary">consultoria gratuita</span> e descubra as melhores soluções para você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Quero agendar uma consultoria gratuita.", "_blank")}
              className="w-full sm:w-auto"
            >
              Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline-primary"
              size="xl"
              onClick={() => scrollToSection("servicos")}
              className="w-full sm:w-auto"
            >
              Ver Soluções
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
