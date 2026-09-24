import React, { useState } from 'react';
import { X, ZoomIn, CheckCircle, ArrowRight } from 'lucide-react';
import screenRepairImg from '../assets/images/screen_repair_macro_1790259969111.jpg';
import microscopeImg from '../assets/images/microscope_motherboard_1790259988993.jpg';
import batteryImg from '../assets/images/battery_service_detail_1790260007124.jpg';
import heroRepairImg from '../assets/images/hero_phone_repair_1790259950690.jpg';

interface GalleryItemData {
  id: string;
  title: string;
  category: 'Screen' | 'Battery' | 'Hardware' | 'Before & After';
  device: string;
  image: string;
  badgeText: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItemData | null>(null);

  const galleryItems: GalleryItemData[] = [
    {
      id: 'g1',
      title: 'Shattered OLED Display Restored',
      category: 'Screen',
      device: 'iPhone 13 Pro',
      image: screenRepairImg,
      badgeText: 'Pristine OLED Fitment',
      description: 'Customer brought in an iPhone with shattered glass and green lines across the panel. Replaced with genuine OEM-grade Super Retina display panel preserving 120Hz ProMotion and True Tone calibration.',
    },
    {
      id: 'g2',
      title: 'Degraded Battery Replaced',
      category: 'Battery',
      device: 'Samsung Galaxy S22',
      image: batteryImg,
      badgeText: '100% Health Restored',
      description: 'Customer experienced device shutting down at 35% battery with swollen back cover. Fitted with a brand-new high capacity battery cell and original heat-seal adhesive gasket.',
    },
    {
      id: 'g3',
      title: 'Microscope Chip-Level Soldering',
      category: 'Hardware',
      device: 'Xiaomi 11T Pro',
      image: microscopeImg,
      badgeText: 'Motherboard IC Repair',
      description: 'Power IC line short circuit diagnosed under optical microscope. Clean microscopic re-balling and component swap restored full power without data loss.',
    },
    {
      id: 'g4',
      title: 'Cracked Screen → Brand New Display',
      category: 'Before & After',
      device: 'OnePlus 11 5G',
      image: screenRepairImg,
      badgeText: 'Zero Flaw Finish',
      description: 'Edge-to-edge curved AMOLED glass restoration with precision UV optical glue and laser alignment. Touch latency and fingerprint unlock tested 100% functional.',
    },
    {
      id: 'g5',
      title: 'Precision Workbench Diagnostics',
      category: 'Hardware',
      device: 'iPad Pro 11"',
      image: heroRepairImg,
      badgeText: 'Bench Inspection',
      description: 'Careful teardown of multi-layer tablet flex ribbons and USB-C power delivery rails on our anti-static ESD workbench.',
    },
    {
      id: 'g6',
      title: 'Swollen Cell → Fresh OEM Battery',
      category: 'Before & After',
      device: 'iPhone 12',
      image: batteryImg,
      badgeText: 'Safe Replacement',
      description: 'Battery health degraded to 68%. Replaced within 30 minutes, programmed with battery cycle verification, restoring all-day battery life.',
    },
  ];

  const categories = ['All', 'Screen', 'Battery', 'Hardware', 'Before & After'];

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
              Verified Workmanship
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
              Repair Gallery & Results
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl">
              Inspect our high-precision repair bench results. Every device is tested under strict quality control standards.
            </p>
          </div>

          {/* Category Filter Tabs (Zero-pill discipline: segmented control buttons) */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1 p-1 bg-neutral-200/70 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === cat
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col"
            >
              <div className="relative aspect-4/3 bg-neutral-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/30 transition-colors" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300 block">
                    {item.badgeText}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                    <span>{item.device}</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>View Case Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-neutral-100">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-900/80 text-white flex items-center justify-center hover:bg-neutral-900 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1">
                <span>{activeModalItem.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeModalItem.device}</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-neutral-900">
                {activeModalItem.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-neutral-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Tested & Quality Inspected</span>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
