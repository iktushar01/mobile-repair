import React from 'react';
import { ArrowRight, Stethoscope, CheckCircle2 } from 'lucide-react';

interface OfferProps {
  onBookDiagnosis: () => void;
}

export const Offer: React.FC<OfferProps> = ({ onBookDiagnosis }) => {
  return (
    <section className="py-14 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-8 sm:p-12 overflow-hidden shadow-xl">
          
          {/* Subtle geometric background motif */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
              <Stethoscope className="w-4 h-4" />
              <span>Complimentary Service</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white">
              Free Basic Diagnosis
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Bring your device in for a basic diagnosis before deciding on the repair. Our technician will inspect the board, test display touch response, and measure battery voltage without charging any upfront fees.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                No obligation to repair
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                15-minute quick test
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Transparent quotation
              </span>
            </div>

            <div className="mt-8">
              <button
                onClick={onBookDiagnosis}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors active:scale-98 shadow-sm"
              >
                <span>Book a Diagnosis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
