import React from 'react';
import classNames from 'classnames';

export default function AddonSection({ data, lang }) {
  return (
    <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/40 backdrop-blur-md rounded-[40px] p-8 shadow-inner border-2 border-white">
        
        {/* Sauces */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-primary-purple mb-6 text-center">
            {data.sauces.title[lang]}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.sauces.items.map((sauce) => (
              <div key={sauce.id} className="flex flex-col items-center space-y-2 magic-hover w-20">
                <div className={classNames(
                  "w-14 h-14 rounded-full shadow-md border-2 border-white",
                  sauce.color
                )}></div>
                <span className="text-xs font-semibold text-gray-600 text-center">{sauce.name[lang]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additions */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-primary-pink mb-6 text-center">
            {data.additions.title[lang]}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.additions.items.map((addon) => (
              <div key={addon.id} className="flex flex-col items-center space-y-2 magic-hover w-20">
                <div className="w-14 h-14 rounded-full shadow-md border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                   {/* Placeholder for real images */}
                   <span className="text-2xl">
                     {addon.id === 'ice_cream' ? '🍦' : 
                      addon.id === 'marshmallow' ? '☁️' : 
                      addon.id === 'sprinkles' ? '🎊' : '🍭'}
                   </span>
                </div>
                <span className="text-xs font-semibold text-gray-600 text-center">{addon.name[lang]}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
