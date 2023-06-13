import React, { useReducer } from 'react';

import IState from '../types/IState';
import IMovie from '../types/IMovie';

import moviesReducer from '../Reducers/moviesReducer';
import MoviesStateContext from '../contexts/moviesStateContext';
import MoviesDispatchContext from '../contexts/moviesDispatchContext';
import IMoviesReducerAction from '../types/IMoviesReducerAction';

interface MoviesProviderProps {
  children: React.ReactNode;
}

const initialState: { movies: Array<IMovie>; selectedMovie: IMovie | null } = {
  movies: [],
  selectedMovie: null,
};

const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<IState, IMoviesReducerAction>
  >(moviesReducer, initialState);

  return (
    <MoviesStateContext.Provider value={{ state }}>
      <MoviesDispatchContext.Provider value={{ setState: dispatch }}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesStateContext.Provider>
  );
};

export default MoviesProvider;
