import React, { useState } from 'react';
import classNames from 'classnames';
import { menuData } from '../data/menuData';

export default function ItemModal({ item, lang, onClose, dir, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  // Local state to keep track of selected options
  const [selectedOptions, setSelectedOptions] = useState({
    ice_cream: [],
    additions: [],
    fruits: [],
    sauces: [],
    mojito_base: [],
    mojito_flavors: []
  });

  const calculatePrice = () => {
    let baseTotal = item.price * quantity;
    const additionsCount = selectedOptions.additions.length;
    if (additionsCount > 2) {
      baseTotal += (additionsCount - 2) * 2;
    }
    return baseTotal;
  };

  const totalPrice = calculatePrice();

  const handleAddToCart = () => {
    const cartItem = {
      id: Math.random().toString(36).substring(2, 9),
      item: item,
      selectedOptions: selectedOptions,
      quantity: quantity,
      totalPrice: totalPrice,
    };
    if (onAddToCart) onAddToCart(cartItem);
    onClose();
  };

  const handleOptionToggle = (category, optionId) => {
    setSelectedOptions(prev => {
      const current = prev[category];
      if (current.includes(optionId)) {
        return { ...prev, [category]: current.filter(id => id !== optionId) };
      } else {
        return { ...prev, [category]: [...current, optionId] };
      }
    });
  };

  const renderOptionGroup = (categoryKey, optionsData) => {
    return (
      <div className="mb-6">
        <h4 className="text-xl font-bold text-pink-400 mb-3">{optionsData.title[lang]}</h4>
        <div className="flex flex-wrap gap-2">
          {optionsData.items.map(opt => {
            const isSelected = selectedOptions[categoryKey].includes(opt.id);
            return (
              <button
                key={opt.id}
                onClick={() => handleOptionToggle(categoryKey, opt.id)}
                className={classNames(
                  "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200",
                  isSelected
                    ? "bg-[#ff007f]/20 border-[#ff007f] text-white shadow-[0_0_10px_#ff007f] transform scale-105"
                    : "bg-black/50 border-pink-900/50 text-gray-300 hover:border-[#ff007f]/50 hover:text-white"
                )}
              >
                {opt.image && (
                  <img 
                    src={opt.image.startsWith('http') ? opt.image : `/images/${opt.image}`} 
                    alt={opt.name[lang]} 
                    className="w-6 h-6 rounded-full object-cover shrink-0 bg-black/50"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                <span>{opt.name[lang]}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={dir}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#0d0517] neon-border w-full max-w-2xl max-h-[90vh] rounded-[40px] shadow-[0_0_30px_rgba(255,0,127,0.3)] overflow-hidden flex flex-col transform animate-[scale-up_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-10 w-10 h-10 bg-black/60 neon-border rounded-full flex items-center justify-center text-white hover:bg-black/80 hover:text-pink-400 transition-colors shadow-sm"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        {/* Header / Item Info */}
        <div className="px-8 pt-10 pb-6 relative bg-black/40 border-b border-pink-900/50">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="w-24 h-24 rounded-full border-4 border-[#ff007f] shadow-[0_0_15px_#ff007f] flex items-center justify-center text-4xl shadow-inner bg-black shrink-0 overflow-hidden">
               {item.image ? (
                 <img 
                   src={item.image.startsWith('http') ? item.image : `/images/${item.image}`} 
                   alt={item.name[lang]} 
                   className="w-full h-full object-cover"
                   onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                 />
               ) : null}
               <span style={{ display: item.image ? 'none' : 'block' }}>🍩</span>
            </div>
            <div>
              <h2 className="text-3xl font-black text-white neon-text mb-2">{item.name[lang]}</h2>
              <div className="inline-block px-4 py-1 rounded-full text-white font-bold text-lg bg-black/60 neon-border shadow-sm">
                {item.price} NIS
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Options Area */}
        <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
          {item.id === 'mojito' ? (
            <>
              {menuData.options.mojito_base && renderOptionGroup('mojito_base', menuData.options.mojito_base)}
              {menuData.options.mojito_flavors && renderOptionGroup('mojito_flavors', menuData.options.mojito_flavors)}
            </>
          ) : item.categoryId !== 'beverages' ? (
            <>
              {renderOptionGroup('sauces', menuData.options.sauces)}
              {renderOptionGroup('additions', menuData.options.additions)}
              {renderOptionGroup('fruits', menuData.options.fruits)}
              {menuData.options.ice_cream && 
               !['crepe_regular', 'crepe_sushi', 'crepe_fettuccine', 'churros_tear', 'churros_balls', 'churros_6', 'donut', 'fashafesh_1', 'fashafesh_box'].includes(item.id) && 
               renderOptionGroup('ice_cream', menuData.options.ice_cream)}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 font-medium text-lg text-center">
                {lang === 'ar' ? 'لا توجد إضافات متوفرة للمشروبات' : lang === 'he' ? 'אין תוספות זמינות למשקאות' : 'No additions available for beverages'}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-pink-900/50 bg-[#0a0311] flex justify-between items-center gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between w-40 bg-black/60 border border-[#ff007f]/50 rounded-full p-1 shadow-[0_0_10px_rgba(255,0,127,0.2)]">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold text-pink-500 hover:bg-[#ff007f]/20 transition-colors"
            >-</button>
            <span className="text-2xl font-bold flex-1 text-center text-white select-none">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold text-pink-500 hover:bg-[#ff007f]/20 transition-colors"
            >+</button>
          </div>

          <button 
            onClick={handleAddToCart}
            className="magic-hover w-full md:w-auto px-8 py-3 bg-black/60 neon-border text-white font-bold rounded-2xl shadow-lg hover:shadow-[0_0_20px_#ff007f] transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            <span>
              {lang === 'ar' ? 'أضف إلى السلة' : lang === 'he' ? 'הוסף לסל' : 'Add to Cart'}
            </span>
            <span>-</span>
            <span>{totalPrice} NIS</span>
          </button>
        </div>
      </div>
      
      {/* CSS for custom scrollbar and animation */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a0b2e; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff007f; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af; 
        }
        @keyframes scale-up {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
