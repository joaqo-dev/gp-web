import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TrendingUp, Building2, Users, Target, ArrowRight, CheckCircle } from "lucide-react";

const mainServices = [
  {
    id: "growth-marketing",
    icon: TrendingUp,
    title: "Growth Marketing",
    subtitle: "Crecimiento exponencial basado en datos",
    description: "Estrategias de crecimiento acelerado que combinan marketing digital, análisis de datos y optimización continua para escalar tu negocio de manera sostenible.",
    features: [
      "Análisis de funnel de conversión",
      "Optimización de métricas clave (KPIs)",
      "Experimentación y A/B testing",
      "Marketing de performance",
      "Automation y lead nurturing",
      "Growth hacking strategies"
    ],
    benefits: [
      "Crecimiento medible y predecible",
      "ROI optimizado en cada canal",
      "Escalabilidad sostenible"
    ],
    gradient: "from-primary to-accent",
    bgGradient: "from-primary/5 to-accent/5"
  },
  {
    id: "corporate-marketing",
    icon: Building2,
    title: "Marketing Corporativo",
    subtitle: "Estrategias B2B de alto impacto",
    description: "Soluciones especializadas para empresas que buscan fortalecer su posicionamiento, generar leads calificados y establecer relaciones comerciales duraderas.",
    features: [
      "LinkedIn Marketing & Social Selling",
      "Content Marketing B2B",
      "Email Marketing corporativo",
      "Brand positioning empresarial",
      "Marketing para eventos y webinars",
      "Account-based marketing (ABM)"
    ],
    benefits: [
      "Leads B2B de alta calidad",
      "Posicionamiento de autoridad",
      "Networking estratégico"
    ],
    gradient: "from-accent to-tertiary",
    bgGradient: "from-accent/5 to-tertiary/5"
  },
  {
    id: "employability",
    icon: Users,
    title: "Marketing de Empleabilidad",
    subtitle: "Personal branding y networking profesional",
    description: "Potenciamos tu perfil profesional y visibilidad en el mercado laboral a través de estrategias de marca personal y networking digital efectivo.",
    features: [
      "Optimización de perfil LinkedIn",
      "Personal branding strategy",
      "Content marketing personal",
      "Networking estratégico",
      "Portfolio digital profesional",
      "Estrategias de visibility profesional"
    ],
    benefits: [
      "Visibilidad profesional aumentada",
      "Oportunidades laborales premium",
      "Red de contactos ampliada"
    ],
    gradient: "from-primary to-tertiary",
    bgGradient: "from-primary/5 to-tertiary/5"
  }
];



interface ServicesSectionProps {
  onPageChange: (page: 'growth-marketing' | 'corporate-marketing' | 'employability') => void;
}

export function ServicesSection({ onPageChange }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl lg:text-5xl text-gray-900">
            Soluciones especializadas para
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">
              cada tipo de negocio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios de marketing digital altamente especializados, diseñados para diferentes sectores 
            y objetivos de crecimiento empresarial.
          </p>
        </div>

        {/* Main Services - Tabs */}
        <div className="mb-20">
          <Tabs defaultValue="growth-marketing" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-3 bg-gray-100 p-1 rounded-xl">
                {mainServices.map((service) => (
                  <TabsTrigger 
                    key={service.id}
                    value={service.id} 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all duration-300"
                  >
                    <service.icon className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">{service.title}</span>
                    <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {mainServices.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <div className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 lg:p-12`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Content */}
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4`}>
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl text-gray-900 mb-1">{service.title}</h3>
                          <p className="text-lg text-gray-600">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid sm:grid-cols-3 gap-6 mb-8">
                        {service.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => onPageChange(service.id as 'growth-marketing' | 'corporate-marketing' | 'employability')}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                      >
                        Conocer más sobre {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl text-gray-900 mb-6">¿Qué incluye este servicio?</h4>
                      <div className="grid gap-3">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg backdrop-blur-sm">
                            <Target className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>



        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-tertiary/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl text-gray-900 mb-4">
            ¿No encuentras exactamente lo que buscas?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades 
            específicas de tu industria y objetivos de crecimiento.
          </p>
          <a 
            href="#contacto"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Conversemos sobre tu proyecto
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}