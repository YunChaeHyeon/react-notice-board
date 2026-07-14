import { ApiError } from '@/shared/api/types';
import {
  clearAuthSession,
  getAuthorizationHeader,
  getRefreshToken,
  saveAccessToken,
} from '@/shared/api/tokenStorage';
import type { BaseModel } from '@/shared/model/baseModel';

const DEFAULT_API_BASE_URL = '';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL;
const REISSUE_ENDPOINT = '/api/v0/members/reissue';

type RequestOptions = Omit<RequestInit, 'body'> & {
  auth?: boolean;
  body?: unknown;
  retryOnUnauthorized?: boolean;
};

const createUrl = (endpoint: string) => {
  if (/^https?:\/\//.test(endpoint)) {
    return endpoint;
  }

  return `${API_BASE_URL}${endpoint}`;
};

const parseJson = async <T>(response: Response): Promise<BaseModel<T> | null> => {
  const text = await response.text();

  if (!text) {
    return null;
  }

  return JSON.parse(text) as BaseModel<T>;
};

const reissueAccessToken = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    return false;
  }

  const response = await fetch(createUrl(REISSUE_ENDPOINT), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });
  const body = await parseJson<{ accessToken: string; tokenType: string }>(response);

  if (!response.ok || !body || body.resultCode !== 200) {
    clearAuthSession();
    return false;
  }

  saveAccessToken(body.data.accessToken, body.data.tokenType);
  return true;
};

const request = async <T>(endpoint: string, options: RequestOptions = {}): Promise<T> => {
  const { auth = true, body, headers, retryOnUnauthorized = true, ...init } = options;
  const authorization = auth ? getAuthorizationHeader() : null;
  const requestHeaders = new Headers(headers);

  if (!requestHeaders.has('Content-Type') && body !== undefined) {
    requestHeaders.set('Content-Type', 'application/json');
  }

  if (authorization) {
    requestHeaders.set('Authorization', authorization);
  }

  const response = await fetch(createUrl(endpoint), {
    ...init,
    headers: requestHeaders,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (response.status === 401 && auth && retryOnUnauthorized) {
    const reissued = await reissueAccessToken();

    if (reissued) {
      return request<T>(endpoint, { ...options, retryOnUnauthorized: false });
    }
  }

  const responseBody = await parseJson<T>(response);

  if (!response.ok || !responseBody) {
    throw new ApiError(
      responseBody?.resultMessage ?? '서버와 통신 중 오류가 발생했습니다.',
      responseBody?.resultCode ?? response.status,
      responseBody?.data,
    );
  }

  if (responseBody.resultCode !== 200) {
    throw new ApiError(responseBody.resultMessage, responseBody.resultCode, responseBody.data);
  }

  return responseBody.data;
};

export const apiClient = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'GET' }),
  post: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'POST', body }),
};
