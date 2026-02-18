import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = process.env.REACT_APP_TMDB_BASE_URL;

const api = axios.create({
  baseURL: baseUrl, 
  params: {
    api_key: apiKey,
  },
});

export default api;
