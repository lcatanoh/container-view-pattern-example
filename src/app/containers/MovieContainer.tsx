import React, { useEffect } from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import { useGetMovies } from '../services/movieService';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const MovieContainer = () => {
  const { state, dispatch } = useMovieContext();
  const { data, isLoading } = useGetMovies(state.searchTerm);

  useEffect(() => {
    if (data) dispatch({ type: 'SET_MOVIES', payload: data.results });
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <SearchBar />
      <MovieList movies={state.movies} />
    </>
  );
};

export default MovieContainer;
