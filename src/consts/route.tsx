export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  BOARD: '/board',
  BOARD_WRITE: '/board/write',
  BOARD_DETAIL: (postId: string) => `/board/${postId}`,
} as const;
