import { sanitizeCPF } from "@/utils/cpf";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const MOCK_CREDENTIALS = { password: "password", cpf: "37605287089" };

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  mockResponse?: AxiosResponse;
}

export const mockApi = axios.create({
  baseURL: "http://localhost",
  timeout: 3000,
});

const simulateDelay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createMockResponse = (
  config: CustomAxiosRequestConfig,
  data: unknown
): AxiosResponse => {
  return {
    data,
    status: 200,
    statusText: "OK",
    headers: {},
    config,
  };
};

mockApi.interceptors.request.use((config: CustomAxiosRequestConfig) => {
  if (config.url === "/login" && config.data) {
    const { cpf, password } = config.data;

    if (
      sanitizeCPF(cpf) === MOCK_CREDENTIALS.cpf &&
      password === MOCK_CREDENTIALS.password
    ) {
      config.mockResponse = createMockResponse(config, {
        token: "mock-token",
        user: { name: "Vinicius Gonzalez" },
      });
      return Promise.reject({ config });
    }

    throw {
      response: {
        status: 401,
        data: { message: "CPF ou senha inválidos" },
      },
    };
  }

  return config;
});

mockApi.interceptors.response.use(
  async (response: AxiosResponse) => {
    const customConfig = response.config as CustomAxiosRequestConfig;

    if (customConfig.mockResponse) {
      await simulateDelay(3000);
      return customConfig.mockResponse;
    }
    return response;
  },
  async (error) => {
    if (error.config?.mockResponse) {
      await simulateDelay(3000);
      return error.config.mockResponse;
    }

    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);
