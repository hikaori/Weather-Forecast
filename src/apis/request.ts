import axios, { AxiosRequestConfig } from 'axios';

export class Request {
  static baseUrl = '/api/';
  static requestHeaders: Record<string, string> = {};

  static async get<T = any>(url: string, params?: any, opts?: any): Promise<T> {
    return this.request<T>(url, {
      params,
      method: 'GET',
      ...opts,
    });
  }

  static async post<T = any>(url: string, data?: any, opts?: any): Promise<T> {
    return this.request<T>(url, {
      data,
      method: 'POST',
      ...opts,
    });
  }

  static async put<T = any>(url: string, data?: any, opts?: any): Promise<T> {
    return this.request<T>(url, {
      data,
      method: 'PUT',
      ...opts,
    });
  }

  static async delete<T = any>(url: string, opts?: any): Promise<T> {
    return this.request<T>(url, {
      method: 'DELETE',
      ...opts,
    });
  }

  private static async request<T>(
    url: string,
    config: AxiosRequestConfig,
  ): Promise<T> {
    const { data } = await axios({
      url: `${this.baseUrl}${url}`,
      ...config,
      headers: this.requestHeaders,
    });
    return data;
  }
}
