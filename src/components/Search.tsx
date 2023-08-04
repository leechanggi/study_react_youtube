export default function Search() {
  return (
    <label htmlFor="search" className="search">
      <input type="search" name="search" id="search" className="search_input" />
      <button type="button" className="search_button">
        <span className="sr-only">검색</span>
      </button>
    </label>
  );
}
