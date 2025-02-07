import { useState } from "react";

import s from "./SearchBar.module.css";

const SearchBar = ({ request }) => {
  const [query, setQuery] = useState("");

  const handleQuery = (evt) => {
    setQuery(evt.target.value.trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!query) {
      console.log("query empty");
      return;
    }
    request(query);
    setQuery("");
  };

  return (
    <div>
      <form className={s.inputForm} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={handleQuery}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
