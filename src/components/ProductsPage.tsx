import React from 'react';
import { MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const products = [
    {
      id: 'rubber-stamp',
      title: 'Rubber Stamp Making',
      titleTa: 'ரப்பர் ஸ்டாம்ப் தயாரித்தல்',
      description: 'Custom self-inking stamps, wooden handle seals, pocket stamps, round office seals & date stamps made with laser precision in 5 minutes.',
      image: 'https://ik.imagekit.io/d2kpqgzni/5732bc10-fbf6-4fc1-8b53-4a4224d602eb.png',
      price: '₹50 onwards',
      features: ['Ready in 5 Minutes', 'Self-Inking & Wooden', 'Round Office Seals', 'Red, Blue & Black Ink'],
    },
    {
      id: 'spiral-binding',
      title: 'Spiral Binding',
      titleTa: 'ஸ்பைரல் பைண்டிங்',
      description: 'Professional plastic spiral and wire-o binding with clear protective front sheet for college projects, reports, and academic records.',
      image: 'https://ik.imagekit.io/d2kpqgzni/3a674218-d74e-4c9a-9d53-b12515e0f531.png',
      price: '₹30 onwards',
      features: ['Clear Transparent Sheet', 'Durable Color Backing', 'College Project Standards', 'Quick Same-Day Binding'],
    },
    {
      id: 'color-xerox',
      title: 'Color Xerox & Print',
      titleTa: 'கலர் ஜெராக்ஸ் & பிரிண்ட்',
      description: 'High-speed laser color photocopying and photographic quality document printing on bond and glossy paper.',
      image: 'https://ik.imagekit.io/d2kpqgzni/5c11d00b-7eb6-4dac-8049-81a7e684ba8b.png',
      price: '₹5 / page onwards',
      features: ['High-DPI Laser Quality', '75 to 250 GSM Paper', 'Single & Double Sided', 'Vibrant Color Accuracy'],
    },
    {
      id: 'spare-key',
      title: 'Spare Key Making',
      titleTa: 'சாவி நகல் தயாரித்தல்',
      description: 'Computerized duplicate key cutting for two-wheelers, cars, godrej locks, shutter keys & house padlocks in 5 minutes.',
      image: 'https://ik.imagekit.io/d2kpqgzni/c9c9f2f0-13f5-4925-ae5b-9eaf0aeccba5.png',
      price: '₹50 onwards',
      features: ['Instant 5-Minute Cutting', 'Bike & Car Keys', 'Godrej & Padlock Keys', 'Tested for Smooth Fit'],
    },
    {
      id: 'car-key',
      title: 'Car Key Making',
      titleTa: 'கார் சாவி தயாரித்தல்',
      description: 'Computerized laser car key cutting, remote flip key shell replacement, sensor transponder chip duplication and programming for all car models.',
      image: 'https://ik.imagekit.io/d2kpqgzni/9dcf660f-baa6-4360-80eb-d6ea23b7adc8.png',
      price: '₹600 onwards',
      features: ['Laser CNC Key Cutting', 'Flip Key Shells Available', 'Transponder & Remote Keys', 'All Car Brands Supported'],
    },
    {
      id: 'pvc-card',
      title: 'PVC Card Printing',
      titleTa: 'பிவிசி கார்டு அச்சு',
      description: 'High quality waterproof plastic PVC printing for Aadhaar Card, PAN Card, Voter ID, Driving License & Employee Badges.',
      image: 'https://ik.imagekit.io/d2kpqgzni/f18cf6bd-a7ed-4334-ad9d-f2f06f9ddade.png',
      price: '₹50 / card',
      features: ['Waterproof & Durable', 'Aadhaar & PAN Smart Cards', 'Student & Employee Badges', 'Original HD Print'],
    },
    {
      id: 'lamination',
      title: 'Lamination',
      titleTa: 'லேமினேஷன்',
      description: 'Heavy duty hot thermal pouch lamination for mark sheets, certificates, patta deeds, menus & Aadhaar cards.',
      image: 'https://ik.imagekit.io/d2kpqgzni/b1aedb90-0870-4cab-a8a1-ada4bcf3ce5a.png',
      price: '₹20 onwards',
      features: ['125 Micron Thick Pouch', 'Bubble-Free Seal', 'Moisture & Dust Protection', 'ID to A3 Size Available'],
    },
    {
      id: 'photo-framing',
      title: 'Photo Framing',
      titleTa: 'புகைப்படம் ஃபிரேமிங்',
      description: 'High quality wooden and synthetic photo frames for family portraits, god pictures, and memories with glass protection.',
      image: 'https://ik.imagekit.io/d2kpqgzni/b16ff0e8-c415-4dd0-a212-623668fccab8.png',
      price: '₹100 onwards',
      features: ['Premium Wooden Finish', 'Glass & Back Support', 'Custom Sizes Available', 'Long Lasting Durability'],
    },
  ];

  return (
    <div className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-blue-950 text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-950" />
            Ramana Xerox Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Our Products & Services
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            அனைத்து வகையான ஜெராக்ஸ், ஸ்டாம்ப், சாவி மற்றும் ஃபிரேமிங் சேவைகளின் விலை மற்றும் விவரங்கள்.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const orderMsg = `Hello Ramana Xerox!

*New Order Enquiry:*
📌 *Product:* ${p.title} (${p.titleTa})
💰 *Price:* ${p.price}
📝 *Details:* ${p.description}

Please let me know how to send the file and confirm my order.`;

            return (
              <div
                key={p.id}
                className="w-full bg-white rounded-2xl border-2 border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:border-yellow-400 transition-all duration-200"
              >
                <div>
                  {/* Card Header Bar */}
                  <div className="bg-yellow-400 px-4 py-2.5 border-b border-yellow-500/40 flex items-center justify-between">
                    <span className="font-black text-sm text-blue-950 uppercase tracking-wide truncate">
                      {p.title}
                    </span>
                    <span className="text-xs font-extrabold text-blue-950 bg-yellow-300 px-2 py-0.5 rounded shrink-0">
                      {p.price}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="w-full bg-slate-100 p-2 sm:p-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-48 object-cover rounded-xl border border-slate-200"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Description */}
                  <div className="p-4 sm:p-5">
                    <div className="text-xs font-bold text-blue-900 mb-1">
                      {p.titleTa}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {p.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Order Button with rich product details */}
                <div className="p-4 pt-0">
                  <a
                    href={`https://wa.me/916381726369?text=${encodeURIComponent(orderMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
