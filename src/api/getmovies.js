

const Api = import.meta.env.VITE_API_URL || "https://localhost:8080";

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

