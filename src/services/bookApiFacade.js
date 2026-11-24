//const API_BASE_URL = 'http://localhost:4000'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getBooks = async () => {
    const response = await fetch(`${API_BASE_URL}/books`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    return response.json();
};
