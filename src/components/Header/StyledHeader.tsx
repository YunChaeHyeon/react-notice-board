import { HEADER_HEIGHT } from '@/consts/styles';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  padding: 0 24px;
  width: 100vw;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.88);
  border-bottom: 1px solid rgba(37, 99, 235, 0.12);
  backdrop-filter: blur(16px);
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
  gap: 12px;
`;

const StyledLi = styled.li`
  font-size: 16px;
  font-weight: 600;
  color: #1e3a8a;

  a,
  button {
    display: block;
    padding: 10px 14px;
    border-radius: 8px;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
    transition:
      color 0.2s ease,
      background-color 0.2s ease;
  }

  a:hover,
  button:hover {
    color: #ffffff;
    background: #2563eb;
  }
`;

const StyledLogo = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: #1d4ed8;
`;

export default StyledHeader;

export { StyledNav, StyledLi, StyledUl, StyledLogo };
