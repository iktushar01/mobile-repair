import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/repairData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Local Reputation
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Real feedback from smartphone owners across Uttara, Mirpur, and Dhaka city.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-neutral-200/90 p-6 flex flex-col justify-between shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <div className="flex items-center justify-between">
                  <div className="font-display font-bold text-neutral-900 text-sm">
                    {item.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-500 mt-0.5">
                  {item.location} · {item.device}
                </div>

                <div className="text-[11px] text-blue-600 font-medium mt-1">
                  Service: {item.repair}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
