import React, { createContext } from 'react';

import IMoviesReducerAction from '../types/IMoviesReducerAction';

interface IMoviesDispatchContext {
  setState: React.Dispatch<IMoviesReducerAction>;
}

const MoviesDispatchContext = createContext<IMoviesDispatchContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
});

export default MoviesDispatchContext;
