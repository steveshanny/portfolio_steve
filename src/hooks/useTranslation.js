"use client";
import { createContext, useContext, useState, useEffect } from 'react';

// On pré-importe tous les fichiers de traduction possibles
const translationsMap = {
  fr: () => import('@/locales/fr.json'),
  en: () => import('@/locales/en.json'),
};

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && translationsMap[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (translationsMap[language]) {
      translationsMap[language]().then((module) => {
        setTranslations(module.default);
      });
    }
  }, [language]);

  const changeLanguage = (lang) => {
    if (translationsMap[lang]) {
      setLanguage(lang);
      localStorage.setItem('preferred-language', lang);
    }
  };

  const t = (key) => {
    return key.split('.').reduce((obj, k) => obj && obj[k], translations) ?? key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    translations,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}