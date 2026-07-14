import { BREAK_POINT_MOBILE, BREAK_POINT_TABLET } from '@/consts/styles';
import { CUBE_BG } from '@/consts/assets';
import styled from 'styled-components';

export const StyledBg = styled.div`
  position: absolute;
  top: -2.5%; /* -5%에서 -2.5%로 */
  left: -2.5%; /* -5%에서 -2.5%로 */
  width: 105%; /* 110%에서 105%로 */
  height: 105%; /* 110%에서 105%로 */
  background-image: url(${CUBE_BG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-out;
  z-index: 0;
`;

export const StyledIntroSection = styled.section`
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const StyledIntroSectionContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  z-index: 10;

  span {
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
  }

  a {
    font-size: 24px;
    font-weight: 600;
    padding: 12px;
    border-radius: 8px;
    background-color: #fff;
    color: #f04e06;
  }
`;

export const StyledIntroSectionImg = styled.img`
  position: absolute;
`;

export const StyledIntroSectionImg1 = styled(StyledIntroSectionImg)`
  width: min(350px, 25vw);
  height: auto;
  top: 30vh;
  left: 6vw;

  @media (max-width: ${BREAK_POINT_TABLET}) {
    width: 40vw;
    top: 20vh;
    left: 5vw;
  }

  @media (max-width: ${BREAK_POINT_MOBILE}) {
    width: 45vw;
    top: 15vh;
    left: 3vw;
  }
`;

export const StyledIntroSectionImg2 = styled(StyledIntroSectionImg)`
  width: min(650px, 45vw);
  height: auto;
  bottom: -10vh;
  right: -2.2vw;

  @media (max-width: ${BREAK_POINT_TABLET}) {
    width: 60vw;
    bottom: -8vh;
    right: -5vw;
  }

  @media (max-width: ${BREAK_POINT_MOBILE}) {
    width: 70vw;
    bottom: -6vh;
    right: -8vw;
  }
`;

export const StyledIntroSectionImg3 = styled(StyledIntroSectionImg)`
  width: min(300px, 22vw);
  height: auto;
  bottom: -8vh;
  right: -4vw;

  @media (max-width: ${BREAK_POINT_TABLET}) {
    width: 35vw;
    bottom: -5vh;
    right: -8vw;
  }

  @media (max-width: ${BREAK_POINT_MOBILE}) {
    width: 40vw;
    bottom: -4vh;
    right: -10vw;
  }
`;
