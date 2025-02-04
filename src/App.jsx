import { useState, useEffect } from "react"
import { getMovies } from "./api/getmovies"
import MoviesCard from "./Card"
import "./App.css"

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching movies:", error)
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  const handleMovieClick = (movie) => {
    setSelectedMovie((prev) => (prev && prev.id === movie.id ? null : movie))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Movies</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-wrapper">
            <MoviesCard movie={movie} onClick={handleMovieClick} />
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
  )
}

export default App

