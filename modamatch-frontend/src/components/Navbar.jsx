import React from 'react';
import { Bell, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
      <button className="p-2 text-gray-700">
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="text-2xl font-serif font-bold text-[#8B5E3C]">ModaMatch</h1>
      <div className="relative cursor-pointer">
        <Bell className="w-6 h-6 text-gray-700" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>
      </div>
    </header>
  );
};

export default Navbar;