import { HEADER_HEIGHT } from '@/consts/styles';
import styled from 'styled-components';

export const StyledLogin = styled.main`
  min-height: 100vh;
  padding: ${HEADER_HEIGHT + 64}px 24px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #f8fbff 0%, #dbeafe 100%);

  .loginPanel {
    width: min(960px, 100%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 8px;
    background: #ffffff;
    border: 1px solid rgba(37, 99, 235, 0.14);
    box-shadow: 0 24px 70px rgba(29, 78, 216, 0.14);
  }

  .copy {
    padding: 56px;
    color: #ffffff;
    background: linear-gradient(160deg, #1d4ed8 0%, #2563eb 58%, #60a5fa 100%);
  }

  .copy p {
    margin-bottom: 18px;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .copy h2 {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 900;
    line-height: 1.2;
  }

  .copy span {
    display: block;
    color: rgba(255, 255, 255, 0.86);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.7;
  }

  form {
    padding: 56px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #1e3a8a;
    font-size: 15px;
    font-weight: 800;
  }

  input {
    height: 48px;
    padding: 0 14px;
    border-radius: 8px;
    border: 1px solid #bfdbfe;
    color: #0f172a;
    background: #f8fbff;
    outline: none;
  }

  input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }

  .errorMessage {
    padding: 12px 14px;
    border-radius: 8px;
    color: #b91c1c;
    background: #fee2e2;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  }

  button,
  form a {
    height: 50px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
  }

  button {
    margin-top: 8px;
    color: #ffffff;
    background: #2563eb;
  }

  button:disabled {
    cursor: not-allowed;
    background: #93c5fd;
  }

  form a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1d4ed8;
    background: #eff6ff;
  }

  @media (max-width: 760px) {
    .loginPanel {
      grid-template-columns: 1fr;
    }

    .copy,
    form {
      padding: 32px;
    }
  }
`;
