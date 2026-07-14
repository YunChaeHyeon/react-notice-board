import Header from '@/components/Header/Header';
import { HEADER_HEIGHT } from '@/consts/styles';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const StyledMainWrap = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
`;
