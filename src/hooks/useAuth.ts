import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const REACT_APP_API_URL = 'http://localhost:3000';

const useAuth = () => {
  const [isAuthenticated, setisAuthenticated] = useState<boolean>(
    localStorage.getItem('token') ? true : false
  );
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    const res = await fetch(`${REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    // save token in local storage all the time, but usually we save it in cookies and only when asked to be remembered
    localStorage.setItem('token', data.token);

    setisAuthenticated(!!data.token);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setisAuthenticated(false);
    navigate('/login');
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
