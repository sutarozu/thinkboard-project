import axios from 'axios';

// dalam production ga pake localhost makanya harus dibikin dinamic
const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:5001/api' : '/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
