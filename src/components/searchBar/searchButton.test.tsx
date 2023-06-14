import { render, screen } from '@testing-library/react';
import SearchButton from './searchButton';

describe('SearchButton', () => {
  test('renders search button', () => {
    render(<SearchButton />);
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument;
  });
});
