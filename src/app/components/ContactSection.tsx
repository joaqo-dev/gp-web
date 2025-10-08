import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-blue-50/30 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900">
            ¿Listo para hacer
            <span className="text-primary block">crecer tu negocio?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conversemos sobre tu proyecto. Te ofrecemos una consulta gratuita 
            para analizar tus necesidades y proponer soluciones personalizadas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Solicita tu consulta gratuita</CardTitle>
              <p className="text-gray-600">
                Completa el formulario y te contactaremos en menos de 24 horas.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-700">
                    Nombre *
                  </label>
                  <Input id="name" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-700">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm text-gray-700">
                    Empresa
                  </label>
                  <Input id="company" placeholder="Nombre de tu empresa" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-gray-700">
                    Teléfono
                  </label>
                  <Input id="phone" placeholder="+56 9 1234 5678" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm text-gray-700">
                  ¿Qué servicio te interesa? *
                </label>
                <select 
                  id="service" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="estrategia">Estrategia Digital</option>
                  <option value="seo">SEO & SEM</option>
                  <option value="contenido">Marketing de Contenidos</option>
                  <option value="social">Redes Sociales</option>
                  <option value="automation">Marketing Automation</option>
                  <option value="branding">Branding Digital</option>
                  <option value="integral">Solución Integral</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-700">
                  Cuéntanos sobre tu proyecto *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Describe brevemente tu negocio, objetivos y cómo podemos ayudarte..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                Enviar solicitud
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Al enviar este formulario, aceptas que procesemos tus datos según nuestra política de privacidad.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hola@greatprofile.cl</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Respuesta garantizada en 24 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+56 2 2345 6789</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Lunes a viernes, 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Oficina</h3>
                    <p className="text-gray-600">Las Condes, Santiago</p>
                    <p className="text-sm text-gray-500 mt-1">
                      También trabajamos 100% remoto
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Consulta gratuita</h3>
                    <p className="text-white/90">
                      30 minutos para analizar tu proyecto sin compromiso
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}