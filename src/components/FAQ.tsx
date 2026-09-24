import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/repairData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Clear answers about repair time, warranty policies, and parts sourcing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-neutral-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-neutral-50/50 hover:bg-neutral-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-display font-bold text-neutral-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-neutral-500 shrink-0 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed bg-white border-t border-neutral-100 animate-in fade-in-50 duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 text-center text-xs text-neutral-500">
          Have an unlisted model or question?{' '}
          <a
            href="https://wa.me/8801712984251"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-semibold underline hover:text-blue-700"
          >
            Ask us directly on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
