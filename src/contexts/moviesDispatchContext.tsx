/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react';

import IMoviesReducerAction from '../types/IMoviesReducerAction';

interface IMoviesDispatchContext {
  setState: React.Dispatch<IMoviesReducerAction>;
}

const MoviesDispatchContext = createContext<IMoviesDispatchContext>({
  setState: () => {},
});

export default MoviesDispatchContext;
