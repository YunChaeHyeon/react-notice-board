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
  { href: ROUTES.BUSINESS, label: '사업분야' },
  { href: ROUTES.PRODUCT, label: '제품소개' },
  { href: ROUTES.SERVICE, label: '서비스' },
  { href: ROUTES.MANUAL, label: '개발가이드' },
  { href: ROUTES.GUIDE, label: '이용안내' },
];

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>
          <a href={ROUTES.HOME}>큐브게이트</a>
        </StyledLogo>

        <StyledUl>
          {linkList.map(({ href, label }) => (
            <StyledLi key={href}>
              <a href={href}>{label}</a>
            </StyledLi>
          ))}

          <StyledLi>고객센터</StyledLi>
          {/* <StyledLink href={ROUTES.FNQ}>자주 묻는 질문</StyledLink>
          <StyledLink href={ROUTES.HISTORY}>거래 내역 조회</StyledLink>
          <StyledLink href={ROUTES.NOTICE}>공지사항</StyledLink>
          <StyledLink href={ROUTES.PROMOTION}>프로모션</StyledLink> */}
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}
