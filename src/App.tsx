import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { Services } from './components/Services';
import { Brands } from './components/Brands';
import { RepairFinder } from './components/RepairFinder';
import { Pricing } from './components/Pricing';
import { Offer } from './components/Offer';
import { RepairProcess } from './components/RepairProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { RepairStatus } from './components/RepairStatus';
import { Gallery } from './components/Gallery';
import { RepairRequest, PreloadedBookingData } from './components/RepairRequest';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedBrandForFinder, setSelectedBrandForFinder] = useState<string>('Apple');
  const [bookingData, setBookingData] = useState<PreloadedBookingData | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    scrollToSection('repair-request');
  };

  const handlePricingClick = () => {
    scrollToSection('pricing');
  };

  const handleSelectService = (serviceName: string) => {
    setBookingData((prev) => ({
      ...prev,
      service: serviceName,
    }));
    scrollToSection('repair-request');
  };

  const handleSelectBrand = (brandName: string) => {
    setSelectedBrandForFinder(brandName);
    scrollToSection('finder');
  };

  const handleEstimateClick = () => {
    scrollToSection('finder');
  };

  const handleFinderRequest = (data: {
    brand: string;
    model: string;
    problem: string;
    estimatedPrice: number;
  }) => {
    setBookingData({
      brand: data.brand,
      model: data.model,
      service: data.problem,
    });
    scrollToSection('repair-request');
  };

  const handleBookDiagnosis = () => {
    setBookingData((prev) => ({
      ...prev,
      service: 'Diagnostic & Inspection',
    }));
    scrollToSection('repair-request');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 flex flex-col font-sans">
      {/* Sticky responsive Navbar */}
      <Navbar onBookClick={handleBookClick} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onPricingClick={handlePricingClick}
        />

        {/* Minimal Trust Stats */}
        <TrustStats />

        {/* What We Repair - Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Multi-Brand Grid */}
        <Brands onSelectBrand={handleSelectBrand} />

        {/* Interactive Instant Repair Finder & Cost Estimator */}
        <RepairFinder
          initialBrand={selectedBrandForFinder}
          onRequestRepair={handleFinderRequest}
        />

        {/* Popular Repair Pricing Table */}
        <Pricing
          onEstimateClick={handleEstimateClick}
          onBookItem={handleSelectService}
        />

        {/* Complimentary Free Diagnosis Special Offer */}
        <Offer onBookDiagnosis={handleBookDiagnosis} />

        {/* 4-Step Repair Process */}
        <RepairProcess />

        {/* Why Choose Fixora Mobile Care */}
        <WhyChooseUs />

        {/* Live Repair Status Tracker Demo */}
        <RepairStatus />

        {/* Real Repair Workshop & Before-After Gallery */}
        <Gallery />

        {/* Priority Repair Request / Booking Form */}
        <RepairRequest preloadedData={bookingData} />

        {/* Customer Testimonials & Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions Accordion */}
        <FAQ />

        {/* Physical Shop Location & Hours (Uttara, Dhaka) */}
        <Contact />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
