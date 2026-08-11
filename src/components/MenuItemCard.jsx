import React from 'react';
import classNames from 'classnames';

export default function MenuItemCard({ item, lang, onItemClick }) {
  return (
    <div 
      onClick={() => onItemClick(item)}
      className="relative magic-hover bg-black/60 rounded-[32px] p-4 neon-border shadow-sm hover:shadow-lg hover:shadow-pink-500/50 flex flex-col items-center justify-between text-center overflow-visible mt-12 mb-4 mx-2 cursor-pointer"
    >

      {/* Price Badge */}
      <div className={classNames(
        "absolute -top-6 -right-2 w-16 h-16 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-lg transform rotate-12 z-20",
        item.tagColor
      )}>
        <span className="text-xl leading-none">{item.price}</span>
        <span className="text-xs">NIS</span>
      </div>

      {/* Image Container (Simulated with a colored circle for now if image is missing) */}
      <div className={classNames(
        "w-32 h-32 rounded-full -mt-16 mb-4 shadow-inner border-4 border-white flex items-center justify-center z-10 overflow-hidden",
        item.color
      )}>
        {item.image ? (
          <img 
            src={item.image.startsWith('http') ? item.image : `/images/${item.image}`} 
            alt={item.name[lang]} 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
          />
        ) : null}
        <span className="text-4xl" style={{ display: item.image ? 'none' : 'block' }}>🍩</span>
      </div>

      {/* Item Name */}
      <h3 className={classNames(
        "text-lg font-bold mb-2 min-h-[3rem] flex items-center justify-center w-full px-2",
        "text-white neon-text"
      )}>
        {item.name[lang]}
      </h3>

      {/* The curved decorative bottom - like the packaging in the image */}
      <div className="w-full bg-gradient-to-r from-pink-900/60 via-purple-900/60 to-pink-900/60 rounded-b-2xl rounded-t-sm h-12 mt-2 flex items-center justify-center relative overflow-hidden shadow-inner neon-border border-t-0 border-l-0 border-r-0 border-b-2 border-pink-500/50">
        <span className="text-pink-300 font-black text-sm tracking-widest uppercase opacity-80">Fashafesho</span>
        {/* Small decorative stars/rainbows on packaging */}
        <span className="absolute left-2 top-2 text-[10px]">🌈</span>
        <span className="absolute right-2 bottom-2 text-[10px]">⭐</span>
      </div>
    </div>
  );
}
