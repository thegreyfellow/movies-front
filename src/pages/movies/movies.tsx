import { useContext, useState } from 'react';

import MoviesStateContext from '../../contexts/moviesStateContext';
import MoviesDispatchContext from '../../contexts/moviesDispatchContext';
import IMovie from '../../types/IMovie';

import { LogoutButton } from '../../components/logoutButton';
import { Table } from '../../components/table';
import { SearchBar } from '../../components/searchBar';
import Movie from '../movie/movie';
import { SortingSelect } from '../../components/sortingSelect';

import './movies.css';

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
  const { setState } = useContext(MoviesDispatchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (movie: IMovie) => {
    setState({ type: 'set_selected_movie', payload: { movie } });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Movies</h1>

        <div className="search-sort">
          <SearchBar />
          <SortingSelect />
        </div>

        <div className="logout-button">
          <LogoutButton />
        </div>
      </div>

      {state.movies && state.movies.length && state.movies.length > 0 ? (
        <Table
          data={state.movies}
          columns={columns}
          handleRowClick={handleRowClick}
        />
      ) : (
        <div>No movies found</div>
      )}

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Movie onClose={closeModal} />
        </div>
      )}
    </div>
  );
};

export default Movies;
