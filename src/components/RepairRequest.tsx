import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, MessageSquare, CheckCircle, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRANDS, BRAND_MODELS, SERVICES, BUSINESS_INFO } from '../data/repairData';

export interface PreloadedBookingData {
  brand?: string;
  model?: string;
  service?: string;
}

interface RepairRequestProps {
  preloadedData?: PreloadedBookingData | null;
}

export const RepairRequest: React.FC<RepairRequestProps> = ({ preloadedData }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [brand, setBrand] = useState('Apple');
  const [deviceModel, setDeviceModel] = useState('');
  const [repairService, setRepairService] = useState('Screen Replacement');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [description, setDescription] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingTicketId, setBookingTicketId] = useState('');

  // Sync preloaded data if passed from other sections
  useEffect(() => {
    if (preloadedData) {
      if (preloadedData.brand) setBrand(preloadedData.brand);
      if (preloadedData.model) setDeviceModel(preloadedData.model);
      if (preloadedData.service) setRepairService(preloadedData.service);
    }
  }, [preloadedData]);

  // Set default model when brand changes if not set
  useEffect(() => {
    const models = BRAND_MODELS[brand] || [];
    if (models.length > 0 && (!deviceModel || !models.includes(deviceModel))) {
      setDeviceModel(models[0]);
    }
  }, [brand]);

  // Set today's date as min
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number';
    } else if (phoneNumber.trim().length < 10) {
      newErrors.phoneNumber = 'Enter a valid Bangladeshi phone number';
    }
    if (!repairService) {
      newErrors.repairService = 'Please select a repair service';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // Generate realistic ticket ID like FP-3829
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBookingTicketId(`FP-${randomNum}`);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setDescription('');
  };

  return (
    <section id="repair-request" className="py-20 sm:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Priority Scheduling
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
            Book Your Repair
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Tell us what’s wrong with your device and we’ll prepare the right replacement parts before you arrive in Uttara.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Row 1: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullname" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="e.g. Mahfuz Rahman"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                  }}
                  className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-hidden transition-colors ${
                    errors.fullName ? 'border-rose-400 focus:border-rose-500' : 'border-neutral-300 focus:border-blue-600'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 01712-345678"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: '' }));
                  }}
                  className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-hidden transition-colors ${
                    errors.phoneNumber ? 'border-rose-400 focus:border-rose-500' : 'border-neutral-300 focus:border-blue-600'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-rose-500">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Row 2: Brand and Model */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="brand-choice" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Device Brand <span className="text-rose-500">*</span>
                </label>
                <select
                  id="brand-choice"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-hidden focus:border-blue-600 transition-colors"
                >
                  {BRANDS.map((b) => (
                    <option key={b.name} value={b.name}>
                      {b.name}
                    </option>
                  ))}
                  <option value="Other">Other Brand</option>
                </select>
              </div>

              <div>
                <label htmlFor="model-choice" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Device Model <span className="text-rose-500">*</span>
                </label>
                <input
                  id="model-choice"
                  type="text"
                  list="model-list"
                  placeholder="e.g. iPhone 13 Pro or Galaxy A54"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-hidden focus:border-blue-600 transition-colors"
                />
                <datalist id="model-list">
                  {(BRAND_MODELS[brand] || []).map((m) => (
                    <option key={m} value={m} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Row 3: Service and Timing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="sm:col-span-1">
                <label htmlFor="service-choice" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Repair Service <span className="text-rose-500">*</span>
                </label>
                <select
                  id="service-choice"
                  value={repairService}
                  onChange={(e) => setRepairService(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-900 focus:outline-hidden focus:border-blue-600 transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Free Diagnostic Check">Free Diagnostic Check</option>
                  <option value="Other Issue">Other Issue</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferred-date" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Preferred Date
                </label>
                <input
                  id="preferred-date"
                  type="date"
                  min={today}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-900 focus:outline-hidden focus:border-blue-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="preferred-time" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Preferred Time Slot
                </label>
                <select
                  id="preferred-time"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-900 focus:outline-hidden focus:border-blue-600 transition-colors"
                >
                  <option>Morning (10:00 AM – 1:00 PM)</option>
                  <option>Afternoon (1:00 PM – 5:00 PM)</option>
                  <option>Evening (5:00 PM – 9:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Problem Description */}
            <div>
              <label htmlFor="description" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Problem Description (Optional)
              </label>
              <textarea
                id="description"
                rows={3}
                placeholder="Briefly describe what happened (e.g. dropped on tile floor, touchscreen lines, water splash, not charging)..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-hidden focus:border-blue-600 transition-colors resize-none"
              />
            </div>

            {/* Trust note & Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your contact info is strictly used to confirm your repair appointment.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-all active:scale-98 shadow-sm whitespace-nowrap"
              >
                <span>Submit Repair Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <button
                onClick={resetForm}
                className="p-1 rounded-md text-neutral-400 hover:text-neutral-700"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider mb-1">
              Ticket Number: {bookingTicketId}
            </div>

            <h3 className="text-2xl font-display font-bold text-neutral-900">
              Repair Request Received
            </h3>

            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Thanks <span className="font-semibold text-neutral-900">{fullName}</span>! We’ve received your request for your <span className="font-semibold text-neutral-900">{brand} {deviceModel}</span> ({repairService}). Our technician team will call or WhatsApp you shortly to confirm parts availability and schedule.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs space-y-2 text-neutral-700">
              <div className="flex justify-between">
                <span className="text-neutral-500">Service Center:</span>
                <span className="font-semibold text-neutral-900">Uttara Sector 4, Dhaka</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Service Hours:</span>
                <span className="font-semibold text-neutral-900">10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Appointment Slot:</span>
                <span className="font-semibold text-neutral-900">{preferredDate || 'Earliest Available'} · {preferredTime}</span>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-neutral-300 text-neutral-800 text-xs font-semibold hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Us</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Fixora, I submitted repair ticket ${bookingTicketId} for my ${brand} ${deviceModel}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={resetForm}
                className="text-xs text-neutral-500 hover:text-neutral-900 font-medium"
              >
                Done / Book Another Device
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
