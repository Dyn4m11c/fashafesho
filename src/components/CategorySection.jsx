import React from 'react';
import MenuItemCard from './MenuItemCard';

export default function CategorySection({ category, lang, onItemClick }) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Category Title Banner */}
      <div className="flex flex-col items-center justify-center mb-16 relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-full py-3 px-12 shadow-sm border-2 border-primary-pink/20 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-primary-pink text-center drop-shadow-sm">
            {category.title[lang]}
          </h2>
        </div>
        
        {/* Subtitle Ribbon */}
        {category.subtitle[lang] && (
          <div className="bg-primary-pink text-white py-1 px-8 rounded-full -mt-4 z-20 text-sm md:text-base font-medium shadow-md flex items-center space-x-2">
            <span>✨</span>
            <span>{category.subtitle[lang]}</span>
            <span>✨</span>
          </div>
        )}
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} lang={lang} onItemClick={onItemClick} />
        ))}
      </div>
    </section>
  );
}
