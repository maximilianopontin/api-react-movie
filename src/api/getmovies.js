const Api = process.env.REACT_APP_API_URL || "http://localhost:3000";  // Usa localhost en desarrollo
export const getMovies = () => fetch(`${Api}/movies`);


//export const getMoviesId = ()   =>  fetch(`${Api}/movies/${movie.id}`);


