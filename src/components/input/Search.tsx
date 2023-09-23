import React, { ChangeEvent } from "react";
import { SearchIcon } from "../icon";
import "./styles/search.css";

interface SearchProps {
  handleSearch: (value: string) => void;
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ handleSearch, placeholder }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="search-input-box">
      <SearchIcon />
      <input
        onChange={handleChange}
        className="search-input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
