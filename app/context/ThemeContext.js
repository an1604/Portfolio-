'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeProvider component to wrap the app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Add state to track client-side mounting
  const [mounted, setMounted] = useState(false);

  // Only run after component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect system preference and set the mode initially
  useEffect(() => {
    // Skip during server-side rendering
    if (!mounted) return;
    
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [mounted]);

  useEffect(() => {
    // Skip during server-side rendering
    if (!mounted) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode, mounted]);

  // Return the context provider with the current state
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
