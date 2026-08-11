import React, { useState } from 'react';
import { menuData } from './data/menuData';
import Header from './components/Header';
import LanguageToggle from './components/LanguageToggle';
import CategorySection from './components/CategorySection';
import ItemModal from './components/ItemModal';
import CartModal from './components/CartModal';

function App() {
  const [lang, setLang] = useState('ar'); // Default to Arabic

  // 'landing' | 'menu' | 'category'
  const [currentView, setCurrentView] = useState('landing');
  const [activeCategory, setActiveCategory] = useState(null);

  // For the Item Details Modal
  const [activeItem, setActiveItem] = useState(null);

  // Cart State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (cartItem) => {
    setCart((prev) => [...prev, cartItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const emptyCart = () => {
    setCart([]);
  };

  // Direction handler based on language
  const dir = lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr';

  // Category icons mapping
  const categoryIcons = {
    fashafesh: '🍡',
    sweets: '🍰',
    crepes: '🥞',
    waffles: '🧇',
    american_ice_cream: '🍦',
    ice_cream_cup: '🍨',
    ice_cream_biscuit: '🍧',
    beverages: '🥤'
  };

  const goToMenu = () => setCurrentView('menu');
  const goToLanding = () => setCurrentView('landing');

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentView('category');
  };

  const handleItemClick = (item) => {
    setActiveItem({ ...item, categoryId: activeCategory });
  };

  return (
    <div className="min-h-screen relative w-full" dir={dir}>
      {/* Playful background graphics removed in favor of dark neon body background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40"></div>

      <div className="relative z-10 pb-20">
        <LanguageToggle currentLang={lang} setLang={setLang} />

        {/* Make Header clickable to return to landing */}
        <div className="cursor-pointer">
          <Header lang={lang} onLogoClick={goToLanding} cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
        </div>

        <main className="max-w-7xl mx-auto px-4 md:px-8 mt-4">

          {/* 1. LANDING PAGE VIEW */}
          {currentView === 'landing' && (
            <div className="flex flex-col items-center justify-center mt-12 space-y-6">
              <button
                onClick={goToMenu}
                className="magic-hover w-full max-w-sm py-6 bg-black/60 text-white text-3xl font-black rounded-3xl neon-border shadow-xl flex items-center justify-center space-x-4 rtl:space-x-reverse"
              >
                <span>{lang === 'ar' ? 'القائمة' : lang === 'he' ? 'תפריט' : 'Menu'}</span>
                <span>🍽️</span>
              </button>

              <div className="flex gap-6 w-full max-w-sm justify-center mt-8">
                {/* Social Buttons */}
                <a href="https://www.instagram.com/fashafesho8/" target="_blank" rel="noopener noreferrer" className="magic-hover w-16 h-16 bg-black/60 neon-border rounded-full flex items-center justify-center shadow-md text-pink-500 hover:bg-black/80 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.tiktok.com/@fashafesho0" target="_blank" rel="noopener noreferrer" className="magic-hover w-16 h-16 bg-black/60 neon-border rounded-full flex items-center justify-center shadow-md text-white hover:bg-black/80 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                </a>
                <a href="https://waze.com/ul/hsvc455pjb" target="_blank" rel="noopener noreferrer" className="magic-hover w-16 h-16 bg-black/60 neon-border rounded-full flex items-center justify-center shadow-md text-blue-400 hover:bg-black/80 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-1px)' }}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                </a>
              </div>
            </div>
          )}

          {/* 2. MENU CATEGORIES VIEW */}
          {currentView === 'menu' && (
            <div>
              <button
                onClick={goToLanding}
                className="mb-8 flex items-center space-x-2 space-x-reverse text-white font-bold hover:text-pink-300 transition-colors magic-hover bg-black/60 neon-border px-4 py-2 rounded-full inline-flex"
              >
                <span>{dir === 'rtl' ? '→' : '←'}</span>
                <span>
                  {lang === 'ar' ? 'العودة للصفحة الرئيسية' : lang === 'he' ? 'חזרה לדף הבית' : 'Back to Home'}
                </span>
              </button>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {menuData.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="magic-hover flex flex-col items-center justify-center p-6 bg-black/60 rounded-3xl shadow-sm neon-border hover:shadow-lg transition-all group"
                  >
                    <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{categoryIcons[category.id] || '✨'}</span>
                    <span className="text-lg font-bold text-white text-center neon-text">{category.title[lang]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3. SPECIFIC CATEGORY VIEW */}
          {currentView === 'category' && activeCategory && (
            <div>
              <button
                onClick={goToMenu}
                className="mb-8 flex items-center space-x-2 space-x-reverse text-white font-bold hover:text-pink-300 transition-colors magic-hover bg-black/60 neon-border px-4 py-2 rounded-full inline-flex"
              >
                <span>{dir === 'rtl' ? '→' : '←'}</span>
                <span>
                  {lang === 'ar' ? 'العودة للتصنيفات' : lang === 'he' ? 'חזרה לקטגוריות' : 'Back to Categories'}
                </span>
              </button>

              {menuData.categories
                .filter((cat) => cat.id === activeCategory)
                .map((category) => (
                  <CategorySection key={category.id} category={category} lang={lang} onItemClick={handleItemClick} />
                ))}
            </div>
          )}
        </main>
      </div>

      <footer className="text-center py-6 text-gray-400 text-sm font-medium">
        © 2026 Fashafesho Menu. Built with ❤️ and ✨.
      </footer>

      {/* Render Modal if an item is active */}
      {activeItem && (
        <ItemModal
          item={activeItem}
          lang={lang}
          dir={dir}
          onClose={() => setActiveItem(null)}
          onAddToCart={addToCart}
        />
      )}

      {/* Render Cart Modal */}
      {isCartOpen && (
        <CartModal
          cart={cart}
          lang={lang}
          dir={dir}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeFromCart}
          onEmptyCart={emptyCart}
        />
      )}
    </div>
  );
}

export default App;
