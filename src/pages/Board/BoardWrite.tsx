import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { createPost, getPostList, updatePost } from '@/entities/board/api';
import {
  POST_CATEGORY_OPTIONS,
  type PostCategory,
  type PostListItem,
} from '@/entities/board/model/types';
import { isApiError } from '@/shared/api/types';
import { StyledBoard } from '@/pages/Board/StyledBoard';

export default function BoardWrite() {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();
  const editPostId = Number(postId);
  const isEditMode = Number.isInteger(editPostId) && editPostId > 0;
  const routePost = (location.state as { post?: PostListItem } | null)?.post;
  const cachedPost = (() => {
    if (!isEditMode) return undefined;
    try {
      const posts = JSON.parse(
        sessionStorage.getItem('boardPosts') ?? '[]',
      ) as PostListItem[];
      return posts.find((post) => post.id === editPostId);
    } catch {
      return undefined;
    }
  })();
  const editPost = routePost?.id === editPostId ? routePost : cachedPost;
  const [title, setTitle] = useState(editPost?.title ?? '');
  const [category, setCategory] = useState<PostCategory>(
    editPost?.category ?? 'FREE',
  );
  const [content, setContent] = useState(editPost?.content ?? '');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid || isSubmitting) {
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const payload = {
        title: title.trim(),
        content: content.trim(),
        category,
      };
      const response = isEditMode
        ? await updatePost(editPostId, payload)
        : await createPost(payload);
      const nextPost =
        isEditMode && editPost ? { ...editPost, ...payload } : undefined;

      if (nextPost) {
        const cachedPosts = JSON.parse(
          sessionStorage.getItem('boardPosts') ?? '[]',
        ) as PostListItem[];
        sessionStorage.setItem(
          'boardPosts',
          JSON.stringify(
            cachedPosts.map((post) =>
              post.id === nextPost.id ? nextPost : post,
            ),
          ),
        );
        navigate(ROUTES.BOARD_DETAIL(String(response.postId)), {
          replace: true,
          state: { post: nextPost },
        });
        return;
      }

      const posts = await getPostList();
      sessionStorage.setItem('boardPosts', JSON.stringify(posts));
      const createdPost = posts.find((post) => post.id === response.postId);
      navigate(ROUTES.BOARD_DETAIL(String(response.postId)), {
        replace: true,
        state: createdPost ? { post: createdPost } : undefined,
      });
    } catch (error) {
      setErrorMessage(
        isApiError(error)
          ? error.message
          : `게시글을 ${isEditMode ? '수정' : '등록'}하는 중 오류가 발생했습니다.`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledBoard>
      <section className="writePanel">
        <div className="writeHead">
          <p>Write</p>
          <h2>게시글 {isEditMode ? '수정' : '작성'}</h2>
          <span>
            {isEditMode
              ? '게시글 내용을 수정하세요.'
              : '공유할 내용을 제목과 본문으로 정리해 등록하세요.'}
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            카테고리
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as PostCategory)
              }
            >
              {POST_CATEGORY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            제목
            <input
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </label>

          <label>
            내용
            <textarea
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            />
          </label>

          {errorMessage && <p className="formError">{errorMessage}</p>}

          <div className="formActions">
            <Link
              to={
                isEditMode
                  ? ROUTES.BOARD_DETAIL(String(editPostId))
                  : ROUTES.BOARD
              }
            >
              취소
            </Link>
            <button type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting
                ? isEditMode
                  ? '수정 중...'
                  : '등록 중...'
                : isEditMode
                  ? '수정'
                  : '등록'}
            </button>
          </div>
        </form>
      </section>
    </StyledBoard>
  );
}
