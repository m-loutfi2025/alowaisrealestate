
import React from 'react';
import { useLanguage } from './LanguageContext';

interface ServiceCardProps {
    icon: string;
    titleKey: string;
    descKey: string;
    delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, titleKey, descKey, delay }) => {
    const { isArabic, t } = useLanguage();
    const delayClass = delay === '0.1s' ? 'delay-100' : delay === '0.2s' ? 'delay-200' : delay === '0.3s' ? 'delay-300' : 'delay-400';
    
    return (
        <div className={`bg-white p-8 rounded-2xl shadow-lg animate-item group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${delayClass}`}>
            <i className={`fas ${icon} text-4xl text-[#21A1D9] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-[#2B3A4A]`} aria-hidden="true"></i>
            <h3 className={`text-2xl mb-2 text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t(titleKey)}</h3>
            <p className="text-[#2B3A4A]/75 mb-4">{t(descKey)}</p>
            <a href="#contact" className={`text-[#21A1D9] font-bold flex items-center group ${isArabic ? 'flex-row-reverse' : ''}`} aria-label={`Learn more about our ${t(titleKey)} services`}>
                {t('services.learn_more')} <i className={`fas ${isArabic ? 'fa-arrow-left mr-2' : 'fa-arrow-right ml-2'} transition-transform group-hover:${isArabic ? '-translate-x-1' : 'translate-x-1'}`} aria-hidden="true"></i>
            </a>
        </div>
    );
};

const servicesData = [
    { icon: 'fa-chart-line', titleKey: 'services.investment.title', descKey: 'services.investment.desc', delay: '0.1s' },
    { icon: 'fa-city', titleKey: 'services.development.title', descKey: 'services.development.desc', delay: '0.2s' },
    { icon: 'fa-handshake', titleKey: 'services.brokerage.title', descKey: 'services.brokerage.desc', delay: '0.3s' },
    { icon: 'fa-house-chimney-crack', titleKey: 'services.management.title', descKey: 'services.management.desc', delay: '0.4s' },
];

const Services: React.FC = () => {
    const { isArabic, t } = useLanguage();
    
    return (
        <section id="services" className="bg-slate-50 py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <header className="text-center mb-12 animate-item">
                    <h2 className={`text-5xl text-[#2B3A4A] mb-3 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('services.title')}</h2>
                    <p className="text-xl text-[#2B3A4A]/75">{t('services.subtitle')}</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map(service => <ServiceCard key={service.titleKey} {...service} />)}
                </div>
            </div>
        </section>
    );
};

export default Services;