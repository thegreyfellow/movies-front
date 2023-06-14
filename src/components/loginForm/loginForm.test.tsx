import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './loginForm';
import { BrowserRouter } from 'react-router-dom';

const mockLogin = jest.fn();
jest.mock('../../hooks/useAuth', () => {
  return () => {
    return {
      isAuthenticated: false,
      login: mockLogin,
    };
  };
});

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockUseNavigate,
}));

describe('LoginForm', () => {
  test('renders login form', () => {
    render(<LoginForm />);

    // Assert that the login form elements are rendered
    expect(screen.getByLabelText('Username')).toBeInTheDocument;
    expect(screen.getByLabelText('Password')).toBeInTheDocument;
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument;
  });

  test('handles form submission', async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

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
  });
});
