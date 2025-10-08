"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">GreatProfile</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                  Consulta Gratuita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}