import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './layouts/root';
import Movies from './pages/movies';
import Movie from './pages/movie';
import Login from './pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // protected routes
    children: [
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: '/:id',
            element: <Movie />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
