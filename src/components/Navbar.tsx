import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'products' | 'contact';
  onTabChange: (tab: 'home' | 'products' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectTab = (tab: 'home' | 'products' | 'contact') => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-yellow-400 border-b border-yellow-500/40 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand: "Ramana Xerox" with custom icon on YELLOW Navbar */}
          <button
            onClick={() => handleSelectTab('home')}
            className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-blue-950 hover:text-blue-900 transition-colors text-left"
          >
            <img
              src="https://ik.imagekit.io/d2kpqgzni/b5e2cd19-5b8a-4e3d-b55b-064b077402cd.png"
              alt="Ramana Xerox Icon"
              className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain shrink-0 drop-shadow-xs"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== "/src/assets/images/ramana_icon_custom.png") {
                  target.src = "/src/assets/images/ramana_icon_custom.png";
                }
              }}
            />
            <span className="uppercase tracking-wide font-extrabold whitespace-nowrap">
              Ramana Xerox
            </span>
          </button>

          {/* Desktop & Tablet Navigation Buttons (Visible on sm and above) */}
          <nav className="hidden sm:flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-extrabold">
            <button
              onClick={() => handleSelectTab('home')}
              className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'home'
                  ? 'bg-blue-950 text-yellow-300 shadow-xs'
                  : 'text-blue-950 hover:bg-yellow-300/60'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleSelectTab('products')}
              className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'products'
                  ? 'bg-blue-950 text-yellow-300 shadow-xs'
                  : 'text-blue-950 hover:bg-yellow-300/60'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => handleSelectTab('contact')}
              className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'contact'
                  ? 'bg-blue-950 text-yellow-300 shadow-xs'
                  : 'text-blue-950 hover:bg-yellow-300/60'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-yellow-300 text-blue-950 hover:bg-yellow-200 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-yellow-400 border-t border-yellow-500/50 px-4 pt-2 pb-4 space-y-1.5 shadow-md">
          <button
            onClick={() => handleSelectTab('home')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-black transition-colors ${
              activeTab === 'home'
                ? 'bg-blue-950 text-yellow-300'
                : 'text-blue-950 hover:bg-yellow-300/60'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleSelectTab('products')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-black transition-colors ${
              activeTab === 'products'
                ? 'bg-blue-950 text-yellow-300'
                : 'text-blue-950 hover:bg-yellow-300/60'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleSelectTab('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-black transition-colors ${
              activeTab === 'contact'
                ? 'bg-blue-950 text-yellow-300'
                : 'text-blue-950 hover:bg-yellow-300/60'
            }`}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
