"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import NavigationBar from "../components/HomePage/NavigationBar";
import HeroSection from "../components/HomePage/HeroSection";
import FeaturesSection from "../components/HomePage/FeaturesSection";
import AboutSection from "../components/HomePage/AboutSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import TestimonialsSection from "../components/HomePage/TestimonialsSection";
import CareerSection from "../components/HomePage/CareerSection";
import BlogPreviewSection from "../components/HomePage/BlogPreviewSection";
import ContactSection from "../components/HomePage/ContactSection";
import Footer from "../components/HomePage/Footer";
import GlobalStyles from "../components/HomePage/GlobalStyles";

export default function HomePage() {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-primary transition-all duration-500">
      <NavigationBar showTopHeader={true} />
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-orange-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-orange-950/20 pointer-events-none"></div>
        <div className="relative z-10">
          <HeroSection />
          <FeaturesSection isVisible={isVisible.features} />
          <AboutSection isVisible={isVisible.about} />
          <ServicesSection isVisible={isVisible.services} />
          <TestimonialsSection isVisible={isVisible.testimonials} />
          <CareerSection />
          <BlogPreviewSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <GlobalStyles />
    </div>
  );
}
