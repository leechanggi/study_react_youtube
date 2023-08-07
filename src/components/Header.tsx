import { useId } from "react";

import Search from "./Search";
import ButtonToggleTheme from "./ButtonToggleTheme";

export default function Header() {
  const uniqueId = useId();

  return (
    <header className="header">
      <div className="header_content">
        <div className="header_gnb">
          <div className="logo">YouTube</div>
          <div className="form-wrap">
            <Search />
            <ButtonToggleTheme uniqueId={uniqueId} />
          </div>
        </div>
      </div>
    </header>
  );
}
