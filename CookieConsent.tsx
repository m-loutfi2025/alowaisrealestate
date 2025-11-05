import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isArabic } = useLanguage();

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    console.log('CookieConsent: hasAcceptedCookies =', hasAcceptedCookies);
    if (!hasAcceptedCookies) {
      console.log('CookieConsent: Showing cookie banner');
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    console.log('CookieConsent: User accepted cookies');
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    console.log('CookieConsent: User declined cookies');
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#21A1D9] shadow-lg z-50 p-4">
      <div className={`max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 ${isArabic ? 'text-right font-brand-arabic' : 'text-left font-brand-latin'}`}>
        <div className="flex-1">
          <p className="text-sm text-gray-700 leading-relaxed">
            {isArabic 
              ? 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. بالمتابعة، فإنك توافق على استخدام ملفات تعريف الارتباط.'
              : 'We use cookies to enhance your experience on our website. By continuing, you agree to our use of cookies.'
            }
            <a 
              href="#privacy" 
              className="text-[#21A1D9] hover:underline ml-1"
            >
              {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
          </p>
        </div>
        
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition duration-200"
          >
            {isArabic ? 'رفض' : 'Decline'}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-[#21A1D9] text-white rounded-lg hover:bg-[#1a7fb0] transition duration-200"
          >
            {isArabic ? 'قبول' : 'Accept'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
