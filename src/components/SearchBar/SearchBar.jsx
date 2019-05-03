import React from 'react';
import './SearchBar.css';

const SearchBar = ({queryRecipes}) => {
  return (
    <div onSubmit={e => queryRecipes(e)} className="form">
      <form >
        <input type="text" name="recipeName" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;