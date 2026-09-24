import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const message = 'Hi, I want to know about mobile repair services.';
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end flex-col gap-2">
      {/* Small popover message */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-neutral-900 px-3 py-2 rounded-xl shadow-lg border border-neutral-200 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Need quick repair help? Chat with technician</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-neutral-700"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 group relative"
        aria-label="Chat on WhatsApp with Fixora Mobile Care"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full"></span>
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
