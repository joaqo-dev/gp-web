import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Package, FileText, Printer, Building2, Shirt, MonitorSpeaker, Calendar, Gift, Tv, Map, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Gift,
    title: "Merchandising",
    description: "Productos promocionales y corporativos que fortalecen tu marca y generan recordación."
  },
  {
    icon: FileText,
    title: "Papelería Corporativa",
    description: "Diseño e impresión de tarjetas, carpetas, sobres y toda la papelería institucional."
  },
  {
    icon: Printer,
    title: "Impresión Digital",
    description: "Servicios de impresión digital de alta calidad para todos tus proyectos gráficos."
  },
  {
    icon: Building2,
    title: "Estructuras",
    description: "Diseño y construcción de estructuras para eventos, stands y espacios comerciales."
  },
  {
    icon: Shirt,
    title: "Sublimación",
    description: "Personalización de productos textiles y promocionales con tecnología de sublimación."
  },
  {
    icon: Shirt,
    title: "Ropa Corporativa",
    description: "Uniformes y vestimenta corporativa que refleje la identidad de tu empresa."
  },
  {
    icon: Package,
    title: "Fabricación de Stands",
    description: "Stands personalizados para ferias, eventos y puntos de venta."
  },
  {
    icon: Calendar,
    title: "Eventos y Banquetería",
    description: "Organización integral de eventos corporativos y servicios de banquetería."
  },
  {
    icon: Gift,
    title: "Promoción",
    description: "Estrategias y materiales promocionales para campañas de marketing."
  },
  {
    icon: Tv,
    title: "Pantallas LED",
    description: "Instalación y gestión de pantallas LED para publicidad exterior e interior."
  },
  {
    icon: Map,
    title: "Urbanos",
    description: "Publicidad exterior urbana de gran formato y alto impacto visual."
  },
  {
    icon: MonitorSpeaker,
    title: "Camineros",
    description: "Señalética vial y publicitaria para carreteras y vías principales."
  },
  {
    icon: Building2,
    title: "Lunetas",
    description: "Publicidad en lunetas de vehículos y transporte público."
  }
];

const specialties = [
  "Instalaciones gráficas especializadas",
  "Branding integral de sucursales",
  "Diseño y producción de POP",
  "Construcción de letreros corporativos",
  "Letras volumétricas personalizadas",
  "Cajas luminosas de alto impacto",
  "Renovaciones completas de fachadas",
  "Instalación de mallas mesh en edificios",
  "Proyectos gráficos de gran envergadura"
];

interface CorporateMarketingPageProps {
  onBack: () => void;
}

export function CorporateMarketingPage({ onBack }: CorporateMarketingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-accent/10 to-tertiary/10 py-8">
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
              <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-accent/10 to-tertiary/10 text-accent border-accent/20">
                Marketing Corporativo
              </Badge>
              <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
                ¡Materializamos
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-tertiary block">
                  tus ideas!
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trabajamos desde el diseño, fabricación y producción, hasta la instalación 
                de material gráfico de interior o exterior.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-tertiary/20 rounded-3xl transform rotate-3"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758597129071-29bc78c021e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NTk4MTc4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corporate Office Building Modern"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Simplified */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Nuestro Proceso Integral
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desde la conceptualización hasta la instalación final, nos encargamos de todo
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="relative group">
              <div className="bg-gradient-to-br from-accent/5 to-tertiary/5 rounded-2xl p-8 h-full border border-accent/10 group-hover:border-accent/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-tertiary rounded-xl flex items-center justify-center mb-6">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Diseño & Creatividad</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Creamos identidades visuales impactantes que reflejan la esencia de tu marca y conectan con tu audiencia objetivo.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Identidad corporativa completa</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Diseño de señalética</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Material gráfico promocional</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-accent mr-2" />Packaging especializado</li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 h-full border border-primary/10 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <Printer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Producción Especializada</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fabricamos con tecnología de vanguardia y materiales de alta calidad para garantizar durabilidad y impacto visual.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Letras volumétricas iluminadas</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Señalética de gran formato</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Displays interactivos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Estructuras metálicas</li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-tertiary/5 to-primary/5 rounded-2xl p-8 h-full border border-tertiary/10 group-hover:border-tertiary/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-tertiary to-primary rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Instalación Profesional</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ejecutamos instalaciones complejas con equipos especializados y personal técnico certificado.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-tertiary mr-2" />Fachadas y exteriores</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-tertiary mr-2" />Señalización urbana</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-tertiary mr-2" />Mallas mesh para edificios</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-tertiary mr-2" />Mantenimiento integral</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Portfolio Gallery */}
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4 text-gray-900">
              Galería de Proyectos Realizados
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Algunos de nuestros trabajos más destacados en marketing corporativo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518730562-a3fe54170920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzaWduYWdlJTIwY29ycG9yYXRlJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzU5ODE5NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Corporate Office Signage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Señalética Corporativa</h4>
                  <p className="text-sm text-gray-300">Torre empresarial - Las Condes</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759050486852-fdfe2fdc7bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc1OTc1MzgzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Retail Store Interior Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Branding Retail</h4>
                  <p className="text-sm text-gray-300">Tienda concepto - Mall premium</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1679492840629-e60d9913543d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwd3JhcHBpbmclMjBkZXNpZ24lMjBicmFuZGluZ3xlbnwxfHx8fDE3NTk4MTk1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Vehicle Wrapping Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Branding Vehicular</h4>
                  <p className="text-sm text-gray-300">Flota corporativa completa</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1688287633836-3067691a89bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHNob3clMjBib290aCUyMGV4aGliaXRpb258ZW58MXx8fHwxNzU5ODE5NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Trade Show Booth"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Stand Ferial</h4>
                  <p className="text-sm text-gray-300">Expo internacional - Centro de eventos</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1703087425189-2bfe0679d175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBtZW51JTIwZGVzaWdufGVufDF8fHx8MTc1OTgxOTUzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Restaurant Branding"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Branding Gastronómico</h4>
                  <p className="text-sm text-gray-300">Restaurante premium - Providencia</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728200696344-641f004642f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBiaWxsYm9hcmR8ZW58MXx8fHwxNzU5ODE5NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital Billboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg mb-1">Publicidad Exterior</h4>
                  <p className="text-sm text-gray-300">Billboard digital - Autopista central</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
                Somos Especialistas En
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contamos con la experiencia y tecnología para ejecutar proyectos de gran envergadura 
                y complejidad técnica.
              </p>

              <div className="space-y-4 mb-8">
                {specialties.slice(0, 6).map((specialty, index) => (
                  <div key={index} className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                Somos especialistas en instalaciones gráficas, branding de sucursales, POP, construimos letreros, 
                letras volumétricas y cajas luminosas. Hacemos renovaciones de fachadas, instalamos mallas mesh 
                adosadas a edificios y muchos otros proyectos de gran envergadura.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/30 to-accent/30 rounded-2xl transform -rotate-2"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752391873033-839ff56ff6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc1OTgwNTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative Design Workspace"
                className="relative z-10 rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {specialties.slice(6).map((specialty, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-700">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Nuestro Proceso Integral
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desde la conceptualización hasta la instalación final, 
              manejamos cada etapa de tu proyecto con excelencia.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-tertiary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">1</span>
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Diseño</h3>
              <p className="text-gray-600">
                Conceptualización y diseño personalizado según tu marca y objetivos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-tertiary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">2</span>
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Fabricación</h3>
              <p className="text-gray-600">
                Producción con materiales de alta calidad y tecnología avanzada.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">3</span>
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Producción</h3>
              <p className="text-gray-600">
                Control de calidad riguroso en cada etapa del proceso productivo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">4</span>
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Instalación</h3>
              <p className="text-gray-600">
                Instalación profesional con garantía y soporte post-venta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-tertiary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Conversemos sobre cómo podemos materializar tus ideas y llevar 
              la presencia visual de tu marca al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-tertiary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                Solicitar cotización
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