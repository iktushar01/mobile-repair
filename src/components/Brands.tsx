import React from 'react';
import { BRANDS } from '../data/repairData';
import { ArrowRight, Smartphone } from 'lucide-react';

interface BrandsProps {
  onSelectBrand: (brandName: string) => void;
}

export const Brands: React.FC<BrandsProps> = ({ onSelectBrand }) => {
  return (
    <section id="brands" className="py-20 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
              Multi-Brand Diagnostic Center
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
              We Repair Your Favorite Brands
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl">
              Equipped with manufacturer-specific schematics, original grade displays, IC reballing stencils, and programmer tools.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 text-xs text-neutral-500 font-medium">
            Authorized grade tooling · Genuine parts stock
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="group p-5 sm:p-6 rounded-xl border border-neutral-200/90 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-display font-bold text-sm tracking-tight group-hover:bg-blue-600 transition-colors">
                    {b.logoChar}
                  </div>
                  <Smartphone className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 tracking-tight">
                  {b.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-500 line-clamp-1">
                  {b.tag}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60">
                <button
                  onClick={() => onSelectBrand(b.name)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-neutral-800 group-hover:text-blue-600 transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
