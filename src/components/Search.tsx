import { useState, FormEventHandler } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const q = typeof searchParams.get("q") === "string" ? searchParams.get("q") : "";

  const [keyword, setKeyword] = useState<string | null>(q);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    typeof keyword === "string" && keyword.length !== 0 && navigate(`videos/search?q=${keyword}`);
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
          <span className="sr-only">검색</span>
        </button>
      </label>
    </form>
  );
}
