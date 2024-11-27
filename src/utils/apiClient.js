import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
});

apiClient.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user')); 
    const token = user?.token; 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
