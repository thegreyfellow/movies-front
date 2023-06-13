import useSWR from 'swr';

import { REACT_APP_API_URL } from '../utility/constants';
import IMovie from '../types/IMovie';
import IError from '../types/IError';

const fetcher = async (url: string): Promise<IMovie[]> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      // FIXME: can't call hooks in here, and need to logout user when this happens
      localStorage.removeItem('token');
    } else {
      // TODO: show toast with error message
      console.log('An error occurred while fetching the data.');
    }
  }

  const data = await response.json();

  return data;
};

// This hook is used to fetch the movies list and the movie's details
const useMovies = (id: string | number = '') => {
  const { data, error, isLoading } = useSWR(
    `${REACT_APP_API_URL}/movies${id ? '/' + id : ''}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovies;
