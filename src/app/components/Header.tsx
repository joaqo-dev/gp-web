"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "./ui/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-gradient">
              Vessel
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "Inicio", href: "#inicio" },
              { name: "Servicios", href: "#servicios" },
              { name: "Nosotros", href: "#nosotros" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Contacto", href: "#contacto" },
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 rounded-xl px-6 font-semibold">
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 animate-in fade-in slide-in-from-top-4">
            <div className="space-y-1">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Nosotros", href: "#nosotros" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contacto", href: "#contacto" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4 pb-2">
                <Button className="w-full bg-gradient-to-r from-primary to-accent py-6 text-lg rounded-xl shadow-lg">
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