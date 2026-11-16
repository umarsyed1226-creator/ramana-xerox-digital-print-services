import React from 'react';
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone, Clock } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: 'home' | 'products' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  return (
    <footer className="w-full bg-[#07193b] text-slate-300 border-t border-blue-900/80 pt-12 pb-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-blue-900/60">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            {/* Yellow background with dark blue text as requested */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-yellow-400 text-blue-950 font-black shadow-xs">
              <img
                src="https://ik.imagekit.io/d2kpqgzni/b5e2cd19-5b8a-4e3d-b55b-064b077402cd.png"
                alt="Ramana Xerox Icon"
                className="w-7 h-7 object-contain shrink-0"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== "/src/assets/images/ramana_icon_custom.png") {
                    target.src = "/src/assets/images/ramana_icon_custom.png";
                  }
                }}
              />
              <span className="uppercase tracking-wide text-sm font-black">RAMANA XEROX</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              உங்கள் நம்பகமான ஜெராக்ஸ் மற்றும் பிரிண்டிங் மையம். Premium document printing, fast photocopying, and binding services made with love.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/ramanaxerox?utm_source=qr&exln=YXE1NnBnemRrcTdq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ramana Xerox Instagram Profile"
                className="w-10 h-10 rounded-xl bg-[#0f2038] hover:bg-yellow-400 hover:text-blue-950 text-yellow-300 flex items-center justify-center transition-colors border border-blue-900"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#0f2038] hover:bg-yellow-400 hover:text-blue-950 text-yellow-300 flex items-center justify-center transition-colors border border-blue-900">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#0f2038] hover:bg-yellow-400 hover:text-blue-950 text-yellow-300 flex items-center justify-center transition-colors border border-blue-900">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="mailto:ramanaxerox20@gmail.com" className="w-10 h-10 rounded-xl bg-[#0f2038] hover:bg-yellow-400 hover:text-blue-950 text-yellow-300 flex items-center justify-center transition-colors border border-blue-900">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="https://www.instagram.com/ramanaxerox?utm_source=qr&exln=YXE1NnBnemRrcTdq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] text-yellow-400 hover:underline font-bold pt-1"
            >
              Instagram: @ramanaxerox
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => onTabChange('home')} className="hover:text-yellow-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('products')} className="hover:text-yellow-400 transition-colors">
                  Products (Rubber Stamp, Spiral, etc.)
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('contact')} className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li><span className="hover:text-yellow-400 cursor-pointer transition-colors">FAQ & Printing Guide</span></li>
              <li><span className="hover:text-yellow-400 cursor-pointer transition-colors">Fast Delivery & Pickup</span></li>
              <li><span className="hover:text-yellow-400 cursor-pointer transition-colors">Bulk Order Rates</span></li>
              <li><span className="hover:text-yellow-400 cursor-pointer transition-colors">Terms & Conditions</span></li>
              <li><span className="hover:text-yellow-400 cursor-pointer transition-colors">Privacy Policy</span></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              CONTACT
            </h4>
            
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed space-y-1.5">
                  <div>
                    <p className="font-bold text-white">BRANCH 1 (CHIDAMBARAM):</p>
                    <p className="text-[11px] text-slate-300">No 1, Villangiamman Kovil Street, Chidambaram</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">BRANCH 2 (CHIDAMBARAM):</p>
                    <p className="text-[11px] text-slate-300">Shop no 3, Periya Gajiyar Street, Chidambaram</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">BRANCH 3 (BHUVANAGIRI):</p>
                    <p className="text-[11px] text-slate-300">AMH Complex, Shop no 2, Cuddalore Main Road, Bhuvanagiri (Near Apollo Pharmacy)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1 font-mono font-bold text-yellow-300 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span>+91 63817 26369</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span>04144 357456</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Mail className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span className="break-all">ramanaxerox20@gmail.com</span>
              </div>

              <div className="flex items-center gap-2 text-yellow-400 font-bold pt-1">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Open 9:00 AM · Closes 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-6 text-center text-xs text-slate-400">
          <p>© 2026 Ramana Xerox. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
