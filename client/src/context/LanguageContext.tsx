
import { createContext, useContext, useState, useEffect } from 'react';
import { cvData } from '../data/mock-data';

// Define the shape of the context
interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
  t: (key: keyof typeof es) => string;
  personalInfo: {
    name: string;
    title: string;
    contact: typeof cvData.personalInfo.contact;
    location: string;
  };
  summary: string;
  experience: {
    title: string;
    company: string;
    date: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    date: string;
    description?: string;
  }[];
  skills: typeof cvData.skills;
  sectionTitles: { [key: string]: string };
}

// Basic translation objects
const es = {
  summary: cvData.summary.es,
  experienceTitle: "Experiencia",
  educationTitle: "Educación",
  skillsTitle: "Habilidades",
  contactTitle: "Contacto",
};

const en = {
  summary: cvData.summary.en,
  experienceTitle: "Experience",
  educationTitle: "Education",
  skillsTitle: "Skills",
  contactTitle: "Contact",
};

const translations = { es, en };

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the provider component
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  const t = (key: keyof typeof es) => {
    return translations[language as keyof typeof translations][key];
  };

  const getLocalizedContent = (lang: string) => {
    const personalInfo = {
      ...cvData.personalInfo,
      title: cvData.personalInfo.title[lang as keyof typeof cvData.personalInfo.title],
      location: cvData.personalInfo.location[lang as keyof typeof cvData.personalInfo.location],
    };

    const experience = cvData.experience.map(exp => ({
      ...exp,
      title: exp.title[lang as keyof typeof exp.title],
      date: exp.date[lang as keyof typeof exp.date],
      description: exp.description[lang as keyof typeof exp.description],
    }));

    const education = cvData.education.map((edu) => ({
        institution: edu.institution,
        degree: edu.degree[lang as keyof typeof edu.degree],
        date: edu.date[lang as keyof typeof edu.date],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...((edu as any).description && {
            description: typeof (edu as any).description === 'string' // eslint-disable-line @typescript-eslint/no-explicit-any
                ? (edu as any).description // eslint-disable-line @typescript-eslint/no-explicit-any
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                : (edu as any).description[lang]
        }),
    }));

    const sectionTitles = {
      experience: t('experienceTitle'),
      education: t('educationTitle'),
      skills: t('skillsTitle'),
      contact: t('contactTitle'),
    }

    return {
      personalInfo,
      summary: t('summary'),
      experience,
      education,
      skills: cvData.skills,
      sectionTitles
    };
  };

  const value = {
    language,
    toggleLanguage,
    t,
    ...getLocalizedContent(language),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
