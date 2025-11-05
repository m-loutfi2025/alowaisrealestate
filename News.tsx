import React from 'react';
import { useLanguage } from './LanguageContext';

interface NewsArticleProps {
    imageUrl: string;
    alt: string;
    dateKey: string;
    titleKey: string;
    excerptKey: string;
    delay: string;
}

const NewsArticle: React.FC<NewsArticleProps> = ({ imageUrl, alt, dateKey, titleKey, excerptKey, delay }) => {
    const { isArabic, t } = useLanguage();
    const title = t(titleKey);
    const delayClass = delay === '0.1s' ? 'delay-100' : delay === '0.2s' ? 'delay-200' : 'delay-300';
    
    return (
        <article className={`bg-white rounded-2xl overflow-hidden shadow-lg animate-item ${delayClass}`}>
            <img src={imageUrl} alt={alt} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
                <p className="text-xs text-[#2B3A4A]/60 mb-2">{t(dateKey)}</p>
                <h3 className={`text-xl text-[#2B3A4A] mb-2 hover:text-[#21A1D9] transition ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}><a href="#">{title}</a></h3>
                <p className="text-[#2B3A4A]/75 text-sm">{t(excerptKey)}</p>
                <a href="#" className={`text-[#21A1D9] font-bold text-sm mt-4 inline-block group ${isArabic ? 'flex-row-reverse' : ''}`} aria-label={`Read article: ${title}`}>
                    {t('news.read_article')} <i className={`fas ${isArabic ? 'fa-arrow-left mr-1' : 'fa-arrow-right ml-1'} transition-transform group-hover:${isArabic ? '-translate-x-1' : 'translate-x-1'}`} aria-hidden="true"></i>
                </a>
            </div>
        </article>
    );
};

const newsData = [
    {
        imageUrl: '/dubai-investment.jpg',
        alt: "Article about Dubai investment zones",
        dateKey: "news.article1.date",
        titleKey: "news.article1.title",
        excerptKey: "news.article1.excerpt",
        delay: "0.1s"
    },
    {
        imageUrl: '/sustainable-housing.jpg',
        alt: "Image of a sustainable residential interior",
        dateKey: "news.article2.date",
        titleKey: "news.article2.title",
        excerptKey: "news.article2.excerpt",
        delay: "0.2s"
    },
    {
        imageUrl: '/mortgage-meeting.jpg',
        alt: "Image of a business meeting about mortgages",
        dateKey: "news.article3.date",
        titleKey: "news.article3.title",
        excerptKey: "news.article3.excerpt",
        delay: "0.3s"
    }
];

const News: React.FC = () => {
    const { isArabic, t } = useLanguage();
    
    return (
        <section id="news" className="bg-slate-50 py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <header className="text-center mb-12 animate-item">
                    <h2 className={`text-5xl text-[#2B3A4A] mb-3 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('news.title')}</h2>
                    <p className="text-xl text-[#2B3A4A]/75">{t('news.subtitle')}</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsData.map(article => <NewsArticle key={article.titleKey} {...article} />)}
                </div>
            </div>
        </section>
    );
};

export default News;