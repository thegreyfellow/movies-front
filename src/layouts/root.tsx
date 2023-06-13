import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Movies from '../pages/movies';
import MoviesProvider from '../providers/MoviesProvider';

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
      {isAuthenticated ? <Movies /> : <div>Redirecting to login page...</div>}
    </MoviesProvider>
  );
};

export default Root;
