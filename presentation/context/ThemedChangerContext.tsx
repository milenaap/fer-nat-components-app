import { createContext, PropsWithChildren, useContext } from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { useColorScheme, colorScheme } from 'nativewind';

interface ThemedChangerContextType {
    currentTheme: 'light' | 'dark';
    inSystemTheme: boolean;

    toggleTheme: () => void;
    setSystemTheme: () => void;
}

const ThemedChangerContext = createContext({} as ThemedChangerContextType);


// Custom Hook para acceder al ThemeChangerContext

export const useThemedChangerContext = () => {
    const themeChanger = useContext(ThemedChangerContext)

    return themeChanger;
}

// Provider

export const ThemeChangerProvider = ({children}: PropsWithChildren) => {
    
    const {colorScheme} = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>


            <ThemedChangerContext.Provider
                value={{
                    currentTheme: 'light',
                    inSystemTheme: false,

                    toggleTheme: async() => {

                    },

                    setSystemTheme: async() => {

                    }
                }}
            >

                {children}
            </ThemedChangerContext.Provider>

        </ThemeProvider>
    )
}