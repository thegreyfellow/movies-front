import IMovie from '../../types/IMovie';

import './viewedMovies.css';

interface ViewedMoviesProps {
  handleClick: (movie: IMovie) => void;
  movies: IMovie[];
}

const ViewedMovies: React.FC<ViewedMoviesProps> = ({ handleClick, movies }) => {
  return (
    <div className="viewed-movies-container">
      <h1>Viewed Movies</h1>
      {movies.length === 0 ? (
        <p>No movies viewed yet.</p>
      ) : (
        <ul>
          {movies.map((movie: IMovie) => (
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
