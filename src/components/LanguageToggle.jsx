import React from 'react';
import { Globe } from 'lucide-react';
import classNames from 'classnames';

export default function LanguageToggle({ currentLang, setLang }) {
  const languages = [
    { code: 'ar', label: 'العربية' },
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' }
  ];

  return (
    <div className="flex items-center justify-center space-x-2 space-x-reverse mb-6 p-4">
      <Globe className="w-5 h-5 text-primary-purple ml-2" />
      <div className="glass-panel flex rounded-full p-1 shadow-sm">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLang(lang.code)}
            className={classNames(
              'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300',
              currentLang === lang.code 
                ? 'bg-primary-pink text-white shadow-md' 
                : 'text-gray-500 hover:text-primary-purple hover:bg-white/50'
            )}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
