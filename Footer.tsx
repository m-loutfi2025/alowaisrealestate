import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
    const { isArabic, t, formatNumber } = useLanguage();
    
    return (
        <footer className="bg-white text-[#2B3A4A] py-12 border-t border-gray-200">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <img src="/alowais-logo-transparent.png" alt="Al Owais Real Estate LLC" className="h-12 w-auto mb-4" />
                        <p className="text-sm mb-4 text-[#2B3A4A]/75">{t('footer.description')}</p>
                    </div>
                    <div>
                        <h5 className={`text-xl font-bold mb-4 text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('footer.company.title')}</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="text-[#2B3A4A]/75 hover:text-[#21A1D9] transition">{t('footer.company.about')}</a></li>
                            <li><a href="#team" className="text-[#2B3A4A]/75 hover:text-[#21A1D9] transition">{t('footer.company.team')}</a></li>
                            <li><a href="#news" className="text-[#2B3A4A]/75 hover:text-[#21A1D9] transition">{t('footer.company.news')}</a></li>
                            <li><a href="#contact" className="text-[#2B3A4A]/75 hover:text-[#21A1D9] transition">{t('footer.company.careers')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className={`text-xl font-bold mb-4 text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('footer.services.title')}</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="text-[#2B3A4A]/75 hover:text-[#21A1D9] transition">{t('footer.services.investment')}</a></li>
                            <li><a href="#services" className="text-[#2B3A4A]/75 hover:text-[#21A1D9] transition">{t('footer.services.development')}</a></li>
                            <li><a href="#services" className="text-[#2B3A4A]/75 hover:text-[#21A1D9] transition">{t('footer.services.brokerage')}</a></li>
                            <li><a href="#services" className="text-[#2B3A4A]/75 hover:text-[#21A1D9] transition">{t('footer.services.management')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className={`text-xl font-bold mb-4 text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('footer.connect.title')}</h5>
                        <p className="text-sm mb-2 text-[#2B3A4A]/75">{t('footer.connect.tel')} <a href="tel:+97142664999" className="hover:text-[#21A1D9] transition">{formatNumber('+9714 2664999')}</a></p>
                        <p className="text-sm mb-4 text-[#2B3A4A]/75">{t('footer.connect.email')} <a href="mailto:info@alowaisrealestate.com" className="hover:text-[#21A1D9] transition">info@alowaisrealestate.com</a></p>
                        <div className={`flex ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                            <a href="#" className="text-2xl text-[#2B3A4A] hover:text-[#21A1D9] transition" aria-label="Visit Al Owais on LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                            <a href="#" className="text-2xl text-[#2B3A4A] hover:text-[#21A1D9] transition" aria-label="Visit Al Owais on Facebook"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                            <a href="#" className="text-2xl text-[#2B3A4A] hover:text-[#21A1D9] transition" aria-label="Visit Al Owais on Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-6 text-center text-sm">
                    <p className="text-[#2B3A4A]/75">&copy; {formatNumber(new Date().getFullYear())} {t('footer.copyright')} <a href="#" className="text-[#21A1D9] hover:underline">{t('footer.privacy')}</a>.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;