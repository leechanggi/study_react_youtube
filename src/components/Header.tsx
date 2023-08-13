import { useId } from "react";
import { Link } from "react-router-dom";

import { BsYoutube } from "react-icons/bs";

import Search from "./Search";
import ButtonToggleTheme from "./ButtonToggleTheme";

export default function Header() {
  const uniqueId = useId();

  return (
    <header className="header">
      <div className="header_content">
        <div className="header_gnb">
          <Link to={"/"} className="logo">
            <BsYoutube
              color="#ff0000"
              size="1.75rem"
              style={{ verticalAlign: "middle", margin: "0 2px 0 0" }}
            />
            YouTube
          </Link>
          <div className="form-wrap">
            <ButtonToggleTheme uniqueId={uniqueId} />
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}
