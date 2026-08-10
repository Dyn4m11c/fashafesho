import React from 'react';
import classNames from 'classnames';

export default function MenuItemCard({ item, lang, onItemClick }) {
  return (
    <div 
      onClick={() => onItemClick(item)}
      className="relative magic-hover bg-white rounded-[32px] p-4 shadow-sm border-[3px] border-transparent hover:border-primary-pink/30 flex flex-col items-center justify-between text-center overflow-visible mt-12 mb-4 mx-2 cursor-pointer"
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
        "text-gray-700"
      )}>
        {item.name[lang]}
      </h3>

      {/* The curved decorative bottom - like the packaging in the image */}
      <div className="w-full bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 rounded-b-2xl rounded-t-sm h-12 mt-2 flex items-center justify-center relative overflow-hidden shadow-inner">
        <span className="text-orange-800/40 font-black text-sm tracking-widest uppercase opacity-70">Fashafesho</span>
        {/* Small decorative stars/rainbows on packaging */}
        <span className="absolute left-2 top-2 text-[10px]">🌈</span>
        <span className="absolute right-2 bottom-2 text-[10px]">⭐</span>
      </div>
    </div>
  );
}
