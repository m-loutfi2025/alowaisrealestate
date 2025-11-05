
import React from 'react';
import { useLanguage } from './LanguageContext';

const Contact: React.FC = () => {
    const { isArabic, t } = useLanguage();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(t('contact.form.success'));
        e.currentTarget.reset();
    };
    
    return (
        <section id="contact" className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <header className="text-center mb-12 animate-item">
                    <h2 className={`text-5xl text-[#2B3A4A] mb-3 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('contact.title')}</h2>
                    <p className="text-xl text-[#2B3A4A]/75">{t('contact.subtitle')}</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full animate-item">
                        <iframe
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.788540455584!2d55.33538431498069!3d25.27878838386345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4316279f5799%3A0x2a101f3b392b4515!2sRigga%20Business%20Center%20-%20Port%20Saeed%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1625055000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            aria-hidden="false"
                            tabIndex={0}
                            title="Office Location Map: Rigga Business Center, Dubai">
                        </iframe>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-slate-50 p-6 rounded-2xl shadow-lg animate-item delay-100">
                            <h3 className={`text-2xl text-[#21A1D9] mb-4 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('contact.office.title')}</h3>
                            <address className="not-italic space-y-3 text-[#2B3A4A]/90">
                                <p><i className={`fas fa-map-marker-alt text-[#21A1D9] w-6 ${isArabic ? 'ml-2' : 'mr-2'}`} aria-hidden="true"></i> {t('contact.office.address')}</p>
                                <p><i className={`fas fa-phone text-[#21A1D9] w-6 ${isArabic ? 'ml-2' : 'mr-2'}`} aria-hidden="true"></i> {t('contact.office.phone')}</p>
                                <p><i className={`fas fa-envelope text-[#21A1D9] w-6 ${isArabic ? 'ml-2' : 'mr-2'}`} aria-hidden="true"></i> <a href="mailto:info@alowaisrealestate.com" className="hover:underline">info@alowaisrealestate.com</a></p>
                            </address>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-2xl shadow-lg space-y-4 animate-item delay-200">
                            <h3 className={`text-2xl text-[#21A1D9] mb-4 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('contact.form.title')}</h3>
                            <input type="text" placeholder={t('contact.form.name')} required className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#21A1D9] focus:ring-1 focus:ring-[#21A1D9] transition" aria-label={t('contact.form.name')} />
                            <input type="email" placeholder={t('contact.form.email')} required className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#21A1D9] focus:ring-1 focus:ring-[#21A1D9] transition" aria-label={t('contact.form.email')} />
                            <textarea placeholder={t('contact.form.message')} rows={4} required className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#21A1D9] focus:ring-1 focus:ring-[#21A1D9] transition" aria-label={t('contact.form.message')}></textarea>
                            <button type="submit" className="w-full py-3 bg-[#2B3A4A] text-white font-bold rounded-full transition hover:bg-[#21A1D9] hover:shadow-lg">
                                {t('contact.form.submit')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;