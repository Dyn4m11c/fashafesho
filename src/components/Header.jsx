import React from 'react';
import { Sparkles, Heart, Wand2, ShoppingCart } from 'lucide-react';
import { menuData } from '../data/menuData';

export default function Header({ lang, onLogoClick, cartCount = 0, onCartClick }) {
  return (
    <header className="text-center py-10 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-10 w-24 h-24 bg-primary-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-10 w-24 h-24 bg-primary-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-24 h-24 bg-accent-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Cart Button */}
      <button 
        onClick={(e) => { e.stopPropagation(); onCartClick && onCartClick(); }}
        className="absolute top-8 right-8 rtl:left-8 rtl:right-auto z-20 bg-black/60 neon-border rounded-full p-3 text-white hover:bg-black/80 transition-transform hover:scale-105"
      >
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 rtl:-left-1 rtl:-right-auto bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </button>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-4" onClick={onLogoClick}>
        <div className="flex items-center space-x-3 text-primary-pink">
          <Sparkles className="w-8 h-8 animate-pulse text-[#ff007f]" />
          <h1 className="text-5xl md:text-6xl font-black neon-text px-4" style={{lineHeight: '1.4'}}>
            {menuData.header.title[lang]}
          </h1>
          <Heart className="w-8 h-8 animate-bounce text-[#ff007f]" />
        </div>
        <p className="text-lg md:text-xl font-medium text-gray-300 flex items-center">
          <Wand2 className="w-5 h-5 mr-2 text-accent-yellow" />
          {lang === 'ar' ? 'ميني لذيذة .. قرمشة ساحرة!' : 
           lang === 'he' ? 'מיני טעים .. פריכות קסומה!' : 
           'Delicious Mini .. Magical Crunch!'}
          <Wand2 className="w-5 h-5 ml-2 text-accent-yellow" />
        </p>
      </div>
    </header>
  );
}
