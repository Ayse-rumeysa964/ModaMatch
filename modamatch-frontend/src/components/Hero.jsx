import React from 'react';
import heroImg from '../assets/hero.jpeg';

const Hero = () => {
  return (
    <div className="px-6 mt-4">
      <div className="bg-[#fdf2e9] rounded-3xl p-8 relative overflow-hidden flex items-center min-h-[320px]">
        <div className="z-10 max-w-[55%]">
          <h2 className="text-3xl font-serif leading-tight text-gray-800">
            Tarzınla<br />Eşleşen<br />Fırsatları <span className="text-[#E91E63]">Keşfet!</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            Binlerce terzi ve tasarımcı seni bekliyor.
          </p>
          <button className="mt-6 bg-[#E91E63] text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-pink-100 hover:bg-pink-600 transition-all">
            Hemen Keşfet
          </button>
        </div>
        <div className="absolute right-[-20px] bottom-0 h-full w-[50%] flex items-end">
           <img src={heroImg} alt="Moda Tasarım" className="object-contain h-[90%] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;