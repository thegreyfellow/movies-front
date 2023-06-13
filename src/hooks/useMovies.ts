import useSWR from 'swr';

import { REACT_APP_API_URL } from '../utility/constants';
import IResponse from '../types/IResponse';

const fetcher = async (url: string): Promise<IResponse> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });

  if (!response.ok) {
    console.log('An error occurred while fetching the data.');
    // TODO: show toast with error message and logout
  }

  const data = await response.json();

  return data;
};

// This hook is used to fetch the movies list and the movie's details
const useMovies = (id: string | number = '') => {
  const { data, error, isLoading } = useSWR(
    `${REACT_APP_API_URL}/movies/${id ? id : ''}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovies;
