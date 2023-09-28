import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface MovieState {
  movies: any[];
  searchTerm: string;
}

const initialState: MovieState = {
  movies: [],
  searchTerm: 'science+fiction',
};

type Action = { type: 'SET_MOVIES' | 'SET_SEARCH_TERM'; payload: any };

function movieReducer(state: MovieState, action: Action): MovieState {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }: MovieProviderProps) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
