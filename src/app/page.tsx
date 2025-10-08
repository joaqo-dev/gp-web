"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GrowthMarketingPage } from "./components/GrowthMarketingPage";
import { CorporateMarketingPage } from "./components/CorporateMarketingPage";
import { EmployabilityPage } from "./components/EmployabilityPage";

type PageType =
  | "home"
  | "growth-marketing"
  | "corporate-marketing"
  | "employability";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  if (currentPage === "growth-marketing") {
    return <GrowthMarketingPage onBack={handleBackToHome} />;
  }

  if (currentPage === "corporate-marketing") {
    return <CorporateMarketingPage onBack={handleBackToHome} />;
  }

  if (currentPage === "employability") {
    return <EmployabilityPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection onPageChange={handlePageChange} />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
