import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { getPostList } from '@/entities/board/api';
import type { PostCategory, PostListItem } from '@/entities/board/model/types';
import { isApiError } from '@/shared/api/types';
import { StyledBoard } from '@/pages/Board/StyledBoard';

type CategoryOption = {
  label: string;
  value: PostCategory | 'ALL';
};

const categoryOptions: CategoryOption[] = [
  { label: '전체', value: 'ALL' },
  { label: '공지', value: 'NOTICE' },
  { label: '자유', value: 'FREE' },
  { label: '문의', value: 'INQUIRY' },
  { label: '질문', value: 'QUESTION' },
];

const categoryLabels: Record<PostCategory, string> = {
  NOTICE: '공지',
  FREE: '자유',
  INQUIRY: '문의',
  QUESTION: '질문',
};

const formatDate = (date: string) => {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replaceAll(' ', '');
};

export default function Board() {
  const [posts, setPosts] = useState<PostListItem[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<CategoryOption['value']>('ALL');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchPosts = async () => {
      setIsLoading(true);
      setErrorMessage('');

      try {
        const postList = await getPostList({
          title,
          category: category === 'ALL' ? undefined : category,
        });

        if (!ignore) {
          setPosts(postList);
        }
      } catch (error) {
        if (!ignore) {
          setPosts([]);
          setErrorMessage(
            isApiError(error) ? error.message : '게시글 목록을 불러오지 못했습니다.',
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    void fetchPosts();

    return () => {
      ignore = true;
    };
  }, [category, title]);

  const handleSearchSubmit = () => {
    setTitle(searchInput);
  };

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
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as CategoryOption['value'])}
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="search"
          placeholder="게시글 검색"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearchSubmit();
            }
          }}
        />
      </section>

      <section className="postList" aria-label="게시글 목록">
        {isLoading && <p className="listState">게시글을 불러오는 중입니다.</p>}
        {!isLoading && errorMessage && <p className="listState error">{errorMessage}</p>}
        {!isLoading && !errorMessage && posts.length === 0 && (
          <p className="listState">게시글이 없습니다.</p>
        )}
        {!isLoading &&
          !errorMessage &&
          posts.map((post) => (
            <Link className="postItem" key={post.id} to={ROUTES.BOARD_DETAIL(String(post.id))}>
              <span className="category">{categoryLabels[post.category]}</span>
              <strong>{post.title}</strong>
              <div>
                <span>{post.authorNickName}</span>
                <span>{formatDate(post.createdAt)}</span>
                <span>조회 {post.viewCount}</span>
              </div>
            </Link>
          ))}
      </section>
    </StyledBoard>
  );
}
