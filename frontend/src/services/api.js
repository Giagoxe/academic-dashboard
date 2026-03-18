// api.js

// Function to create a new API client using fetch
const apiClient = async (endpoint, options = {}) => {
    const baseUrl = 'https://your-backend-url.com/api'; // replace with your backend URL
    const response = await fetch(`${baseUrl}${endpoint}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

// Example of usage:
const getData = async () => {
    try {
        const data = await apiClient('/data');
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export { apiClient, getData };