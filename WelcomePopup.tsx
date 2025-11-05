import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isArabic } = useLanguage();

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    console.log('WelcomePopup: hasSeenWelcome =', hasSeenWelcome);
    if (!hasSeenWelcome) {
      console.log('WelcomePopup: Setting timer to show popup in 2 seconds');
      const timer = setTimeout(() => {
        console.log('WelcomePopup: Showing popup now');
        setIsVisible(true);
      }, 2000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all duration-300 ${isArabic ? 'text-right font-brand-arabic' : 'text-left font-brand-latin'}`}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <img src="/alowais-logo-transparent.png" alt="Al Owais Real Estate" className="h-8 w-auto mr-3" />
            <h3 className={`text-xl font-bold text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>
              {isArabic ? 'مرحباً بك!' : 'Welcome!'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
            aria-label="Close welcome message"
          >
            ×
          </button>
        </div>
        
        <p className={`text-gray-600 mb-4 leading-relaxed ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>
          {isArabic 
            ? 'مرحباً بك في موقع شركة العويس للعقارات. نحن متخصصون في الاستثمار والتطوير العقاري في دبي.'
            : 'Welcome to Al Owais Real Estate. We specialize in investment, development, and property management in Dubai.'
          }
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 bg-[#21A1D9] text-white py-2 px-4 rounded-lg hover:bg-[#1a7fb0] transition duration-200 font-medium"
          >
            {isArabic ? 'استكشف الموقع' : 'Explore Website'}
          </button>
          <button
            onClick={() => {
              handleClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 border border-[#21A1D9] text-[#21A1D9] py-2 px-4 rounded-lg hover:bg-[#21A1D9] hover:text-white transition duration-200 font-medium"
          >
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
