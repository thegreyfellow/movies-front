import IMovie from './IMovie';

export default interface IMoviesReducerAction {
  type?: 'set_movies' | 'set_selected_movie' | 'fetch_error';
  payload?: { movies?: IMovie[]; movie?: IMovie; error?: string };
}
