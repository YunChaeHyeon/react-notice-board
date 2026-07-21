import BOARD_API_ENDPOINTS from '@/entities/board/api/endpoints';
import type {
  PostCreateReq,
  PostCreateRes,
  PostListItem,
  PostListReq,
  PostMutationRes,
} from '@/entities/board/model/types';
import { apiClient } from '@/shared/api/apiClient';

const endpoints = BOARD_API_ENDPOINTS;

const createSearchParams = ({ title, category }: PostListReq) => {
  const params = new URLSearchParams();
  const trimmedTitle = title?.trim();

  if (trimmedTitle) {
    params.set('title', trimmedTitle);
  }

  if (category) {
    params.set('category', category);
  }

  return params.toString();
};

export const getPostList = async (
  params: PostListReq = {},
): Promise<PostListItem[]> => {
  const searchParams = createSearchParams(params);
  const endpoint = searchParams
    ? `${endpoints.list}?${searchParams}`
    : endpoints.list;

  return apiClient.get<PostListItem[]>(endpoint);
};

export const createPost = async (
  data: PostCreateReq,
): Promise<PostCreateRes> => {
  return apiClient.post<PostCreateRes>(endpoints.create, data);
};

export const updatePost = async (
  postId: number,
  data: PostCreateReq,
): Promise<PostMutationRes> => {
  return apiClient.post<PostMutationRes>(
    `${endpoints.update}?postId=${postId}`,
    data,
  );
};

export const deletePost = async (postId: number): Promise<PostMutationRes> => {
  return apiClient.post<PostMutationRes>(endpoints.delete, postId);
};
