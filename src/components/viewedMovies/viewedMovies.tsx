import { useContext } from 'react';

import MoviesStateContext from '../../contexts/moviesStateContext';
import MoviesDispatchContext from '../../contexts/moviesDispatchContext';
import IMovie from '../../types/IMovie';

import './viewedMovies.css';

interface ViewedMoviesProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewedMovies: React.FC<ViewedMoviesProps> = ({ setIsModalOpen }) => {
  const { state } = useContext(MoviesStateContext);
  const { setState } = useContext(MoviesDispatchContext);

  const handleClick = (movie: IMovie) => {
    setState({ type: 'set_selected_movie', payload: { movie } });
    setIsModalOpen(true);
  };

  return (
    <div className="viewed-movies-container">
      <h1>Viewed Movies</h1>
      {state.viewedMovies.length === 0 ? (
        <p>No movies viewed yet.</p>
      ) : (
        <ul>
          {state.viewedMovies &&
            state.viewedMovies.map((movie: IMovie) => (
              <li key={movie.id}>
                <a href="#" onClick={() => handleClick(movie)}>
                  {movie['Title']}
                </a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ViewedMovies;
