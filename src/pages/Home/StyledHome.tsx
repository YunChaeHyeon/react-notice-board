import styled from 'styled-components';
import { HEADER_HEIGHT } from '@/consts/styles';

export const StyledHome = styled.main`
  min-height: 100vh;
  padding: ${HEADER_HEIGHT + 72}px 24px 72px;
  color: #0f172a;
  background:
    radial-gradient(circle at 20% 16%, rgba(96, 165, 250, 0.36), transparent 30%),
    linear-gradient(135deg, #eff6ff 0%, #dbeafe 48%, #bfdbfe 100%);

  .hero {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
    gap: 48px;
    align-items: center;
  }

  .heroContent {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .eyebrow {
    width: fit-content;
    padding: 8px 12px;
    border-radius: 999px;
    color: #1d4ed8;
    background: rgba(255, 255, 255, 0.68);
    font-size: 14px;
    font-weight: 800;
  }

  h2 {
    max-width: 760px;
    color: #0f2f7a;
    font-size: 64px;
    font-weight: 900;
    line-height: 1.08;
  }

  .description {
    max-width: 680px;
    color: #31547c;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.7;
  }

  .actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .actions a {
    min-width: 132px;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 800;
    text-align: center;
  }

  .primary {
    color: #ffffff;
    background: #2563eb;
    box-shadow: 0 18px 36px rgba(37, 99, 235, 0.28);
  }

  .secondary {
    color: #1d4ed8;
    background: #ffffff;
    border: 1px solid rgba(37, 99, 235, 0.18);
  }

  .summaryPanel {
    display: grid;
    gap: 16px;
    padding: 28px;
    border: 1px solid rgba(37, 99, 235, 0.14);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.72);
    box-shadow: 0 24px 70px rgba(29, 78, 216, 0.16);
  }

  .summaryPanel div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    border-radius: 8px;
    background: #ffffff;
  }

  .summaryPanel strong {
    color: #1d4ed8;
    font-size: 38px;
    font-weight: 900;
  }

  .summaryPanel span {
    color: #475569;
    font-size: 16px;
    font-weight: 700;
  }

  .featureGrid {
    max-width: 1120px;
    margin: 56px auto 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .featureGrid article {
    min-height: 120px;
    padding: 24px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(37, 99, 235, 0.14);
  }

  .featureGrid span {
    display: block;
    width: 32px;
    height: 4px;
    margin-bottom: 18px;
    border-radius: 999px;
    background: #2563eb;
  }

  .featureGrid p {
    color: #1e3a8a;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: 46px;
    }

    .featureGrid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    padding: ${HEADER_HEIGHT + 40}px 16px 48px;

    h2 {
      font-size: 36px;
    }

    .description {
      font-size: 17px;
    }

    .summaryPanel {
      padding: 18px;
    }
  }
`;
