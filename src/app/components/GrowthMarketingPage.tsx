import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, TrendingUp, Megaphone, Globe, Palette, Zap, Video, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Publicidad ADS",
    description: "Creamos anuncios de ADS y hacemos campañas en Instagram, Facebook y Google.",
    features: ["Campañas en Instagram", "Publicidad en Facebook", "Google Ads", "Optimización de conversiones"]
  },
  {
    icon: Globe,
    title: "Diseño Web",
    description: "Desarrollamos y diseñamos sitios web impactantes, modernos con o sin carrito de compra.",
    features: ["Diseño responsive", "E-commerce", "UX/UI moderno", "Optimización SEO"]
  },
  {
    icon: TrendingUp,
    title: "Redes Sociales",
    description: "Community manager para administrar Instagram, Facebook, TikTok, LinkedIn.",
    features: ["Gestión de contenido", "Community management", "Estrategia multicanal", "Engagement orgánico"]
  },
  {
    icon: Palette,
    title: "Diseño Gráfico",
    description: "Contamos con planes de diseño como también gráficas a pedido como logos e imagen corporativa.",
    features: ["Logos profesionales", "Imagen corporativa", "Diseño de marca", "Material publicitario"]
  },
  {
    icon: Zap,
    title: "Innovación Digital",
    description: "Realizamos procesos de transformación digital, integramos softwares con IA e Integramos embudos de Venta.",
    features: ["Transformación digital", "Integración de IA", "Embudos de venta", "Automatización de procesos"]
  },
  {
    icon: Video,
    title: "Innovación Audiovisual",
    description: "Hacemos videos corporativos, reels para RRSS, cápsulas, tomas con drone y sesiones fotográficas.",
    features: ["Videos corporativos", "Contenido para RRSS", "Tomas con drone", "Sesiones fotográficas"]
  }
];

const benefits = [
  "Crecimiento acelerado de ventas",
  "Atracción de clientes potenciales calificados",
  "ROI medible y optimizado",
  "Metodología 100% efectiva",
  "Enfoque integral en resultados"
];

interface GrowthMarketingPageProps {
  onBack: () => void;
}

export function GrowthMarketingPage({ onBack }: GrowthMarketingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50/30 py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-6 hover:bg-white/60"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a servicios
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
                Growth Marketing
              </Badge>
              <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
                Acelera el crecimiento
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">
                  de tu negocio
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Conoce nuestro método 100% efectivo. Aceleramos el crecimiento de tu negocio, 
                nos enfocamos en las ventas y atraer clientes potenciales.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTk4MTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Growth Marketing Analytics Dashboard"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Nuestros Servicios de Growth Marketing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combinamos estrategia, creatividad y tecnología para impulsar el crecimiento 
              sostenible y medible de tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
                ¿Por qué elegir nuestro Growth Marketing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro enfoque se basa en datos, experimentación continua y optimización 
                constante para garantizar el máximo retorno de inversión.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900">Resultados Medibles</h3>
                    <p className="text-gray-600">
                      Cada estrategia está diseñada para generar métricas claras y ROI comprobable.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900">Implementación Rápida</h3>
                    <p className="text-gray-600">
                      Metodología ágil que permite ver resultados en las primeras semanas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900">Método Probado</h3>
                    <p className="text-gray-600">
                      Sistema 100% efectivo validado con cientos de clientes exitosos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/30 to-primary/30 rounded-2xl transform -rotate-3"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU5ODE3NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital Marketing Team Collaboration"
                className="relative z-10 rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gradient-to-br from-primary/3 to-accent/3">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Casos de Éxito en Growth Marketing
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados reales de nuestras estrategias de crecimiento digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGFwdG9wJTIwc2NyZWVufGVufDF8fHx8MTc1OTgxOTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="E-commerce Website"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">E-commerce B2C</h4>
                  <p className="text-sm text-gray-300">+450% conversión en 6 meses</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-white px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full backdrop-blur-sm">
                    450% ROI
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTk3ODE4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Social Media Analytics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Campañas Digitales</h4>
                  <p className="text-sm text-gray-300">+320% engagement orgánico</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-white px-3 py-1 bg-gradient-to-r from-accent to-tertiary rounded-full backdrop-blur-sm">
                    320% Growth
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTk4MTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Growth Analytics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">SaaS B2B Growth</h4>
                  <p className="text-sm text-gray-300">+280% leads calificados</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-white px-3 py-1 bg-gradient-to-r from-primary to-tertiary rounded-full backdrop-blur-sm">
                    280% Leads
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759393851741-674ee71fb498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGNhbXBhaWdufGVufDF8fHx8MTc1OTgxODg4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Social Media Campaign"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Estrategia Multicanal</h4>
                  <p className="text-sm text-gray-300">+500% alcance orgánico</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-white px-3 py-1 bg-gradient-to-r from-accent to-primary rounded-full backdrop-blur-sm">
                    500% Reach
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1602333869619-f05b7f19d3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBjYW1wYWlnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc1OTgxODg5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital Advertising Campaign"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Publicidad Pagada</h4>
                  <p className="text-sm text-gray-300">ROAS 8:1 sostenido</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-white px-3 py-1 bg-gradient-to-r from-tertiary to-accent rounded-full backdrop-blur-sm">
                    ROAS 8:1
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1OTgwNzg3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Website Design Portfolio"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Optimización CRO</h4>
                  <p className="text-sm text-gray-300">+180% tasa conversión</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-white px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full backdrop-blur-sm">
                    180% CVR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
              ¿Listo para acelerar tu crecimiento?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Conversemos sobre cómo nuestro método de Growth Marketing puede transformar 
              tu negocio y multiplicar tus ventas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => {
                  const contactSection = document.getElementById('contacto');
                  if (contactSection) {
                    onBack();
                    setTimeout(() => {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                Solicitar consulta gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={onBack}
              >
                Ver todos los servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}