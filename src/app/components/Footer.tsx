import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Footer Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-tertiary"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-black tracking-tighter">
              Vessel
            </h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              Elevamos marcas digitales a través de estrategias de precisión
              que combinan creatividad disruptiva y análisis de datos avanzado.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg uppercase tracking-widest text-white/50">Especialidades</h4>
            <ul className="space-y-4">
              {[
                "Growth Marketing",
                "Marketing Corporativo",
                "Marca Personal",
                "Estrategia Digital B2B",
                "Marketing Automation",
                "Auditoría de Marca",
              ].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-tertiary transition-colors font-medium flex items-center group">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg uppercase tracking-widest text-white/50">Ecosistema</h4>
            <ul className="space-y-4">
              {[
                "Sobre Vessel",
                "Nuestro Equipo",
                "Casos de Éxito",
                "Blog Estratégico",
                "Carreras",
                "Canal de Ayuda",
              ].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium flex items-center group">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="font-display font-bold text-lg uppercase tracking-widest text-white/50">Conectemos</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-300 font-medium">hola@vessel.cl</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-gray-300 font-medium">+56 2 2345 6789</span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Newsletter Semanal</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Tu email corporativo"
                  className="w-full h-14 pl-5 pr-14 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-tertiary/50 focus:bg-white/10 transition-all text-sm font-medium"
                />
                <button className="absolute right-2 top-2 w-10 h-10 bg-tertiary text-slate-950 rounded-xl flex items-center justify-center hover:bg-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(246,184,63,0.3)]">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10">
          <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-6">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest text-center md:text-left">
              © 2024 Vessel. Joaquin Cabrera
            </p>
            <div className="flex justify-center space-x-8">
              {["Privacidad", "Términos", "Cookies"].map((item, i) => (
                <a key={i} href="#" className="text-xs font-black text-white/20 hover:text-white transition-colors uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <span className="text-xs font-black text-white/10 uppercase tracking-[0.5em]">Antigravity UI System</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}