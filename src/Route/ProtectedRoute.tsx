import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@/consts/route';
import { useAuth } from '@/entities/auth/model/AuthProvider';

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate replace state={{ from: location }} to={ROUTES.LOGIN} />;
  }

  return <Outlet />;
}
