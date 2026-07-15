import StyledHeader, {
  StyledLi,
  StyledNav,
  StyledUl,
  StyledLogo,
} from '@/components/Header/StyledHeader';
import { ROUTES } from '@/consts/route';
import { useAuth } from '@/entities/auth/model/AuthProvider';

type NavLinkItem = {
  href: string;
  label: string;
};

export default function Header() {
  const { isLoggedIn, signOut } = useAuth();
  const linkList: NavLinkItem[] = [
    { href: ROUTES.HOME, label: '홈' },
    ...(isLoggedIn
      ? [{ href: ROUTES.BOARD, label: '게시판' }]
      : [
          { href: ROUTES.LOGIN, label: '로그인' },
          { href: ROUTES.SIGN_UP, label: '회원가입' },
        ]),
  ];

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>
          <a href={ROUTES.HOME}>BlueBoard</a>
        </StyledLogo>

        <StyledUl>
          {linkList.map(({ href, label }) => (
            <StyledLi key={href}>
              <a href={href}>{label}</a>
            </StyledLi>
          ))}
          {isLoggedIn && (
            <StyledLi>
              <button type="button" onClick={signOut}>
                로그아웃
              </button>
            </StyledLi>
          )}
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}
