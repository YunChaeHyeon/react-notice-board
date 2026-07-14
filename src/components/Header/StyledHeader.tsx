import { HEADER_HEIGHT } from '@/consts/styles';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  padding: 0 24px; // 임의
  width: 100vw;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: center;
`;

const StyledNav = styled.nav`
  max-width: 1450px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 60px;
`;

const StyledLi = styled.li`
  font-size: 22px;
  font-weight: 400;
  color: #121212;
`;

const StyledLink = styled.a``;

const StyledLogo = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #121212;
`;

export default StyledHeader;

export { StyledNav, StyledLi, StyledLink, StyledUl, StyledLogo };
