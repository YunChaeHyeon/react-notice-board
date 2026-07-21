import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { deletePost } from '@/entities/board/api';
import {
  POST_CATEGORY_LABELS,
  type PostListItem,
} from '@/entities/board/model/types';
import { StyledBoard } from '@/pages/Board/StyledBoard';
import { isApiError } from '@/shared/api/types';

const getCachedPost = (postId: string | undefined) => {
  try {
    const posts = JSON.parse(
      sessionStorage.getItem('boardPosts') ?? '[]',
    ) as PostListItem[];
    return posts.find((post) => String(post.id) === postId) ?? null;
  } catch {
    return null;
  }
};

const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime())
    ? date
    : parsedDate.toLocaleString('ko-KR');
};

export default function BoardDetail() {
  const { postId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const routePost = (location.state as { post?: PostListItem } | null)?.post;
  const post =
    routePost?.id === Number(postId) ? routePost : getCachedPost(postId);
  const [errorMessage, setErrorMessage] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!post || isDeleting || !window.confirm('게시글을 삭제하시겠습니까?'))
      return;

    setIsDeleting(true);
    try {
      await deletePost(post.id);
      navigate(ROUTES.BOARD, { replace: true });
    } catch (error) {
      setErrorMessage(
        isApiError(error) ? error.message : '게시글을 삭제하지 못했습니다.',
      );
      setIsDeleting(false);
    }
  };

  if (!post) {
    return (
      <StyledBoard>
        <section className="emptyState">
          <h2>게시글을 찾을 수 없습니다</h2>
          <p>{errorMessage || '삭제되었거나 존재하지 않는 게시글입니다.'}</p>
          <Link to={ROUTES.BOARD}>목록으로 돌아가기</Link>
        </section>
      </StyledBoard>
    );
  }

  return (
    <StyledBoard>
      <section className="detailPanel">
        <div className="detailHead">
          <span className="category">
            {POST_CATEGORY_LABELS[post.category]}
          </span>
          <h2>{post.title}</h2>
          <div className="meta">
            <span>{post.authorNickName}</span>
            <span>{formatDate(post.createdAt)}</span>
            <span>조회 {post.viewCount}</span>
          </div>
        </div>

        <p className="content">{post.content}</p>

        {errorMessage && <p className="formError">{errorMessage}</p>}

        <div className="detailActions">
          <Link to={ROUTES.BOARD}>목록</Link>
          <Link to={ROUTES.BOARD_EDIT(String(post.id))} state={{ post }}>
            수정
          </Link>
          <button
            className="deleteButton"
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? '삭제 중...' : '삭제'}
          </button>
        </div>
      </section>
    </StyledBoard>
  );
}
