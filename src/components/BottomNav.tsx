import React from 'react';
import { Home, Package, PhoneCall } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'products' | 'contact';
  onTabChange: (tab: 'home' | 'products' | 'contact') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-yellow-400 border-t border-yellow-500/60 shadow-2xl px-4 py-2 flex items-center justify-center gap-8">
      
      {/* Home Button */}
      <button
        onClick={() => onTabChange('home')}
        className={`flex flex-col items-center justify-center py-1 px-4 rounded-xl transition-all ${
          activeTab === 'home' ? 'bg-blue-950 text-yellow-300 font-black scale-105 shadow-xs' : 'text-blue-950 font-semibold hover:bg-yellow-300/80'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] uppercase tracking-wider font-extrabold">Home</span>
      </button>

      {/* Products Button */}
      <button
        onClick={() => onTabChange('products')}
        className={`flex flex-col items-center justify-center py-1 px-4 rounded-xl transition-all ${
          activeTab === 'products' ? 'bg-blue-950 text-yellow-300 font-black scale-105 shadow-xs' : 'text-blue-950 font-semibold hover:bg-yellow-300/80'
        }`}
      >
        <Package className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] uppercase tracking-wider font-extrabold">Products</span>
      </button>

      {/* Contact Button */}
      <button
        onClick={() => onTabChange('contact')}
        className={`flex flex-col items-center justify-center py-1 px-4 rounded-xl transition-all ${
          activeTab === 'contact' ? 'bg-blue-950 text-yellow-300 font-black scale-105 shadow-xs' : 'text-blue-950 font-semibold hover:bg-yellow-300/80'
        }`}
      >
        <PhoneCall className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] uppercase tracking-wider font-extrabold">Contact</span>
      </button>

    </div>
  );
};
