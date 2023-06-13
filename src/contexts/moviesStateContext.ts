/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

import IState from '../types/IState';

interface IMoviesStateContext {
  state: IState;
}

const MoviesStateContext = createContext<IMoviesStateContext>({
  state: { movies: [], selectedMovie: null, sortBy: null, error: null },
});

export default MoviesStateContext;
