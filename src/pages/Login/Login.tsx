import { ROUTES } from '@/consts/route';
import { StyledLogin } from '@/pages/Login/StyledLogin';

export default function Login() {
  return (
    <StyledLogin>
      <section className="loginPanel">
        <div className="copy">
          <p>Member Login</p>
          <h2>게시판 이용을 시작하세요</h2>
          <span>로그인하면 글 작성, 댓글, 내 게시글 관리 기능을 사용할 수 있습니다.</span>
        </div>

        <form>
          <label>
            이메일
            <input type="email" placeholder="notice@example.com" />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="비밀번호 입력" />
          </label>
          <button type="button">로그인</button>
          <a href={ROUTES.BOARD}>비회원으로 게시판 둘러보기</a>
        </form>
      </section>
    </StyledLogin>
  );
}
