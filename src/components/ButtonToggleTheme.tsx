import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

export interface PButtonToggleTheme {
  uniqueId: string;
}

export default function ButtonToggleTheme({ uniqueId }: PButtonToggleTheme) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label
      htmlFor={`buttonToggleTheme-${uniqueId}`}
      className={`buttonToggleTheme ${theme ? "dark" : "light"}`}
    >
      <input
        type="checkbox"
        id={`buttonToggleTheme-${uniqueId}`}
        className="buttonToggleTheme_input"
        checked={theme}
        onChange={toggleTheme}
      />
      <span className="sr-only">{`${theme === true ? "라이트" : "다크"} 모드로 변경`}</span>
    </label>
  );
}
