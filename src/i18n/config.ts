import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const en = {
  // First Visit Modal
  firstVisit: {
    title: "Welcome to RitzYard",
    subtitle: "Choose Your Preferred Language",
    description: "Select your language to get started. You can change it anytime from the navigation bar.",
    continue: "Continue",
  },
  
  // Navigation
  nav: {
    home: "Home",
    about: "About Us",
    products: "Products",
    blogs: "Blogs",
    contact: "Contact Us",
    cart: "Cart",
  },
  
  // Language Selector
  language: {
    english: "English",
    hindi: "हिंदी",
    selectLanguage: "Select Language",
  },
  
  // Common
  common: {
    loading: "Loading...",
    translating: "Translating...",
    translationComplete: "Translation Complete!",
    convertingTo: "Converting website to",
    nowIn: "Website is now in",
    pleaseWait: "Please wait...",
  },
};

// Hindi translations
const hi = {
  // First Visit Modal
  firstVisit: {
    title: "RitzYard में आपका स्वागत है",
    subtitle: "अपनी पसंदीदा भाषा चुनें",
    description: "शुरू करने के लिए अपनी भाषा चुनें। आप इसे नेविगेशन बार से कभी भी बदल सकते हैं।",
    continue: "जारी रखें",
  },
  
  // Navigation
  nav: {
    home: "होम",
    about: "हमारे बारे में",
    products: "उत्पाद",
    blogs: "ब्लॉग",
    contact: "संपर्क करें",
    cart: "कार्ट",
  },
  
  // Language Selector
  language: {
    english: "English",
    hindi: "हिंदी",
    selectLanguage: "भाषा चुनें",
  },
  
  // Common
  common: {
    loading: "लोड हो रहा है...",
    translating: "अनुवाद हो रहा है...",
    translationComplete: "अनुवाद पूर्ण!",
    convertingTo: "वेबसाइट को बदला जा रहा है",
    nowIn: "वेबसाइट अब इसमें है",
    pleaseWait: "कृपया प्रतीक्षा करें...",
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    lng: localStorage.getItem('preferredLanguage') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
