import axios, { AxiosRequestConfig } from "axios";

// baseURL이 .env에서 가져온 값으로 제대로 설정되어 있는지 확인
const baseURL = process.env.API_URL;

console.log("API URL:::: ", baseURL); // 콘솔에 출력해서 값 확인

export const client = axios.create({
  baseURL, // https://jsonplaceholder.typicode.com 이 값이 나와야 합니다.
  validateStatus: (status) => status < 500,
  withCredentials: true,
});

export const api = {
  get: <T>(url: string, params?: object) => client.get<T>(url, { ...params }),
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig<any>) =>
    client.post<T>(url, data, config),
  patch: <T>(url: string, data: any) => client.patch<T>(url, data),
  put: <T>(url: string, data: any, config?: AxiosRequestConfig<any>) =>
    client.put<T>(url, data, config),
  delete: <T>(url: string) => client.delete<T>(url),
};
