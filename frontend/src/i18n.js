import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'home': 'Home',
      'about': 'About Us',
      'visa': 'Visa Services',
      'ticket': 'Ticket Booking',
      'travelGuides': 'Travel Guides',
      
      // Hero section
      'heroTitle': 'Discover the Beauty of UAE',
      'heroSubtitle': 'Experience luxury travel with personalized service and unforgettable experiences',
      'contactUs': 'Contact Us',
      
      // Services section
      'ourServices': 'Our Services',
      'visaServices': 'Visa Services',
      'visaDescription': 'Fast and reliable visa processing for UAE and other destinations',
      'flightBooking': 'Flight Booking',
      'flightDescription': 'Best deals on flights to and from the UAE',
      'tourPackages': 'Tour Packages',
      'tourDescription': 'Customized tour packages for individuals and groups',
      'inquireNow': 'Inquire Now',
      'bookNow': 'Book Now',
      'explorePackages': 'Explore Packages'
    }
  },
  ar: {
    translation: {
      // Navigation
      'home': 'الرئيسية',
      'about': 'من نحن',
      'visa': 'خدمات التأشيرة',
      'ticket': 'حجز التذاكر',
      'travelGuides': 'أدلة السفر',
      
      // Hero section
      'heroTitle': 'اكتشف جمال الإمارات العربية المتحدة',
      'heroSubtitle': 'استمتع بسفر فاخر مع خدمة شخصية وتجارب لا تُنسى',
      'contactUs': 'اتصل بنا',
      
      // Services section
      'ourServices': 'خدماتنا',
      'visaServices': 'خدمات التأشيرة',
      'visaDescription': 'معالجة التأشيرات بشكل سريع وموثوق للإمارات ووجهات أخرى',
      'flightBooking': 'حجز الطيران',
      'flightDescription': 'أفضل العروض على الرحلات من وإلى الإمارات',
      'tourPackages': 'باقات السياحة',
      'tourDescription': 'باقات سياحية مخصصة للأفراد والمجموعات',
      'inquireNow': 'استفسر الآن',
      'bookNow': 'احجز الآن',
      'explorePackages': 'استكشف الباقات'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // not needed for React
    }
  });

export default i18n;
