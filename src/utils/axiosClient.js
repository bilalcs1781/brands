import axios, { AxiosInstance } from "axios";
import defaultConfig from "./config";

export const HTTP_CLIENT = axios.create({
  baseURL: defaultConfig.Base_URL,
});

export const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config) => {
      const authToken = localStorage.getItem("access_token");
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );
};
