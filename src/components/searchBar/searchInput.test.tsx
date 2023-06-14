/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './searchInput';

describe('SearchInput', () => {
  test('renders correctly', () => {
    render(<SearchInput value="" onChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement as HTMLInputElement).toBeInTheDocument;
  });

  test('displays the provided value', () => {
    const value = 'Matrix';
    render(<SearchInput value={value} onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search for a movie');
    expect((inputElement as HTMLInputElement).value).toBe(value);
  });

  test('calls onChange callback when input value changes', () => {
    const onChange = jest.fn();
    render(<SearchInput value="" onChange={onChange} />);
    const inputElement = screen.getByPlaceholderText('Search for a movie');
    const newValue = 'Avatar';
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
