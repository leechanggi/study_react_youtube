import { useState, FormEventHandler } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { BiSearch } from "react-icons/bi";

export default function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = typeof searchParams.get("q") === "string" ? searchParams.get("q") : "";

  const [keyword, setKeyword] = useState<string | null>(q);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (typeof keyword === "string" && keyword.length !== 0) {
      navigate(`/videos/search?q=${keyword}`);
    } else {
      alert("검색어를 입력하세요");
      setKeyword(q);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="searchItems" className="search">
        <input
          type="search"
          name="searchItems"
          id="searchItems"
          className="search_input"
          value={typeof keyword === "string" ? keyword : ""}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="search_button">
          <BiSearch
            color="#CCCCCC"
            size="1.5rem"
            title="검색"
            style={{ verticalAlign: "middle" }}
          />
        </button>
      </label>
    </form>
  );
}
