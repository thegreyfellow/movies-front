import IMovie from './IMovie';

export default interface IMoviesReducerAction {
  type?:
    | 'set_movies'
    | 'set_viewed_movies'
    | 'set_selected_movie'
    | 'set_sort_by'
    | 'fetch_error';
  payload?: {
    movies?: IMovie[] | [];
    viewedMovies?: IMovie[] | [];
    movie?: IMovie | null;
    sortBy?: string;
    error?: string;
  };
}
