import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, Clock, ShieldCheck, Check } from 'lucide-react';
import { BRANDS, BRAND_MODELS, COMMON_PROBLEMS } from '../data/repairData';

interface RepairFinderProps {
  initialBrand?: string;
  onRequestRepair: (data: { brand: string; model: string; problem: string; estimatedPrice: number }) => void;
}

export const RepairFinder: React.FC<RepairFinderProps> = ({
  initialBrand,
  onRequestRepair,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand || 'Apple');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedProblem, setSelectedProblem] = useState<string>('Broken Screen / Display Issue');

  // Update selected model when brand changes
  useEffect(() => {
    if (initialBrand) {
      setSelectedBrand(initialBrand);
    }
  }, [initialBrand]);

  useEffect(() => {
    const models = BRAND_MODELS[selectedBrand] || [];
    if (models.length > 0 && !models.includes(selectedModel)) {
      setSelectedModel(models[0]);
    }
  }, [selectedBrand]);

  // Base pricing logic for mock estimate
  const calculateEstimate = () => {
    let base = 2500;
    if (selectedBrand === 'Apple') base = 5500;
    else if (selectedBrand === 'Samsung') base = 4200;
    else if (selectedBrand === 'OnePlus') base = 3800;
    else if (selectedBrand === 'Xiaomi') base = 2800;
    else base = 2200;

    const prob = COMMON_PROBLEMS.find((p) => p.name === selectedProblem) || COMMON_PROBLEMS[0];
    const estimated = Math.round((base * prob.baseMultiplier) / 50) * 50;
    return Math.max(500, estimated);
  };

  const estimatedCost = calculateEstimate();

  const handleRequestSubmit = () => {
    onRequestRepair({
      brand: selectedBrand,
      model: selectedModel,
      problem: selectedProblem,
      estimatedPrice: estimatedCost,
    });
  };

  return (
    <section id="finder" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
              <Calculator className="w-4 h-4" />
              <span>Instant Cost Calculator</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight text-balance">
              Find the Right Repair & Instant Estimate
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Select your smartphone brand, model, and the issue you are facing. Get a quick starting estimate based on our current parts inventory in Uttara.
            </p>

            <div className="mt-6 space-y-3 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero obligation — free diagnosis at the counter</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Genuine OEM grade & high-copy parts available</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Written service warranty included</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Card */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-800/90 border border-neutral-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                
                {/* Brand Selector */}
                <div>
                  <label htmlFor="brand-select" className="block text-xs font-medium text-neutral-300 mb-2">
                    1. Select Brand
                  </label>
                  <select
                    id="brand-select"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                  >
                    {BRANDS.map((b) => (
                      <option key={b.name} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Device Model Selector */}
                <div>
                  <label htmlFor="model-select" className="block text-xs font-medium text-neutral-300 mb-2">
                    2. Select Model
                  </label>
                  <select
                    id="model-select"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                  >
                    {(BRAND_MODELS[selectedBrand] || []).map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Problem Selector */}
                <div>
                  <label htmlFor="problem-select" className="block text-xs font-medium text-neutral-300 mb-2">
                    3. Select Problem
                  </label>
                  <select
                    id="problem-select"
                    value={selectedProblem}
                    onChange={(e) => setSelectedProblem(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                  >
                    {COMMON_PROBLEMS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Estimate Output Box */}
              <div className="p-5 rounded-xl bg-neutral-900/90 border border-neutral-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-neutral-400 font-medium">
                    Estimated repair starts from
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1 tabular-nums flex items-baseline gap-1">
                    <span className="text-blue-400">৳</span>
                    <span>{estimatedCost.toLocaleString()}</span>
                    <span className="text-xs font-normal text-neutral-400 ml-1.5">(Approx)</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2 text-xs text-neutral-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      Turnaround: 30–60 mins
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      Warranty: 30–90 Days
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleRequestSubmit}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors active:scale-98 whitespace-nowrap shadow-sm"
                >
                  <span>Request Repair</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="mt-3 text-[11px] text-neutral-400 text-center sm:text-left">
                * Note: Final quotation depends on display technology (OLED / LCD) and selected part grade after physical inspection.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
