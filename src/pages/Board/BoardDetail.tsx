import { Link, useParams } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { findBoardPostById } from '@/entities/board/model/posts';
import { StyledBoard } from '@/pages/Board/StyledBoard';

export default function BoardDetail() {
  const { postId } = useParams();
  const post = findBoardPostById(postId);

  if (!post) {
    return (
      <StyledBoard>
        <section className="emptyState">
          <h2>게시글을 찾을 수 없습니다</h2>
          <p>삭제되었거나 존재하지 않는 게시글입니다.</p>
          <Link to={ROUTES.BOARD}>목록으로 돌아가기</Link>
        </section>
      </StyledBoard>
    );
  }

  return (
    <StyledBoard>
      <section className="detailPanel">
        <div className="detailHead">
          <span className="category">{post.category}</span>
          <h2>{post.title}</h2>
          <div className="meta">
            <span>{post.writer}</span>
            <span>{post.date}</span>
            <span>조회 {post.views}</span>
          </div>
        </div>

        <p className="content">{post.content}</p>

        <div className="detailActions">
          <Link to={ROUTES.BOARD}>목록</Link>
          <Link to={ROUTES.BOARD_WRITE}>글쓰기</Link>
        </div>
      </section>
    </StyledBoard>
  );
}
