import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import MoviesProvider from '../providers/MoviesProvider';

import './root.css';

const Root: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !localStorage.getItem('token')) {
      navigate('/login');
    }
  });

  return (
    <MoviesProvider>
      {isAuthenticated ? <Outlet /> : <div>Redirecting to login page...</div>}
    </MoviesProvider>
  );
};

export default Root;
