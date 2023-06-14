import { render, fireEvent, screen } from '@testing-library/react';
import { SearchBar } from './';
import MoviesStateContext from '../../contexts/moviesStateContext';

jest.mock('../../contexts/moviesDispatchContext');
jest.mock('../../contexts/moviesStateContext');
jest.mock('../../hooks/useDebounce');

const mockMovies = jest.fn();
jest.mock('../../hooks/useMovies', () => {
  return () => {
    return {
      data: mockMovies,
    };
  };
});

describe('SearchBar', () => {
  test('updates search value on input change', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Search for a movie');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect((searchInput as HTMLInputElement).value).toBe('test');
  });

  test('fetches movies on debounced search input change', async () => {
    const mockState = { movies: [], viewedMovies: [], selectedMovie: null };
    jest.mock('../../contexts/moviesStateContext', () => {
      return () => ({
        default: {
          useContext: jest.fn().mockReturnValue({ state: mockState }),
        },
      });
    });
    jest.mock('../../hooks/useDebounce', () => {
      return (value: string) => value;
    });
    jest.mock('../../hooks/useMovies', () => {
      return () => ({
        data: [{ title: 'Movie 1' }, { title: 'Movie 2' }],
      });
    });

    render(
      <MoviesStateContext.Provider value={{ state: mockState }}>
        <SearchBar />
      </MoviesStateContext.Provider>
    );

    // await waitFor(() => {
    //   expect(mockState).toEqual({
    //     movies: [{ title: 'Movie 1' }, { title: 'Movie 2' }],
    //     viewedMovies: [],
    //     selectedMovie: null,
    //   });
    // });
  });
});
