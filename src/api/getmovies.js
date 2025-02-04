//const Api = process.env.REACT_APP_API_URL || "http://localhost:3000";  // Usa localhost en desarrollo

const Api = import.meta.env.VITE_API_URL || "https://api-nest-movies.onrender.com"
export const getMovies = () => fetch(`${Api}/movies`);
