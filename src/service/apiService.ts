import axios, { AxiosResponse, AxiosError } from "axios";

const API_BASE_URL = process.env.API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getApi = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(endpoint);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(
      "GET request failed:",
      err.response ? err.response.data : err.message
    );
    throw error;
  }
};

export const postApi = async <T, B>(endpoint: string, body: B): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(endpoint, body);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(
      "POST request failed:",
      err.response ? err.response.data : err.message
    );
    throw error;
  }
};
