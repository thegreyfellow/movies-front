import IState from '../types/IState';
import IMoviesReducerAction from '../types/IMoviesReducerAction';

const moviesReducer = (state: IState, action: IMoviesReducerAction) => {
  if (!action.payload) {
    return state;
  }

  switch (action.type) {
    case 'set_movies':
      // eslint-disable-next-line no-case-declarations
      const newState = { ...state, movies: action.payload?.movies };
      console.log('newState', newState);
      return newState;
    case 'set_selected_movie':
      return { ...state, selectedMovie: action.payload?.movie };
    case 'fetch_error':
      return { ...state, error: action.payload?.error };
    default:
      return state;
  }
};

export default moviesReducer;
