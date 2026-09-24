import React from 'react';
import { Award, Wrench, Star, ShieldCheck } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      label: 'Experience',
      value: '5+ Years',
      detail: 'Serving Uttara & Dhaka clients',
      icon: Award,
    },
    {
      label: 'Repairs Completed',
      value: '5,000+',
      detail: 'Smartphones & tablets restored',
      icon: Wrench,
    },
    {
      label: 'Customer Rating',
      value: '4.9 / 5',
      detail: 'Based on 850+ local reviews',
      icon: Star,
    },
    {
      label: 'Service Warranty',
      value: '30–90 Days',
      detail: 'Written warranty on parts',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="border-y border-neutral-200/80 bg-neutral-900 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex flex-col ${index !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-md bg-neutral-800 text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {item.label}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight tabular-nums">
                  {item.value}
                </div>
                <div className="text-xs text-neutral-400 mt-1 font-normal">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
