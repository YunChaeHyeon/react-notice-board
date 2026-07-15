import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { StyledBoard } from '@/pages/Board/StyledBoard';

export default function BoardWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('free');
  const [content, setContent] = useState('');

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    navigate(ROUTES.BOARD);
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
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="notice">공지</option>
              <option value="free">자유</option>
              <option value="question">문의</option>
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

          <div className="formActions">
            <Link to={ROUTES.BOARD}>취소</Link>
            <button type="submit" disabled={!isValid}>
              등록
            </button>
          </div>
        </form>
      </section>
    </StyledBoard>
  );
}
