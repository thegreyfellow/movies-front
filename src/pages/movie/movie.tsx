import React, { useCallback, useContext, useEffect, useRef } from 'react';

import './movie.css';

import MoviesStateContext from '../../contexts/moviesStateContext';

const REACT_APP_IMG_API_KEY = '863d2690';

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className="movie-header">
          <h1 className="movie-title">Movie</h1>
          <div className="movie-close-button">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
      {movie ? (
        <div>
          <h2>{movie.Title}</h2>

          <div>
            <img
              // src={`http://img.omdbapi.com/?apikey=${REACT_APP_IMG_API_KEY}&t=${movie.Title}`}
              src={'https://placehold.co/400'}
              alt={movie.Title}
            />
          </div>

          <div>
            <div>
              <strong>Title:</strong> {movie.Title}
            </div>
            <div>
              <strong>Release Date:</strong> {movie['Release Date'] || NoValue}
            </div>
            <div>
              <strong>Director:</strong> {movie.Director || NoValue}
            </div>
            <div>
              <strong>Rotten Tomatoes Rating:</strong>
              {movie['Rotten Tomatoes Rating'] || NoValue}
            </div>
            <div>
              <strong>IMDB Rating:</strong> {movie['IMDB Rating'] || NoValue}
            </div>
            <div>
              <strong>IMDB Votes:</strong> {movie['IMDB Votes'] || NoValue}
            </div>
            <div>
              <strong>US Gross:</strong> {movie['US Gross'] || NoValue}
            </div>
            <div>
              <strong>US DVD Sales:</strong> {movie['US DVD Sales'] || NoValue}
            </div>
            <div>
              <strong>Worldwide Gross:</strong>{' '}
              {movie['Worldwide Gross'] || NoValue}
            </div>
            <div>
              <strong>Production Budget:</strong>{' '}
              {movie['Production Budget'] || NoValue}
            </div>
          </div>
        </div>
      ) : (
        <div>Movie not found</div>
      )}
    </div>
  );
};

export default Movie;
