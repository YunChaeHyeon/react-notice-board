import { StyledHome } from '@/pages/Home/StyledHome';
import { ROUTES } from '@/consts/route';
import { useAuth } from '@/entities/auth/model/AuthProvider';

const boardHighlights = [
  '공지, 자유글, 문의를 한 곳에서 관리',
  '중요 게시글 고정과 빠른 검색 지원',
  '로그인 후 글 작성과 댓글 기능 확장 예정',
];

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHome>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">React Notice Board</p>
          <h2>팀 소식을 빠르게 공유하는 파란 게시판</h2>
          <p className="description">
            공지사항, 자유 게시글, 운영 안내를 깔끔하게 모아보는 게시판
            서비스입니다. 필요한 정보는 빠르게 찾고, 중요한 소식은 놓치지
            않도록 구성했습니다.
          </p>
          <div className="actions">
            {isLoggedIn ? (
              <a className="primary" href={ROUTES.BOARD}>
                게시판 보기
              </a>
            ) : (
              <a className="secondary" href={ROUTES.LOGIN}>
                로그인
              </a>
            )}
          </div>
        </div>

        <div className="summaryPanel" aria-label="게시판 요약">
          <div>
            <strong>128</strong>
            <span>전체 게시글</span>
          </div>
          <div>
            <strong>12</strong>
            <span>오늘 업데이트</span>
          </div>
          <div>
            <strong>4</strong>
            <span>고정 공지</span>
          </div>
        </div>
      </section>

      <section className="featureGrid">
        {boardHighlights.map((highlight) => (
          <article key={highlight}>
            <span />
            <p>{highlight}</p>
          </article>
        ))}
      </section>
    </StyledHome>
  );
}
