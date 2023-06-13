import { LogoutButton } from '../components/logoutButton';
import { Table } from '../components/table';
import useMovies from '../hooks/useMovies';
import IMovie from '../types/IMovie';

const Movies = () => {
  const { data, error } = useMovies();
  console.log({ data, error });

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
      {data && <Table data={data as Array<IMovie>} />}
    </div>
  );
};

export default Movies;
