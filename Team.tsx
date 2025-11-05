import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface TeamMemberCardProps {
    imageUrl: string;
    alt: string;
    nameKey: string;
    titleKey: string;
    descKey: string;
    delay: string;
    biography: string;
    achievements: string[];
    isExpanded: boolean;
    onClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageUrl, alt, nameKey, titleKey, descKey, delay, biography, achievements, isExpanded, onClick }) => {
    const { t, isArabic } = useLanguage();
    const name = t(nameKey);
    const title = t(titleKey);
    const description = t(descKey);
    const contentId = `team-bio-${name.replace(/\s+/g, '-')}`;
    const delayClass = delay === '0.1s' ? 'delay-100' : delay === '0.2s' ? 'delay-200' : 'delay-300';
    return (
        <div
            className={`bg-white rounded-2xl overflow-hidden shadow-lg text-center animate-item transition-all duration-300 hover:shadow-2xl cursor-pointer ${delayClass}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => ['Enter', ' '].includes(e.key) && onClick()}
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-controls={contentId}
        >
            <img src={imageUrl} alt={alt} className="w-full h-72 object-cover" loading="lazy" />
            <div className="p-6">
                <h3 className={`text-2xl text-[#2B3A4A] ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{name}</h3>
                <p className="text-[#21A1D9] font-medium mb-3">{title}</p>
                <p className="text-[#2B3A4A]/75 text-sm mb-4">{description}</p>
                <div className="text-[#21A1D9]" title={`${name} LinkedIn Profile`}>
                    <i className="fab fa-linkedin text-2xl" aria-hidden="true"></i>
                </div>

                <div id={contentId} className={`text-left transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100 pt-6' : 'max-h-0 opacity-0'}`}>
                    <h4 className="font-bold text-lg text-[#2B3A4A] mb-2">Biography</h4>
                    <p className="text-sm text-[#2B3A4A]/80 mb-4">{biography}</p>
                    <h4 className="font-bold text-lg text-[#2B3A4A] mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[#2B3A4A]/80">
                        {achievements.map((ach, index) => <li key={index}>{ach}</li>)}
                    </ul>
                </div>
            </div>
            <div className="py-2 text-gray-400">
                <i className={`fas fa-chevron-down transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true"></i>
            </div>
        </div>
    );
};

const teamData = [
    {
        imageUrl: '/omar-al-owais.jpg',
        alt: "CEO portrait — Dr. Omar Al Owais",
        nameKey: "team.omar.name",
        titleKey: "team.omar.title",
        descKey: "team.omar.desc",
        biography: "With a visionary approach, Dr. Omar has guided Al Owais Real Estate to become a leader in Dubai's property market. His expertise lies in identifying and capitalizing on emerging market trends, ensuring sustainable growth and profitability.",
        achievements: [
            "Spearheaded over $2 billion in real estate transactions.",
            "Pioneered the company's expansion into international markets.",
            "Recognized as 'Real Estate Visionary of the Year' in 2022."
        ],
        delay: "0.1s"
    },
    {
        imageUrl: '/sarah-khan.jpg',
        alt: "CFO portrait — Sarah Khan",
        nameKey: "team.sarah.name",
        titleKey: "team.sarah.title",
        descKey: "team.sarah.desc",
        biography: "Sarah is a certified financial analyst with a proven track record in corporate finance and asset management. Her meticulous approach ensures the financial health and compliance of all company ventures, fostering investor confidence.",
        achievements: [
            "Secured a $500M syndicated loan for the Bay Residence project.",
            "Implemented a new financial reporting system, increasing efficiency by 30%.",
            "Maintained a decade of flawless audit records."
        ],
        delay: "0.2s"
    },
    {
        imageUrl: '/tarek-ali.jpg',
        alt: "Development Head portrait — Tarek Ali",
        nameKey: "team.tarek.name",
        titleKey: "team.tarek.title",
        descKey: "team.tarek.desc",
        biography: "Tarek is an accomplished civil engineer who oversees all development projects from conception to completion. He is passionate about sustainable building practices and innovative architectural design that defines Dubai's skyline.",
        achievements: [
            "Managed the on-time, on-budget delivery of the Rigga Commercial Hub.",
            "Recipient of the 'Excellence in Construction' award.",
            "Introduced green building standards across all new developments."
        ],
        delay: "0.3s"
    }
];

const Team: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const { isArabic, t } = useLanguage();

    const handleCardClick = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="team" className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <header className="text-center mb-12 animate-item">
                    <h2 className={`text-5xl text-[#2B3A4A] mb-3 ${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`}>{t('team.title')}</h2>
                    <p className="text-xl text-[#2B3A4A]/75">{t('team.subtitle')}</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {teamData.map((member, index) => (
                        <TeamMemberCard
                            key={member.nameKey}
                            {...member}
                            isExpanded={expandedIndex === index}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;