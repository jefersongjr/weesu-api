import axios, { AxiosResponse } from 'axios';
import { LoginRequest, Product } from '../interfaces';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const DUZENTOS = 200;
const DUZENTOSEUM = 201;

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

export const createProduct = async (urlApi: string, productObject: Product) => {
  try {
    const response = await api.post(urlApi, productObject);
    if (response.status === DUZENTOSEUM) {
      return response.data;
    } else {
      console.error('Erro ao criar produto: Status inesperado');
    }
  } catch (error) {
    console.error('Erro ao criar produto:');
  }
};

export const deleteProduct = async (apiUrl: string, id: number) => {
  try {
    const response = await api.delete(`${apiUrl}/${id}`);
    if (response.status === DUZENTOS) {
      console.log('Produto deletado com sucesso');
    } else {
      console.error('Erro ao deletar produto: Status inesperado');
    }
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
  }
};

export const editProduct = async (id: number, productObject: Product) => {
  try {
    const response = await api.put(`/products/${id}`, productObject);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar produto:', error);
  }
};

export default api;
