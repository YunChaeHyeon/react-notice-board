import { StyledBoard } from '@/pages/Board/StyledBoard';

const posts = [
  {
    category: '공지',
    title: '게시판 서비스 오픈 안내',
    writer: '관리자',
    date: '2026.07.14',
    views: 248,
  },
  {
    category: '업데이트',
    title: '댓글과 검색 기능 준비 현황',
    writer: '운영팀',
    date: '2026.07.13',
    views: 132,
  },
  {
    category: '자유',
    title: '첫 화면에서 보고 싶은 정보 제안',
    writer: 'blueuser',
    date: '2026.07.12',
    views: 87,
  },
  {
    category: '문의',
    title: '회원 전용 게시글 권한 설정 문의',
    writer: 'guest01',
    date: '2026.07.11',
    views: 64,
  },
];

export default function Board() {
  return (
    <StyledBoard>
      <section className="boardHeader">
        <div>
          <p>Board</p>
          <h2>게시판</h2>
          <span>공지와 자유글을 빠르게 확인하고 관리하는 공간입니다.</span>
        </div>
        <button type="button">글쓰기</button>
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
        {posts.map((post) => (
          <article key={post.title}>
            <span className="category">{post.category}</span>
            <strong>{post.title}</strong>
            <div>
              <span>{post.writer}</span>
              <span>{post.date}</span>
              <span>조회 {post.views}</span>
            </div>
          </article>
        ))}
      </section>
    </StyledBoard>
  );
}
