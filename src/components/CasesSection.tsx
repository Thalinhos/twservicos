import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShoppingCart, MessageSquare, Star } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      client: "Elegância Moda Feminina",
      icon: ShoppingCart,
      result: "+250% em vendas online",
      before: "Loja física sem presença digital",
      after: "E-commerce completo com integração WhatsApp e catálogo digital",
      technologies: ["React", "Node.js", "Stripe", "WhatsApp API"],
      testimonial: "A TW transformou nosso negócio. Hoje 70% das vendas vêm do online!",
      rating: 5,
    },
    {
      client: "Clínica Saúde Total",
      icon: Users,
      result: "+180% em agendamentos",
      before: "Site desatualizado e sem conversão",
      after: "Landing page moderna com sistema de agendamento online integrado",
      technologies: ["Next.js", "Tailwind", "Google Calendar API"],
      testimonial: "Profissionalismo e resultado rápido. Recomendamos de olhos fechados!",
      rating: 5,
    },
    {
      client: "Mecânica Premium Auto",
      icon: TrendingUp,
      result: "+320% em leads qualificados",
      before: "Apenas redes sociais sem site próprio",
      after: "Website institucional com blog otimizado para SEO e formulários inteligentes",
      technologies: ["WordPress", "SEO", "Google Analytics"],
      testimonial: "Em 3 meses já recuperamos o investimento. Vale cada centavo!",
      rating: 5,
    },
    {
      client: "Tech Solutions B2B",
      icon: MessageSquare,
      result: "Automação de 80% do atendimento",
      before: "Atendimento manual via WhatsApp sem escala",
      after: "Chatbot inteligente + CRM integrado + Dashboard administrativo",
      technologies: ["Python", "OpenAI", "PostgreSQL", "React"],
      testimonial: "Solução sob medida que revolucionou nossa operação. Time excepcional!",
      rating: 5,
    },
  ];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Cases de Sucesso
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Resultados que
              <span className="text-gradient-primary"> Falam por Si</span>
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl mx-auto">
              Conheça empresas que transformaram seus negócios com nossas soluções
            </p>
          </div>

          {/* Cases Grid - More Compact */}
          <div className="grid lg:grid-cols-2 gap-5">
            {cases.map((caseStudy, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-card/80 via-card/60 to-secondary/10 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-0.5 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <CardContent className="p-6 relative z-10">
                  {/* Header - More Compact */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <caseStudy.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{caseStudy.client}</h3>
                        <div className="flex items-center gap-1 mt-0.5">
                          {Array.from({ length: caseStudy.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/15 border border-primary/20 rounded-full mb-4">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-bold text-xs">{caseStudy.result}</span>
                  </div>

                  {/* Before/After - More Compact */}
                  <div className="space-y-3 mb-4">
                    <div className="flex gap-2.5">
                      <div className="w-1 bg-destructive/50 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-xs text-foreground/50 uppercase font-semibold mb-0.5">Antes</p>
                        <p className="text-sm text-foreground/80 leading-snug">{caseStudy.before}</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="w-1 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-xs text-primary uppercase font-semibold mb-0.5">Depois</p>
                        <p className="text-sm text-foreground/80 leading-snug">{caseStudy.after}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {caseStudy.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/70 text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="p-3 bg-gradient-to-r from-secondary/40 to-secondary/20 border-l-2 border-primary rounded-r-lg">
                    <p className="text-sm text-foreground/90 italic leading-relaxed">"{caseStudy.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
