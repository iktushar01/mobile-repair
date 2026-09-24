import React from 'react';
import { Phone, MapPin, MessageSquare, Shield, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white text-neutral-950 flex items-center justify-center font-display font-extrabold text-base">
                F
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                {BUSINESS_INFO.fullName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Professional mobile phone repair and servicing in Uttara, Dhaka. We provide honest pricing, certified technicians, and written service warranties.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-blue-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Fixora Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-rose-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Fixora Instagram Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#brands" className="hover:text-white transition-colors">Supported Devices</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing Rates</a>
              </li>
              <li>
                <a href="#repair-request" className="hover:text-white transition-colors">Repair Request</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Store Location</a>
              </li>
            </ul>
          </div>

          {/* Services (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Repair Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Display & OLED Screen Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Battery Replacement & Health Calibration</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Charging Port & Type-C Soldering</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Camera Lens & Sensor Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Motherboard IC & Water Damage Fix</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Software & Firmware Recovery</a>
              </li>
            </ul>
          </div>

          {/* Contact (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>House 12, Road 5, Sector 4, Uttara, Dhaka-1230</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.whatsappDisplay}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-neutral-300">10:00 AM – 9:00 PM (Sat–Thu)</span>
                  <span className="block text-neutral-400">2:00 PM – 9:00 PM (Friday)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 {BUSINESS_INFO.fullName}. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>BDT Currency (৳)</span>
            <span>·</span>
            <span>Uttara, Dhaka Service Center</span>
            <span>·</span>
            <span className="text-neutral-400">Demo Showcase for Local Repair Businesses</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
