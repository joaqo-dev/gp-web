import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-primary/5 via-white to-tertiary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm border border-primary/20">
                🚀 Potencia tu negocio digital
              </div>
              <h1 className="text-4xl lg:text-6xl leading-tight text-gray-900">
                Transformamos tu
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">marca digital</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Estrategias de marketing personalizadas que generan resultados reales. 
                Desde el diseño hasta la implementación, te acompañamos en cada paso.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-white group">
                Comenzar ahora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Ver casos de éxito
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-2xl text-primary">150+</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-2xl text-accent">300%</div>
                <div className="text-sm text-gray-600">ROI promedio</div>
              </div>
              <div>
                <div className="text-2xl text-tertiary">98%</div>
                <div className="text-sm text-gray-600">Retención de clientes</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873272445-433c7a832584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXJrZXRpbmclMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTk2NDkxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo de marketing colaborando"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-tertiary/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-tertiary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-tertiary rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Proyecto completado</div>
                  <div className="text-sm text-accent">+2.5M de impresiones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}