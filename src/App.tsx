import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ServicesList } from './components/ServicesList';
import { ProductsPage } from './components/ProductsPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { Printer } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'contact'>('home');

  useEffect(() => {
    // Trigger slide-in animation shortly after mount
    const timerAnim = setTimeout(() => {
      setAnimateIn(true);
    }, 100);

    // Hide splash screen after 2.4 seconds
    const timerHide = setTimeout(() => {
      setShowSplash(false);
    }, 2400);

    return () => {
      clearTimeout(timerAnim);
      clearTimeout(timerHide);
    };
  }, []);

  const imageUrl = "https://ik.imagekit.io/d2kpqgzni/WhatsApp%20Image%202026-11-10%20at%2012.18.33%20PM.jpeg";
  const localFallback = "/src/assets/images/ramana_banner_updated.jpeg";

  const marqueeItem = (
    <div className="flex items-center gap-6 sm:gap-8 px-4 font-black text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-white select-none whitespace-nowrap">
      <span className="flex items-center gap-1.5 text-yellow-300 font-extrabold">
        <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
        RAMANA XEROX
      </span>
      <span className="text-yellow-400">·</span>
      <span className="text-white">PDF PRINT ONLY ₹0.60 / PAGE</span>
      <span className="text-yellow-400">·</span>
      <span className="text-yellow-300">COLOUR XEROX</span>
      <span className="text-yellow-400">·</span>
      <span className="text-white">SPIRAL BINDING</span>
      <span className="text-yellow-400">·</span>
      <span className="text-yellow-300">LAMINATION</span>
      <span className="text-yellow-400">·</span>
      <span className="text-white">PVC CARD PRINTING</span>
      <span className="text-yellow-400">·</span>
      <span className="text-yellow-300">RUBBER STAMP MAKING</span>
      <span className="text-yellow-400">·</span>
      <span className="text-white">SPARE KEY MAKING</span>
      <span className="text-yellow-400">·</span>
      <span className="text-yellow-300">CAR KEY MAKING</span>
      <span className="text-yellow-400">·</span>
      <span className="text-yellow-300">உங்கள் நம்பகமான ஜெராக்ஸ் மையம்</span>
      <span className="text-yellow-400">·</span>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans text-slate-800 antialiased selection:bg-yellow-200 selection:text-blue-950 p-0 m-0 overflow-x-hidden pb-16 sm:pb-0">
      
      {/* Introductory Splash Screen Animation */}
      {showSplash && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-4 text-center"
          style={{ backgroundColor: 'rgb(252, 199, 0)' }}
        >
          {/* Custom Copier Icon above RAMANA XEROX text */}
          <img
            src="https://ik.imagekit.io/d2kpqgzni/b5e2cd19-5b8a-4e3d-b55b-064b077402cd.png"
            alt="Ramana Xerox"
            className={`w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 object-contain drop-shadow-lg mb-3 sm:mb-5 transform transition-all duration-700 ease-out ${
              animateIn ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== "/src/assets/images/ramana_icon_custom.png") {
                target.src = "/src/assets/images/ramana_icon_custom.png";
              }
            }}
          />

          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 text-5xl sm:text-7xl md:text-9xl font-black tracking-tight uppercase select-none leading-none">
            
            {/* RAMANA first (top) */}
            <span
              className={`text-blue-950 drop-shadow-sm transform transition-all duration-700 ease-out ${
                animateIn ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
              }`}
            >
              RAMANA
            </span>

            {/* XEROX second (bottom) */}
            <span
              className={`text-blue-950 drop-shadow-sm transform transition-all duration-700 ease-out delay-150 ${
                animateIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              XEROX
            </span>

          </div>
        </div>
      )}

      {/* Main Website Content (Hidden while splash is showing, appears after splash ends) */}
      {!showSplash && (
        <>
          {/* Full width Yellow Navbar with Dark Blue Ramana Xerox centered and Home/Products/Contact tabs */}
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Dynamic Page Switcher */}
          {activeTab === 'home' && (
            <main className="w-full flex-1 p-0 m-0 flex flex-col items-center">
              <div className="relative w-full p-0 m-0 overflow-hidden">
                <img
                  src={imageUrl}
                  alt="Ramana Xerox - Your Trusted Printing & Xerox Center"
                  className="w-full h-auto block object-cover sm:object-contain"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== localFallback) {
                      target.src = localFallback;
                    }
                  }}
                />

                {/* Dark Blue Scrolling Row (Marquee Ticker) */}
                <div className="absolute bottom-0 left-0 right-0 w-full h-[11.4%] min-h-[30px] sm:min-h-[44px] md:min-h-[58px] bg-[#07193b] border-t border-blue-900/80 shadow-inner flex items-center overflow-hidden z-20">
                  <div className="animate-marquee flex items-center shrink-0">
                    {marqueeItem}
                    {marqueeItem}
                  </div>
                </div>
              </div>

              {/* Services List with 3-column horizontal grid */}
              <ServicesList />
            </main>
          )}

          {activeTab === 'products' && (
            <main className="w-full flex-1">
              <ProductsPage />
            </main>
          )}

          {activeTab === 'contact' && (
            <main className="w-full flex-1">
              <ContactPage />
            </main>
          )}

          {/* Professional Footer in Dark Blue & Yellow */}
          <Footer onTabChange={setActiveTab} />

          {/* Mobile App-like Bottom Navigation Bar */}
          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </>
      )}

    </div>
  );
}
