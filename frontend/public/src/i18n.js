import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'home': 'Home',
      'about': 'About Us',
      'visa': 'Visa Services',
      'ticket': 'Ticket Booking',
      'travelGuides': 'Travel Guides',
      'heroTitle': 'Discover the Beauty of UAE',
      'heroSubtitle': 'Experience luxury travel with personalized service',
      'contactUs': 'Contact Us',
      'ourServices': 'Our Services'
    }
  },
  ar: {
    translation: {
      'home': 'الرئيسية',
      'about': 'من نحن',
      'visa': 'خدمات التأشيرة',
      'ticket': 'حجز التذاكر',
      'travelGuides': 'أدلة السفر'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
