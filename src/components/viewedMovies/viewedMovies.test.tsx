import { render, screen, fireEvent } from '@testing-library/react';
import MoviesStateContext from '../../contexts/moviesStateContext';
import moviesReducer from '../../Reducers/moviesReducer';
import ViewedMovies from './viewedMovies';

const mockSetIsModalOpen = jest.fn();
const mockSetState = jest.fn();

const mockState = {
  movies: [],
  selectedMovie: null,
  viewedMovies: [
    { id: 1, Title: 'Movie 1' },
    { id: 2, Title: 'Movie 2' },
  ],
};

const MockMoviesStateContextProvider = MoviesStateContext.Provider;

jest.mock('../../contexts/moviesStateContext', () => ({
  __esModule: true,
  MoviesStateContext: {
    Provider: ({ children }: { children: React.ReactNode }) => (
      <MockMoviesStateContextProvider value={{ state: mockState }}>
        {children}
      </MockMoviesStateContextProvider>
    ),
  },
}));

jest.mock('../../contexts/moviesStateContext', () => {
  return () => ({
    default: {
      useContext: jest.fn().mockReturnValue({ state: mockState }),
    },
  });
});

jest.mock('../../contexts/moviesDispatchContext', () => {
  return () => ({
    default: {
      useContext: jest.fn().mockReturnValue({ setState: mockSetState }),
    },
  });
});

jest.mock('../../providers/MoviesProvider', () => {
  return () => ({
    default: jest.fn().mockReturnValue(<div>Mock MoviesProvider</div>),
  });
});

jest.mock('../../Reducers/moviesReducer', () => {
  return jest.fn();
});

describe('ViewedMovies', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test.skip('renders "No movies viewed yet" message when there are no viewed movies', () => {
    const emptyState = { viewedMovies: [], movies: [], selectedMovie: null };
    render(
      <MockMoviesStateContextProvider value={{ state: emptyState }}>
        <ViewedMovies setIsModalOpen={mockSetIsModalOpen} />
      </MockMoviesStateContextProvider>
    );

    const messageElement = screen.getByText('No movies viewed yet.');
    expect(messageElement).toBeInTheDocument();
  });

  test.skip('renders the viewed movies list', () => {
    (moviesReducer as jest.Mock).mockReturnValue(mockState);
    render(
      <MoviesStateContext.Provider value={{ state: mockState }}>
        <ViewedMovies setIsModalOpen={mockSetIsModalOpen} />
      </MoviesStateContext.Provider>
    );
    const movieLinks = screen.getAllByRole('link');
    expect(movieLinks.length).toBe(2);
    expect(movieLinks[0].textContent).toBe('Movie 1');
    expect(movieLinks[1].textContent).toBe('Movie 2');
  });

  test.skip('calls handleClick when a movie link is clicked', () => {
    render(<ViewedMovies setIsModalOpen={mockSetIsModalOpen} />);

    const movieLink = screen.getAllByRole('link')[0];
    fireEvent.click(movieLink);

    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith({
      type: 'set_selected_movie',
      payload: { movie: mockState.viewedMovies[0] },
    });

    expect(mockSetIsModalOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsModalOpen).toHaveBeenCalledWith(true);
  });
});
