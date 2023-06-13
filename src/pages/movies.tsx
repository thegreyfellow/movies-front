import { useContext } from 'react';

import { LogoutButton } from '../components/logoutButton';
import { Table } from '../components/table';
import { SearchBar } from '../components/searchBar';
import MoviesStateContext from '../contexts/moviesStateContext';
import IMovie from '../types/IMovie';

const columns = [
  {
    header: 'Title',
    accessorKey: 'Title',
  },
  {
    header: 'Release Date',
    accessorKey: 'Release Date',
  },
  {
    header: 'Director',
    accessorKey: 'Director',
  },
  {
    header: 'Rotten Tomatoes Rating',
    accessorKey: 'Rotten Tomatoes Rating',
  },
  {
    header: 'IMDB Rating',
    accessorKey: 'IMDB Rating',
  },
  {
    header: 'IMDB Votes',
    accessorKey: 'IMDB Votes',
  },
];

const Movies = () => {
  const { state } = useContext(MoviesStateContext);

  const handleRowClick = (row: IMovie) => {
    console.log(`Row clicked: ${row.id}`);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Movies</h1>
        <LogoutButton />
      </div>
      <SearchBar />
      {state.movies && state.movies.length && state.movies.length > 0 ? (
        <Table
          data={state.movies}
          columns={columns}
          handleRowClick={handleRowClick}
        />
      ) : (
        <div>No movies found</div>
      )}
    </>
  );
};

export default Movies;
