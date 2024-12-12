import { mockApi } from "@/mocks/mockLogin";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

import { AxiosResponse } from "axios";

/**
 * Custom error type that extends the base Error type.
 * This allows to pass custom error type with additional properties.
 */
export interface CustomError extends Error {
  [key: string]: unknown; // Allow additional custom properties
}

/**
 * Custom hook for POST requests
 * @template TData - Data type returned from API (response)
 * @template TVariables - Variables passed to API (payload)
 */
export const usePostData = <
  TData,
  TVariables,
  TError extends CustomError = CustomError
>(
  url: string,
  options?: UseMutationOptions<TData, TError, TVariables, unknown>
): UseMutationResult<TData, TError, TVariables, unknown> => {
  return useMutation<TData, TError, TVariables, unknown>({
    mutationFn: async (variables: TVariables): Promise<TData> => {
      const response: AxiosResponse<TData> = await mockApi.post<TData>(
        url,
        variables
      );
      return response.data;
    },
    ...options,
  });
};
