import { createContext } from 'react';

import IState from '../types/IState';

interface IMoviesStateContext {
  state: IState;
}

const MoviesStateContext = createContext<IMoviesStateContext>({
  state: {
    movies: [],
    viewedMovies: [],
    selectedMovie: null,
    sortBy: 'Title',
    error: null,
  },
});

export default MoviesStateContext;
