// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi) // Ładuje tłumaczenia z serwera (np. /public/locales)
    .use(LanguageDetector) // Wykrywa język użytkownika
    .use(initReactI18next) // Inicjalizuje i18next dla React
    .init({
        supportedLngs: ['pl', 'en'], // Wspierane języki
        fallbackLng: 'pl', // Język domyślny, jeśli wykryty nie jest wspierany
        debug: false, // Włącz logi w konsoli (przydatne w dewelopemencie)

        // Opcje dla LanguageDetector
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['cookie'],
        },

        // Opcje dla HttpApi backend
        backend: {
            // Ścieżka bazuje na ustawieniu "homepage" w package.json.
            // Usunięto prefix "/photoStudio" ze ścieżki
            loadPath: '/locales/{{lng}}/translation.json',
            // // Jeśli strona będzie w głównym katalogu domeny, usuń "/photoStudio".
            // loadPath: '/photoStudio/locales/{{lng}}/translation.json',
        },

        react: {
            useSuspense: true, // Użyj React.Suspense podczas ładowania tłumaczeń
        },
    });

export default i18n;
