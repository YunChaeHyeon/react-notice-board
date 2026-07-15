import { createContext, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type { AuthSession } from '@/shared/api/tokenStorage';
import { clearAuthSession, hasAuthSession, saveAuthSession } from '@/shared/api/tokenStorage';

type AuthContextValue = {
  isLoggedIn: boolean;
  signIn: (session: AuthSession) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => hasAuthSession());

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoggedIn,
      signIn: (session) => {
        saveAuthSession(session);
        setIsLoggedIn(true);
      },
      signOut: () => {
        clearAuthSession();
        setIsLoggedIn(false);
      },
    }),
    [isLoggedIn],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
