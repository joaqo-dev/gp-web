import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="inicio" className="mesh-gradient pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass text-primary text-sm font-medium border-primary/10 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Potencia tu negocio digital
              </div>
              <h1 className="text-5xl lg:text-7xl leading-[1.1] font-display font-bold">
                Transformamos tu
                <span className="text-gradient block pb-2">marca digital</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
                Estrategias de marketing personalizadas que generan resultados reales. 
                De la estrategia a la ejecución, escalamos tu impacto.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 text-white rounded-2xl px-8 h-14 text-lg font-bold group">
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group rounded-2xl px-8 h-14 text-lg font-semibold border-2 hover:bg-gray-50 transition-all">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Ver casos de éxito
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-10 pt-4">
              <div>
                <div className="text-3xl font-display font-bold text-primary">150+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Clientes</div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <div className="text-3xl font-display font-bold text-accent">300%</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">ROI Médio</div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <div className="text-3xl font-display font-bold text-tertiary">98%</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Retención</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:ml-4">
            <div className="relative z-10 aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873272445-433c7a832584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXJrZXRpbmclMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTk2NDkxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo de marketing colaborando"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl shadow-2xl border-white/40 z-20 max-w-[240px] animate-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-tertiary to-accent rounded-xl flex items-center justify-center shadow-lg transform -rotate-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 leading-tight">Proyecto completado</div>
                  <div className="text-sm font-semibold text-accent">+2.5M impresiones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { TrendingUp } from "lucide-react";