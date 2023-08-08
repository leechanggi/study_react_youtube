import React, { createContext, useState, useEffect, PropsWithChildren } from "react";

export interface ITheme {
  theme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ITheme>({
  theme: false,
  toggleTheme: () => null,
});

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const getLocalTheme = localStorage.getItem("DATA_THEME");
  const toStringTheme = (theme: boolean) => (theme === true ? "dark" : "light");
  const toBooleanTheme = (theme: string) => (theme === "light" ? false : true);
  const toggleTheme = () => {
    setTheme((prev) => {
      localStorage.setItem("DATA_THEME", toStringTheme(!prev));
      document.body.setAttribute("data-theme", toStringTheme(!prev));
      return !prev;
    });
  };

  useEffect(() => {
    if (typeof getLocalTheme !== "string") {
      setTheme(false);
      localStorage.setItem("DATA_THEME", toStringTheme(false));
      document.body.setAttribute("data-theme", toStringTheme(false));
    } else {
      setTheme(toBooleanTheme(getLocalTheme));
      document.body.setAttribute("data-theme", getLocalTheme);
    }
  }, [getLocalTheme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
