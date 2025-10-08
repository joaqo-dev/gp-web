import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Trophy, Target, Linkedin, Twitter } from "lucide-react";

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
      bio: "Emprendedor visionario con experiencia en transformación digital. Fundó GreatProfile con la misión de democratizar el marketing digital."
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
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
            Sobre GreatProfile
          </Badge>
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Conoce al equipo que hará
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> crecer tu negocio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de especialistas apasionados por transformar ideas en resultados medibles. 
            Combinamos creatividad, estrategia y tecnología para impulsar el crecimiento de tu marca.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4 text-gray-900">Nuestro Equipo</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada miembro aporta expertise único y pasión genuina por hacer que tu marca destaque en el mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-primary/20 transition-all duration-300">
                      <ImageWithFallback 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white text-xs px-3 py-1">
                        {member.specialty}
                      </Badge>
                    </div>
                  </div>
                  
                  <h4 className="text-xl mb-1 text-gray-900">{member.name}</h4>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4 text-gray-900">Nuestros Valores</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen la forma en que nos relacionamos con nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg mb-3 text-gray-900">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl lg:text-3xl mb-4 text-gray-900">
            ¿Listo para trabajar con nosotros?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo podemos impulsar el crecimiento de tu negocio con estrategias digitales personalizadas.
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Iniciemos una conversación
          </a>
        </div>

      </div>
    </section>
  );
}