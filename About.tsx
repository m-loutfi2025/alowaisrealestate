
import React from 'react';
import { useLanguage } from './LanguageContext';

const About: React.FC = () => {
    const { isArabic, t } = useLanguage();
    
    return (
        <section id="about" className="bg-slate-50 py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <header className="text-center mb-16 animate-item">
                    <h2 className={`text-5xl text-[#2B3A4A] mb-3 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('about.title')}</h2>
                    <p className="text-xl text-[#2B3A4A]/75">{t('about.subtitle')}</p>
                </header>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/2 animate-item">
                    <h3 className={`text-3xl text-[#21A1D9] mb-6 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('about.timeline.title')}</h3>
                    <ol className={`relative border-l-2 border-[#21A1D9] space-y-10 ${isArabic ? 'mr-4 border-r-2 border-l-0' : 'ml-4'}`}>
                        <li className={isArabic ? 'mr-8' : 'ml-8'}>
                            <span className={`absolute flex items-center justify-center w-8 h-8 bg-[#21A1D9] rounded-full ring-8 ring-slate-50 ${isArabic ? '-right-4' : '-left-4'}`}>
                                <i className="fas fa-calendar-check text-white text-sm" aria-hidden="true"></i>
                            </span>
                            <h4 className={`text-xl text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('about.timeline.founding.year')}</h4>
                            <p className="text-[#2B3A4A]/75 text-base">{t('about.timeline.founding.desc')}</p>
                        </li>
                        <li className={isArabic ? 'mr-8' : 'ml-8'}>
                            <span className={`absolute flex items-center justify-center w-8 h-8 bg-[#21A1D9] rounded-full ring-8 ring-slate-50 ${isArabic ? '-right-4' : '-left-4'}`}>
                                <i className="fas fa-briefcase text-white text-sm" aria-hidden="true"></i>
                            </span>
                            <h4 className={`text-xl text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('about.timeline.expansion.year')}</h4>
                            <p className="text-[#2B3A4A]/75 text-base">{t('about.timeline.expansion.desc')}</p>
                        </li>
                        <li className={isArabic ? 'mr-8' : 'ml-8'}>
                            <span className={`absolute flex items-center justify-center w-8 h-8 bg-[#21A1D9] rounded-full ring-8 ring-slate-50 ${isArabic ? '-right-4' : '-left-4'}`}>
                                <i className="fas fa-globe text-white text-sm" aria-hidden="true"></i>
                            </span>
                            <h4 className={`text-xl text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('about.timeline.international.year')}</h4>
                            <p className="text-[#2B3A4A]/75 text-base">{t('about.timeline.international.desc')}</p>
                        </li>
                    </ol>
                </div>

                <div className="lg:w-1/2 space-y-8 animate-item delay-200">
                    <div>
                        <h3 className={`text-3xl text-[#21A1D9] mb-3 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('about.mission.title')}</h3>
                        <p className="text-lg text-[#2B3A4A]/90">{t('about.mission.desc')}</p>
                    </div>
                    <div>
                        <h3 className={`text-3xl text-[#21A1D9] mb-3 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('about.vision.title')}</h3>
                        <p className="text-lg text-[#2B3A4A]/90">{t('about.vision.desc')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;