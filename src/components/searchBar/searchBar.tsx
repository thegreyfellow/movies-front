import React, { useState, useContext, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import useMovies from '../../hooks/useMovies';
import MoviesDispatchContext from '../../contexts/moviesDispatchContext';
import SearchInput from './searchInput';

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search, 1000);
  const { data: movies } = useMovies(`?query=${debouncedSearch}`);
  const { setState } = useContext(MoviesDispatchContext);
  useEffect(() => {
    if (movies && movies?.length > 0) {
      console.log({ movies_searchbar: movies });
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
