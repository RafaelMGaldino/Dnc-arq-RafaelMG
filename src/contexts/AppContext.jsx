import { createContext, useState, useEffect } from "react";
import { getApiData } from "../services/apiServices";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
     
    const savedLanguage = localStorage.getItem("lan");

    const [language, setLanguage] = useState(savedLanguage ?? "br");
    const [languages, setLanguages] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData("webtext");
                setLanguages(getTexts);  
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchLanguages(); 
    }, []);

    useEffect(() => {
            localStorage.setItem("lan", language);
        }, [language]);

    return (
        <AppContext.Provider value={{ language, setLanguage, languages, setLanguages, loading }}>
            {children}
        </AppContext.Provider>
    );
};
