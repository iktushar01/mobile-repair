import React from 'react';
import {
  Smartphone,
  BatteryCharging,
  Zap,
  Camera,
  Volume2,
  Cpu,
  Droplets,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/repairData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  BatteryCharging,
  Zap,
  Camera,
  Volume2,
  Cpu,
  Droplets,
  ShieldAlert,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Comprehensive Servicing
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight text-balance">
            What We Repair
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg">
            From cracked screens to charging issues, we’ve got your device covered with precision tools, authentic grade parts, and guaranteed workmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((item: ServiceItem) => {
            const Icon = iconMap[item.iconName] || Smartphone;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-neutral-50 border border-neutral-100 text-neutral-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="mt-5 text-base sm:text-lg font-display font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-neutral-500 block">Starting from</span>
                    <span className="text-base sm:text-lg font-display font-bold text-neutral-900 tabular-nums">
                      ৳{item.startingPrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(item.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-blue-600 hover:underline transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-50"
                  >
                    <span>Book Repair</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-12 p-6 rounded-xl bg-neutral-100 border border-neutral-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
            <p className="text-xs sm:text-sm text-neutral-700">
              Not sure what is wrong with your phone? Bring it in for a <span className="font-semibold text-neutral-900">100% Free Initial Diagnostic Check</span> in our Uttara center.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Free Diagnostic Check')}
            className="text-xs font-semibold text-neutral-900 underline hover:text-blue-600 whitespace-nowrap"
          >
            Claim Free Check →
          </button>
        </div>

      </div>
    </section>
  );
};
