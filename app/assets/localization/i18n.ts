import i18n from 'i18next';
import ReactNative from 'react-native';
import {initReactI18next} from 'react-i18next';
import translationEN from './en/translation.json';
import translationAR from './ar/translation.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_LANGUAGE_KEY = 'STORE_LANGUAGE_KEY';
export const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

const languageDetectorPlugin: any = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      //get stored language from Async storage
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
        if (language) {
          //if language was stored before, use this language in the app
          return callback(language);
        } else {
          return callback(i18n.language);
        }
      });
    } catch (error) {
      return callback('en');
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      ReactNative.I18nManager.forceRTL(language === 'ar');
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

ReactNative.I18nManager.forceRTL(i18n.language === 'ar');
