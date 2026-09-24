import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';
import heroRepairImg from '../assets/images/hero_phone_repair_1790259950690.jpg';

interface HeroProps {
  onBookClick: () => void;
  onPricingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onPricingClick }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Subtle background ambient light */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust marker: editorial plain text, zero-pill discipline */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
              <span>Uttara, Dhaka Service Center</span>
              <span aria-hidden="true" className="text-neutral-300">/</span>
              <span>Express Smartphone Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-neutral-900 leading-[1.1] text-balance">
              Your Phone. <br />
              <span className="text-neutral-950">Our Expertise.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
              Professional mobile phone repair with transparent pricing, skilled technicians and dependable service. We repair Apple, Samsung, Xiaomi and all major smartphone brands in Uttara.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md active:scale-98 whitespace-nowrap"
              >
                <span>Book a Repair</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-sm transition-colors active:scale-98 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onPricingClick}
                className="inline-flex items-center justify-center px-4 py-3.5 text-neutral-600 hover:text-neutral-900 text-sm font-medium transition-colors"
              >
                Check Pricing ৳
              </button>
            </div>

            {/* Trust indicators: clean unboxed text with middle-dot separators */}
            <div className="mt-10 pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-center gap-1.5 font-medium text-neutral-800">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Same-Day Service</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-neutral-800">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Quality Tested Parts</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Warranty Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Focal Anchor & Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Repair Workbench Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xl bg-neutral-100">
                <img
                  src={heroRepairImg}
                  alt="Professional technician repairing a flagship smartphone at FIXORA workbench"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle bottom gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Live Service Bench</p>
                  <p className="text-sm font-medium text-white/90">Uttara Sector 4 Lab · Precision Micro-soldering</p>
                </div>
              </div>

              {/* Subtle Floating Trust Badge Card */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white border border-neutral-200/80 rounded-xl p-3.5 sm:p-4 shadow-lg flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-display font-bold text-neutral-900 tabular-nums">500+</div>
                  <div className="text-xs text-neutral-600 font-medium">Devices Repaired This Month</div>
                </div>
              </div>

              {/* Second subtle floating badge */}
              <div className="absolute -top-3 -right-3 bg-neutral-900 text-white rounded-lg px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Walk-Ins Welcome</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
