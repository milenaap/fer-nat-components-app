import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme, colorScheme } from 'nativewind';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Colors } from "@/constants/Colors";

interface ThemedChangerContextType {
    currentTheme: 'light' | 'dark';
    inSystemTheme: boolean;

    bgColor: string;

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
    
    const {colorScheme, setColorScheme} = useColorScheme();

    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

    const currentTheme = isSystemThemeEnabled
    ? colorScheme
        : (isDarkMode) ? 'dark' : 'light';

    
    const backgroundColor = isDarkMode
        ? Colors.dark.background
        : Colors.light.background;

    useEffect(() => {
     AsyncStorage.getItem('selected-theme').then((theme) => {
        if(!theme) return;

        setIsDarkMode(theme === 'dark');
        setIsSystemThemeEnabled( theme === 'system');
        setColorScheme(theme as 'light'| 'dark' | 'system');
     })


    }, [])
    

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>


            <ThemedChangerContext.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    inSystemTheme: isSystemThemeEnabled,
                    bgColor: backgroundColor,

                    toggleTheme: async() => {
                        setIsDarkMode(!isDarkMode);
                        setColorScheme(isDarkMode ? 'light' : 'dark' );
                        setIsSystemThemeEnabled(false);

                        //TODO guardar en Storage

                        await AsyncStorage.setItem('selected-theme', isDarkMode ? 'light' : 'dark')
                    },

                    setSystemTheme: async() => {
                        setIsSystemThemeEnabled(true);
                        setColorScheme('system');
                        await AsyncStorage.setItem('selected-theme', 'system')
                    }
                }}
            >

                {children}
            </ThemedChangerContext.Provider>

        </ThemeProvider>
    )
}