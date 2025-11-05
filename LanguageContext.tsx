import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  isArabic: boolean;
  toggleLanguage: () => void;
  t: (key: string) => string;
  formatNumber: (number: string | number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object with all website content
const translations = {
  // Header Navigation
  'nav.services': { en: 'Services', ar: 'الخدمات' },
  'nav.projects': { en: 'Projects', ar: 'المشاريع' },
  'nav.about': { en: 'About Us', ar: 'من نحن' },
  'nav.team': { en: 'Team', ar: 'الفريق' },
  'nav.news': { en: 'News', ar: 'الأخبار' },
  'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },

  // Hero Section
  'hero.title': { en: 'Al Owais Real Estate', ar: 'العويس للعقارات' },
  'hero.subtitle': { en: 'Trusted. Strategic. Local.', ar: 'موثوق. استراتيجي. محلي.' },
  'hero.description': { en: 'Investment • Development • Brokerage • Asset Management', ar: 'الاستثمار • التطوير • الوساطة • إدارة الأصول' },
  'hero.cta.quote': { en: 'Request a Quote', ar: 'طلب عرض سعر' },
  'hero.cta.projects': { en: 'View Projects', ar: 'عرض المشاريع' },

  // Services Section
  'services.title': { en: 'Our Services', ar: 'خدماتنا' },
  'services.subtitle': { en: 'Comprehensive real estate solutions tailored to your needs', ar: 'حلول عقارية شاملة مصممة خصيصاً لاحتياجاتك' },
  'services.investment.title': { en: 'Investment Advisory', ar: 'الاستشارات الاستثمارية' },
  'services.investment.desc': { en: 'Strategic guidance for profitable real estate investments in Dubai\'s dynamic market.', ar: 'توجيه استراتيجي للاستثمارات العقارية المربحة في سوق دبي الديناميكي.' },
  'services.development.title': { en: 'Property Development', ar: 'تطوير العقارات' },
  'services.development.desc': { en: 'End-to-end development services from concept to completion with quality assurance.', ar: 'خدمات التطوير الشاملة من المفهوم إلى الإنجاز مع ضمان الجودة.' },
  'services.brokerage.title': { en: 'Brokerage Services', ar: 'خدمات الوساطة' },
  'services.brokerage.desc': { en: 'Professional buying, selling, and leasing services with market expertise.', ar: 'خدمات الشراء والبيع والتأجير المهنية مع خبرة السوق.' },
  'services.management.title': { en: 'Asset Management', ar: 'إدارة الأصول' },
  'services.management.desc': { en: 'Comprehensive property management to maximize your investment returns.', ar: 'إدارة عقارية شاملة لتعظيم عوائد استثماراتك.' },
  'services.learn_more': { en: 'Learn more', ar: 'اعرف المزيد' },

  // Projects Section
  'projects.title': { en: 'Signature Projects', ar: 'المشاريع المميزة' },
  'projects.subtitle': { en: 'A portfolio of current and completed developments in prime locations.', ar: 'مجموعة من التطويرات الحالية والمكتملة في مواقع متميزة.' },
  'projects.bay.title': { en: 'The Bay Residence', ar: 'مقر الخليج السكني' },
  'projects.bay.desc': { en: 'Luxury residential apartments near Dubai Marina.', ar: 'شقق سكنية فاخرة بالقرب من مارينا دبي.' },
  'projects.rigga.title': { en: 'Rigga Commercial Hub', ar: 'مركز الرقة التجاري' },
  'projects.rigga.desc': { en: 'Grade-A office space and retail units.', ar: 'مساحات مكتبية من الدرجة الأولى ووحدات تجارية.' },
  'projects.city.title': { en: 'City Center Retail', ar: 'مركز المدينة التجاري' },
  'projects.city.desc': { en: 'Leasing and management of a major shopping complex.', ar: 'تأجير وإدارة مجمع تسوق رئيسي.' },
  'projects.desert.title': { en: 'Desert Bloom Villas', ar: 'فلل زهرة الصحراء' },
  'projects.desert.desc': { en: 'Exclusive community of high-end villas with private amenities.', ar: 'مجتمع حصري من الفلل الراقية مع وسائل الراحة الخاصة.' },
  'projects.marina.title': { en: 'Marina Crown Hotel', ar: 'فندق تاج المارينا' },
  'projects.marina.desc': { en: 'A 5-star hotel and branded residences with panoramic sea views.', ar: 'فندق 5 نجوم ومساكن ذات علامة تجارية مع إطلالات بحرية بانورامية.' },
  'projects.green.title': { en: 'The Green Oasis', ar: 'الواحة الخضراء' },
  'projects.green.desc': { en: 'An eco-friendly, mixed-use hub for modern urban living.', ar: 'مركز صديق للبيئة متعدد الاستخدامات للحياة الحضرية الحديثة.' },
  'projects.browse': { en: 'Browse All Projects', ar: 'تصفح جميع المشاريع' },

  // Location and Details
  'location.marina': { en: 'Location: Dubai Marina', ar: 'الموقع: مارينا دبي' },
  'location.port': { en: 'Location: Port Saeed Road', ar: 'الموقع: شارع بور سعيد' },
  'location.downtown': { en: 'Location: Downtown Dubai', ar: 'الموقع: وسط مدينة دبي' },
  'location.barari': { en: 'Location: Al Barari', ar: 'الموقع: البراري' },
  'location.harbour': { en: 'Location: Dubai Harbour', ar: 'الموقع: مرفأ دبي' },
  'location.sustainable': { en: 'Location: Sustainable City', ar: 'الموقع: المدينة المستدامة' },
  'year.expected': { en: 'Year: 2025 (Expected)', ar: 'السنة: ٢٠٢٥ (متوقع)' },
  'year.completed': { en: 'Year: 2023 (Completed)', ar: 'السنة: ٢٠٢٣ (مكتمل)' },
  'year.ongoing': { en: 'Year: Ongoing Management', ar: 'السنة: إدارة مستمرة' },
  'year.phase1': { en: 'Year: 2024 (Phase 1)', ar: 'السنة: ٢٠٢٤ (المرحلة الأولى)' },
  'year.construction': { en: 'Year: 2026 (Under Construction)', ar: 'السنة: ٢٠٢٦ (قيد الإنشاء)' },
  'year.planned': { en: 'Year: 2027 (Planned)', ar: 'السنة: ٢٠٢٧ (مخطط)' },
  'units.180': { en: 'Units: 180', ar: 'الوحدات: ١٨٠' },
  'units.offices': { en: 'Units: 45 Offices', ar: 'الوحدات: ٤٥ مكتب' },
  'units.stores': { en: 'Units: 120 Stores', ar: 'الوحدات: ١٢٠ متجر' },
  'units.villas': { en: 'Units: 50 Villas', ar: 'الوحدات: ٥٠ فيلا' },
  'units.hotel': { en: 'Units: 250 Hotel Rooms, 100 Residences', ar: 'الوحدات: ٢٥٠ غرفة فندقية، ١٠٠ مسكن' },
  'units.mixed': { en: 'Units: Mixed Residential & Retail', ar: 'الوحدات: سكني وتجاري مختلط' },

  // Team Section
  'team.title': { en: 'Our Leadership Team', ar: 'فريق القيادة' },
  'team.subtitle': { en: 'Driving success through experience and dedication.', ar: 'قيادة النجاح من خلال الخبرة والتفاني.' },
  'team.omar.name': { en: 'Dr. Omar Al Owais', ar: 'د. عمر العويس' },
  'team.omar.title': { en: 'Chief Executive Officer', ar: 'الرئيس التنفيذي' },
  'team.omar.desc': { en: 'Over 25 years of experience in strategic investment and regional development.', ar: 'أكثر من ٢٥ عاماً من الخبرة في الاستثمار الاستراتيجي والتطوير الإقليمي.' },
  'team.sarah.name': { en: 'Sarah Khan', ar: 'سارة خان' },
  'team.sarah.title': { en: 'Chief Financial Officer', ar: 'المدير المالي' },
  'team.sarah.desc': { en: 'Manages capital structure and risk assessment for all major projects.', ar: 'تدير هيكل رأس المال وتقييم المخاطر لجميع المشاريع الكبرى.' },
  'team.tarek.name': { en: 'Tarek Ali', ar: 'طارق علي' },
  'team.tarek.title': { en: 'Head of Development', ar: 'رئيس التطوير' },
  'team.tarek.desc': { en: 'Leads construction and design, ensuring quality standards are met.', ar: 'يقود البناء والتصميم، مما يضمن الوفاء بمعايير الجودة.' },

  // About Section
  'about.title': { en: 'About Al Owais Real Estate', ar: 'حول العويس للعقارات' },
  'about.subtitle': { en: 'Building Dubai\'s Future Since 1998', ar: 'نبني مستقبل دبي منذ عام ١٩٩٨' },
  'about.timeline.title': { en: 'Company Timeline', ar: 'التسلسل الزمني للشركة' },
  'about.timeline.founding.year': { en: '1995: Founding', ar: '١٩٩٥: التأسيس' },
  'about.timeline.founding.desc': { en: 'Al Owais Real Estate LLC is established in Dubai, focusing on local brokerage.', ar: 'تأسست شركة العويس للعقارات ذ.م.م في دبي، مع التركيز على الوساطة المحلية.' },
  'about.timeline.expansion.year': { en: '2005: Expansion', ar: '٢٠٠٥: التوسع' },
  'about.timeline.expansion.desc': { en: 'Expanded into property development and asset management services across the UAE.', ar: 'توسعت في تطوير العقارات وخدمات إدارة الأصول في جميع أنحاء دولة الإمارات العربية المتحدة.' },
  'about.timeline.international.year': { en: '2018: International Focus', ar: '٢٠١٨: التركيز الدولي' },
  'about.timeline.international.desc': { en: 'Launched the international investment division, attracting global capital to the Dubai market.', ar: 'أطلقت قسم الاستثمار الدولي، لجذب رؤوس الأموال العالمية إلى سوق دبي.' },
  'about.mission.title': { en: 'Mission', ar: 'المهمة' },
  'about.mission.desc': { en: 'To create and manage exceptional real estate assets that generate long-term value for our investors and communities.', ar: 'إنشاء وإدارة أصول عقارية استثنائية تحقق قيمة طويلة الأمد لمستثمرينا ومجتمعاتنا.' },
  'about.vision.title': { en: 'Vision', ar: 'الرؤية' },
  'about.vision.desc': { en: 'To be the most trusted and strategically focused real estate partner in the Middle East.', ar: 'أن نكون الشريك العقاري الأكثر ثقة وتركيزاً استراتيجياً في الشرق الأوسط.' },

  // Contact Section
  'contact.title': { en: 'Get In Touch', ar: 'تواصل معنا' },
  'contact.subtitle': { en: 'Visit our office or send us a message today.', ar: 'قم بزيارة مكتبنا أو أرسل لنا رسالة اليوم.' },
  'contact.office.title': { en: 'Office Details', ar: 'تفاصيل المكتب' },
  'contact.office.address': { en: '4th Floor 402, Rigga Business Center, Port Saeed Road, Dubai, UAE.', ar: 'الطابق الرابع ٤٠٢، مركز الرقة التجاري، شارع بور سعيد، دبي، الإمارات العربية المتحدة.' },
  'contact.office.phone': { en: 'Tel: +9714 2664999', ar: 'هاتف: +٩٧١٤ ٢٦٦٤٩٩٩' },
  'contact.form.title': { en: 'Send a Message', ar: 'أرسل رسالة' },
  'contact.form.name': { en: 'Your Name', ar: 'اسمك' },
  'contact.form.email': { en: 'Your Email', ar: 'بريدك الإلكتروني' },
  'contact.form.message': { en: 'Your Message', ar: 'رسالتك' },
  'contact.form.submit': { en: 'Submit Enquiry', ar: 'إرسال الاستفسار' },
  'contact.form.success': { en: 'Thank you for your message! Our team will contact you shortly.', ar: 'شكراً لك على رسالتك! سيتواصل معك فريقنا قريباً.' },

  // News Section
  'news.title': { en: 'Latest Market Insights', ar: 'أحدث رؤى السوق' },
  'news.subtitle': { en: 'News, updates, and expert analysis from our team.', ar: 'الأخبار والتحديثات والتحليلات المتخصصة من فريقنا.' },
  'news.article1.date': { en: 'October 25, 2025', ar: '٢٥ أكتوبر ٢٠٢٥' },
  'news.article1.title': { en: 'Dubai Investment Zones: A Q4 Outlook', ar: 'مناطق الاستثمار في دبي: نظرة على الربع الرابع' },
  'news.article1.excerpt': { en: 'Examining the performance and future potential of key free zones in the Emirate.', ar: 'فحص الأداء والإمكانات المستقبلية للمناطق الحرة الرئيسية في الإمارة.' },
  'news.article2.date': { en: 'October 10, 2025', ar: '١٠ أكتوبر ٢٠٢٥' },
  'news.article2.title': { en: 'The Rise of Sustainable Luxury Housing', ar: 'صعود الإسكان الفاخر المستدام' },
  'news.article2.excerpt': { en: 'How developers are integrating green technology into high-end properties.', ar: 'كيف يدمج المطورون التكنولوجيا الخضراء في العقارات الراقية.' },
  'news.article3.date': { en: 'September 28, 2025', ar: '٢٨ سبتمبر ٢٠٢٥' },
  'news.article3.title': { en: 'Navigating UAE Mortgage Regulations', ar: 'التنقل في لوائح الرهن العقاري في الإمارات' },
  'news.article3.excerpt': { en: 'A guide for expatriates securing financing for their first Dubai home.', ar: 'دليل للمغتربين لتأمين التمويل لمنزلهم الأول في دبي.' },
  'news.read_article': { en: 'Read Article', ar: 'اقرأ المقال' },

  // Footer Section
  'footer.description': { en: 'Investment, development, brokerage, and asset management in Dubai.', ar: 'الاستثمار والتطوير والوساطة وإدارة الأصول في دبي.' },
  'footer.company.title': { en: 'Company', ar: 'الشركة' },
  'footer.company.about': { en: 'About Us', ar: 'من نحن' },
  'footer.company.team': { en: 'Our Team', ar: 'فريقنا' },
  'footer.company.news': { en: 'News & Media', ar: 'الأخبار والإعلام' },
  'footer.company.careers': { en: 'Careers', ar: 'الوظائف' },
  'footer.services.title': { en: 'Services', ar: 'الخدمات' },
  'footer.services.investment': { en: 'Investment', ar: 'الاستثمار' },
  'footer.services.development': { en: 'Development', ar: 'التطوير' },
  'footer.services.brokerage': { en: 'Brokerage', ar: 'الوساطة' },
  'footer.services.management': { en: 'Property Management', ar: 'إدارة العقارات' },
  'footer.connect.title': { en: 'Connect', ar: 'تواصل' },
  'footer.connect.tel': { en: 'Tel:', ar: 'هاتف:' },
  'footer.connect.email': { en: 'Email:', ar: 'بريد إلكتروني:' },
  'footer.copyright': { en: 'Al Owais Real Estate LLC. All Rights Reserved.', ar: 'شركة العويس للعقارات ذ.م.م. جميع الحقوق محفوظة.' },
  'footer.privacy': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },

  // Common
  'phone': { en: '+9714 2664999', ar: '+9714 2664999' },
  'email': { en: 'info@alowaisrealestate.com', ar: 'info@alowaisrealestate.com' }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    const newIsArabic = !isArabic;
    setIsArabic(newIsArabic);
    
    // Apply RTL/LTR direction to the document
    document.documentElement.dir = newIsArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = newIsArabic ? 'ar' : 'en';
    
    // Store preference in localStorage
    localStorage.setItem('language', newIsArabic ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return isArabic ? translation.ar : translation.en;
  };

  // Function to format numbers based on language
  const formatNumber = (number: string | number): string => {
    const numStr = number.toString();
    if (!isArabic) return numStr;
    
    // Convert Western digits to Arabic-Indic digits
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return numStr.replace(/[0-9]/g, (digit) => arabicDigits[parseInt(digit)]);
  };

  // Load saved language preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'ar') {
      setIsArabic(true);
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage, t, formatNumber }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
