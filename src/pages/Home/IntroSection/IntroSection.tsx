import { StyledDisplayText } from '@/components/common/texts';
import {
  StyledBg,
  StyledIntroSection,
  StyledIntroSectionContentsWrap,
  StyledIntroSectionImg1,
  StyledIntroSectionImg2,
  StyledIntroSectionImg3,
} from '@/pages/Home/IntroSection/StyledIntroeSection';
import { CUBE_1, CUBE_2, DOTS_BOX } from '@/consts/assets';
import useIntroSectionAnimation from '@/pages/Home/IntroSection/useIntroSectionAnimation';

export default function IntroSection() {
  const { handleSection, handleBg, handleImg1, handleImg2 } =
    useIntroSectionAnimation();

  return (
    <StyledIntroSection ref={handleSection}>
      <StyledBg ref={handleBg} />
      <StyledIntroSectionContentsWrap>
        <StyledDisplayText>
          결제,
          <br />
          이제 한 번에 끝내세요
        </StyledDisplayText>
        <span>복잡한 VAN · PG 연결을 큐브게이트가 한 번에 해결합니다</span>
        <a href="#none">이용신청하기</a>
      </StyledIntroSectionContentsWrap>
      <StyledIntroSectionImg1 ref={handleImg1} src={CUBE_1} alt="큐브" />
      <StyledIntroSectionImg2 ref={handleImg2} src={CUBE_2} alt="큐브" />
      <StyledIntroSectionImg3 src={DOTS_BOX} alt="땡땡무늬 네모" />
    </StyledIntroSection>
  );
}
