import IState from '../types/IState';
import IMoviesReducerAction from '../types/IMoviesReducerAction';

const moviesReducer = (state: IState, action: IMoviesReducerAction) => {
  if (!action.payload) {
    return state;
  }

  switch (action.type) {
    case 'set_movies':
      return { ...state, movies: action.payload?.movies };
    case 'set_selected_movie':
      return { ...state, selectedMovie: action.payload?.movie };
    case 'set_sort_by':
      return { ...state, sortBy: action.payload?.sortBy };
    case 'fetch_error':
      return { ...state, error: action.payload?.error };
    default:
      return state;
  }
};

export default moviesReducer;
