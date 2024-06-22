import React, { createContext, useState } from "react";
import { ThemeDark } from "./Data/mockupData";

export const ThemeContext = createContext({
  theme: "light", // Initial theme
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getBackgroundColor = () => {
    return theme === "light" ? "white" : ThemeDark.iconContainerColor; // Assuming ThemeDark has the color
  };

  const getBackgroundColorMain = () => {
    return theme === "light" ? "white" : ThemeDark.backgroundColor; // Assuming ThemeDark has the color
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, getBackgroundColor, getBackgroundColorMain }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
