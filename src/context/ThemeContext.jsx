import { createContext, useContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage("is_dark_theme",true);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
