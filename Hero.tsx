import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const slides = [
    '/hero-city-night.jpg',
    '/hero-city-night2.jpg',
    '/hero-city-night3.jpg',
];

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { isArabic, t } = useLanguage();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative h-screen min-h-[700px] w-full p-0 flex items-center justify-center" role="region" aria-roledescription="carousel" aria-label="Company Highlights">
            <div className="absolute inset-0 z-0" aria-live="polite" aria-atomic="true">
                {slides.map((src, index) => (
                    <div
                        key={src}
                        role="group"
                        aria-roledescription="slide"
                        aria-hidden={index !== currentSlide ? 'true' : 'false'}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url('${src}')` }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="container mx-auto text-center z-20 max-w-7xl px-4">
                <h1 className={`text-white text-5xl md:text-7xl font-extrabold mb-4 animate-item ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>
                    {t('hero.title')}
                </h1>
                <p className={`text-white text-3xl md:text-4xl font-light mb-8 animate-item delay-200 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>
                    {t('hero.subtitle')}
                </p>
                <p className={`text-xl md:text-2xl text-white mb-12 font-medium animate-item delay-400 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>
                    {t('hero.description')}
                </p>

                <div className={`flex flex-col sm:flex-row justify-center gap-4 animate-item delay-600 ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
                    <a href="#contact" className="px-8 py-3 bg-[#21A1D9] text-white font-bold rounded-full shadow-xl transition hover:bg-[#1a7fb0] hover:scale-[1.03]">
                        {t('hero.cta.quote')}
                    </a>
                    <a href="#projects" className="px-8 py-3 border-2 border-white text-white font-bold rounded-full transition hover:bg-white hover:text-[#2B3A4A] hover:shadow-xl">
                        {t('hero.cta.projects')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;