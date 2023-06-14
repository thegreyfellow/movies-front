import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { SearchBar } from './';

jest.mock('../../contexts/moviesDispatchContext');
jest.mock('../../contexts/moviesStateContext');
jest.mock('../../hooks/useDebounce');
jest.mock('../../hooks/useMovies');

describe('SearchBar', () => {
  test('updates search value on input change', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Search for a movie');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect((searchInput as HTMLInputElement).value).toBe('test');
  });

  test('fetches movies on debounced search input change', async () => {
    const setStateMock = jest.fn();
    jest.mock('../../contexts/moviesDispatchContext', () => ({
      __esModule: true,
      default: {
        setState: setStateMock,
      },
    }));
    jest.mock('../../hooks/useDebounce', () => {
      return (value: string) => value;
    });
    jest.mock('../../hooks/useMovies', () => {
      return () => ({
        data: ['Movie 1', 'Movie 2'],
      });
    });

    render(<SearchBar />);

    await waitFor(() =>
      expect(setStateMock).toHaveBeenCalledWith({
        type: 'set_movies',
        payload: { movies: ['Movie 1', 'Movie 2'] },
      })
    );
  });
});
