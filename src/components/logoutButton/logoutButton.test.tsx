import { render, fireEvent, screen } from '@testing-library/react';
import useAuth from '../../hooks/useAuth';
import LogoutButton from './logoutButton';

jest.mock('../../hooks/useAuth');

describe('LogoutButton', () => {
  test('renders logout button', () => {
    render(<LogoutButton />);
    expect(screen.getByRole('button', { name: 'Log Out' })).toBeInTheDocument();
  });

  test('calls logout function on button click', () => {
    const mockLogout = jest.fn();
    (useAuth as jest.Mock).mockReturnValue({ logout: mockLogout });

    render(<LogoutButton />);
    const logoutButton = screen.getByRole('button', { name: 'Log Out' });

    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalled();
  });
});
