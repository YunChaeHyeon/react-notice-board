import { HEADER_HEIGHT } from '@/consts/styles';
import styled from 'styled-components';

export const StyledBoard = styled.main`
  min-height: 100vh;
  padding: ${HEADER_HEIGHT + 48}px 24px 64px;
  color: #0f172a;
  background: #f8fbff;

  .boardHeader,
  .toolbar,
  .postList {
    width: min(1080px, 100%);
    margin: 0 auto;
  }

  .boardHeader {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    padding: 40px;
    border-radius: 8px;
    color: #ffffff;
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 68%, #60a5fa 100%);
  }

  .boardHeader p {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .boardHeader h2 {
    margin-bottom: 12px;
    font-size: 42px;
    font-weight: 900;
  }

  .boardHeader span {
    color: rgba(255, 255, 255, 0.84);
    font-size: 18px;
    font-weight: 600;
  }

  .boardHeader button {
    flex: 0 0 auto;
    height: 46px;
    padding: 0 20px;
    border-radius: 8px;
    color: #1d4ed8;
    background: #ffffff;
    font-size: 16px;
    font-weight: 900;
  }

  .toolbar {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 160px;
    gap: 12px;
  }

  input,
  select {
    height: 48px;
    padding: 0 14px;
    border-radius: 8px;
    border: 1px solid #bfdbfe;
    color: #0f172a;
    background: #ffffff;
    font-size: 16px;
    font-weight: 600;
    outline: none;
  }

  input:focus,
  select:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .postList {
    margin-top: 20px;
    display: grid;
    gap: 12px;
  }

  article {
    display: grid;
    grid-template-columns: 88px 1fr auto;
    align-items: center;
    gap: 20px;
    padding: 22px 24px;
    border: 1px solid rgba(37, 99, 235, 0.14);
    border-radius: 8px;
    background: #ffffff;
  }

  .category {
    width: 72px;
    padding: 7px 0;
    border-radius: 999px;
    color: #1d4ed8;
    background: #dbeafe;
    font-size: 14px;
    font-weight: 900;
    text-align: center;
  }

  article strong {
    color: #172554;
    font-size: 18px;
    font-weight: 900;
  }

  article div {
    display: flex;
    gap: 14px;
    color: #64748b;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
  }

  @media (max-width: 760px) {
    .boardHeader {
      align-items: flex-start;
      flex-direction: column;
      padding: 28px;
    }

    .toolbar {
      grid-template-columns: 1fr;
    }

    article {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    article div {
      flex-wrap: wrap;
      white-space: normal;
    }
  }
`;
