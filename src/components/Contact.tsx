import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

export const Contact: React.FC = () => {
  const googleMapsUrl = 'https://maps.google.com/?q=Sector+4+Uttara+Dhaka+Bangladesh';

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Physical Shop Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
            Visit Our Service Center
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Conveniently situated in Sector 4, Uttara, just a short walk from Rajlakshmi Complex and Dhaka-Mymensingh Highway.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                    Store Address
                  </h3>
                  <p className="text-base font-display font-bold text-neutral-900">
                    House 12, Road 5, Sector 4
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                    Uttara, Dhaka-1230, Bangladesh
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Landmark: Near Rajlakshmi Complex & Jashimuddin Road
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                    Direct Helpline & WhatsApp
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-display font-bold text-neutral-900 tabular-nums">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                    <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-sm font-semibold">
                      WhatsApp Available
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Call during opening hours for fast diagnostic consultation.
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-800">
                    {BUSINESS_INFO.hoursWeekday}
                  </p>
                  <p className="text-xs text-neutral-600 mt-1 font-medium">
                    {BUSINESS_INFO.hoursFriday}
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Shop</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Fixora, I would like to visit your Uttara service center for phone repair.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </a>
            </div>

          </div>

          {/* Right Map Visual Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs flex flex-col">
            
            {/* Map Visual Header */}
            <div className="p-4 bg-neutral-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium">
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>Fixora Mobile Care · Uttara Dhaka Hub</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stylized Map Viewport */}
            <div className="relative flex-1 min-h-[300px] bg-slate-100 p-6 flex flex-col items-center justify-center text-center overflow-hidden">
              
              {/* Map grid lines simulation */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

              {/* Major Roads representation */}
              <div className="absolute top-1/2 left-0 right-0 h-6 bg-slate-200/90 border-y border-slate-300/80 -translate-y-1/2 rotate-3" />
              <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-slate-200/90 border-x border-slate-300/80 -rotate-6" />

              {/* Pin Center Marker */}
              <div className="relative z-10 p-5 rounded-2xl bg-white/95 backdrop-blur-xs border border-neutral-300 shadow-xl max-w-sm">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-base font-display font-extrabold text-neutral-900">
                  FIXORA MOBILE CARE
                </div>
                <div className="text-xs text-neutral-600 mt-1">
                  House 12, Road 5, Sector 4, Uttara, Dhaka
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                  Coordinates: 23.8687° N, 90.3984° E
                </div>
                
                <div className="mt-4">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Nearby landmark labels */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/90 px-2.5 py-1 rounded-md text-[11px] font-medium text-neutral-600 border border-neutral-200">
                Rajlakshmi Complex (2 mins walk)
              </div>
              <div className="absolute top-4 right-4 z-10 bg-white/90 px-2.5 py-1 rounded-md text-[11px] font-medium text-neutral-600 border border-neutral-200">
                Dhaka Airport (8 mins drive)
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
