const AUTH_API_ENDPOINTS = {
  login: '/api/v0/members/login',
  signUp: '/api/v0/members/signup',
  reissue: '/api/v0/members/reissue',
  logout: '/api/v1/members/logout',
} as const;

export default AUTH_API_ENDPOINTS;
