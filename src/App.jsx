import React, { useState, useEffect } from 'react';
import { getMovies } from "./api/getmovies"; 
import MoviesCard from "./Card"; 
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);  // Para mostrar un loading

  useEffect(() => {
    // Cargar las películas de la API
    getMovies()
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching movies');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
        setIsLoading(false);  // Fin de la carga
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setIsLoading(false);  // Fin de la carga en caso de error
      });
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(prev => prev && prev.id === movie.id ? null : movie);  // Toggle selección
  };

  if (isLoading) {
    return <div>Loading...</div>;  // Mensaje de carga
  }

  return (
    <div>
      <h1>Movies</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-wrapper">
            <MoviesCard
              movie={movie}
              onClick={handleMovieClick}
            />
            {selectedMovie && selectedMovie.id === movie.id && (
              <div className="movie-details">
                <p>Year: {selectedMovie.year}</p>
                <p>Genre: {selectedMovie.genre}</p>
                <p>Rate: {selectedMovie.rate}</p>
                <p>Director: {selectedMovie.director}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
