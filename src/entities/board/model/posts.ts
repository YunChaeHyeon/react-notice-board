export type BoardPost = {
  id: string;
  category: string;
  title: string;
  writer: string;
  date: string;
  views: number;
  content: string;
};

export const boardPosts: BoardPost[] = [
  {
    id: '1',
    category: '공지',
    title: '게시판 서비스 오픈 안내',
    writer: '관리자',
    date: '2026.07.14',
    views: 248,
    content:
      'BlueBoard 게시판 서비스를 오픈했습니다. 공지, 자유글, 문의 글을 한 곳에서 확인할 수 있으며 앞으로 댓글과 검색 기능도 순차적으로 확장할 예정입니다.',
  },
  {
    id: '2',
    category: '업데이트',
    title: '댓글과 검색 기능 준비 현황',
    writer: '운영팀',
    date: '2026.07.13',
    views: 132,
    content:
      '댓글 작성과 게시글 검색 기능을 준비하고 있습니다. 기본 게시글 흐름을 먼저 안정화한 뒤 회원별 권한과 알림 기능을 이어서 연결할 계획입니다.',
  },
  {
    id: '3',
    category: '자유',
    title: '첫 화면에서 보고 싶은 정보 제안',
    writer: 'blueuser',
    date: '2026.07.12',
    views: 87,
    content:
      '첫 화면에서 인기 게시글, 최근 공지, 내가 작성한 글을 빠르게 볼 수 있으면 좋겠습니다. 모바일에서도 핵심 정보가 먼저 보이면 사용성이 좋아질 것 같습니다.',
  },
  {
    id: '4',
    category: '문의',
    title: '회원 전용 게시글 권한 설정 문의',
    writer: 'guest01',
    date: '2026.07.11',
    views: 64,
    content:
      '회원 전용 게시글은 로그인한 사용자만 볼 수 있도록 설정할 수 있는지 문의드립니다. 작성자 본인만 수정하거나 삭제할 수 있는 기능도 필요합니다.',
  },
];

export const findBoardPostById = (postId: string | undefined) =>
  boardPosts.find((post) => post.id === postId);
