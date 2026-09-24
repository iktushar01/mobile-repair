import React from 'react';
import { WHY_CHOOSE_US } from '../data/repairData';
import { Wrench, Receipt, ShieldCheck, BadgeCheck, Clock, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Receipt,
  ShieldCheck,
  BadgeCheck,
  Clock,
  HeartHandshake,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            The Fixora Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
            Why Choose FIXORA?
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base">
            We built our reputation in Uttara on honest advice, high-grade replacement parts, and meticulous repair standards.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.iconName] || Wrench;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-neutral-200/90 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-neutral-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
