import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './layouts/root';
import Movies from './pages/movies';
import Movie from './pages/movie';
import Login from './pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // all routes under <Root /> will be protected
    children: [
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/movies/:id',
        element: <Movie />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
