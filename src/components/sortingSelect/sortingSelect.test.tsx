import { render, screen } from '@testing-library/react';
import SortingSelect from './sortingSelect';

jest.mock('../../contexts/moviesDispatchContext');
jest.mock('../../contexts/moviesStateContext');

describe('SortingSelect', () => {
  test('displays the current sorting option', () => {
    const stateMock = { sortBy: 'Rotten Tomatoes Rating' };
    jest.mock('../../contexts/moviesStateContext', () => ({
      default: {
        state: stateMock,
      },
    }));

    render(<SortingSelect />);

    const selectElement = screen.getByRole('Rotten');
    expect((selectElement as HTMLSelectElement).value).toBe(
      'Rotten Tomatoes Rating'
    );
  });

  test('renders the sorting options', () => {
    const stateMock = { sortBy: 'Title' };
    jest.mock('../../contexts/moviesStateContext', () => ({
      default: {
        state: stateMock,
      },
    }));

    render(<SortingSelect />);

    const selectElement = screen.getByRole('sorting-select');
    const options = selectElement.querySelectorAll('option');

    expect(options.length).toBe(5); // Assuming SORTING_OPTIONS has 4 elements plus the default option

    expect(options[0].value).toBe('default');
    expect(options[0].disabled).toBe(true);
    expect(options[0].textContent).toBe('Sort by');

    expect(options[1].value).toBe('Title');
    expect(options[1].textContent).toBe('sort by Title');
  });
});
