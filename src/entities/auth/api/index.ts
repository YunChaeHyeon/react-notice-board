import AUTH_API_ENDPOINTS from '@/entities/auth/api/endpoints';
import type {
  LoginReq,
  LoginRes,
  ReissueReq,
  ReissueRes,
  SignUpReq,
  SignUpRes,
} from '@/entities/auth/model/types';
import { apiClient } from '@/shared/api/apiClient';

const endpoints = AUTH_API_ENDPOINTS;

export const login = async (data: LoginReq): Promise<LoginRes> => {
  return apiClient.post<LoginRes>(endpoints.login, data, { auth: false });
};

export const signUp = async (data: SignUpReq): Promise<SignUpRes> => {
  return apiClient.post<SignUpRes>(endpoints.signUp, data, { auth: false });
};

export const reissue = async (data: ReissueReq): Promise<ReissueRes> => {
  return apiClient.post<ReissueRes>(endpoints.reissue, data, { auth: false });
};
