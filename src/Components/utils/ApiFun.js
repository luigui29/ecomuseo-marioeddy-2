// URL base para la API
//const API_URL = "https://historias-api-crud-v2.vercel.app";
const API_URL = "http://localhost:3000"
// Funciones de API que extraen el array de datos de la respuesta
export const getAutores = async () => {
  try {
    const response = await fetch(`${API_URL}/authors/list`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener autores:', error);
    return [];
  }
};

export const getObras = async () => {
  try {
    const response = await fetch(`${API_URL}/histories/list`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener obras:', error);
    return [];
  }
};

export const getTiteres = async () => {
  try {
    const response = await fetch(`${API_URL}/actors/list`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener títeres:', error);
    return [];
  }
};

export const getTalleres = async () => {
  try {
    const response = await fetch(`${API_URL}/tallers/list`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener talleres:', error);
    return [];
  }
};
