//const Api = process.env.REACT_APP_API_URL || "http://localhost:3000";  // Usa localhost en desarrollo


const Api = import.meta.env.VITE_API_URL || "https://api-nest-movies.onrender.com";

export const getMovies = async () => {
  try {
    const response = await fetch(`${Api}/movies`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Datos de la API:", data); // Verifica la estructura
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error en getMovies:", error);
    return [];
  }
};
