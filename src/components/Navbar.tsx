import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Devices', href: '#brands' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-neutral-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark with clean styling */}
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-hidden"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-white font-display font-extrabold text-lg tracking-tight">
              F
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">
              FIXORA
            </span>
          </a>

          {/* Zone 2: 4-6 nav links, single-line text links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-neutral-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Shop</span>
            </a>
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Repair</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-800 hover:bg-neutral-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-neutral-200 text-neutral-800 text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold text-center"
              >
                Book a Repair Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
