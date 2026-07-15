import GlobalStyle from '@/GlobalStyle';
import Router from '@/Route/Router';
import ToastViewport from '@/components/Toast/ToastViewport';
import { AuthProvider } from '@/entities/auth/model/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
      <ToastViewport />
    </AuthProvider>
  );
}
