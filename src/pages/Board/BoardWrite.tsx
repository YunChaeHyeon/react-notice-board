import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { createPost } from '@/entities/board/api';
import { POST_CATEGORY_OPTIONS, type PostCategory } from '@/entities/board/model/types';
import { isApiError } from '@/shared/api/types';
import { StyledBoard } from '@/pages/Board/StyledBoard';

export default function BoardWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<PostCategory>('FREE');
  const [content, setContent] = useState('');
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
      const response = await createPost({
        title: title.trim(),
        content: content.trim(),
        category,
      });

      navigate(ROUTES.BOARD_DETAIL(String(response.postId)), { replace: true });
    } catch (error) {
      setErrorMessage(
        isApiError(error) ? error.message : '게시글을 등록하는 중 오류가 발생했습니다.',
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
          <h2>게시글 작성</h2>
          <span>공유할 내용을 제목과 본문으로 정리해 등록하세요.</span>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            카테고리
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as PostCategory)}
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
            <Link to={ROUTES.BOARD}>취소</Link>
            <button type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? '등록 중...' : '등록'}
            </button>
          </div>
        </form>
      </section>
    </StyledBoard>
  );
}
