"use client";
import React, { useState } from "react";
import SearchMenufacturer from "./SearchMenufacturer";

const SearchBar = () => {
  const [menufacturer, setMenufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacturer
          menufacturer={menufacturer}
          setMenufacturer={setMenufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
