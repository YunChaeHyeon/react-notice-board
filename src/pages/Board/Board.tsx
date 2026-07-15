import { Link } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { boardPosts } from '@/entities/board/model/posts';
import { StyledBoard } from '@/pages/Board/StyledBoard';

export default function Board() {
  return (
    <StyledBoard>
      <section className="boardHeader">
        <div>
          <p>Board</p>
          <h2>게시판</h2>
          <span>공지와 자유글을 빠르게 확인하고 관리하는 공간입니다.</span>
        </div>
        <Link className="writeLink" to={ROUTES.BOARD_WRITE}>
          글쓰기
        </Link>
      </section>

      <section className="toolbar">
        <input type="search" placeholder="게시글 검색" />
        <select defaultValue="all">
          <option value="all">전체</option>
          <option value="notice">공지</option>
          <option value="free">자유</option>
          <option value="question">문의</option>
        </select>
      </section>

      <section className="postList" aria-label="게시글 목록">
        {boardPosts.map((post) => (
          <Link className="postItem" key={post.id} to={ROUTES.BOARD_DETAIL(post.id)}>
            <span className="category">{post.category}</span>
            <strong>{post.title}</strong>
            <div>
              <span>{post.writer}</span>
              <span>{post.date}</span>
              <span>조회 {post.views}</span>
            </div>
          </Link>
        ))}
      </section>
    </StyledBoard>
  );
}
