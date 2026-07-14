import AUTH_API_ENDPOINTS from '@/entities/auth/api/endpoints';
import type { LoginReq, LoginRes, ReissueReq, ReissueRes } from '@/entities/auth/model/types';
import { apiClient } from '@/shared/api/apiClient';

const endpoints = AUTH_API_ENDPOINTS;

export const login = async (data: LoginReq): Promise<LoginRes> => {
  return apiClient.post<LoginRes>(endpoints.login, data, { auth: false });
};

export const reissue = async (data: ReissueReq): Promise<ReissueRes> => {
  return apiClient.post<ReissueRes>(endpoints.reissue, data, { auth: false });
};
