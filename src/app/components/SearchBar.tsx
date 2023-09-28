import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';

const SearchBar = () => {
  const { dispatch } = useMovieContext();
  const handleSearch = (e: { target: { value: any; }; }) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
  };
  return <input type="text" className="input is-primary" placeholder="Search movies..." onChange={handleSearch} />;
};

export default SearchBar;
