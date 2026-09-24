import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const RepairStatus: React.FC = () => {
  const [repairId, setRepairId] = useState('FP-1024');
  const [hasSearched, setHasSearched] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (repairId.trim()) {
      setSearchQuery(repairId.trim().toUpperCase());
      setHasSearched(true);
    }
  };

  const steps = [
    { title: 'Device Received', status: 'completed', time: '10:15 AM' },
    { title: 'Diagnosis Complete', status: 'completed', time: '10:45 AM' },
    { title: 'Repair in Progress', status: 'current', time: 'In Progress' },
    { title: 'Ready for Pickup', status: 'pending', time: 'Est. 4:00 PM' },
  ];

  return (
    <section className="py-20 sm:py-24 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Portal Feature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Check Repair Status
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Track your device repair progress in real time using your invoice ticket number.
          </p>
        </div>

        {/* Search Input Box */}
        <form onSubmit={handleCheck} className="max-w-md mx-auto mb-10">
          <div className="flex rounded-xl bg-neutral-800 p-1.5 border border-neutral-700 focus-within:border-blue-500 transition-colors shadow-lg">
            <div className="relative flex-1 flex items-center pl-3">
              <Search className="w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={repairId}
                onChange={(e) => setRepairId(e.target.value)}
                placeholder="Enter Ticket ID (e.g. FP-1024)"
                className="w-full bg-transparent pl-3 pr-2 py-2 text-sm text-white placeholder-neutral-500 focus:outline-hidden"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors active:scale-98 whitespace-nowrap"
            >
              Check Status
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-neutral-400">
            <span>Demo sample:</span>
            <button
              type="button"
              onClick={() => {
                setRepairId('FP-1024');
                setSearchQuery('FP-1024');
                setHasSearched(true);
              }}
              className="text-blue-400 underline hover:text-blue-300 font-mono"
            >
              FP-1024
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => {
                setRepairId('FP-2089');
                setSearchQuery('FP-2089');
                setHasSearched(true);
              }}
              className="text-blue-400 underline hover:text-blue-300 font-mono"
            >
              FP-2089
            </button>
          </div>
        </form>

        {/* Mock Status Card */}
        {hasSearched && (
          <div className="bg-neutral-800/90 border border-neutral-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-700/80 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase bg-neutral-900 px-2.5 py-1 rounded-md text-blue-400 border border-neutral-700">
                    Repair ID: {searchQuery || 'FP-1024'}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Active Workbench Job
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mt-2">
                  iPhone 13 — OLED Screen Replacement
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Assigned Technician: Senior Bench Engr. Tanvir Ahmed (Uttara Branch)
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-neutral-400 block">Estimated Completion</span>
                <span className="text-base font-semibold text-white flex items-center sm:justify-end gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Today · Within 45 mins
                </span>
              </div>
            </div>

            {/* Stepper timeline */}
            <div className="py-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
                {steps.map((st, i) => (
                  <div key={st.title} className="relative flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                    {/* Circle icon */}
                    <div className="flex items-center justify-center">
                      {st.status === 'completed' ? (
                        <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      ) : st.status === 'current' ? (
                        <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500 flex items-center justify-center animate-pulse">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-neutral-700/60 text-neutral-500 border border-neutral-600 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-neutral-500" />
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        {st.title}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {st.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="pt-4 border-t border-neutral-700 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-neutral-400 gap-2">
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                Original Face ID and True Tone sensors are being calibrated.
              </span>
              <span className="italic text-neutral-500">
                Demo simulation for client presentation
              </span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
