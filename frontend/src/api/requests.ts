import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

interface LoginRequest {
  email: string;
  password: string;
}

export default api;
