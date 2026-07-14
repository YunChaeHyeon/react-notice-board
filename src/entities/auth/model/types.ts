export type LoginReq = {
  email: string;
  password: string;
};

export type LoginRes = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
};

export type ReissueReq = {
  refreshToken: string;
};

export type ReissueRes = {
  accessToken: string;
  tokenType: string;
};
