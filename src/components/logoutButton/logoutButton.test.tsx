import { render, fireEvent, screen } from '@testing-library/react';
import LogoutButton from './logoutButton';

const mockLogout = jest.fn();
jest.mock('../../hooks/useAuth', () => {
  return () => {
    return {
      logout: mockLogout,
    };
  };
});

describe('LogoutButton', () => {
  test('renders logout button', () => {
    render(<LogoutButton />);
    expect(screen.getByRole('button', { name: 'Log Out' })).toBeInTheDocument;
  });

  test('calls logout function on button click', () => {
    render(<LogoutButton />);
    const logoutButton = screen.getByRole('button', { name: 'Log Out' });

    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalled();
  });
});
