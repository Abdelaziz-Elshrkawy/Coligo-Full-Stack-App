// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: 'Hello',
        someButton: 'Click me',
      },
    },
    ar: {
      translation: {
        greeting: 'مرحبا',
        someButton: 'انقر هنا',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
