import GlobalStyle from '@/GlobalStyle';
import Router from '@/Route/Router';
import { AuthProvider } from '@/entities/auth/model/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
    </AuthProvider>
  );
}
