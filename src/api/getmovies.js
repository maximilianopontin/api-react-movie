//const Api = process.env.REACT_APP_API_URL || "http://localhost:3000";  // Usa localhost en desarrollo
//export const getMovies = () => fetch(`${Api}/movies`);
const API_URL = import.meta.env.VITE_API_URL || "https://api-nest-movie.onrender.com"

export const getMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movies`,{
        credentials: "include",
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching movies:", error)
    throw error
  }
}

