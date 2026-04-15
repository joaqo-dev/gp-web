// import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, TrendingUp, Building, User, Star, Quote } from "lucide-react";

const portfolioProjects = [
  {
    title: "TechFlow Solutions",
    category: "Growth Marketing",
    description:
      "Diseño de sitio web moderno con enfoque en conversión y experiencia de usuario optimizada.",
    image:
      "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTgwNzg3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: "+340% conversión",
    icon: TrendingUp,
    gradient: "from-primary to-accent",
    bgColor: "bg-primary/5",
  },
  {
    title: "Banco Central Identity",
    category: "Corporate Marketing",
    description:
      "Branding integral y señalética corporativa para renovación completa de sucursales.",
    image:
      "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZyUyMGRlc2lnbiUyMHNob3djYXNlfGVufDF8fHx8MTc1OTgxODg4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    results: "50 sedes",
    icon: Building,
    gradient: "from-accent to-tertiary",
    bgColor: "bg-accent/5",
  },
  {
    title: "Campaña EcoLife",
    category: "Growth Marketing",
    description:
      "Estrategia de redes sociales y publicidad digital para empresa sustentable.",
    image:
      "https://images.unsplash.com/photo-1759393851741-674ee71fb498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGNhbXBhaWdufGVufDF8fHx8MTc1OTgxODg4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: "+250% engagement",
    icon: TrendingUp,
    gradient: "from-primary to-tertiary",
    bgColor: "bg-tertiary/5",
  },
  {
    title: "Employability Tech",
    category: "Marketing de Empleabilidad",
    description:
      "Optimización de CV y LinkedIn para profesionales del sector tecnológico.",
    image:
      "https://images.unsplash.com/photo-1693045181676-57199422ee66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjdiUyMHJlc3VtZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTk4MTg4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    results: "89% éxito",
    icon: User,
    gradient: "from-accent to-primary",
    bgColor: "bg-primary/5",
  },
  {
    title: "Campaña 360° Restaurant",
    category: "Growth Marketing",
    description:
      "Estrategia integral de marketing digital con enfoque en delivery y reservas online.",
    image:
      "https://images.unsplash.com/photo-1602333869619-f05b7f19d3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBjYW1wYWlnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc1OTgxODg5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: "+180% ventas",
    icon: TrendingUp,
    gradient: "from-tertiary to-accent",
    bgColor: "bg-accent/5",
  },
  {
    title: "Señalética Plaza Comercial",
    category: "Marketing Corporativo",
    description:
      "Diseño e instalación de señalética urbana y fachada comercial de gran formato.",
    image:
      "https://images.unsplash.com/photo-1603929366195-b6b48aef39db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleHRlcmlvciUyMHNpZ25hZ2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTk4MTg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    results: "15,000 m²",
    icon: Building,
    gradient: "from-primary to-tertiary",
    bgColor: "bg-tertiary/5",
  },
];

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechSolutions",
    content:
      "Vessel transformó completamente nuestra presencia digital. En 6 meses, triplicamos nuestras ventas online.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Carlos Mendoza",
    role: "Fundador, EcoStore",
    content:
      "El equipo entendió perfectamente nuestra visión sustentable y la tradujo en una estrategia auténtica.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "Andrea Silva",
    role: "Directora Marketing, RestaurantGroup",
    content:
      "Su enfoque data-driven nos ayudó a optimizar cada peso invertido en marketing. Altamente recomendados.",
    rating: 5,
    avatar: "AS",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 mesh-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 max-w-4xl mx-auto">
          <Badge className="px-5 py-1.5 rounded-full bg-white text-primary border-primary/5 shadow-sm text-sm font-semibold uppercase tracking-wider">
            Casos de Éxito
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            Proyectos que redefinen
            <span className="text-gradient block mt-2">el éxito digital</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Cada proyecto es una historia de transformación. Diseñamos soluciones 
            a medida que generan resultados medibles y un impacto duradero.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {portfolioProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
              >
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className={`${project.bgColor} text-primary px-4 py-1.5 rounded-xl border border-primary/20 backdrop-blur-md text-xs font-black uppercase tracking-widest`}>
                      {project.category}
                    </div>
                  </div>

                  {/* Results Badge */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className={`text-sm font-black text-white px-4 py-1.5 bg-gradient-to-r ${project.gradient} rounded-xl shadow-xl`}>
                      {project.results}
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="p-3 glass rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <ExternalLink className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-tertiary transition-colors">{project.title}</h3>
                        <p className="text-gray-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Ver caso de estudio</span>
                        <div className="h-px w-8 bg-white/30 ml-3 group-hover:w-12 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="relative overflow-hidden bg-primary p-10 lg:p-20 rounded-[3.5rem] shadow-3xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16 space-y-6">
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-white">
                Voces de confianza
              </h3>
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
                Nuestra mayor satisfacción es el éxito compartido con quienes confían en nuestra visión estratégica.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-dark p-8 rounded-[2rem] border-white/5 relative group hover:bg-white/10 transition-all duration-500">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-white/5 group-hover:text-white/10 transition-colors" />
                  
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-tertiary text-tertiary" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-8 italic text-lg leading-relaxed font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-tertiary to-accent rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl transform group-hover:rotate-6 transition-transform">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-bold font-display">{testimonial.name}</div>
                      <div className="text-sm text-white/50 font-semibold uppercase tracking-wider">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center pt-16 border-t border-white/10">
              {[
                { label: "Satisfacción Médio", value: "4.9/5", color: "text-tertiary" },
                { label: "Proyectos Realizados", value: "250+", color: "text-white" },
                { label: "Recomendación", value: "98%", color: "text-accent" },
                { label: "Trayectoria", value: "8 Años", color: "text-white" },
              ].map((stat, i) => (
                <div key={i} className="space-y-3">
                  <div className={`text-4xl font-display font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
