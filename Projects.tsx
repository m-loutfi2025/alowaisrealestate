import React from 'react';
import { useLanguage } from './LanguageContext';

interface ProjectCardProps {
    imageUrl: string;
    alt: string;
    titleKey: string;
    descKey: string;
    details: { icon: string; textKey: string }[];
    delay: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, alt, titleKey, descKey, details, delay }) => {
    const { isArabic, t } = useLanguage();
    
    return (
        <div className={`bg-white rounded-2xl overflow-hidden shadow-lg animate-item ${delay === '0.1s' ? 'delay-100' : delay === '0.2s' ? 'delay-200' : delay === '0.3s' ? 'delay-300' : delay === '0.4s' ? 'delay-400' : delay === '0.5s' ? 'delay-500' : 'delay-600'}`}>
            <img src={imageUrl} alt={alt} className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-6">
                <h3 className={`text-2xl text-[#21A1D9] mb-2 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t(titleKey)}</h3>
                <p className="text-[#2B3A4A] mb-4">{t(descKey)}</p>
                <ul className="text-sm space-y-2 text-[#2B3A4A]/75">
                    {details.map(detail => (
                        <li key={detail.textKey}><i className={`fas ${detail.icon} ${isArabic ? 'ml-2' : 'mr-2'} text-[#21A1D9]`} aria-hidden="true"></i>{t(detail.textKey)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const projectsData = [
    {
        imageUrl: '/bay-residence.jpg',
        alt: "Exterior of The Bay Residence, a modern residential building",
        titleKey: "projects.bay.title",
        descKey: "projects.bay.desc",
        details: [
            { icon: 'fa-map-marker-alt', textKey: 'location.marina' },
            { icon: 'fa-calendar-alt', textKey: 'year.expected' },
            { icon: 'fa-hashtag', textKey: 'units.180' },
        ],
        delay: '0.1s'
    },
    {
        imageUrl: '/rigga-hub.jpg',
        alt: "Interior of a modern office in Rigga Commercial Hub",
        titleKey: "projects.rigga.title",
        descKey: "projects.rigga.desc",
        details: [
            { icon: 'fa-map-marker-alt', textKey: 'location.port' },
            { icon: 'fa-calendar-alt', textKey: 'year.completed' },
            { icon: 'fa-hashtag', textKey: 'units.offices' },
        ],
        delay: '0.2s'
    },
    {
        imageUrl: '/city-center-retail.jpg',
        alt: "Modern retail plaza entrance at City Center Retail",
        titleKey: "projects.city.title",
        descKey: "projects.city.desc",
        details: [
            { icon: 'fa-map-marker-alt', textKey: 'location.downtown' },
            { icon: 'fa-calendar-alt', textKey: 'year.ongoing' },
            { icon: 'fa-hashtag', textKey: 'units.stores' },
        ],
        delay: '0.3s'
    },
    {
        imageUrl: '/desert-bloom.jpg',
        alt: "Aerial view of the Desert Bloom Villas community",
        titleKey: "projects.desert.title",
        descKey: "projects.desert.desc",
        details: [
            { icon: 'fa-map-marker-alt', textKey: 'location.barari' },
            { icon: 'fa-calendar-alt', textKey: 'year.phase1' },
            { icon: 'fa-hashtag', textKey: 'units.villas' },
        ],
        delay: '0.4s'
    },
    {
        imageUrl: '/marina-crown.jpg',
        alt: "Marina Crown Hotel & Residence tower at sunset",
        titleKey: "projects.marina.title",
        descKey: "projects.marina.desc",
        details: [
            { icon: 'fa-map-marker-alt', textKey: 'location.harbour' },
            { icon: 'fa-calendar-alt', textKey: 'year.construction' },
            { icon: 'fa-hashtag', textKey: 'units.hotel' },
        ],
        delay: '0.5s'
    },
    {
        imageUrl: '/green-oasis.jpg',
        alt: "Eco-friendly Green Oasis mixed-use development",
        titleKey: "projects.green.title",
        descKey: "projects.green.desc",
        details: [
            { icon: 'fa-map-marker-alt', textKey: 'location.sustainable' },
            { icon: 'fa-calendar-alt', textKey: 'year.planned' },
            { icon: 'fa-hashtag', textKey: 'units.mixed' },
        ],
        delay: '0.6s'
    }
];

const Projects: React.FC = () => {
    const { isArabic, t } = useLanguage();
    
    return (
        <section id="projects" className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <header className="text-center mb-12 animate-item">
                    <h2 className={`text-5xl text-[#2B3A4A] mb-3 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('projects.title')}</h2>
                    <p className="text-xl text-[#2B3A4A]/75">{t('projects.subtitle')}</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map(project => <ProjectCard key={project.titleKey} {...project} />)}
                </div>
                <div className="text-center mt-12 animate-item">
                    <button className="px-8 py-3 border-2 border-[#2B3A4A] text-[#2B3A4A] font-bold rounded-full transition hover:bg-[#2B3A4A] hover:text-white">
                        {t('projects.browse')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;