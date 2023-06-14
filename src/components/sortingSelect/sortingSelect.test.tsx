import { render, fireEvent, screen } from '@testing-library/react';
import SortingSelect from './sortingSelect';

jest.mock('../../contexts/moviesDispatchContext');
jest.mock('../../contexts/moviesStateContext');
// jest.mock('./sortingSelect.css', () => ({}));

describe('SortingSelect', () => {
  test('calls setState with the selected sorting option', () => {
    const setStateMock = jest.fn();
    const stateMock = { sortBy: 'title' };
    jest.mock('../../contexts/moviesDispatchContext', () => ({
      __esModule: true,
      default: {
        setState: setStateMock,
      },
    }));
    jest.mock('../../contexts/moviesStateContext', () => ({
      __esModule: true,
      default: {
        state: stateMock,
      },
    }));

    render(<SortingSelect />);

    const selectElement = screen.getByRole('select');
    fireEvent.change(selectElement, { target: { value: 'rating' } });

    expect(setStateMock).toHaveBeenCalledWith({
      type: 'set_sort_by',
      payload: { sortBy: 'rating' },
    });
  });

  test('displays the current sorting option', () => {
    const stateMock = { sortBy: 'rating' };
    jest.mock('../../contexts/moviesStateContext', () => ({
      default: {
        state: stateMock,
      },
    }));

    render(<SortingSelect />);

    const selectElement = screen.getByRole('select');
    expect((selectElement as HTMLSelectElement).value).toBe('rating');
  });

  test('renders the sorting options', () => {
    const stateMock = { sortBy: 'title' };
    jest.mock('../../contexts/moviesStateContext', () => ({
      __esModule: true,
      default: {
        state: stateMock,
      },
    }));

    render(<SortingSelect />);

    const selectElement = screen.getByRole('select');
    const options = selectElement.querySelectorAll('option');

    expect(options.length).toBe(4); // Assuming SORTING_OPTIONS has 4 elements

    expect(options[0].value).toBe('default');
    expect(options[0].disabled).toBe(true);
    expect(options[0].textContent).toBe('Sort by');

    expect(options[1].value).toBe('title');
    expect(options[1].textContent).toBe('sort by title');

    // Add assertions for other options if needed
  });
});
