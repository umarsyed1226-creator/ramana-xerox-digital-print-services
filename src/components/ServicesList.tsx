import React from 'react';

export const ServicesList: React.FC = () => {
  const rubberStampUrl = "https://ik.imagekit.io/d2kpqgzni/5732bc10-fbf6-4fc1-8b53-4a4224d602eb.png";
  const rubberStampFallback = "/src/assets/images/rubber_stamp_custom.png";

  const spiralBindingUrl = "https://ik.imagekit.io/d2kpqgzni/3a674218-d74e-4c9a-9d53-b12515e0f531.png";
  const spiralBindingFallback = "/src/assets/images/spiral_binding_custom.png";

  const colorXeroxUrl = "https://ik.imagekit.io/d2kpqgzni/5c11d00b-7eb6-4dac-8049-81a7e684ba8b.png";
  const colorXeroxFallback = "/src/assets/images/color_xerox_custom.png";

  const spareKeyUrl = "https://ik.imagekit.io/d2kpqgzni/c9c9f2f0-13f5-4925-ae5b-9eaf0aeccba5.png";
  const spareKeyFallback = "/src/assets/images/spare_key_custom.png";

  const pvcCardUrl = "https://ik.imagekit.io/d2kpqgzni/f18cf6bd-a7ed-4334-ad9d-f2f06f9ddade.png";
  const pvcCardFallback = "/src/assets/images/pvc_card_custom.png";

  const laminationUrl = "https://ik.imagekit.io/d2kpqgzni/b1aedb90-0870-4cab-a8a1-ada4bcf3ce5a.png";
  const laminationFallback = "/src/assets/images/lamination_custom.png";

  const photoFramingUrl = "https://ik.imagekit.io/d2kpqgzni/b16ff0e8-c415-4dd0-a212-623668fccab8.png";
  const photoFramingFallback = "/src/assets/images/photo_framing_custom.png";

  const carKeyUrl = "https://ik.imagekit.io/d2kpqgzni/9dcf660f-baa6-4360-80eb-d6ea23b7adc8.png";
  const carKeyFallback = "/src/assets/images/car_key_making_custom.png";

  const services = [
    {
      id: 'rubber-stamp',
      title: 'Rubber Stamp Making',
      titleTa: 'ரப்பர் ஸ்டாம்ப்',
      imageUrl: rubberStampUrl,
      fallbackUrl: rubberStampFallback,
      whatsappMsg: 'Hello Ramana Xerox! I want to order *Rubber Stamp Making* (ரப்பர் ஸ்டாம்ப் தயாரித்தல் - Starting ₹50, Ready in 5 Minutes). Please share seal design templates & pricing.',
    },
    {
      id: 'spiral-binding',
      title: 'Spiral Binding',
      titleTa: 'ஸ்பைரல் பைண்டிங்',
      imageUrl: spiralBindingUrl,
      fallbackUrl: spiralBindingFallback,
      whatsappMsg: 'Hello Ramana Xerox! I want to order *Spiral Binding* (ஸ்பைரல் பைண்டிங்) for project/record. Please share details & pricing.',
    },
    {
      id: 'color-xerox',
      title: 'Color Xerox',
      titleTa: 'கலர் ஜெராக்ஸ்',
      imageUrl: colorXeroxUrl,
      fallbackUrl: colorXeroxFallback,
      whatsappMsg: 'Hello Ramana Xerox! I want to order *Color Xerox & Print* (கலர் ஜெராக்ஸ் & பிரிண்ட்). Please share pricing & how to send the file.',
    },
    {
      id: 'spare-key',
      title: 'Spare Key Making',
      titleTa: 'சாவி நகல் தயாரித்தல்',
      imageUrl: spareKeyUrl,
      fallbackUrl: spareKeyFallback,
      whatsappMsg: 'Hello Ramana Xerox! I want to order *Spare Key Making* (சாவி நகல் தயாரித்தல்). Please share key duplication details.',
    },
    {
      id: 'car-key',
      title: 'Car Key Making',
      titleTa: 'கார் சாவி தயாரித்தல்',
      imageUrl: carKeyUrl,
      fallbackUrl: carKeyFallback,
      whatsappMsg: 'Hello Ramana Xerox! I want to order *Car Key Making* (கார் சாவி தயாரித்தல் - Starting ₹600). Please share car key duplication & programming details.',
    },
    {
      id: 'pvc-card',
      title: 'PVC Card Printing',
      titleTa: 'பிவிசி கார்டு அச்சு',
      imageUrl: pvcCardUrl,
      fallbackUrl: pvcCardFallback,
      whatsappMsg: 'Hello Ramana Xerox! I want to order *PVC Card Printing* (பிவிசி கார்டு அச்சு - Aadhaar / PAN / Smart Card). Please share pricing & how to send the file.',
    },
    {
      id: 'lamination',
      title: 'Lamination',
      titleTa: 'லேமினேஷன்',
      imageUrl: laminationUrl,
      fallbackUrl: laminationFallback,
      whatsappMsg: 'Hello Ramana Xerox! I want to order *Lamination* (லேமினேஷன்). Please share details & available sizes.',
    },
    {
      id: 'photo-framing',
      title: 'Photo Framing',
      titleTa: 'புகைப்படம் ஃபிரேமிங்',
      imageUrl: photoFramingUrl,
      fallbackUrl: photoFramingFallback,
      whatsappMsg: 'Hello Ramana Xerox! I want to order *Photo Framing* (புகைப்படம் ஃபிரேமிங் - Starting ₹100). Please share frame sizes & pricing.',
    },
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-10 px-3 sm:px-6 md:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Main Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Ramana Xerox Service
          </h2>
        </div>

        {/* 
          Responsive Grid: 
          - Mobile screens: Vertical (1 column stacked)
          - Tablet/Desktop full screen: 3 horizontal columns per row
        */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full bg-white rounded-2xl border-2 border-slate-300/80 shadow-md overflow-hidden flex flex-col justify-between"
            >
              {/* Box Navbar */}
              <div className="w-full bg-yellow-400 px-4 py-3 border-b border-yellow-500/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-950 text-yellow-400 flex items-center justify-center font-black text-xs shrink-0">
                    RX
                  </div>
                  <span className="font-black text-sm sm:text-base text-blue-950 uppercase tracking-wide">
                    {service.title}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-blue-950 bg-yellow-300/90 px-2 py-0.5 rounded border border-yellow-500/40">
                  {service.titleTa}
                </span>
              </div>

              {/* Product Image inside the Box */}
              <div className="w-full bg-slate-50 p-2.5 sm:p-3 flex items-center justify-center flex-1">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} - Ramana Xerox`}
                  className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl border border-slate-200 shadow-2xs block"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== service.fallbackUrl) {
                      target.src = service.fallbackUrl;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
