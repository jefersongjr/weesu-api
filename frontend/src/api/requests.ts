import axios, { AxiosResponse } from 'axios';
import { LoginRequest, Product } from '../interfaces';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const DUZENTOS = 200;

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

export const getProductsByUserId = async (
  userId: number,
): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await api.get(
      `/products/${userId}`,
    );
    if (response.status === DUZENTOS) return response.data;
    throw new Error('Erro na resposta da API');
  } catch (error) {
    console.error('Erro ao capturar produtos:');
    throw error;
  }
};

export default api;
