import React from 'react';
import { Home, MessageSquare, Plus, Scissors, ShoppingBag } from 'lucide-react';

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
      <div className="flex flex-col items-center text-[#E91E63]">
        <Home className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">Ana Sayfa</span>
      </div>
      <div className="flex flex-col items-center text-gray-400">
        <MessageSquare className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">Mesajlar</span>
      </div>
      <div className="relative -top-8">
        <button className="bg-[#E91E63] p-4 rounded-full shadow-xl shadow-pink-200 text-white border-[6px] border-gray-50 active:scale-95 transition-transform">
          <Plus className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col items-center text-gray-400">
        <Scissors className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">Tasarım</span>
      </div>
      <div className="flex flex-col items-center text-gray-400">
        <ShoppingBag className="w-6 h-6" />
        <span className="text-[10px] mt-1 font-medium">Siparişlerim</span>
      </div>
    </nav>
  );
};

export default BottomNavigation;