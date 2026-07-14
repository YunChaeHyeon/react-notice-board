export class ApiError<T = unknown> extends Error {
  resultCode: number;
  data?: T;

  constructor(message: string, resultCode: number, data?: T) {
    super(message);
    this.name = 'ApiError';
    this.resultCode = resultCode;
    this.data = data;
  }
}

export const isApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError;
};
