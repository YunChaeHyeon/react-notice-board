import { HEADER_HEIGHT } from '@/consts/styles';
import styled from 'styled-components';

export const StyledBoard = styled.main`
  min-height: 100vh;
  padding: ${HEADER_HEIGHT + 48}px 24px 64px;
  color: #0f172a;
  background: #f8fbff;

  .boardHeader,
  .toolbar,
  .postList,
  .detailPanel,
  .writePanel,
  .emptyState {
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

  .boardHeader .writeLink {
    flex: 0 0 auto;
    height: 46px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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
  select,
  textarea {
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
  select:focus,
  textarea:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .postList {
    margin-top: 20px;
    display: grid;
    gap: 12px;
  }

  .postItem {
    display: grid;
    grid-template-columns: 88px 1fr auto;
    align-items: center;
    gap: 20px;
    padding: 22px 24px;
    border: 1px solid rgba(37, 99, 235, 0.14);
    border-radius: 8px;
    background: #ffffff;
    transition:
      border-color 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .postItem:hover {
    border-color: rgba(37, 99, 235, 0.38);
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(29, 78, 216, 0.1);
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

  .postItem strong {
    color: #172554;
    font-size: 18px;
    font-weight: 900;
  }

  .postItem div,
  .meta {
    display: flex;
    gap: 14px;
    color: #64748b;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
  }

  .detailPanel,
  .writePanel,
  .emptyState {
    padding: 40px;
    border: 1px solid rgba(37, 99, 235, 0.14);
    border-radius: 8px;
    background: #ffffff;
  }

  .detailHead {
    padding-bottom: 28px;
    border-bottom: 1px solid #dbeafe;
  }

  .detailHead .category {
    display: block;
    margin-bottom: 18px;
  }

  .detailHead h2,
  .writeHead h2,
  .emptyState h2 {
    color: #172554;
    font-size: 34px;
    font-weight: 900;
    line-height: 1.25;
  }

  .detailHead h2 {
    margin-bottom: 16px;
  }

  .content {
    min-height: 220px;
    padding: 32px 0;
    color: #334155;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.8;
    white-space: pre-wrap;
  }

  .detailActions,
  .formActions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .detailActions a,
  .formActions a,
  .formActions button,
  .emptyState a {
    min-width: 96px;
    height: 46px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 900;
  }

  .detailActions a,
  .formActions button,
  .emptyState a {
    color: #ffffff;
    background: #2563eb;
  }

  .detailActions a:first-child,
  .formActions a {
    color: #1d4ed8;
    background: #eff6ff;
  }

  .formActions button:disabled {
    cursor: not-allowed;
    background: #93c5fd;
  }

  .writeHead {
    margin-bottom: 28px;
  }

  .writeHead p {
    margin-bottom: 10px;
    color: #2563eb;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .writeHead h2 {
    margin-bottom: 12px;
  }

  .writeHead span,
  .emptyState p {
    color: #64748b;
    font-size: 17px;
    font-weight: 600;
  }

  .writePanel form {
    display: grid;
    gap: 18px;
  }

  .writePanel label {
    display: grid;
    gap: 8px;
    color: #1e3a8a;
    font-size: 15px;
    font-weight: 900;
  }

  textarea {
    min-height: 260px;
    padding: 14px;
    resize: vertical;
    line-height: 1.6;
  }

  .emptyState {
    min-height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    text-align: center;
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

    .postItem {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .postItem div,
    .meta {
      flex-wrap: wrap;
      white-space: normal;
    }

    .detailPanel,
    .writePanel,
    .emptyState {
      padding: 28px;
    }

    .detailHead h2,
    .writeHead h2,
    .emptyState h2 {
      font-size: 28px;
    }

    .detailActions,
    .formActions {
      flex-direction: column;
    }
  }
`;
