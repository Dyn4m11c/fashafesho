import React, { useState } from 'react';
import classNames from 'classnames';
import { Trash2, ShoppingBag } from 'lucide-react';
import { menuData } from '../data/menuData';

export default function CartModal({ cart, lang, onClose, dir, onRemoveItem, onEmptyCart }) {
  const [showConfirmEmpty, setShowConfirmEmpty] = useState(false);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  // Helper to get option name based on id and category
  const getOptionName = (categoryId, optionId) => {
    const category = menuData.options[categoryId];
    if (!category) return optionId;
    const item = category.items.find(i => i.id === optionId);
    return item ? item.name[lang] : optionId;
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

        {/* Header */}
        <div className="px-8 pt-10 pb-6 relative bg-gray-50 border-b border-gray-100">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="w-16 h-16 bg-primary-pink/10 text-primary-pink rounded-2xl flex items-center justify-center">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-800">
                {lang === 'ar' ? 'سلة المشتريات' : lang === 'he' ? 'סל קניות' : 'Shopping Cart'}
              </h2>
              <p className="text-gray-500 font-medium">
                {cart.length} {lang === 'ar' ? 'عناصر' : lang === 'he' ? 'פריטים' : 'items'}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Cart Items Area */}
        <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar bg-white">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p className="text-xl font-bold">
                {lang === 'ar' ? 'السلة فارغة' : lang === 'he' ? 'הסל ריק' : 'Cart is empty'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((cartItem) => (
                <div key={cartItem.id} className="flex items-start justify-between p-4 rounded-2xl border-2 border-gray-50 bg-gray-50/50">
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <div className={classNames("w-16 h-16 rounded-xl flex items-center justify-center text-2xl shrink-0 overflow-hidden", cartItem.item.color || "bg-pink-100")}>
                       {cartItem.item.image ? (
                         <img 
                           src={cartItem.item.image.startsWith('http') ? cartItem.item.image : `/images/${cartItem.item.image}`} 
                           alt={cartItem.item.name[lang]} 
                           className="w-full h-full object-cover"
                           onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                         />
                       ) : null}
                       <span style={{ display: cartItem.item.image ? 'none' : 'block' }}>🍩</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        {cartItem.quantity > 1 ? (
                          <span className="text-primary-pink mr-1 rtl:ml-1 rtl:mr-0">{cartItem.quantity}x </span>
                        ) : null}
                        {cartItem.item.name[lang]}
                      </h4>
                      <p className="text-primary-purple font-bold">{cartItem.totalPrice} NIS</p>
                      
                      {/* Selected Options Summary */}
                      <div className="mt-2 space-y-1">
                        {Object.entries(cartItem.selectedOptions).map(([category, options]) => {
                          if (options.length === 0) return null;
                          return (
                            <p key={category} className="text-sm text-gray-500">
                              <span className="font-semibold text-gray-700 capitalize">{category}: </span>
                              {options.map(opt => getOptionName(category, opt)).join(', ')}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(cartItem.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-gray-500">
              {lang === 'ar' ? 'المجموع:' : lang === 'he' ? 'סך הכל:' : 'Total:'}
            </span>
            <span className="text-3xl font-black text-gray-900">{totalCartPrice} NIS</span>
          </div>

          <div className="flex space-x-4 rtl:space-x-reverse">
            {showConfirmEmpty ? (
              <div className="flex w-full items-center justify-between bg-red-50 p-2 rounded-2xl border border-red-100">
                <span className="text-red-600 font-bold px-4">
                  {lang === 'ar' ? 'هل أنت متأكد؟' : lang === 'he' ? 'האם אתה בטוח?' : 'Are you sure?'}
                </span>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <button 
                    onClick={() => setShowConfirmEmpty(false)}
                    className="px-4 py-2 bg-white text-gray-600 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    {lang === 'ar' ? 'إلغاء' : lang === 'he' ? 'ביטול' : 'Cancel'}
                  </button>
                  <button 
                    onClick={() => {
                      onEmptyCart();
                      setShowConfirmEmpty(false);
                    }}
                    className="px-4 py-2 bg-red-500 text-white font-bold rounded-xl shadow-sm hover:bg-red-600 transition-colors"
                  >
                    {lang === 'ar' ? 'نعم، أفرغ' : lang === 'he' ? 'כן, רוקן' : 'Yes, Empty'}
                  </button>
                </div>
              </div>
            ) : (
              <>
                {cart.length > 0 && (
                  <button 
                    onClick={() => setShowConfirmEmpty(true)}
                    className="magic-hover flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-red-50 text-red-500 font-bold rounded-2xl border border-red-100 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-sm"
                  >
                    <Trash2 className="w-5 h-5" />
                    <span>
                      {lang === 'ar' ? 'إفراغ السلة' : lang === 'he' ? 'רוקן סל' : 'Empty Cart'}
                    </span>
                  </button>
                )}
                <button 
                  onClick={onClose}
                  className="flex-1 px-8 py-3 bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  {lang === 'ar' ? 'إغلاق' : lang === 'he' ? 'סגור' : 'Close'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
