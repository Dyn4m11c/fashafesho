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
    sauces: []
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
        <h4 className="text-xl font-bold text-gray-800 mb-3">{optionsData.title[lang]}</h4>
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
                    ? "bg-primary-pink border-primary-pink text-white shadow-md transform scale-105"
                    : "bg-white border-gray-200 text-gray-600 hover:border-primary-pink/50"
                )}
              >
                {opt.image && (
                  <img 
                    src={opt.image.startsWith('http') ? opt.image : `/images/${opt.image}`} 
                    alt={opt.name[lang]} 
                    className="w-6 h-6 rounded-full object-cover shrink-0 bg-white"
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
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[40px] shadow-2xl overflow-hidden flex flex-col transform animate-[scale-up_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        {/* Header / Item Info */}
        <div className={classNames("px-8 pt-10 pb-6 relative", item.color || "bg-pink-100")}>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center text-4xl shadow-inner bg-white shrink-0 overflow-hidden">
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
              <h2 className="text-3xl font-black text-gray-800 mb-2">{item.name[lang]}</h2>
              <div className="inline-block px-4 py-1 rounded-full text-white font-bold text-lg bg-gray-900/10 shadow-sm">
                {item.price} NIS
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Options Area */}
        <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
          {item.categoryId !== 'beverages' ? (
            <>
              {menuData.options.ice_cream && renderOptionGroup('ice_cream', menuData.options.ice_cream)}
              {renderOptionGroup('additions', menuData.options.additions)}
              {renderOptionGroup('fruits', menuData.options.fruits)}
              {renderOptionGroup('sauces', menuData.options.sauces)}
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
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between w-40 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
            >-</button>
            <span className="text-2xl font-bold flex-1 text-center text-gray-800 select-none">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
            >+</button>
          </div>

          <button 
            onClick={handleAddToCart}
            className="magic-hover w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
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
          background: #f1f1f1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; 
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
