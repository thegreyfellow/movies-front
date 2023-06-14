import { render, screen, fireEvent } from '@testing-library/react';
import ViewedMovies from './viewedMovies';
import MoviesStateContext from '../../contexts/moviesStateContext';

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

jest.mock('../../contexts/moviesStateContext', () => ({
  __esModule: true,
  default: {
    useContext: jest.fn().mockReturnValue({ state: mockState }),
  },
}));

jest.mock('../../contexts/moviesDispatchContext', () => ({
  __esModule: true,
  default: {
    useContext: jest.fn().mockReturnValue({ setState: mockSetState }),
  },
}));

describe('ViewedMovies', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders "No movies viewed yet" message when there are no viewed movies', () => {
    const emptyState = { viewedMovies: [], movies: [], selectedMovie: null };
    render(
      <MoviesStateContext.Provider value={{ state: emptyState }}>
        <ViewedMovies setIsModalOpen={mockSetIsModalOpen} />
      </MoviesStateContext.Provider>
    );

    const messageElement = screen.getByText('No movies viewed yet.');
    expect(messageElement).toBeInTheDocument();
  });

  test('renders the viewed movies list', () => {
    render(<ViewedMovies setIsModalOpen={mockSetIsModalOpen} />);

    const movieLinks = screen.getAllByRole('link');
    expect(movieLinks.length).toBe(2);
    expect(movieLinks[0].textContent).toBe('Movie 1');
    expect(movieLinks[1].textContent).toBe('Movie 2');
  });

  test('calls handleClick when a movie link is clicked', () => {
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
