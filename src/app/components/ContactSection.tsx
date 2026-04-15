import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react";
import { Badge } from "./ui/badge";

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 mesh-gradient opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 max-w-4xl mx-auto">
          <Badge className="px-5 py-1.5 rounded-full bg-primary/5 text-primary border-primary/10 text-sm font-semibold uppercase tracking-wider">
            Contacto
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            ¿Listo para elevar
            <span className="text-gradient block mt-2">tu impacto digital?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Agendemos una consulta estratégica. Analizaremos tu situación actual 
            y trazaremos una ruta clara hacia tus objetivos. Sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass p-8 lg:p-12 rounded-[2.5rem] border-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">Solicita tu auditoría</h3>
                <p className="text-gray-600 font-medium">
                  Completa tus datos y un especialista se pondrá en contacto contigo.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                      Nombre Completo
                    </label>
                    <Input id="name" placeholder="Ej: Juan Pérez" className="h-14 px-5 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-primary/20 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                      Email Corporativo
                    </label>
                    <Input id="email" type="email" placeholder="tu@empresa.com" className="h-14 px-5 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all font-medium" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                      Empresa / Proyecto
                    </label>
                    <Input id="company" placeholder="Nombre de organización" className="h-14 px-5 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                      WhatsApp / Teléfono
                    </label>
                    <Input id="phone" placeholder="+56 9 ..." className="h-14 px-5 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                    Servicio de Interés
                  </label>
                  <select 
                    id="service" 
                    className="w-full h-14 px-5 bg-gray-50/50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-transparent transition-all font-medium text-gray-700 outline-none"
                  >
                    <option value="">Selecciona tu prioridad</option>
                    <option value="growth">Growth Marketing (Ventas)</option>
                    <option value="corporate">Marketing Corporativo (Marca)</option>
                    <option value="employability">Empleabilidad (Marca Personal)</option>
                    <option value="other">Consultoría Estratégica</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">
                    Tu Mensaje
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Cuéntanos brevemente tus objetivos..."
                    className="min-h-[120px] p-5 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all font-medium resize-none"
                  />
                </div>

                <Button className="w-full h-14 bg-gradient-to-r from-primary to-accent text-white font-black text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 active:scale-95 group">
                  Enviar Mensaje
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>

                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <ShieldCheck className="h-4 w-4" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">
                    Datos Protegidos con Privacidad SSL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-10">
            {[
              { 
                icon: Mail, 
                title: "Email Directo", 
                value: "hola@vessel.cl", 
                sub: "Respuesta en < 24 hrs",
                gradient: "from-primary to-blue-600"
              },
              { 
                icon: Phone, 
                title: "Atención Telefónica", 
                value: "+56 2 2345 6789", 
                sub: "Lun a Vie, 9:00 - 18:00",
                gradient: "from-accent to-pink-600"
              },
              { 
                icon: MapPin, 
                title: "Centro de Operaciones", 
                value: "Las Condes, Santiago", 
                sub: "Cobertura Global Latam",
                gradient: "from-tertiary to-orange-500"
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group flex items-center p-6 bg-secondary/30 rounded-[2rem] border border-white hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:-rotate-3 transition-transform`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                  <div className="text-xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors">{item.value}</div>
                  <div className="text-xs font-bold text-gray-500">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-10 bg-gradient-to-br from-primary to-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.05] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold">Consulta Gratuita</h3>
                <p className="text-white/70 font-medium">
                  30 minutos de análisis estratégico especializado sin compromiso comercial.
                </p>
                <div className="pt-4 w-full">
                  <button className="w-full py-4 bg-white text-primary font-black rounded-xl hover:bg-secondary transition-all shadow-xl">
                    Solicitar Agenda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}