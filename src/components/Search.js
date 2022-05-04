import React from "react";

function Search({search,onSearchFilter}) {

function handleSearch(e){
  //console.log(e.target.value)
 

  onSearchFilter(e.target.value)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
      value ={search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
