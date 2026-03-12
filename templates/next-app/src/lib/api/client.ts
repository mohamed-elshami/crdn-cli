import axios, { type AxiosRequestConfig } from "axios";
import { env } from "@/config/env";

export const api = axios.create({
  adapter: "fetch",
  baseURL: env.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

type RequestConfig<D = unknown> = AxiosRequestConfig<D>;

export async function get<T = unknown>(
  url: string,
  config?: RequestConfig
): Promise<T> {
  const { data } = await api.get<T>(url, config);
  return data;
}

export async function post<T = unknown, B = unknown>(
  url: string,
  body?: B,
  config?: RequestConfig<B>
): Promise<T> {
  const { data } = await api.post<T>(url, body, config);
  return data;
}

export async function put<T = unknown, B = unknown>(
  url: string,
  body?: B,
  config?: RequestConfig<B>
): Promise<T> {
  const { data } = await api.put<T>(url, body, config);
  return data;
}

export async function patch<T = unknown, B = unknown>(
  url: string,
  body?: B,
  config?: RequestConfig<B>
): Promise<T> {
  const { data } = await api.patch<T>(url, body, config);
  return data;
}

export async function del<T = unknown>(
  url: string,
  config?: RequestConfig
): Promise<T> {
  const { data } = await api.delete<T>(url, config);
  return data;
}
