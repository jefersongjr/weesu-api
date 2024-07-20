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

export const setToken = (token: string): void => {
  api.defaults.headers.common['Authorization'] = `${token}`;
};
export const validateToken = async () => {
  try {
    const { data } = await api.get('/login/validate');
    return data;
  } catch (error) {
    console.error('Erro ao fazer requisição:', error);
    throw error;
  }
};

export default api;
