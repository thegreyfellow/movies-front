import React, { useCallback, useContext, useEffect, useRef } from 'react';

import './movie.css';

import MoviesStateContext from '../../contexts/moviesStateContext';
import IMovie from '../../types/IMovie';

interface MovieProps {
  onClose: () => void;
}

const Movie: React.FC<MovieProps> = ({ onClose }) => {
  const { state } = useContext(MoviesStateContext);
  const movie = state.selectedMovie;
  const modalRef = useRef<HTMLDivElement>(null);
  const NoValue = 'N/A';

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick, onClose]);

  return (
    <div className="movie-container" ref={modalRef}>
      <div className="movie-header">
        <h1 className="movie-title">Movie</h1>
        <div className="movie-close-button">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
      {movie ? (
        <div>
          <h2>{`${movie.Title} (${movie['Release Date']})`}</h2>

          <div className="movie-img-and-data">
            <img
              // src={`http://img.omdbapi.com/?apikey=${REACT_APP_IMG_API_KEY}&t=${movie.Title}`}
              src={'https://placehold.co/100x150'}
              alt={movie.Title}
            />

            <ul className="movie-data-items">
              {Object.keys(movie).map(key => {
                return (
                  <li key={key} className="movie-data-item">
                    <strong>{key}:</strong>{' '}
                    {movie[key as keyof IMovie] || NoValue}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div>Movie not found</div>
      )}
    </div>
  );
};

export default Movie;
