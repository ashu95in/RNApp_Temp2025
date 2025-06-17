import React, { createContext, useContext, useEffect } from 'react';
import { Appearance } from 'react-native';
import { useThemeStore } from '../store/useThemeStore';

const lightColors = {
  primary: '#2260FF',
  secondary: '#ECF1FF',
  background: '#f5f5f5',
  inputBg: '#F3F3F3',
  inputborder: '#A8A8A9',
  text: '#000000',
  textSecondary: 'rgba(0, 0, 0, 0.67)',
  card: '#F8F8F8',
  border: '#E2E2E2',
};

const darkColors = {
  primary: '#0A84FF',
  secondary: '#FF9F0A',
  background: 'rgba(0, 0, 0, 0.88)',
  inputBg: '#A8A8A9',
  inputborder: '#A8A8A9',
  text: '#FFFFFF',
  textSecondary: 'rgba(187, 187, 187, 0.8)',
  card: '#1C1C1E',
  border: '#3A3A3C',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const thememode = useThemeStore((state) => state.thememode);
  const isHydrated = useThemeStore((state) => state.isHydrated);
  const setTheme = useThemeStore((state) => state.toggleTheme);
  const setHydrated = useThemeStore((state) => state.setHydrated);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (!thememode && colorScheme) {
      useThemeStore.setState({ thememode: colorScheme });
    }

    
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      useThemeStore.setState({ thememode: colorScheme || 'light' });
    });

    return () => subscription.remove();
  }, []);

  if (!isHydrated) return null; // Optional: render splash/loading here

  const theme = {
    mode: thememode,
    colors: thememode === 'light' ? lightColors : darkColors,
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
