const ACCESS_TOKEN_KEY = 'blue-board-access-token';
const REFRESH_TOKEN_KEY = 'blue-board-refresh-token';
const TOKEN_TYPE_KEY = 'blue-board-token-type';

export type AuthSession = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const getTokenType = () => localStorage.getItem(TOKEN_TYPE_KEY) ?? 'Bearer';

export const getAuthorizationHeader = () => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return null;
  }

  return `${getTokenType()} ${accessToken}`;
};

export const saveAuthSession = ({ accessToken, refreshToken, tokenType }: AuthSession) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  localStorage.setItem(TOKEN_TYPE_KEY, tokenType);
};

export const saveAccessToken = (accessToken: string, tokenType: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(TOKEN_TYPE_KEY, tokenType);
};

export const clearAuthSession = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(TOKEN_TYPE_KEY);
};
