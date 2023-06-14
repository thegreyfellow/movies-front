import { render, fireEvent, screen } from '@testing-library/react';
import SortingSelect from './sortingSelect';

jest.mock('../../contexts/moviesDispatchContext');
jest.mock('../../contexts/moviesStateContext');
jest.mock('./sortingSelect.css', () => ({}));

describe('SortingSelect', () => {
  test.skip('calls setState with the selected sorting option', () => {
    const setStateMock = jest.fn();
    const stateMock = { sortBy: 'Title' };
    jest.mock('../../contexts/moviesDispatchContext', () => ({
      default: {
        setState: setStateMock,
      },
    }));
    jest.mock('../../contexts/moviesStateContext', () => ({
      default: {
        state: stateMock,
      },
    }));

    render(<SortingSelect />);

    const selectElement = screen.getByRole('sorting-select');
    fireEvent.change(selectElement, {
      target: { value: 'Rotten Tomatoes Rating' },
    });

    expect(setStateMock).toHaveBeenCalledWith({
      type: 'set_sort_by',
      payload: { sortBy: 'Rotten Tomatoes Rating' },
    });
  });

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

    // Add assertions for other options if needed
  });
});
