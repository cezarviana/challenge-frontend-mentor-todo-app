import { createContext, useState } from "react";

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({theme: "dark", toggleTheme: () => {}});

interface ThemeProviderProps {
    children: React.ReactNode;
}

type ThemeName = "light" | "dark";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState<ThemeName>("dark");

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}