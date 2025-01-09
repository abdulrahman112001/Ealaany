import React, { createContext, useState, useEffect, useContext } from "react";

// Create a Context for the dark mode
const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Create a provider component
import { ReactNode } from "react";

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize dark mode state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
