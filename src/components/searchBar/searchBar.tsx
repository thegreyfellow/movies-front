import React, { useState, useContext, useEffect } from 'react';

import MoviesDispatchContext from '../../contexts/moviesDispatchContext';
import MoviesStateContext from '../../contexts/moviesStateContext';
import useDebounce from '../../hooks/useDebounce';
import useMovies from '../../hooks/useMovies';

import SearchInput from './searchInput';

export const SearchBar: React.FC = () => {
  const { setState } = useContext(MoviesDispatchContext);
  const { state } = useContext(MoviesStateContext);
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce(search, 1000);
  const { data: movies } = useMovies(
    `?query=${debouncedSearch}&sortBy=${state.sortBy}`
  );

  useEffect(() => {
    if (movies && movies?.length > 0) {
      setState({ type: 'set_movies', payload: { movies } });
    }
  }, [movies, setState]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <SearchInput value={search} onChange={e => setSearch(e.target.value)} />
    </div>
  );
};

export default SearchBar;
