export type LoginReq = {
  email: string;
  password: string;
};

export type LoginRes = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
};

export type SignUpReq = {
  email: string;
  nickName: string;
  password: string;
};

export type SignUpRes = Record<string, never>;

export type ReissueReq = {
  refreshToken: string;
};

export type ReissueRes = {
  accessToken: string;
  tokenType: string;
};
