import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type LanguageContextType = {
    language: "en" | "vi";
    changeLanguage: (lang: "en" | "vi") => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<"en" | "vi">("en");

    const changeLanguage = (lang: "en" | "vi") => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage phải được sử dụng trong LanguageProvider");
    }
    return context;
};

export default function Ex09() {
    return (
        <LanguageProvider>
            <Content />
        </LanguageProvider>
    );
}

const Content = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{language === "en" ? "Hello World" : "Xin chào thế giới"}</h1>
            <p>{language === "en" ? "Welcome to my app" : "Chào mừng bạn đến với ứng dụng"}</p>
            <button onClick={() => changeLanguage("en")} style={{ marginRight: "10px" }}>
                English
            </button>
            <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
        </div>
    );
};
