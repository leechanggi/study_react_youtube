import { useContext, useId } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

import Search from "./Search";
import ButtonToggleTheme from "./ButtonToggleTheme";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const uniqueId = useId();

  return (
    <header className="header">
      <div className="header_content">
        <div className="header_gnb">
          <div className="logo">YouTube</div>
          <div className="form-wrap">
            <div className="form">
              <Search />
            </div>
            <ButtonToggleTheme uniqueId={uniqueId} />
          </div>
        </div>
      </div>
    </header>
  );
}
