// src/context/AppContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import i18n from '../i18n';

type Theme = "light" | "dark";
type Language = "pl" | "en";

interface AppContextType {
    theme: Theme;
    toggleTheme: () => void;
    language: Language;
    changeLanguage: (lang: Language) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem("theme") as Theme) || "dark"
    );

    const [language, setLanguage] = useState<Language>((i18n.language as Language) || 'pl');

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const changeLanguage = (lang: Language) => {
        i18n.changeLanguage(lang);
        // Stan zostanie zaktualizowany przez listener poniżej
    };

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    // Słuchamy zmian języka w instancji i18next i aktualizujemy nasz stan
    useEffect(() => {
        const handleLanguageChanged = (lng: string) => {
            setLanguage(lng as Language);
        };
        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, []);

    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    const contextValue: AppContextType = {
        theme,
        toggleTheme,
        language,
        changeLanguage,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </AppContext.Provider>
    );
};
