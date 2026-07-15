import { ApiError } from '@/shared/api/types';
import {
  clearAuthSession,
  getAuthorizationHeader,
  getRefreshToken,
  saveAccessToken,
} from '@/shared/api/tokenStorage';
import type { BaseModel } from '@/shared/model/baseModel';
import { showErrorToast } from '@/shared/ui/toast';

const DEFAULT_API_BASE_URL = '';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL;
const REISSUE_ENDPOINT = '/api/v0/members/reissue';
const UNAUTHORIZED_RESULT_CODE = 401;

let reissuePromise: Promise<boolean> | null = null;

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

const getErrorMessage = <T>(responseBody: BaseModel<T> | null) => {
  return responseBody?.resultMessage ?? '서버와 통신 중 오류가 발생했습니다.';
};

const throwApiError = <T>(responseBody: BaseModel<T> | null, status: number): never => {
  const message = getErrorMessage(responseBody);

  if (responseBody?.resultMessage) {
    showErrorToast(responseBody.resultMessage);
  }

  throw new ApiError(message, responseBody?.resultCode ?? status, responseBody?.data);
};

const isUnauthorizedResponse = <T>(response: Response, responseBody: BaseModel<T> | null) => {
  return response.status === 401 || responseBody?.resultCode === UNAUTHORIZED_RESULT_CODE;
};

const requestReissueAccessToken = async () => {
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
    if (body?.resultMessage) {
      showErrorToast(body.resultMessage);
    }

    clearAuthSession();
    return false;
  }

  saveAccessToken(body.data.accessToken, body.data.tokenType);
  return true;
};

const reissueAccessToken = () => {
  reissuePromise ??= requestReissueAccessToken().finally(() => {
    reissuePromise = null;
  });

  return reissuePromise;
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

  const responseBody = await parseJson<T>(response);

  if (isUnauthorizedResponse(response, responseBody) && auth && retryOnUnauthorized) {
    const reissued = await reissueAccessToken();

    if (reissued) {
      return request<T>(endpoint, { ...options, retryOnUnauthorized: false });
    }
  }

  if (!responseBody) {
    throwApiError(responseBody, response.status);
  }

  const parsedBody = responseBody as BaseModel<T>;

  if (!response.ok) {
    throwApiError(parsedBody, response.status);
  }

  if (parsedBody.resultCode !== 200) {
    throwApiError(parsedBody, response.status);
  }

  return parsedBody.data;
};

export const apiClient = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'GET' }),
  post: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'POST', body }),
};
