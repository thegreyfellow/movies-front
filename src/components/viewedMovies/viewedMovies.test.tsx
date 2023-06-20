import { render } from '@testing-library/react';
import ViewedMovies from './viewedMovies';
import IMovie from '../../types/IMovie';

describe('ViewedMovies', () => {
  test('should render a heading', () => {
    const { getByRole } = render(
      <ViewedMovies handleClick={jest.fn()} movies={[]} />
    );
    const heading = getByRole('heading', { name: /viewed movies/i });
    expect(heading).toBeInTheDocument;
  });

  test('should render list of movies', () => {
    const movies: IMovie[] = [
      { id: 1, Title: 'Movie 1' },
      { id: 2, Title: 'Movie 2' },
      { id: 3, Title: 'Movie 3' },
    ];

    const { getByRole } = render(
      // mock handleClick
      <ViewedMovies handleClick={jest.fn()} movies={movies} />
    );
    const list = getByRole('list');

    expect(list).toBeInTheDocument;
    expect(list.children.length).toBe(3);
  });

  test('should render a message if no movies are passed or the list is empty', () => {
    const { getByText } = render(
      <ViewedMovies handleClick={() => {}} movies={[]} />
    );
    const message = getByText(/no movies viewed yet/i);

    expect(message).toBeInTheDocument;
  });

  test('should call handleClick when a movie is clicked', () => {
    const movies: IMovie[] = [
      { id: 1, Title: 'Movie 1' },
      { id: 2, Title: 'Movie 2' },
      { id: 3, Title: 'Movie 3' },
    ];

    const handleClick = jest.fn();

    const { getByText } = render(
      <ViewedMovies handleClick={handleClick} movies={movies} />
    );

    const movie = getByText(/movie 1/i);
    movie.click();

    expect(handleClick).toHaveBeenCalled();
  });
});
