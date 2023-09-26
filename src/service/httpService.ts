import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:5050', // Базовый URL
            timeout: 10000, // Время ожидания в миллисекундах
        });
    }

    // Обработка ответов
    private handleResponse<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    // Обработка ошибок
    private handleError(error: any): void {
        // Здесь можно добавить обработку ошибок, например, вывод сообщений
        console.error('API error:', error);
    }

    // GET-запрос
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.axiosInstance.get<T>(url, config);
            return this.handleResponse(response);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    // POST-запрос
    public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.axiosInstance.post<T>(url, data, config);
            return this.handleResponse(response);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    // PUT-запрос
    public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.axiosInstance.put<T>(url, data, config);
            return this.handleResponse(response);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    // DELETE-запрос
    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await this.axiosInstance.delete<T>(url, config);
            return this.handleResponse(response);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }
}

// Экспорт экземпляра класса
export default new HttpService();
