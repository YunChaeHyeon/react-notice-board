import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { subscribeToast } from '@/shared/ui/toast';
import type { ToastPayload } from '@/shared/ui/toast';

type ToastItem = ToastPayload & {
  id: string;
};

const TOAST_DURATION = 3600;

export default function ToastViewport() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timeoutIds = useRef<number[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToast((toast) => {
      const id = `${Date.now()}-${Math.random()}`;

      setToasts((currentToasts) => [...currentToasts, { ...toast, id }]);

      const timeoutId = window.setTimeout(() => {
        setToasts((currentToasts) => currentToasts.filter((item) => item.id !== id));
      }, TOAST_DURATION);

      timeoutIds.current.push(timeoutId);
    });

    return () => {
      unsubscribe();
      timeoutIds.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  if (toasts.length === 0) {
    return null;
  }

  return (
    <StyledToastViewport aria-live="polite" aria-label="알림">
      {toasts.map((toast) => (
        <div className={toast.variant} key={toast.id}>
          {toast.message}
        </div>
      ))}
    </StyledToastViewport>
  );
}

const StyledToastViewport = styled.aside`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1200;
  width: min(360px, calc(100vw - 48px));
  display: grid;
  gap: 10px;
  pointer-events: none;

  div {
    padding: 14px 16px;
    border-radius: 8px;
    color: #ffffff;
    background: #dc2626;
    box-shadow: 0 18px 44px rgba(15, 23, 42, 0.18);
    font-size: 15px;
    font-weight: 800;
    line-height: 1.5;
  }
`;
