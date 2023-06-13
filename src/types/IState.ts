import IMovie from './IMovie';

export default interface IState {
  movies: IMovie[] | [] | undefined;
  selectedMovie?: IMovie | null | undefined;
  sortBy?:
    | 'Title'
    | 'IMDB Rating'
    | 'IMDB Votes'
    | 'Rotten Tomatoes Rating'
    | null
    | undefined;
  error?: string | null | undefined;
}
