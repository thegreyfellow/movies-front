import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LoginForm from './loginForm';

jest.mock('../../hooks/useAuth'); // Mock the useAuth hook

describe('LoginForm', () => {
  test('renders login form', () => {
    render(<LoginForm />);

    // Assert that the login form elements are rendered
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('handles form submission', async () => {
    const mockLogin = jest.fn(); // Mock the login function
    const mockNavigate = jest.fn(); // Mock the navigate function

    // Mock the useAuth hook
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      login: mockLogin,
    });

    // Mock the useNavigate hook
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<LoginForm />);

    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Assert that the login function is called with the correct arguments
    expect(mockLogin).toHaveBeenCalledWith('testuser', 'testpassword');

    // Assert that the navigate function is called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/');

    // You can also assert any other expected behavior based on the form submission
  });
});
