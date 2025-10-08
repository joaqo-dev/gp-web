// import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, TrendingUp, Building, User, Star } from "lucide-react";

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
    title: "Identidad Corporativa Banco Central",
    category: "Marketing Corporativo",
    description:
      "Branding integral y señalética corporativa para renovación completa de sucursales.",
    image:
      "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZyUyMGRlc2lnbiUyMHNob3djYXNlfGVufDF8fHx8MTc1OTgxODg4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    results: "50 sucursales renovadas",
    icon: Building,
    gradient: "from-accent to-tertiary",
    bgColor: "bg-accent/5",
  },
  {
    title: "Campaña Digital EcoLife",
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
    title: "Programa de Empleabilidad Tech",
    category: "Marketing de Empleabilidad",
    description:
      "Optimización de CV y LinkedIn para profesionales del sector tecnológico.",
    image:
      "https://images.unsplash.com/photo-1693045181676-57199422ee66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjdiUyMHJlc3VtZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTk4MTg4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    results: "89% conseguió empleo",
    icon: User,
    gradient: "from-accent to-primary",
    bgColor: "bg-primary/5",
  },
  {
    title: "Campaña 360° RestaurantGroup",
    category: "Growth Marketing",
    description:
      "Estrategia integral de marketing digital con enfoque en delivery y reservas online.",
    image:
      "https://images.unsplash.com/photo-1602333869619-f05b7f19d3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBjYW1wYWlnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc1OTgxODg5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: "+180% ventas online",
    icon: TrendingUp,
    gradient: "from-tertiary to-accent",
    bgColor: "bg-accent/5",
  },
  {
    title: "Señalética Exterior Plaza Comercial",
    category: "Marketing Corporativo",
    description:
      "Diseño e instalación de señalética urbana y fachada comercial de gran formato.",
    image:
      "https://images.unsplash.com/photo-1603929366195-b6b48aef39db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleHRlcmlvciUyMHNpZ25hZ2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTk4MTg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    results: "15,000 m² señalizados",
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
      "GreatProfile transformó completamente nuestra presencia digital. En 6 meses, triplicamos nuestras ventas online.",
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
      className="py-20 bg-gradient-to-br from-primary/3 to-tertiary/3"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="px-4 py-2 bg-gradient-to-r from-primary/10 to-tertiary/10 text-primary border-primary/20">
            Nuestro Trabajo
          </Badge>
          <h2 className="text-3xl lg:text-5xl text-gray-900">
            Proyectos que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary block">
              transforman negocios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada proyecto es único y está diseñado para generar resultados
            medibles. Conoce algunos de nuestros casos de éxito más destacados.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {portfolioProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${project.bgColor} text-primary border-primary/20 backdrop-blur-sm`}
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Results Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`text-sm text-white px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full backdrop-blur-sm`}
                    >
                      {project.results}
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl mb-2">{project.title}</h3>
                        <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {project.description}
                        </p>
                      </div>
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${project.gradient} rounded-full flex items-center justify-center ml-4 flex-shrink-0`}
                      >
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <span className="text-sm text-gray-300">
                        Ver proyecto completo
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La confianza de nuestros clientes es nuestro mayor logro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-tertiary text-tertiary"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center justify-center">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm mr-3`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 pt-8">
            <div className="space-y-2">
              <div className="text-3xl text-primary">4.9/5</div>
              <div className="text-gray-600">Satisfacción promedio</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-accent">150+</div>
              <div className="text-gray-600">Proyectos completados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-tertiary">98%</div>
              <div className="text-gray-600">Clientes que recomiendan</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-primary">5 años</div>
              <div className="text-gray-600">Experiencia en el mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
