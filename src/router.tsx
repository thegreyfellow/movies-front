import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './layouts/root';
import Login from './pages/login/login';
import Movies from './pages/movies/movies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // all routes under <Root /> will be protected
    children: [
      {
        path: '/',
        element: <Movies />,
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
