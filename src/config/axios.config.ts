import axios, { AxiosRequestConfig } from "axios";
import { BASE_API_ROUTE } from "../constant/app.constant";

const axiosAuthConfiguration: AxiosRequestConfig = {
  baseURL: BASE_API_ROUTE,
  timeout: 50000,
};

export const myAxios = axios.create(axiosAuthConfiguration);
myAxios.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});
