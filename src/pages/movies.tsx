import { LogoutButton } from '../components/logoutButton';
import { Table } from '../components/table';
import useMovies from '../hooks/useMovies';
import IMovie from '../types/IMovie';

const Movies = () => {
  const { data, error } = useMovies();
  console.log({ data, error });

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

  return (
    <div>
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
      {/* <SearchBar /> */}
      {data && <Table data={data as Array<IMovie>} columns={columns} />}
    </div>
  );
};

export default Movies;
