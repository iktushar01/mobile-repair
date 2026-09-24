import React from 'react';
import { HOW_IT_WORKS } from '../data/repairData';
import { FileText, Search, Wrench, PackageCheck } from 'lucide-react';

const stepIcons = [FileText, Search, Wrench, PackageCheck];

export const RepairProcess: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-neutral-50/70 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Seamless Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            A straightforward, hassle-free repair journey designed for busy smartphone owners in Dhaka.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = stepIcons[index] || Wrench;
            return (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-neutral-200/90 p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-display font-extrabold text-neutral-300 group-hover:text-blue-600 transition-colors tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 group-hover:bg-blue-50 text-neutral-700 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-neutral-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-100 text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
                  Step {index + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
