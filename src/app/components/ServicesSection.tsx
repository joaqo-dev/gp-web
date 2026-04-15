// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  TrendingUp,
  Building2,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const mainServices = [
  {
    id: "growth-marketing",
    icon: TrendingUp,
    title: "Growth Marketing",
    subtitle: "Crecimiento exponencial basado en datos",
    description:
      "Estrategias de crecimiento acelerado que combinan marketing digital, análisis de datos y optimización continua para escalar tu negocio de manera sostenible.",
    features: [
      "Análisis de funnel de conversión",
      "Optimización de métricas clave (KPIs)",
      "Experimentación y A/B testing",
      "Marketing de performance",
      "Automation y lead nurturing",
      "Growth hacking strategies",
    ],
    benefits: [
      "Crecimiento medible",
      "ROI optimizado",
      "Escalabilidad",
    ],
    gradient: "from-primary to-accent",
    bgGradient: "from-primary/5 via-accent/5 to-transparent",
  },
  {
    id: "corporate-marketing",
    icon: Building2,
    title: "Marketing Corporativo",
    subtitle: "Estrategias B2B de alto impacto",
    description:
      "Soluciones especializadas para empresas que buscan fortalecer su posicionamiento, generar leads calificados y establecer relaciones comerciales.",
    features: [
      "LinkedIn Marketing & Social Selling",
      "Content Marketing B2B",
      "Email Marketing corporativo",
      "Brand positioning empresarial",
      "Marketing para eventos",
      "Account-based marketing (ABM)",
    ],
    benefits: [
      "Leads B2B alta calidad",
      "Autoridad de marca",
      "Networking estratégico",
    ],
    gradient: "from-accent to-tertiary",
    bgGradient: "from-accent/5 via-tertiary/5 to-transparent",
  },
  {
    id: "employability",
    icon: Users,
    title: "Marketing de Empleabilidad",
    subtitle: "Personal branding y networking",
    description:
      "Potenciamos tu perfil profesional y visibilidad en el mercado laboral a través de estrategias de marca personal y networking digital efectivo.",
    features: [
      "Optimización de perfil LinkedIn",
      "Personal branding strategy",
      "Content marketing personal",
      "Networking estratégico",
      "Portfolio digital profesional",
      "Visibility profesional",
    ],
    benefits: [
      "Visibilidad aumentada",
      "Oportunidades laborales",
      "Red ampliada",
    ],
    gradient: "from-primary to-tertiary",
    bgGradient: "from-primary/5 via-tertiary/5 to-transparent",
  },
];

interface ServicesSectionProps {
  onPageChange: (
    page: "growth-marketing" | "corporate-marketing" | "employability"
  ) => void;
}

export function ServicesSection({ onPageChange }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/2 hover:bg-primary/5 transition-colors rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 max-w-4xl mx-auto">
          <Badge className="px-4 py-1.5 rounded-full bg-primary/5 text-primary border-primary/10 text-[10px] font-black uppercase tracking-[0.2em]">
            Especialidades
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
            Soluciones especializadas para
            <span className="text-gradient block mt-1">cada objetivo de impacto</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Marketing digital de alto rendimiento diseñado para sectores específicos 
            con metas de expansión ambiciosas.
          </p>
        </div>

        {/* Main Services - Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="growth-marketing" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="flex w-full max-w-2xl p-1 bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-inner">
                {mainServices.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md data-[state=active]:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <service.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{service.title}</span>
                    <span className="sm:hidden">{service.title.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {mainServices.map((service) => (
              <TabsContent 
                key={service.id} 
                value={service.id} 
                className="mt-0 animate-in fade-in zoom-in-[0.98] duration-500"
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${service.bgGradient} rounded-[2rem] border border-gray-100 p-6 lg:p-12`}
                >
                  {/* Internal Decor */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-[0.03] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2`}></div>

                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl shadow-primary/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500`}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-display font-bold text-gray-900 mb-1">
                            {service.title}
                          </h3>
                          <p className="text-lg font-bold text-primary/80 uppercase tracking-wide">
                            {service.subtitle}
                          </p>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {service.benefits.map((benefit, index) => (
                          <div 
                            key={index} 
                            className="flex items-center bg-white/60 border border-white px-3 py-1.5 rounded-full shadow-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-tertiary mr-2 flex-shrink-0" />
                            <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          onPageChange(
                            service.id as
                              | "growth-marketing"
                              | "corporate-marketing"
                              | "employability"
                          )
                        }
                        className={`inline-flex items-center px-6 py-3.5 bg-gradient-to-r ${service.gradient} text-white font-black text-sm uppercase tracking-widest rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 group`}
                      >
                        Ver Detalles
                        <ArrowRight className="ml-2.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Features Grid */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.015] rounded-[2rem]`}></div>
                      <div className="relative p-4 lg:p-8 space-y-5">
                        <h4 className="text-lg font-display font-bold text-gray-900 border-l-4 border-tertiary pl-4 uppercase tracking-tight">
                          Componentes Clave
                        </h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center p-3.5 glass rounded-xl transition-all duration-300 hover:scale-[1.02] border-white/60 hover:border-white shadow-sm"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} opacity-20 flex items-center justify-center mr-3.5 flex-shrink-0`}>
                                <Target className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-gray-800 font-bold text-sm tracking-tight">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA Section */}
        <div className="relative p-8 lg:p-14 overflow-hidden bg-primary rounded-[2.5rem] shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary opacity-10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-4xl font-display font-bold text-white leading-tight">
              ¿Buscas una solución a medida?
            </h3>
            <p className="text-lg text-white/80 font-medium leading-relaxed">
              Diseñamos estrategias personalizadas que se adaptan a las 
              necesidades únicas de tu industria.
            </p>
            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-black rounded-xl hover:bg-secondary transition-all duration-300 hover:-translate-y-1 shadow-2xl hover:shadow-white/10 text-base group uppercase tracking-widest"
              >
                Iniciar Proyecto
                <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
