export default interface IMovie {
  id: number;
  Title: string;
  'US Gross'?: number;
  'US DVD Sales'?: number;
  'Worldwide Gross'?: number;
  'Production Budget'?: number;
  'Release Date'?: string;
  Distributor?: string;
  Director?: string;
  'IMDB Rating'?: number;
  'IMDB Votes'?: number;
  'Rotten Tomatoes Rating'?: number;
  'Major Genre'?: string;
}
