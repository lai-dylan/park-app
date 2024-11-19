import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosResponse} from 'axios';
import {message} from 'antd';

const http: AxiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://localhost:3000',
  timeout: 5000
});

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // const {token}=store.getState().authSlice
  // if(token){
  //   config.headers['Authorization']=`Bearer ${token}`
  // }
  return config;
});

http.interceptors.response.use((response: AxiosResponse) => {
  const res = response.data;
  if (res.code != 200) {
    message.error(res.code + ':' + res.message);
    return Promise.reject(new Error(res.message));
  }
  return response.data;
});

export interface ApiResponse {
  code: number;
  message: string,
  data: any
}

export default http;





