import StyledHeader, {
  StyledLi,
  StyledNav,
  StyledUl,
  StyledLogo,
} from '@/components/Header/StyledHeader';
import { ROUTES } from '@/consts/route';

type NavLinkItem = {
  href: string;
  label: string;
};

const linkList: NavLinkItem[] = [
  { href: ROUTES.HOME, label: '홈' },
  { href: ROUTES.BOARD, label: '게시판' },
  { href: ROUTES.LOGIN, label: '로그인' },
];

export default function Header() {
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
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}
