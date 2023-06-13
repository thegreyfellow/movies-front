import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Movies from '../pages/movies';

const Root: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  });

  return (
    <>
      {isAuthenticated ? <Movies /> : <div>Redirecting to login page...</div>}
    </>
  );
};

export default Root;
