import React from 'react';
import { ShieldCheck, Clock, Check } from 'lucide-react';
import { POPULAR_PRICING, PriceEstimateTable } from '../data/repairData';

interface PricingProps {
  onEstimateClick: () => void;
  onBookItem: (serviceName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onEstimateClick, onBookItem }) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
              Transparent Rates
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
              Popular Repair Services
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base">
              No hidden shop charges. We clearly explain parts grade options (Original OEM vs High Copy) so you stay in full control of your budget.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={onEstimateClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-900 text-xs font-semibold hover:bg-neutral-50 transition-colors shadow-2xs"
            >
              <span>Get Custom Estimate</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_PRICING.map((item: PriceEstimateTable) => (
            <div
              key={item.id}
              className="bg-neutral-50/70 rounded-xl border border-neutral-200 p-6 flex flex-col justify-between hover:border-neutral-300 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 font-medium mb-3">
                  <span>{item.brand}</span>
                  <span className="flex items-center gap-1 text-neutral-700">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{item.duration}</span>
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-neutral-900 tracking-tight">
                  {item.device}
                </h3>
                <p className="text-sm font-medium text-blue-700 mt-0.5">
                  {item.service}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-xs text-neutral-500 font-medium">From</span>
                  <span className="text-3xl font-display font-extrabold text-neutral-900 tabular-nums">
                    ৳{item.price.toLocaleString()}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-200/70 space-y-2 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item.warranty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Tested before handover</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => onBookItem(`${item.device} - ${item.service}`)}
                  className="w-full py-2.5 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-800 text-xs font-semibold transition-colors text-center"
                >
                  Book This Repair
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="mt-8 p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neutral-600 shrink-0" />
            <span>
              Disclaimer: Final pricing may vary depending on device condition, parts selection, and market availability.
            </span>
          </div>
          <span className="font-medium text-neutral-700">All prices in BDT (৳)</span>
        </div>

      </div>
    </section>
  );
};
