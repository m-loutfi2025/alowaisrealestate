import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isArabic, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
  }`;

  const linkClasses = `transition duration-200 ${
    scrolled ? 'text-[#2B3A4A] hover:text-[#21A1D9]' : 'text-white drop-shadow-lg hover:text-[#21A1D9]'
  }`;
  

  const langButtonClasses = `text-sm font-bold px-3 py-1.5 rounded-full transition duration-200 ${
    scrolled
      ? 'text-white bg-[#21A1D9] hover:bg-[#1a7fb0]'
      : 'text-white bg-[#21A1D9]/80 border border-[#21A1D9] hover:bg-[#21A1D9] backdrop-blur-sm'
  }`;
  
  const logoClasses = `h-12 lg:h-16 w-auto transition-all duration-300 ${
    scrolled ? 'filter brightness-0' : ''
  }`;



  return (
    <header id="main-header" className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
        <a href="#hero" className="flex items-center" aria-label="Al Owais Real Estate, go to homepage">
           <img src="/alowais-logo-transparent.png" alt="Al Owais Real Estate LLC" className={logoClasses} />
        </a>

        <nav className={`hidden lg:flex text-lg font-medium ${isArabic ? 'space-x-reverse space-x-8 font-brand-arabic' : 'space-x-8 font-brand-latin'}`} aria-label="Main navigation">
          <a href="#services" className={linkClasses}>{t('nav.services')}</a>
          <a href="#projects" className={linkClasses}>{t('nav.projects')}</a>
          <a href="#about" className={linkClasses}>{t('nav.about')}</a>
          <a href="#team" className={linkClasses}>{t('nav.team')}</a>
          <a href="#news" className={linkClasses}>{t('nav.news')}</a>
          <a href="#contact" className={linkClasses}>{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center">
          <button 
            id="lang-switcher" 
            className={langButtonClasses} 
            onClick={toggleLanguage}
            aria-label="Toggle language between English and Arabic"
          >
            {isArabic ? 'EN | عر' : 'EN | AR'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;