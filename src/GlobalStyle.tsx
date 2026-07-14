import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    color: inherit;
    letter-spacing: -0.015rem;
    line-height: 1.4;
    font-family: "Noto Sans KR", sans-serif;
  }

  :root {
    /* Noto Sans KR 외 font family 사용 시 */
    /* --serif : 'Prata', serif; */

    
    /* 글로벌 변수 예시 
    --header-height: 70px;

    @media (max-width: 700px) {
      --header-height: 40px;
    } 
    
    사용 시
    height: var(--header-height);
    
    consts > styles 에 상수 추가 후 사용 추천
    */


    font-size: 10px; 
    // font-size 사용 시, rem
    // 1.4rem => 14px
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea {
    padding: 0;
    border: none;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: inherit;
  }

  button {
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
