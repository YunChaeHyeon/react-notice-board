const BOARD_API_ENDPOINTS = {
  list: '/api/v1/posts/list',
  create: '/api/v1/posts/create',
  update: '/api/v1/posts/update',
  delete: '/api/v1/posts/delete',
} as const;

export default BOARD_API_ENDPOINTS;
