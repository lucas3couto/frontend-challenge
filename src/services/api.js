import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:3333",
    timeout: 10000,
});

export default api