import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../i18n/en.json';
import ja from '../i18n/ja.json';
import zh from '../i18n/zh.json';

const resources = {
    'en-US': {
      translation: en,
    },
    'ja-JP': {
        translation: ja,
    },
    'zh-TW': {
        translation: zh,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'zh-TW',
    fallbackLng: 'zh-TW',
    interpolation: {
        escapeValue: false,
    },
    react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i']
    }
});

export default i18n;
