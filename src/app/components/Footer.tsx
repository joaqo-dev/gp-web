import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-white">GreatProfile</h3>
            <p className="text-gray-300 leading-relaxed">
              Transformamos marcas digitales con estrategias personalizadas 
              que generan resultados reales y duraderos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Estrategia Digital</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SEO & SEM</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing de Contenidos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Redes Sociales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Branding Digital</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nuestro equipo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Casos de éxito</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>hola@greatprofile.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+56 2 2345 6789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Las Condes, Santiago</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-r-lg text-sm transition-all duration-300">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 GreatProfile. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}