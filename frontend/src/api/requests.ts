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
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const validateToken = async (token: string): Promise<boolean> => {
  try {
    const response = await api.get('/login/validate', {
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Token falhou na validação:', error);
    return false;
  }
};

export default api;
