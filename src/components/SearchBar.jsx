import React, { useState } from 'react';

const SearchBar = ({ cars }) => {
  const [searchText, setSearchText] = useState('');

  const results = cars.filter((car) => car.brand.includes(searchText));


  const handleChange = (event) => {
    const newValue = event.target.value;
    setSearchText(newValue);
  };


  return (
    <>
      <label>
        <input
          onChange={handleChange}
          placeholder="Search"
          type="text"
          value={searchText}
        />
      </label>
      <div>
        {results.map((result) => (
          result.brand
        ))}
      </div>
    </>
  );
};
export default SearchBar;
