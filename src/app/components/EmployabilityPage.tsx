import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, FileText, Linkedin, MessageSquare, Users, TrendingUp, Clock, DollarSign, Briefcase, CheckCircle, ArrowRight, Star } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Redacción de CV",
    description: "Creamos un CV moderno, con palabras clave, capaz de captar la atención y optimizado para superar filtros automatizados (ATS).",
    features: ["Diseño moderno y profesional", "Palabras clave optimizadas", "Compatible con ATS", "Formato adaptable"]
  },
  {
    icon: Linkedin,
    title: "Optimización de LinkedIn",
    description: "Configuramos y potenciamos tu perfil de LinkedIn para destacar tu búsqueda laboral y atraer a los reclutadores.",
    features: ["Perfil optimizado", "Estrategia de contenido", "Networking efectivo", "Visibilidad profesional"]
  },
  {
    icon: MessageSquare,
    title: "Entrenamiento de Entrevistas",
    description: "Te enseñaremos a responder las preguntas complejas y cómo enfrentar una entrevista con metodología STAR.",
    features: ["Metodología STAR", "Simulacros de entrevista", "Feedback personalizado", "Preparación específica"]
  }
];

const plans = [
  {
    name: "Starter",
    price: "$109.990",
    features: [
      "Redacción de CV",
      "Optimización de LinkedIn"
    ],
    popular: false,
    gradient: "from-primary to-accent"
  },
  {
    name: "Advance",
    price: "$219.990",
    features: [
      "Redacción de CV",
      "Optimización de LinkedIn",
      "Entrenamiento de Entrevistas",
      "LinkedIn Avanzado",
      "Bonus Estratégico (Orientación salarial, marca personal y autoconocimiento)"
    ],
    popular: true,
    gradient: "from-accent to-tertiary"
  },
  {
    name: "Full",
    price: "Consultar",
    features: [
      "Redacción de CV",
      "Optimización de LinkedIn",
      "Entrenamiento de Entrevistas",
      "Todos los servicios personalizados",
      "Acompañamiento integral"
    ],
    popular: false,
    gradient: "from-primary to-tertiary"
  }
];

const stats = [
  {
    icon: Users,
    number: "+1.500",
    label: "Clientes encontraron trabajo",
    description: "De nuestros clientes encontraron trabajo"
  },
  {
    icon: TrendingUp,
    number: "92%",
    label: "Incrementan su sueldo",
    description: "De nuestros asesorados incrementan su sueldo"
  },
  {
    icon: Clock,
    number: "80%",
    label: "Trabajo en 3 meses",
    description: "De nuestros clientes de planes encuentran trabajo en 3 meses"
  }
];

const enterpriseServices = [
  "Reclutamiento y selección",
  "Outplacement",
  "Coaching empresarial",
  "Charlas especializadas"
];

interface EmployabilityPageProps {
  onBack: () => void;
}

export function EmployabilityPage({ onBack }: EmployabilityPageProps) {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/10 to-tertiary/10 py-8">
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
              <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-tertiary/10 text-primary border-primary/20">
                Marketing de Empleabilidad
              </Badge>
              <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
                Consigue entrevistas laborales
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary block">
                  en menos de 30 días
                </span>
              </h1>
              <div className="space-y-4 mb-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  <span className="text-primary">+1.500 personas</span> ya confiaron en nuestro equipo de psicólogos y expertos en empleabilidad
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  ¿Te has preguntado por qué algunas personas consiguen entrevistas con facilidad? 
                  No es suerte: es porque saben comunicar su experiencia, tienen un buen CV, 
                  utilizan LinkedIn estratégicamente y saben prepararse para cada entrevista.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-3xl transform rotate-2"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758520144424-2e04f4ad7f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBqb2IlMjBpbnRlcnZpZXclMjBzdWNjZXNzfGVufDF8fHx8MTc1OTgxNzg0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Job Interview Success"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Metodología probada por psicólogos y expertos en empleabilidad 
              para maximizar tus oportunidades laborales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-tertiary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-tertiary group-hover:text-white transition-all duration-300">
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
                Resultados que Hablan por Sí Solos
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro método está respaldado por miles de historias de éxito 
                y resultados comprobables en el mercado laboral.
              </p>

              <div className="space-y-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl text-primary mb-1">{stat.number}</div>
                        <h3 className="text-lg text-gray-900">{stat.label}</h3>
                        <p className="text-sm text-gray-600">{stat.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/30 to-primary/30 rounded-2xl transform -rotate-2"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876021739-d7c60b8742a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMGxhcHRvcHxlbnwxfHx8fDE3NTk4MTc4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Office Teamwork"
                className="relative z-10 rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Planes de Empleabilidad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades y objetivos profesionales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-purple-500 shadow-lg' : 'border-0 shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-tertiary text-white text-center py-2 text-sm">
                    <Star className="h-4 w-4 inline mr-1" />
                    Más Popular
                  </div>
                )}
                
                <CardHeader className={`pb-4 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl mb-2 text-gray-900">{plan.name}</h3>
                    <div className="text-3xl text-purple-600 mb-4">{plan.price}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 bg-gradient-to-r ${plan.gradient} hover:shadow-lg transition-all duration-300`}
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
                    Elegir {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Soluciones para Empresas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              También ofrecemos servicios especializados para empresas que buscan 
              optimizar sus procesos de recursos humanos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Briefcase className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
              ¿Listo para impulsar tu carrera profesional?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Únete a las +1.500 personas que ya confiaron en nuestro método 
              y transformaron su búsqueda laboral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                Comenzar mi transformación laboral
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