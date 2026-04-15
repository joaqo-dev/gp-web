import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Trophy, Target, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function AboutSection() {
  const teamMembers = [
    {
      name: "Ana Martínez",
      role: "Directora Creativa",
      specialty: "Branding & Estrategia",
      image: "https://images.unsplash.com/photo-1697095098675-1d02496ef86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTk1MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Con más de 8 años en marketing digital, lidera nuestras estrategias creativas y supervisa el desarrollo de marcas impactantes."
    },
    {
      name: "Carlos Ruiz",
      role: "Director General",
      specialty: "Estrategia & Liderazgo",
      image: "https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGRpcmVjdG9yfGVufDF8fHx8MTc1OTY1MDE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Emprendedor visionario con experiencia en transformación digital. Fundó Vessel con la misión de democratizar el marketing digital."
    },
    {
      name: "Sofia López",
      role: "Community Manager",
      specialty: "Redes Sociales & Contenido",
      image: "https://images.unsplash.com/photo-1696960181436-1b6d9576354e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNvbW11bml0eSUyMG1hbmFnZXIlMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzU5NjUwMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Especialista en crear comunidades digitales vibrantes. Su enfoque humano y auténtico genera conexiones reales entre marcas y audiencias."
    },
    {
      name: "Diego Torres",
      role: "Especialista en Comunicaciones",
      specialty: "SEO & Copywriting",
      image: "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b3VuZyUyMG1hbiUyMGNvbW11bmljYXRpb25zJTIwc3BlY2lhbGlzdHxlbnwxfHx8fDE3NTk2NTAxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Maestro de las palabras que convierten. Combina técnicas de SEO avanzado con copywriting persuasivo para maximizar el impacto de cada mensaje."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Pasión por los resultados",
      description: "Cada proyecto es una oportunidad de superar expectativas y crear impacto real en los negocios de nuestros clientes."
    },
    {
      icon: Users,
      title: "Colaboración transparente",
      description: "Trabajamos como una extensión de tu equipo, con comunicación abierta y procesos claros en cada etapa."
    },
    {
      icon: Target,
      title: "Enfoque estratégico",
      description: "No hacemos marketing por hacer. Cada acción tiene un propósito claro alineado con tus objetivos de negocio."
    },
    {
      icon: Trophy,
      title: "Innovación constante",
      description: "Nos mantenemos a la vanguardia de las tendencias digitales para ofrecer soluciones que marquen la diferencia."
    }
  ];

  const stats = [
    { number: "150+", label: "Clientes satisfechos" },
    { number: "5 años", label: "En el mercado" },
    { number: "300%", label: "ROI promedio" },
    { number: "24/7", label: "Soporte disponible" }
  ];

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Badge className="mb-6 px-5 py-1.5 rounded-full bg-primary/5 text-primary border-primary/10 text-sm font-semibold uppercase tracking-wider">
            Nuestra Esencia
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 text-gray-900 leading-tight">
            Conoce al equipo que hará
            <span className="text-gradient block mt-2">crecer tu negocio digital</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Somos un equipo de especialistas apasionados por transformar ideas en resultados medibles. 
            Combinamos creatividad, estrategia y tecnología para impulsar el crecimiento de tu marca.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-display font-black text-primary mb-3 transition-transform group-hover:scale-110 duration-300">{stat.number}</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl font-display font-bold text-gray-900 uppercase tracking-tight">Mentes Estratégicas</h3>
            <div className="w-16 h-1 bg-tertiary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 glass overflow-hidden rounded-[2rem] hover:-translate-y-2">
                <CardContent className="p-8 text-center bg-white/50">
                  <div className="relative mb-8">
                    <div className="w-28 h-28 mx-auto rounded-[2rem] overflow-hidden ring-4 ring-white shadow-xl transform transition-transform group-hover:rotate-6 group-hover:scale-105 duration-500">
                      <ImageWithFallback 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-display font-bold text-gray-900 mb-1">{member.name}</h4>
                      <div className="text-xs font-black text-accent uppercase tracking-widest">{member.role}</div>
                    </div>
                    
                    <Badge className="bg-primary/5 text-primary border-primary/10 text-xs px-3 py-1 font-bold">
                      {member.specialty}
                    </Badge>
                    
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500 font-medium">{member.bio}</p>
                    
                    <div className="flex justify-center space-x-4 pt-2">
                      <a href="#" className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-white hover:bg-primary transition-all duration-300">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="#" className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-white hover:bg-accent transition-all duration-300">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="relative overflow-hidden bg-secondary p-10 lg:p-20 rounded-[3rem] border border-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/2 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-display font-bold mb-6 text-gray-900">Valores de Impacto</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                Los principios que guían cada estrategia y definen nuestra excelencia operativa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-4 text-gray-900 uppercase tracking-tight">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24 max-w-2xl mx-auto space-y-8">
          <h3 className="text-4xl font-display font-bold text-gray-900 leading-tight">
            ¿Listo para trabajar con nosotros?
          </h3>
          <p className="text-xl text-gray-600 font-medium">
            Conversemos sobre cómo podemos impulsar el crecimiento de tu negocio 
            con estrategias digitales personalizadas.
          </p>
          <div className="pt-4">
            <a 
              href="#contacto" 
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary to-accent text-white font-black rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 group text-lg"
            >
              Iniciemos una conversación
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}