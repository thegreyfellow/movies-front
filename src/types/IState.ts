import IMovie from './IMovie';

export default interface IState {
  movies: IMovie[] | undefined;
  selectedMovie?: IMovie | null | undefined;
  error?: string | null | undefined;
}
