import { useQuery } from 'react-query';

const API_KEY = "76d1afe7a551e4c8277fdc61db783aa2";

export const useGetMovies = (query: string) => {
  return useQuery(['movies', query], async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`);
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  });
};