export type PostCategory = 'NOTICE' | 'FREE' | 'INQUIRY' | 'QUESTION';

export const POST_CATEGORY_LABELS: Record<PostCategory, string> = {
  NOTICE: '공지',
  FREE: '자유',
  INQUIRY: '문의',
  QUESTION: '질문',
};

export const POST_CATEGORY_OPTIONS = [
  { label: POST_CATEGORY_LABELS.NOTICE, value: 'NOTICE' },
  { label: POST_CATEGORY_LABELS.FREE, value: 'FREE' },
  { label: POST_CATEGORY_LABELS.INQUIRY, value: 'INQUIRY' },
  { label: POST_CATEGORY_LABELS.QUESTION, value: 'QUESTION' },
] as const satisfies readonly { label: string; value: PostCategory }[];

export type PostListReq = {
  title?: string;
  category?: PostCategory;
};

export type PostListItem = {
  id: number;
  title: string;
  category: PostCategory;
  authorNickName: string;
  viewCount: number;
  createdAt: string;
};

export type PostCreateReq = {
  title: string;
  content: string;
  category: PostCategory;
};

export type PostCreateRes = {
  postId: number;
};
