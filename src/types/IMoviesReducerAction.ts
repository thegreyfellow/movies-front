import IMovie from './IMovie';

export default interface IMoviesReducerAction {
  type?: 'set_movies' | 'set_selected_movie' | 'set_sort_by' | 'fetch_error';
  payload?: {
    movies?: IMovie[];
    movie?: IMovie;
    sortBy?: string;
    error?: string;
  };
}
