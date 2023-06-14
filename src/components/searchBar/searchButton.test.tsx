import { render, fireEvent, screen } from '@testing-library/react';
import SearchButton from './searchButton';

describe('SearchButton', () => {
  test('calls handleSearchButton on button click', () => {
    const mockHandleSearchButton = jest.fn();
    jest
      .spyOn(SearchButton.prototype, 'handleSearchButton')
      .mockImplementation(mockHandleSearchButton);
    render(<SearchButton />);
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);
    expect(mockHandleSearchButton).toHaveBeenCalled();
  });
});
