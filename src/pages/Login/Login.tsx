import type { FormEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { login } from '@/entities/auth/api';
import { isApiError } from '@/shared/api/types';
import { saveAuthSession } from '@/shared/api/tokenStorage';
import { StyledLogin } from '@/pages/Login/StyledLogin';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = email.trim().length > 0 && password.length >= 8;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid || isSubmitting) {
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const session = await login({ email, password });

      saveAuthSession(session);
      navigate(ROUTES.BOARD);
    } catch (error) {
      setErrorMessage(
        isApiError(error) ? error.message : '로그인 중 알 수 없는 오류가 발생했습니다.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledLogin>
      <section className="loginPanel">
        <div className="copy">
          <p>Member Login</p>
          <h2>게시판 이용을 시작하세요</h2>
          <span>로그인하면 글 작성, 댓글, 내 게시글 관리 기능을 사용할 수 있습니다.</span>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            이메일
            <input
              type="email"
              placeholder="notice@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </label>
          <label>
            비밀번호
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              minLength={8}
              required
            />
          </label>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          <button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? '로그인 중...' : '로그인'}
          </button>
          <a className="outlineLink" href={ROUTES.SIGN_UP}>
            계정 만들기
          </a>
          <a href={ROUTES.BOARD}>비회원으로 게시판 둘러보기</a>
        </form>
      </section>
    </StyledLogin>
  );
}
