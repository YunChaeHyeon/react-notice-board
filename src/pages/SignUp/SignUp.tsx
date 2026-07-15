import type { FormEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { signUp } from '@/entities/auth/api';
import { StyledSignUp } from '@/pages/SignUp/StyledSignUp';
import { isApiError } from '@/shared/api/types';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isPasswordMatched = password.length > 0 && password === passwordConfirm;
  const isValid =
    email.trim().length > 0 &&
    nickName.trim().length >= 2 &&
    nickName.trim().length <= 10 &&
    password.length >= 8 &&
    isPasswordMatched;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid || isSubmitting) {
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      await signUp({
        email,
        nickName,
        password,
      });

      setSuccessMessage('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      window.setTimeout(() => navigate(ROUTES.LOGIN), 700);
    } catch (error) {
      setErrorMessage(
        isApiError(error) ? error.message : '회원가입 중 알 수 없는 오류가 발생했습니다.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledSignUp>
      <section className="signUpPanel">
        <div className="copy">
          <p>Create Account</p>
          <h2>BlueBoard 계정 만들기</h2>
          <span>이메일과 닉네임만 입력하면 게시판 활동을 바로 시작할 수 있습니다.</span>
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
            닉네임
            <input
              type="text"
              placeholder="2~10자"
              value={nickName}
              onChange={(event) => setNickName(event.target.value)}
              autoComplete="nickname"
              minLength={2}
              maxLength={10}
              required
            />
          </label>
          <label>
            비밀번호
            <input
              type="password"
              placeholder="8자 이상"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>
          <label>
            비밀번호 확인
            <input
              type="password"
              placeholder="비밀번호 재입력"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>

          {passwordConfirm && !isPasswordMatched && (
            <p className="errorMessage">비밀번호가 일치하지 않습니다.</p>
          )}
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          {successMessage && <p className="successMessage">{successMessage}</p>}

          <button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? '가입 중...' : '회원가입'}
          </button>
          <a href={ROUTES.LOGIN}>이미 계정이 있어요</a>
        </form>
      </section>
    </StyledSignUp>
  );
}
