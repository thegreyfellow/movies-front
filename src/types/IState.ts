import IMovie from './IMovie';

export default interface IState {
  movies: IMovie[] | [];
  viewedMovies: IMovie[] | [];
  selectedMovie: IMovie | null;
  sortBy?:
    | 'Title'
    | 'IMDB Rating'
    | 'IMDB Votes'
    | 'Rotten Tomatoes Rating'
    | null;
  error?: string | null;
}
