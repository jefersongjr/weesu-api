import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

interface LoginRequest {
  email: string;
  password: string;
}

export const requestLogin = async (
  urlApi: string,
  objectLogin: LoginRequest,
): Promise<AxiosResponse | void> => {
  try {
    const response = await api.post(urlApi, objectLogin);
    return response;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
  }
};

export default api;
