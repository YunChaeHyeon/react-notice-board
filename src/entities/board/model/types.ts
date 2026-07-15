export type PostCategory = 'NOTICE' | 'FREE' | 'INQUIRY' | 'QUESTION';

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
