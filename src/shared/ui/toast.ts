export type ToastVariant = 'error';

export type ToastPayload = {
  message: string;
  variant: ToastVariant;
};

const TOAST_EVENT_NAME = 'blue-board-toast';

export const showErrorToast = (message: string) => {
  window.dispatchEvent(
    new CustomEvent<ToastPayload>(TOAST_EVENT_NAME, {
      detail: {
        message,
        variant: 'error',
      },
    }),
  );
};

export const subscribeToast = (listener: (toast: ToastPayload) => void) => {
  const handleToast = (event: Event) => {
    listener((event as CustomEvent<ToastPayload>).detail);
  };

  window.addEventListener(TOAST_EVENT_NAME, handleToast);

  return () => {
    window.removeEventListener(TOAST_EVENT_NAME, handleToast);
  };
};
